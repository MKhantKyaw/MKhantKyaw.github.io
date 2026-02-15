import { FadeIn } from "@/components/FadeIn";
import { Separator } from "@/components/ui/separator";
import data from "@/data/data.json";

export function About() {
  const { personal } = data;

  return (
    <section id="about" className="px-6 py-6">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h2 className="text-xs font-semibold tracking-widest uppercase text-foreground">
            About
          </h2>
          <Separator className="my-3" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-sm leading-relaxed text-foreground/80">
            {personal.bio}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
