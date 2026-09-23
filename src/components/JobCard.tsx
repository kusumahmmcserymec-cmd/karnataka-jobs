import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, MapPin } from "lucide-react";
import type { Job } from "@/data/jobs";

interface JobCardProps {
  job: Job;
  applied: boolean;
  onApply: (job: Job) => void;
}

export default function JobCard({ job, applied, onApply }: JobCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-muted text-sm font-semibold text-foreground">
          {job.company.slice(0, 2).toUpperCase()}
        </div>
        <div className="flex flex-col items-end gap-1.5">
          <Badge
            variant="outline"
            className="rounded-full border-sky-200 bg-sky-50 text-sky-700"
          >
            {job.category}
          </Badge>
          <span className="text-xs text-muted-foreground">{job.posted}</span>
        </div>
      </div>

      <h3 className="text-base font-semibold tracking-tight text-foreground">
        {job.title}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">{job.company}</p>

      <div className="mt-4 space-y-1.5 text-sm text-muted-foreground">
        <p className="flex items-center gap-2">
          <MapPin className="size-3.5 shrink-0 text-sky-600" />
          {job.location}
        </p>
        <p className="flex items-center gap-2">
          <span className="font-medium text-foreground">₹</span>
          {job.salary}
        </p>
      </div>

      <div className="mt-auto pt-6">
        <Button
          onClick={() => onApply(job)}
          disabled={applied}
          variant={applied ? "outline" : "default"}
          className="w-full rounded-full"
          size="sm"
        >
          {applied ? (
            <>
              <Check className="size-4" />
              Applied
            </>
          ) : (
            "Apply Now"
          )}
        </Button>
      </div>
    </article>
  );
}
