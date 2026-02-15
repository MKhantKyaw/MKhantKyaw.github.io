"use client";

import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/FadeIn";
import { Separator } from "@/components/ui/separator";
import { getTechColor } from "@/lib/tech-colors";
import { motion } from "framer-motion";
import data from "@/data/data.json";

export function Projects() {
  return (
    <section id="projects" className="px-6 py-6">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h2 className="text-xs font-semibold tracking-widest uppercase text-foreground">
            Projects
          </h2>
          <Separator className="my-3" />
        </FadeIn>

        <div className="space-y-3">
          {data.projects.map((project, i) => (
            <FadeIn key={project.title} delay={0.05 * (i + 1)}>
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="group rounded-lg border border-border px-4 py-3 transition-all duration-200 hover:border-foreground/25 hover:bg-accent/50"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-foreground/70">
                      {project.description}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <Badge
                          key={t}
                          variant="outline"
                          className={`text-[10px] px-1.5 py-0 font-normal border ${getTechColor(t)}`}
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-1 pt-0.5">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md p-1.5 text-muted-foreground transition-all hover:bg-foreground hover:text-background"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md p-1.5 text-muted-foreground transition-all hover:bg-foreground hover:text-background"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
