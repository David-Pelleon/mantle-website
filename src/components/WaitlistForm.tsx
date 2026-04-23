"use client";

import { useState, FormEvent } from "react";
import styles from "./WaitlistForm.module.css";

const PERSONAL_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "aol.com",
  "icloud.com",
  "me.com",
  "mail.com",
];

interface WaitlistFormProps {
  questionPlaceholder?: string;
}

export default function WaitlistForm({
  questionPlaceholder = "What's your most pressing assembly research question?",
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [emailError, setEmailError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const domain = email.split("@")[1]?.toLowerCase();
    if (PERSONAL_DOMAINS.includes(domain)) {
      setEmailError("Please use a company email address.");
      return;
    }
    setEmailError("");
    setStatus("submitting");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, question }),
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
      <section className={styles.waitlistForm} id="waitlist">
        <p>
          Thank you. We&apos;ll answer your question — with full citations —
          when Mantle is ready.
        </p>
      </section>
    );
  }

  return (
    <section className={styles.waitlistForm} id="waitlist">
      <h2 className={styles.heading}>
        Ask your most pressing assembly question.
      </h2>
      <p className={styles.subhead}>
        We&apos;ll answer it — with full citations — when Mantle is ready.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.fieldGroup}>
          <input
            type="email"
            className={styles.input}
            placeholder="Company email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
          />
          {emailError && <p className={styles.error}>{emailError}</p>}
          <p className={styles.helper}>
            Mantle is built for architecture firms. A company email helps us
            reach the right people.
          </p>
        </div>

        <div className={styles.fieldGroup}>
          <textarea
            className={styles.textarea}
            placeholder={questionPlaceholder}
            required
            minLength={10}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className={styles.button}
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Submitting..." : "Submit your question"}
        </button>

        {status === "error" && (
          <p className={styles.error}>
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </section>
  );
}
