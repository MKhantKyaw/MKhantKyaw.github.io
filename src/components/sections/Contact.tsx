import { Download, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/FadeIn";
import { Separator } from "@/components/ui/separator";
import data from "@/data/data.json";

export function Contact() {
  const { personal } = data;

  return (
    <section id="contact" className="px-6 py-6">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h2 className="text-xs font-semibold tracking-widest uppercase text-foreground">
            Contact
          </h2>
          <Separator className="my-3" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-sm text-body-foreground">
            Interested in working together? Feel free to reach out.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Button size="sm" asChild>
              <a href={`mailto:${personal.email}`}>
                <Mail className="mr-2 h-3.5 w-3.5" />
                {personal.email}
              </a>
            </Button>
            {personal.resumeUrl && (
              <Button variant="outline" size="sm" asChild>
                <a href={personal.resumeUrl} download="Min-Khant-Kyaw-CV.pdf">
                  <Download data-icon="inline-start" aria-hidden="true" />
                  Download CV
                </a>
              </Button>
            )}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-12 flex items-center justify-between border-t border-border pt-6">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} {personal.name}
            </p>
            <div className="flex items-center gap-3">
              {personal.socials.github && (
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
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
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
