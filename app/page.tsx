import { SectionLayout } from "@/components/SectionLayout";
import { ProjectCard } from "@/components/ProjectCard";
import { profile, education, experience, projects, skills } from "@/lib/content";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Minimal hero: name and role only. No taglines. */}
      <section className="border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
          <h1 className="text-2xl font-semibold tracking-tight text-[var(--color-text)] sm:text-3xl">
            {profile.name}
          </h1>
          <p className="mt-1 text-[var(--color-text-muted)]">
            Software Engineering Student · Addis Ababa University
          </p>
        </div>
      </section>

      {/* About: photo + bio + education. */}
      <SectionLayout id="about" title="About">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
          <div className="shrink-0">
            <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-[var(--color-border)] sm:h-32 sm:w-32">
              <Image
                src="/profile.png"
                alt="Bisrat Gulelat"
                fill
                sizes="128px"
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="min-w-0 flex-1 space-y-4">
            <p className="text-[var(--color-text)] leading-relaxed">
              I&apos;m a software engineering student at Addis Ababa University,
              with hands-on experience in data structures, algorithms, and
              full-stack development. I focus on clear code and practical
              problem-solving.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-[var(--color-text-muted)]">
              <span>{profile.location}</span>
              <span>{education.period}</span>
            </div>
            <ul className="text-sm text-[var(--color-text-muted)]">
              <li>{education.school} — {education.degree}</li>
              <li>Relevant coursework: {education.coursework.join(", ")}</li>
            </ul>
          </div>
        </div>
      </SectionLayout>

      <SectionLayout id="experience" title="Experience">
        <ul className="space-y-8">
          {experience.map((job) => (
            <li key={job.company} className="border-l-2 border-[var(--color-border)] pl-5 sm:pl-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-semibold text-[var(--color-text)]">
                  {job.role}
                </h3>
                <span className="text-sm text-[var(--color-text-muted)]">
                  {job.period}
                </span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-[var(--color-text-muted)]">
                {job.company}
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-[var(--color-text)]">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </SectionLayout>

      <SectionLayout id="skills" title="Skills">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
              Languages
            </h3>
            <p className="text-sm text-[var(--color-text)]">
              {skills.languages.join(", ")}
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
              Frameworks & concepts
            </h3>
            <p className="text-sm text-[var(--color-text)]">
              {skills.frameworks.join(", ")}
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
              Tools
            </h3>
            <p className="text-sm text-[var(--color-text)]">
              {skills.tools.join(", ")}
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
              Languages (spoken)
            </h3>
            <p className="text-sm text-[var(--color-text)]">
              {skills.spoken.join(", ")}
            </p>
          </div>
        </div>
      </SectionLayout>

      <SectionLayout id="projects" title="Projects">
        <ul className="grid gap-6 sm:grid-cols-1">
          {projects.map((project, i) => (
            <li key={project.title}>
              <ProjectCard project={project} index={i} />
            </li>
          ))}
        </ul>
      </SectionLayout>

      <SectionLayout id="contact" title="Contact">
        <div className="flex flex-wrap gap-6 text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="font-medium text-[var(--color-accent)] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
          >
            {profile.phone}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--color-accent)] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
          >
            GitHub
          </a>
          <span className="text-[var(--color-text-muted)]">
            LeetCode: {profile.leetcode}
          </span>
        </div>
      </SectionLayout>
    </>
  );
}
