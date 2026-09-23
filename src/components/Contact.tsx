import { Mail, MapPin, Phone } from "lucide-react";

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@karnatakajobs.in",
    href: "mailto:hello@karnatakajobs.in",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98450 12345",
    href: "tel:+919845012345",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "MG Road, Bengaluru, Karnataka 560001",
    href: undefined,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="border-b border-border/70 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-sky-600">
            Contact
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Get in touch
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Questions, feedback or partnership enquiries — we'd love to hear
            from you.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {CONTACT_ITEMS.map((item) => {
            const Icon = item.icon;
            const content = (
              <>
                <div className="mb-4 flex size-10 items-center justify-center rounded-xl border border-border bg-muted">
                  <Icon className="size-4.5 text-sky-600" />
                </div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {item.value}
                </p>
              </>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-sky-300"
              >
                {content}
              </a>
            ) : (
              <div
                key={item.label}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
