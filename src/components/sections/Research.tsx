import { ExternalLink } from "lucide-react";
import data from "@/data/data.json";

export function Research() {
  if (data.publications.length === 0) return null;

  return (
    <section
      id="research"
      aria-labelledby="research-heading"
      className="px-6 py-6"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="research-heading"
          className="text-xs font-semibold tracking-widest text-foreground uppercase"
        >
          Research
        </h2>
        <div className="mt-3 flex flex-col gap-4">
          {data.publications.map((paper) => (
            <article key={paper.url} className="flex flex-col gap-2">
              <p className="text-xs text-muted-foreground">{paper.venue}</p>
              <h3 className="text-sm leading-relaxed font-semibold text-foreground">
                {paper.title}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {paper.description}
              </p>
              <a
                href={paper.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-1.5 rounded-sm text-xs font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                Read paper on ResearchGate
                <span className="sr-only"> (opens in a new tab)</span>
                <ExternalLink aria-hidden="true" className="size-3" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
