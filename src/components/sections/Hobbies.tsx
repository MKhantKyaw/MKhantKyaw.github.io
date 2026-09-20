type Hobby = {
  name: string;
  detail?: string;
};

export function Hobbies({ hobbies }: { hobbies: Hobby[] }) {
  if (hobbies.length === 0) return null;

  return (
    <section
      id="hobbies"
      aria-labelledby="hobbies-heading"
      className="px-6 py-4"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="hobbies-heading"
          className="text-xs font-medium text-muted-foreground"
        >
          Outside of work
        </h2>
        <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-sm leading-relaxed text-muted-foreground">
          {hobbies.map((hobby) => (
            <li key={hobby.name} className="max-w-full break-words">
              {hobby.name}
              {hobby.detail ? ` — ${hobby.detail}` : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
