import Image from "next/image";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/FadeIn";
import data from "@/data/data.json";

export function Hero() {
  const { personal } = data;

  return (
    <section className="px-6 pt-28 pb-6">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            <Image
              src="/images/profile.png"
              alt={personal.name}
              width={96}
              height={96}
              className="shrink-0 rounded-full border-2 border-border object-cover"
              priority
            />
            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {personal.name}
              </h1>
              <p className="mt-1 text-lg font-medium text-muted-foreground">
                {personal.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80 max-w-xl">
                {personal.tagline}
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground sm:justify-start">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {personal.location}
                </span>
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
                >
                  <Mail className="h-3.5 w-3.5" />
                  {personal.email}
                </a>
              </div>
              <div className="mt-5 flex items-center justify-center gap-3 sm:justify-start">
                <Button size="sm" asChild>
                  <a href="#contact">Get in Touch</a>
                </Button>
                {personal.socials.github && (
                  <a
                    href={personal.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/20"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
                {personal.socials.linkedin && (
                  <a
                    href={personal.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/20"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
