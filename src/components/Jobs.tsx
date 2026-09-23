import { Button } from "@/components/ui/button";
import JobCard from "@/components/JobCard";
import { CATEGORIES, JOBS, type CategoryFilter, type Job } from "@/data/jobs";
import { RotateCcw, SearchX } from "lucide-react";
import { useMemo, useState } from "react";

interface JobsProps {
  search: string;
  onApply: () => void;
}

export default function Jobs({ search, onApply }: JobsProps) {
  const [category, setCategory] = useState<CategoryFilter>("All");
  const [applications, setApplications] = useState(0);
  const [appliedJobIds, setAppliedJobIds] = useState<number[]>([]);

  const filteredJobs = useMemo(() => {
    const query = search.trim().toLowerCase();
    return JOBS.filter((job) => {
      const matchesSearch =
        query === "" ||
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query);
      const matchesCategory = category === "All" || job.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const handleApply = (job: Job) => {
    setApplications((count) => count + 1);
    setAppliedJobIds((ids) => (ids.includes(job.id) ? ids : [...ids, job.id]));
    onApply();
  };

  const handleReset = () => {
    setApplications(0);
    setAppliedJobIds([]);
  };

  return (
    <section id="jobs" className="border-b border-border/70 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-sky-600">
              Openings
            </p>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Latest Job Opportunities
            </h2>
          </div>

          <div className="flex items-center gap-4 self-start rounded-full border border-border bg-card px-5 py-2.5 shadow-sm md:self-auto">
            <span className="text-sm text-muted-foreground">
              Applications submitted:{" "}
              <span className="font-semibold text-foreground">
                {applications}
              </span>
            </span>
            <span aria-hidden className="h-4 w-px bg-border" />
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <RotateCcw className="size-3.5" />
              Reset
            </button>
          </div>
        </div>

        {/* Category filter */}
        <div className="mb-10 flex flex-wrap gap-2">
          {CATEGORIES.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={
                category === item
                  ? "rounded-full border border-sky-600 bg-sky-600 px-4 py-1.5 text-sm font-medium text-white shadow-sm transition-all"
                  : "rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground transition-all hover:border-sky-300 hover:text-foreground"
              }
            >
              {item}
              <span className="ml-1.5 text-xs opacity-70">
                {item === "All"
                  ? JOBS.length
                  : JOBS.filter((job) => job.category === item).length}
              </span>
            </button>
          ))}
        </div>

        {/* Job grid */}
        {filteredJobs.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                applied={appliedJobIds.includes(job.id)}
                onApply={handleApply}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center rounded-2xl border border-dashed border-border bg-card/50 px-6 py-16 text-center">
            <SearchX className="mb-3 size-8 text-muted-foreground" />
            <p className="text-base font-medium text-foreground">
              No jobs found
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Try a different keyword or category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
