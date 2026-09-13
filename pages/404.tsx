import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Error.module.css";

export default function NotFound() {
  return (
    <section className={`container ${styles.section}`}>
      <Head>
        <title>404 — Page not found | Abdelali Labibi</title>
      </Head>
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>Page not found</h1>
      <p className={styles.text}>
        The page you&apos;re looking for doesn&apos;t exist, was removed, or
        you followed a broken link.
      </p>
      <div className={styles.actions}>
        <Link href="/" className="btn btn-primary">
          Back to home
        </Link>
        <Link href="/projects" className="btn btn-outline">
          View projects
        </Link>
      </div>
    </section>
  );
}