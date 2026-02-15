"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import data from "@/data/data.json";

const INITIAL_COUNT = 5;

export function News() {
  const [showAll, setShowAll] = useState(false);

  if (!data.news || data.news.length === 0) return null;

  const initial = data.news.slice(0, INITIAL_COUNT);
  const extra = data.news.slice(INITIAL_COUNT);
  const hasMore = extra.length > 0;

  return (
    <section id="news" className="px-6 py-6">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h2 className="text-xs font-semibold tracking-widest uppercase text-foreground">
            News
          </h2>
          <Separator className="my-3" />
        </FadeIn>

        <div className="space-y-3">
          {initial.map((item, i) => (
            <FadeIn key={`${item.date}-${i}`} delay={0.05 * (i + 1)}>
              <div className="grid grid-cols-[6rem_1fr] gap-4 items-start">
                <span className="text-xs font-medium text-muted-foreground leading-relaxed pt-0.5">
                  {item.date}
                </span>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {item.event}
                </p>
              </div>
            </FadeIn>
          ))}

          <AnimatePresence initial={false}>
            {showAll &&
              extra.map((item, i) => (
                <motion.div
                  key={`extra-${item.date}-${i}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut", delay: i * 0.05 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-[6rem_1fr] gap-4 items-start">
                    <span className="text-xs font-medium text-muted-foreground leading-relaxed pt-0.5">
                      {item.date}
                    </span>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {item.event}
                    </p>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <FadeIn delay={0.3}>
            <div className="mt-4 flex justify-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowAll(!showAll)}
                className="text-xs text-muted-foreground hover:text-foreground gap-1"
              >
                {showAll ? "Show less" : `Show all (${data.news.length})`}
                <motion.span
                  animate={{ rotate: showAll ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-3.5 w-3.5" />
                </motion.span>
              </Button>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
