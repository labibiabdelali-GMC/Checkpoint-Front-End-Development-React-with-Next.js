import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Error.module.css";

export default function CustomError() {
  return (
    <section className={`container ${styles.section}`}>
      <Head>
        <title>Something went wrong | Abdelali Labibi</title>
      </Head>
      <p className={styles.code}>500</p>
      <h1 className={styles.title}>Something went wrong</h1>
      <p className={styles.text}>
        An unexpected error occurred while loading this page. Please try again
        in a moment.
      </p>
      <div className={styles.actions}>
        <Link href="/" className="btn btn-primary">
          Back to home
        </Link>
      </div>
    </section>
  );
}