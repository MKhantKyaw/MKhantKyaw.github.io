import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/FadeIn";
import { Separator } from "@/components/ui/separator";
import { getTechColor } from "@/lib/tech-colors";
import { MapPin } from "lucide-react";
import data from "@/data/data.json";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-6">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h2 className="text-xs font-semibold tracking-widest uppercase text-foreground">
            Experience
          </h2>
          <Separator className="my-3" />
        </FadeIn>

        <div className="space-y-6">
          {data.experience.map((exp, i) => (
            <FadeIn key={`${exp.company}-${exp.role}`} delay={0.05 * (i + 1)}>
              <div>
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-base leading-snug font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                    {exp.location && (
                      <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="size-3 shrink-0" aria-hidden="true" />
                        {exp.location}
                      </p>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground shrink-0">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-body-foreground">
                  {exp.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <Badge key={t} variant="outline" className={`text-xs font-normal border ${getTechColor(t)}`}>
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {data.education.length > 0 && (
          <div className="mt-10">
            <FadeIn>
              <h2 className="text-xs font-semibold tracking-widest uppercase text-foreground">
                Education
              </h2>
              <Separator className="my-3" />
            </FadeIn>

            <div className="space-y-4">
              {data.education.map((edu, i) => (
                <FadeIn key={edu.school} delay={0.05 * (i + 1)}>
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-foreground">
                        {edu.degree}
                      </h3>
                      <p className="text-sm text-muted-foreground">{edu.school}</p>
                    </div>
                    <span className="text-xs text-muted-foreground shrink-0">
                      {edu.period}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
