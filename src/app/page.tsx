import Walkthrough from "@/components/Walkthrough";
import WaitlistForm from "@/components/WaitlistForm";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <h1>
          Assembly research takes hours.
          <br />
          Every answer should take seconds.
        </h1>
        <p>
          You cross-reference UL, GA-600, IBC, and manufacturer data to answer
          one assembly question. Mantle does it in a single query — with full
          citations from the sources you already trust.
        </p>
      </section>

      <section className={styles.promise}>
        <h2>
          Every claim cited. Every source linked. Every limitation stated.
        </h2>
        <p>
          Mantle cross-references tested assembly data from UL Product iQ,
          GA-600, NRC Canada, IBC, IECC, ASHRAE, and DOE — and returns cited,
          multi-variable answers structured for professional use.
        </p>
        <p>
          Not a chatbot. Not a search engine. A research tool built on the same
          evidence base you already rely on.
        </p>
      </section>

      <Walkthrough
        intro="Here's the kind of question you'd ask. Here's the kind of answer you'd get."
        annotation="This answer took 8 seconds. The manual research takes 45 minutes across 4 sources."
      />

      <section className={styles.sources}>
        <h2>Where the data comes from</h2>
        <p>
          Mantle retrieves from a structured, verified database — not a
          general-purpose language model. Every answer traces to one of these
          sources:
        </p>
        <p className={styles.sourcesList}>
          UL Product iQ · GA-600 · IBC · IECC · NRC Canada · ASHRAE · DOE BCL
        </p>
        <p>
          We don&apos;t generate assembly data. We retrieve it, cross-reference
          it, and cite it. If a source can&apos;t be linked, the claim is
          labeled as estimate or inference.
        </p>
        <Link href="/methodology" className={styles.methodologyLink}>
          Methodology · How Mantle cross-references data across sources
        </Link>
      </section>

      <WaitlistForm />
    </>
  );
}
