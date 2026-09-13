import type { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

type HomeProps = {
  serverTime: string;
};

const FEATURED = [
  {
    name: "TaskFlow",
    desc: "A collaborative project management app with real-time boards.",
    tech: "Next.js · Prisma · Socket.io",
  },
  {
    name: "Weatherly",
    desc: "A weather dashboard with forecasts, maps and geolocation.",
    tech: "React · OpenWeather API · Chart.js",
  },
  {
    name: "ShopVerse",
    desc: "A full e-commerce storefront with Stripe checkout.",
    tech: "Next.js · Stripe · PostgreSQL",
  },
];

export default function Home({ serverTime }: HomeProps) {
  return (
    <>
      <Head>
        <title>Abdelali Labibi — Full-Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Abdelali Labibi, a full-stack developer building modern web applications."
        />
      </Head>

      <section className={`container ${styles.hero}`}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>Hello, I&apos;m</p>
          <h1 className={styles.title}>
            Abdelali <span className="gradient-text">Labibi</span>
          </h1>
          <p className={styles.role}>Full-Stack Developer</p>
          <p className={styles.intro}>
            I design and build fast, accessible and beautiful web applications
            using React, Next.js and TypeScript. I care about clean code,
            great UX and shipping things that work.
          </p>

          <div className={styles.actions}>
            <Link href="/projects" className="btn btn-primary">
              View Projects
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Contact Me
            </Link>
          </div>

          <p className={styles.serverNote}>
            This page was rendered on the server at{" "}
            <time dateTime={serverTime}>{serverTime}</time>.
          </p>
        </div>

        <div className={styles.heroMedia}>
          <div className={styles.avatarFrame}>
            <Image
              src="/images/profile.jpg"
              alt="Portrait of Abdelali Labibi"
              width={600}
              height={600}
              priority
              className={styles.avatarImage}
            />
          </div>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Open to new opportunities
          </div>
        </div>
      </section>

      <section className={`container ${styles.skills}`}>
        <h2 className={styles.skillsTitle}>
          A few technologies I work with
        </h2>
        <ul className={styles.skillsList}>
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "Tailwind CSS",
            "PostgreSQL",
            "Git",
          ].map((skill) => (
            <li key={skill} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className={`container ${styles.featured}`}>
        <div className={styles.featuredHeader}>
          <h2 className="section-title">Featured work</h2>
          <Link href="/projects" className={styles.allLink}>
            See all projects →
          </Link>
        </div>
        <div className={styles.grid}>
          {FEATURED.map((project) => (
            <article key={project.name} className={styles.card}>
              <h3>{project.name}</h3>
              <p>{project.desc}</p>
              <span className={styles.cardTech}>{project.tech}</span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  return {
    props: {
      serverTime: new Date().toString(),
    },
  };
};