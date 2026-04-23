import type { Metadata } from "next";
import Walkthrough from "@/components/Walkthrough";
import WaitlistForm from "@/components/WaitlistForm";
import Link from "next/link";
import styles from "../audience.module.css";

export const metadata: Metadata = {
  title: "Mantle for Architects — Assembly Research, Cited to Source",
  description:
    "Cross-reference UL, GA-600, IBC, and NRC data in one query. Every answer cited. Every limitation stated. Free for architects.",
  openGraph: {
    title: "Mantle for Architects — One query, full citations",
    description:
      "4 sources per decision. One query. Every answer cites the source document.",
  },
};

export default function ForArchitects() {
  return (
    <>
      <section>
        <h2 className={styles.pageTitle}>
          You cross-reference 4 sources to answer one assembly question.
        </h2>
        <p>
          UL for fire. GA-600 for acoustic. IBC for code. Manufacturer sites for
          availability. None of them talk to each other. A single question —
          &ldquo;What&apos;s the thinnest 1-hour wall with STC 50+?&rdquo; —
          takes 45 minutes to an hour. Every time.
        </p>
      </section>

      <section>
        <h2>One query. Cited answers from the sources you already trust.</h2>
        <p>
          Mantle cross-references UL Product iQ, GA-600, NRC Canada, IBC, IECC,
          ASHRAE, and DOE — and returns cited, multi-variable answers in
          seconds. Every claim traces to a source document. Every limitation is
          stated.
        </p>
        <p>
          Not a chatbot. Not a search engine. A research tool that does the
          cross-referencing you already do — faster, with citations you can
          verify.
        </p>
      </section>

      <Walkthrough
        intro="A real question. A real answer. Every data point cited."
        annotation="This answer took 8 seconds. How long did your last assembly lookup take?"
      />

      <section>
        <h2>Built on the sources you already rely on</h2>
        <p>
          You already trust these databases — you just can&apos;t query them in
          one place:
        </p>
        <p className={styles.sourcesList}>
          UL Product iQ · GA-600 · IBC · IECC · NRC Canada · ASHRAE · DOE BCL
        </p>
        <p>
          Mantle doesn&apos;t generate assembly data. It retrieves it from these
          sources, cross-references it across performance dimensions, and cites
          every claim. If data doesn&apos;t exist, it says so.
        </p>
        <Link href="/methodology" className={styles.methodologyLink}>
          How Mantle cross-references data across sources →
        </Link>
      </section>

      <WaitlistForm questionPlaceholder="What assembly question would save you the most time this week?" />
    </>
  );
}
