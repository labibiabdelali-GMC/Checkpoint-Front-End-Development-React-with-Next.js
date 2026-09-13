import { useState } from "react";
import type { FormEvent } from "react";
import Head from "next/head";
import styles from "../styles/Contact.module.css";

const INFO = [
  { label: "Email", value: "name.lastname@email.com", href: "mailto:name.lastname@email.com" },
  { label: "Phone", value: "+212 000 000 000", href: "tel:+212000000000" },
  { label: "Location", value: "Morocco", href: undefined },
];

const SOCIALS = ["GitHub", "LinkedIn", "X"];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // A real app should POST this payload to an API route or form service.
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Contact — Abdelali Labibi</title>
        <meta
          name="description"
          content="Get in touch with Abdelali Labibi for projects, collaborations or just to say hi."
        />
      </Head>

      <section className={`container ${styles.header}`}>
        <h1 className="section-title">
          Let&apos;s <span className="gradient-text">talk</span>
        </h1>
        <p className="section-subtitle">
          Have a project in mind, a job offer, or just want to say hi? My inbox
          is always open.
        </p>
      </section>

      <section className={`container ${styles.wrap}`}>
        <aside className={styles.info}>
          <h2>Get in touch</h2>
          <ul className={styles.infoList}>
            {INFO.map((item) => (
              <li key={item.label} className={styles.infoItem}>
                <span className={styles.infoLabel}>{item.label}</span>
                {item.href ? (
                  <a href={item.href} className={styles.infoValue}>
                    {item.value}
                  </a>
                ) : (
                  <span className={styles.infoValue}>{item.value}</span>
                )}
              </li>
            ))}
          </ul>

          <div className={styles.socials}>
            <span className={styles.socialsLabel}>Elsewhere</span>
            <ul>
              {SOCIALS.map((s) => (
                <li key={s}>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {s} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className={styles.formCard}>
          {submitted ? (
            <div className={styles.success}>
              <h2>Thank you!</h2>
              <p>
                Your message has been sent successfully. I&apos;ll get back to
                you as soon as possible.
              </p>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => {
                  setName("");
                  setEmail("");
                  setMessage("");
                  setSubmitted(false);
                }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.field}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Jane Doe"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="jane@example.com"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="Tell me about your project..."
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send message
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}