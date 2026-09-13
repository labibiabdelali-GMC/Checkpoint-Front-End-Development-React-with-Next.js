import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/About.module.css";

const SKILLS = [
  { name: "TypeScript", level: 90 },
  { name: "React.js", level: 92 },
  { name: "Next.js", level: 88 },
  { name: "Node.js / Express", level: 85 },
  { name: "CSS & modern styling", level: 90 },
  { name: "PostgreSQL / MongoDB", level: 78 },
  { name: "Git & CI/CD", level: 82 },
];

const EXPERIENCE = [
  {
    period: "2024 — Present",
    role: "Full-Stack Developer",
    company: "Freelance",
    detail:
      "Building custom web apps for clients: dashboards, e-commerce stores and internal tools built with Next.js and Node.js.",
  },
  {
    period: "2023 — 2024",
    role: "Front-End Developer Intern",
    company: "Tech Startup",
    detail:
      "Developed reusable React components, improved site performance and collaborated with design and back-end teams in an agile environment.",
  },
  {
    period: "2022 — 2023",
    role: "Software Engineering Trainee",
    company: "GoMyCode",
    detail:
      "Completed intensive full-stack bootcamp focused on modern JavaScript, React, Node.js and database design.",
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About — Abdelali Labibi</title>
        <meta
          name="description"
          content="Learn more about Abdelali Labibi, his background, skills and experience."
        />
      </Head>

      <section className={`container ${styles.section}`}>
        <h1 className="section-title">
          About <span className="gradient-text">me</span>
        </h1>
        <p className="section-subtitle">
          Developer, problem-solver and lifelong learner.
        </p>

        <div className={styles.bio}>
          <div className={styles.bioImage}>
            <Image
              src="/images/profile.jpg"
              alt="Abdelali Labibi"
              width={600}
              height={600}
              className={styles.photo}
            />
          </div>
          <div className={styles.bioText}>
            <p>
              I&apos;m a full-stack developer based in Morocco, passionate about
              turning ideas into products people love to use. I enjoy the whole
              journey — from sketching the first wireframe to shipping a
              performant, accessible application.
            </p>
            <p>
              My toolkit focuses on the React ecosystem, but I&apos;m always
              exploring new technologies. Recently I&apos;ve been digging deeper
              into server components, edge deployments and real-time apps.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me contributing to
              open-source projects, mentoring junior developers, or hiking.
            </p>
            <Link href="/contact" className="btn btn-outline">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          The technologies I use most to build products end to end.
        </p>

        <div className={styles.skills}>
          {SKILLS.map((skill) => (
            <div key={skill.name} className={styles.skill}>
              <div className={styles.skillRow}>
                <span className={styles.skillName}>{skill.name}</span>
                <span className={styles.skillLevel}>{skill.level}%</span>
              </div>
              <div className={styles.track}>
                <span
                  className={styles.fill}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">A quick look at my journey so far.</p>

        <div className={styles.timeline}>
          {EXPERIENCE.map((item) => (
            <article key={item.role} className={styles.timelineItem}>
              <div className={styles.timelineDot} />
              <div className={styles.timelineCard}>
                <span className={styles.period}>{item.period}</span>
                <h3>{item.role}</h3>
                <h4>{item.company}</h4>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}