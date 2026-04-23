"use client";

import { useState, FormEvent } from "react";
import styles from "./page.module.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section className={styles.contact}>
        <h2 className={styles.title}>Thank you</h2>
        <p>We&apos;ll be in touch.</p>
      </section>
    );
  }

  return (
    <section className={styles.contact}>
      <h2 className={styles.title}>Get in touch</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.input}
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          className={styles.input}
          placeholder="Company email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className={styles.textarea}
          placeholder="Message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className={styles.button}
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending..." : "Send message"}
        </button>
        {status === "error" && (
          <p className={styles.error}>Something went wrong. Please try again.</p>
        )}
      </form>
    </section>
  );
}
