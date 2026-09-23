const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Jobs", href: "#jobs" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2026 KarnatakaJobs | Built using React
          </p>

          <ul className="flex items-center gap-6">
            {FOOTER_LINKS.map((link) => (
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
        </div>
      </div>
    </footer>
  );
}
