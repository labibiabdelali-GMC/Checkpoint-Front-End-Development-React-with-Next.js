import Link from "next/link";
import styles from "../styles/Footer.module.css";

const SOCIALS = ["GitHub", "LinkedIn", "X"];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.brand}>
            Abdelali Labibi<span className={styles.dot}>.</span>
          </p>
          <p className={styles.tagline}>
            Full-Stack developer crafting fast and delightful web experiences.
          </p>
        </div>

        <div className={styles.right}>
          <ul className={styles.socials}>
            {SOCIALS.map((s) => (
              <li key={s}>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.social}
                  aria-label={s}
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
          <Link href="/contact" className={styles.contact}>
            Let&apos;s work together →
          </Link>
        </div>
      </div>
      <div className={`container ${styles.bottom}`}>
        <p>© {new Date().getFullYear()} Abdelali Labibi. All rights reserved.</p>
        <p>Built with Next.js, TypeScript and CSS Modules.</p>
      </div>
    </footer>
  );
}