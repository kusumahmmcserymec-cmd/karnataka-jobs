import { Button } from "@/components/ui/button";
import { BriefcaseBusiness, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Jobs", href: "#jobs" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-md border border-border bg-card">
            <BriefcaseBusiness className="size-4 text-foreground" />
          </span>
          <span className="text-base font-semibold tracking-tight">
            KarnatakaJobs
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            className="hidden sm:inline-flex"
            onClick={() => navigate("/auth?returnTo=/")}
          >
            Login
          </Button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="inline-flex size-9 items-center justify-center rounded-md border border-border bg-card md:hidden"
          >
            {open ? (
              <X className="size-4" />
            ) : (
              <Menu className="size-4" />
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border/70 bg-background md:hidden">
          <ul className="space-y-1 px-4 py-3">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Button
                size="sm"
                className="w-full"
                onClick={() => {
                  setOpen(false);
                  navigate("/auth?returnTo=/");
                }}
              >
                Login
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
