import {
  profile,
  socials,
  futureDirections,
  projects,
  publications,
  vision,
  collaboration,
  personJsonLd,
} from "@/data/content";

const navLinks = [
  { label: "Directions", href: "#directions" },
  { label: "Research", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Vision", href: "#vision" },
  { label: "Collaborate", href: "#contact" },
];

const SOCIAL_HOVER: Record<string, string> = {
  LinkedIn: "hover:border-transparent hover:bg-[#0A66C2] hover:text-white",
  "Google Scholar": "hover:border-transparent hover:bg-[#4285F4] hover:text-white",
  GitHub: "hover:border-transparent hover:bg-[#181717] hover:text-white",
};

function SocialIcon({ name }: { name: string }) {
  const props = {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className: "h-5 w-5",
    "aria-hidden": true,
  } as const;
  switch (name) {
    case "LinkedIn":
      return (
        <svg {...props}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      );
    case "GitHub":
      return (
        <svg {...props}>
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.52 11.52 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      );
    case "Google Scholar":
      return (
        <svg {...props}>
          <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.547 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
        </svg>
      );
    default:
      return null;
  }
}

function SectionHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-24 text-2xl font-semibold tracking-tight text-slate-900">
      {children}
    </h2>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200">
      {children}
    </span>
  );
}

function ExternalLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${children} (opens in new tab)`}
      className="text-sm font-medium text-blue-700 hover:text-blue-900 hover:underline"
    >
      {children} ↗
    </a>
  );
}

function KoreanName() {
  return (
    <>
      {" "}
      (<span lang="ko">{profile.koreanName}</span>)
    </>
  );
}

function PublicationRow({ pub }: { pub: (typeof publications)[number] }) {
  return (
    <div className="border-b border-slate-200 py-4 last:border-b-0">
      <a
        href={pub.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${pub.title} (opens in new tab)`}
        className="font-medium leading-snug text-slate-900 hover:text-blue-800 hover:underline"
      >
        {pub.title}
      </a>
      <p className="mt-1 text-sm text-slate-500">
        <span className="font-medium text-blue-800">{pub.venue}</span> · {pub.year} —{" "}
        {pub.contribution}
      </p>
    </div>
  );
}

export default function Home() {
  const selectedPubs = publications.filter((p) => p.selected);

  return (
    <div className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd()).replace(/</g, "\\u003c"),
        }}
      />

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3">
          <a href="#" className="font-semibold tracking-tight text-slate-900">
            {profile.shortName}
          </a>
          <div className="hidden gap-6 sm:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-600 transition-colors hover:text-slate-900"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-6">
        {/* Hero */}
        <section className="pt-20 sm:pt-28">
          <p className="text-sm font-medium text-slate-500">
            {profile.shortName}
            <KoreanName />, {profile.degrees} · {profile.title}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl sm:leading-[1.1]">
            {profile.headline}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            {profile.intro}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {profile.keywords.map((kw) => (
              <Badge key={kw}>{kw}</Badge>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-800"
            >
              View Research
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
            >
              Collaborate
            </a>
            <div className="flex flex-wrap items-center gap-2 sm:ml-1 sm:border-l sm:border-slate-300 sm:pl-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.label} (opens in new tab)`}
                  title={social.label}
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-600 transition-colors ${
                    SOCIAL_HOVER[social.label] ?? "hover:text-blue-700"
                  }`}
                >
                  <SocialIcon name={social.label} />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Future Directions */}
        <section className="pt-16 sm:pt-24">
          <SectionHeading id="directions">Future Directions</SectionHeading>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {futureDirections.map((item, i) => (
              <div key={item.title} className="border-t-2 border-blue-700 pt-4">
                <span className="text-sm font-semibold text-blue-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 font-semibold leading-snug text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Research */}
        <section className="pt-16 sm:pt-20">
          <SectionHeading id="projects">Recent Research</SectionHeading>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="text-lg font-semibold leading-snug text-slate-900">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.badges.map((badge) => (
                    <Badge key={badge}>{badge}</Badge>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-4">
                  {project.links.map((link) => (
                    <ExternalLink key={link.label} href={link.href}>
                      {link.label}
                    </ExternalLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section className="pt-16 sm:pt-20">
          <SectionHeading id="publications">Selected Publications</SectionHeading>
          <div className="mt-4">
            {selectedPubs.map((pub) => (
              <PublicationRow key={pub.title} pub={pub} />
            ))}
          </div>
          <p className="mt-5 text-sm text-slate-500">
            Full list on{" "}
            <a
              href={profile.scholar}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Scholar (opens in new tab)"
              className="font-medium text-blue-700 hover:underline"
            >
              Google Scholar
            </a>
            .
          </p>
        </section>

        {/* Vision */}
        <section className="pt-16 sm:pt-20">
          <SectionHeading id="vision">Vision</SectionHeading>
          <blockquote className="mt-6 max-w-3xl">
            <p className="text-2xl font-medium leading-snug text-slate-900 sm:text-3xl">
              “{vision.quote}”
            </p>
            <footer className="mt-3 text-sm font-medium text-slate-500">
              — {vision.quoteAuthor}
            </footer>
          </blockquote>
          <p className="mt-6 max-w-3xl leading-relaxed text-slate-700">{vision.body}</p>
        </section>

        {/* Collaborate / Contact */}
        <section className="py-16 sm:py-24">
          <div className="rounded-2xl bg-slate-900 p-8 sm:p-12">
            <SectionHeading id="contact">
              <span className="text-white">Collaborate</span>
            </SectionHeading>
            <p className="mt-4 max-w-2xl leading-relaxed text-slate-300">
              {collaboration.lead}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {collaboration.interests.map((interest) => (
                <span
                  key={interest}
                  className="inline-block rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300 ring-1 ring-slate-700"
                >
                  {interest}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <a
                href={`mailto:${profile.email}`}
                className="inline-block rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-200"
              >
                {profile.email}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-8 text-sm text-slate-500">
          © {new Date().getFullYear()} {profile.shortName}
          <KoreanName />
        </div>
      </footer>
    </div>
  );
}
