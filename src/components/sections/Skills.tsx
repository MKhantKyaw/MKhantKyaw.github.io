import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/FadeIn";
import { Separator } from "@/components/ui/separator";
import { getTechColor } from "@/lib/tech-colors";
import data from "@/data/data.json";

export function Skills() {
  return (
    <section id="skills" className="px-6 py-6">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h2 className="text-xs font-semibold tracking-widest uppercase text-foreground">
            Skills
          </h2>
          <Separator className="my-3" />
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2">
          {data.skills.map((group, i) => (
            <FadeIn key={group.category} delay={0.05 * (i + 1)}>
              <div>
                <h3 className="mb-2 text-sm font-medium text-foreground">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <Badge key={skill} variant="outline" className={`text-xs font-normal border ${getTechColor(skill)}`}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
