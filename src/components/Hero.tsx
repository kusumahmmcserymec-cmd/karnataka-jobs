import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";

interface HeroProps {
  search: string;
  onSearchChange: (query: string) => void;
}

export default function Hero({ search, onSearchChange }: HeroProps) {
  const [value, setValue] = useState(search);
  const [hasTyped, setHasTyped] = useState(false);

  // Keep the input in sync when search is cleared from elsewhere
  if (!hasTyped && search !== value && search === "") {
    setValue("");
    setHasTyped(false);
  }

  const handleChange = (next: string) => {
    setHasTyped(true);
    setValue(next);
    onSearchChange(next);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearchChange(value);
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border/70"
    >
      {/* Very subtle sky-blue gradient, per the sky-blue brief but kept minimal */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-50 to-background"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-100/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-sky-600">
          Jobs across Karnataka
        </p>
        <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Find Your <span className="text-sky-600">Dream Job</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
          Discover exciting career opportunities across Karnataka.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-xl items-center gap-2"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              value={value}
              onChange={(event) => handleChange(event.target.value)}
              placeholder="Search by job title, company or location"
              className="h-11 rounded-full border-border bg-card pl-9 text-sm shadow-sm"
              aria-label="Search jobs"
            />
          </div>
          <Button type="submit" size="lg" className="h-11 rounded-full px-6">
            Search
          </Button>
        </form>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span>TCS</span>
          <span aria-hidden className="hidden h-1 w-1 rounded-full bg-border sm:block" />
          <span>Infosys</span>
          <span aria-hidden className="hidden h-1 w-1 rounded-full bg-border sm:block" />
          <span>Wipro</span>
          <span aria-hidden className="hidden h-1 w-1 rounded-full bg-border sm:block" />
          <span>Accenture</span>
          <span aria-hidden className="hidden h-1 w-1 rounded-full bg-border sm:block" />
          <span>+ 40 more</span>
        </div>
      </div>
    </section>
  );
}
