import Image from "next/image";
import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import data from "@/data/data.json";

const profileLinkClassName =
  "inline-flex h-8.5 shrink-0 items-center justify-center gap-2 rounded-sm border border-foreground/15 bg-background text-xs font-medium text-muted-foreground transition-all duration-150 hover:-translate-y-px hover:border-foreground hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none";

export function Hero() {
  const { personal } = data;

  return (
    <section className="px-6 pt-28 pb-6">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            <Image
              src="/images/photo.jpg"
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
              <p className="mt-3 text-sm leading-relaxed text-body-foreground max-w-xl">
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
              <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:justify-start sm:gap-3">
                {personal.socials.github && (
                  <a
                    href={personal.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${profileLinkClassName} w-8.5`}
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <Github className="size-4" aria-hidden="true" />
                  </a>
                )}
                {personal.socials.linkedin && (
                  <a
                    href={personal.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${profileLinkClassName} w-8.5`}
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <Linkedin className="size-4" aria-hidden="true" />
                  </a>
                )}
                {personal.resumeUrl && (
                  <a
                    href={personal.resumeUrl}
                    download="Min-Khant-Kyaw-CV.pdf"
                    aria-label="Download CV"
                    title="Download CV"
                    className={`${profileLinkClassName} px-2`}
                  >
                    <Download className="size-4" aria-hidden="true" />
                    CV
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
