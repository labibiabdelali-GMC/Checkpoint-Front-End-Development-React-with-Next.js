import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.css";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? router.pathname === "/" : router.pathname.startsWith(href);

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <Link href="/" className={styles.logo} aria-label="Home">
          <span className={styles.logoMark}>AL</span>
          <span className={styles.logoText}>
            Abdelali<span className={styles.logoTextAccent}>.</span>
          </span>
        </Link>

        <button
          type="button"
          className={styles.toggle}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={open ? styles.barOpenTop : styles.bar} />
          <span className={open ? styles.barOpenBottom : styles.bar} />
        </button>

        <ul className={`${styles.links} ${open ? styles.linksOpen : ""}`}>
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={isActive(href) ? styles.linkActive : styles.link}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className={styles.cta}>
            <Link
              href="/contact"
              className="btn btn-primary"
              onClick={() => setOpen(false)}
            >
              Hire Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}