"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export type Project = {
  title: string;
  description: string;
  techStack: string[];
  learned: string;
  githubUrl: string | null;
};

type ProjectCardProps = {
  project: Project;
  index?: number;
};

/*
 * Card layout: title, description, tech pills, "What I learned", and
 * GitHub link. Stagger index can be passed for list animation delay.
 */
export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-5 transition-colors hover:border-[var(--color-text-muted)]/50 sm:p-6"
    >
      <h3 className="text-lg font-semibold text-[var(--color-text)]">
        {project.title}
      </h3>
      <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">
        {project.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-[var(--color-border)] px-2 py-0.5 text-xs font-medium text-[var(--color-text-muted)]"
          >
            {tech}
          </span>
        ))}
      </div>
      <p className="mt-3 text-sm text-[var(--color-text)]">
        <span className="font-medium">Focus:</span> {project.learned}
      </p>
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-elevated)]"
        >
          View on GitHub
          <span aria-hidden>→</span>
        </a>
      )}
    </motion.article>
  );
}
