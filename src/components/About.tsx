import { GraduationCap, MapPinned, Sparkles } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Sparkles,
    title: "Curated for Karnataka",
    description:
      "Hand-picked openings from leading IT parks, startups and enterprises across Bengaluru, Mysuru, Mangaluru and beyond.",
  },
  {
    icon: GraduationCap,
    title: "Student friendly",
    description:
      "Fresh graduate roles, internships and first-job friendly listings so students can start their careers with confidence.",
  },
  {
    icon: MapPinned,
    title: "Local & relevant",
    description:
      "Simple search and category filters that surface only the roles that matter to you — no noise, no clutter.",
  },
];

export default function About() {
  return (
    <section id="about" className="border-b border-border/70 bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-sky-600">
            About
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Built for Karnataka's job seekers
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            KarnatakaJobs helps students and job seekers discover career
            opportunities across Karnataka. From fresh graduate openings at
            global technology companies to roles at fast-growing local
            startups, we bring verified listings into one clean, easy-to-use
            place — so you can spend less time searching and more time
            applying.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-xl border border-border bg-background">
                <item.icon className="size-4.5 text-sky-600" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
