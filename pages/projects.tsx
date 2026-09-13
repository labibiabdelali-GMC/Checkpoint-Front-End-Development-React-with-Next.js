import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Projects.module.css";

type Project = {
  name: string;
  image: string;
  description: string;
  tech: string[];
  live: string;
  source: string;
  highlight?: boolean;
};

const PROJECTS: Project[] = [
  {
    name: "TaskFlow",
    image: "/images/project-taskflow.jpg",
    description:
      "A collaborative project-management app with kanban boards, real-time updates and team workspaces.",
    tech: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    live: "https://github.com",
    source: "https://github.com",
    highlight: true,
  },
  {
    name: "Weatherly",
    image: "/images/project-weather.jpg",
    description:
      "Beautiful weather dashboard with 5-day forecasts, animated radar maps and geolocation support.",
    tech: ["React", "OpenWeather API", "Chart.js"],
    live: "https://github.com",
    source: "https://github.com",
  },
  {
    name: "ShopVerse",
    image: "/images/project-ecommerce.jpg",
    description:
      "Full e-commerce storefront with product search, cart, Stripe payments and order tracking.",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    live: "https://github.com",
    source: "https://github.com",
    highlight: true,
  },
  {
    name: "Chatty",
    image: "/images/project-chat.jpg",
    description:
      "Real-time chat application with private rooms, typing indicators and end-to-end message history.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    live: "https://github.com",
    source: "https://github.com",
  },
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects — Abdelali Labibi</title>
        <meta
          name="description"
          content="A selection of projects built by Abdelali Labibi."
        />
      </Head>

      <section className={`container ${styles.header}`}>
        <h1 className="section-title">
          My <span className="gradient-text">projects</span>
        </h1>
        <p className="section-subtitle">
          A selection of things I&apos;ve built recently — from productivity
          tools to real-time applications.
        </p>
      </section>

      <section className={`container ${styles.grid}`}>
        {PROJECTS.map((project) => (
          <article key={project.name} className={styles.card}>
            <div className={styles.imageWrap}>
              <Image
                src={project.image}
                alt={`Screenshot of the ${project.name} project`}
                width={800}
                height={500}
                className={styles.image}
              />
              {project.highlight && (
                <span className={styles.badge}>Featured</span>
              )}
            </div>
            <div className={styles.body}>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <ul className={styles.tech}>
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className={styles.links}>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
                <a
                  href={project.source}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  Source Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}