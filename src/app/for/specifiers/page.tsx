import type { Metadata } from "next";
import Walkthrough from "@/components/Walkthrough";
import WaitlistForm from "@/components/WaitlistForm";
import Link from "next/link";
import styles from "../audience.module.css";

export const metadata: Metadata = {
  title: "Mantle for Specifiers — Every Claim Cited to Source",
  description:
    "Cross-referenced assembly data from UL, GA-600, NRC, IBC, and DOE. Inline citations, confidence levels, and stated data gaps. Structured for specification use.",
  openGraph: {
    title: "Mantle for Specifiers — Data provenance, not AI summaries",
    description:
      "Every value traced to source. Every gap disclosed. Structured for professional specification.",
  },
};

export default function ForSpecifiers() {
  return (
    <>
      <section>
        <h2 className={styles.pageTitle}>
          Assembly data exists across a dozen sources. None of them
          cross-reference.
        </h2>
        <p>
          You already know where the data lives — UL Product iQ for fire, GA-600
          for acoustic, NRC for independent test data, IBC for code context. The
          problem isn&apos;t finding it. The problem is cross-referencing it:
          confirming that the STC rating in GA-600 matches the stud
          configuration in the UL listing matches the thermal requirement in the
          energy code. That verification step is where the hours go.
        </p>
      </section>

      <section>
        <h2>
          Every claim cited. Every source linked. Every limitation stated.
        </h2>
        <p>
          Mantle cross-references tested assembly data from UL Product iQ,
          GA-600, NRC Canada, IBC, IECC, ASHRAE, and DOE — and returns
          multi-variable answers with inline citations, confidence levels, and
          stated data gaps.
        </p>
        <p>
          The output is structured for specification use: UL design numbers,
          GA-600 assembly numbers, test standards referenced by name and
          section. No generic summaries. No AI-generated interpretation.
          Verified source data, cross-referenced and cited.
        </p>
      </section>

      <Walkthrough
        intro="A multi-variable query. A cited, structured answer."
        annotation="Every value traced to source. Every gap disclosed."
      />

      <section>
        <h2>Data provenance</h2>
        <p>
          Mantle retrieves from a structured, verified database. Every data
          point traces to a specific source, section, and verification date.
          Here are the sources:
        </p>
        <p className={styles.sourcesList}>
          UL Product iQ · GA-600 · IBC · IECC · NRC Canada · ASHRAE · DOE BCL
        </p>
        <p>
          We don&apos;t generate assembly data. We don&apos;t summarize it. We
          retrieve it, confirm it against the source document, cross-reference
          it across performance dimensions, and present it with full provenance.
          If a value can&apos;t be traced to a primary source, it&apos;s labeled
          as estimate, inference, or data gap.
        </p>
        <Link href="/methodology" className={styles.methodologyLink}>
          Methodology — data sources, refresh cadence, confidence levels,
          limitations →
        </Link>
      </section>

      <WaitlistForm questionPlaceholder="What's the hardest cross-referencing problem in your current project?" />
    </>
  );
}
