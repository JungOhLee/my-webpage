import {
  profile,
  socials,
  futureDirections,
  projects,
  publications,
  vision,
  collaboration,
} from "@/data/content";

const navLinks = [
  { label: "Directions", href: "#directions" },
  { label: "Research", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

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
            {profile.name} · {profile.title}
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
              Work with me
            </a>
            <div className="flex flex-wrap items-center gap-4 sm:ml-2 sm:border-l sm:border-slate-300 sm:pl-5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.label} (opens in new tab)`}
                  className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-700"
                >
                  {social.label}
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

        {/* Work with me / Contact */}
        <section className="py-16 sm:py-24">
          <div className="rounded-2xl bg-slate-900 p-8 sm:p-12">
            <SectionHeading id="contact">
              <span className="text-white">Work with me</span>
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
        </div>
      </footer>
    </div>
  );
}
