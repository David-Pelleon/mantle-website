import type { Metadata } from "next";
import Walkthrough from "@/components/Walkthrough";
import WaitlistForm from "@/components/WaitlistForm";
import Link from "next/link";
import styles from "../audience.module.css";

export const metadata: Metadata = {
  title: "Mantle for Building Science — Cross-Referenced Assembly Data",
  description:
    "Verified assembly performance data from UL, GA-600, NRC, IBC, IECC, ASHRAE, and DOE. Every claim cited. Every gap disclosed. Structured for analysis.",
  openGraph: {
    title: "Mantle for Building Science — Verified data, full provenance",
    description:
      "Cross-referenced assembly data with inline citations, confidence levels, and stated limitations. Built for rigorous analysis.",
  },
};

export default function ForBuildingScience() {
  return (
    <>
      <section>
        <h2 className={styles.pageTitle}>
          Assembly data is scattered across seven databases. Cross-referencing it
          shouldn&apos;t require seven tabs.
        </h2>
        <p>
          You already know the sources — UL Product iQ for fire test data,
          GA-600 for gypsum assembly performance, NRC for independent acoustic
          measurement, IBC and IECC for code thresholds, ASHRAE for thermal
          criteria, DOE BCL for modeled performance. The value isn&apos;t in
          finding a single data point. It&apos;s in confirming consistency
          across sources for a given assembly configuration.
        </p>
      </section>

      <section>
        <h2>
          Structured retrieval with full provenance. Not generation.
        </h2>
        <p>
          Mantle is a retrieval system that cross-references assembly data
          across authoritative sources and returns multi-variable answers with
          inline citations, confidence levels, and stated data gaps.
        </p>
        <p>
          Every response distinguishes between tested data (cited to source),
          synthesized data (labeled as inference), and missing data (labeled as
          data gap). No values are generated. No sources are interpolated. If
          conflicting data exists across sources, both values are presented with
          their respective citations.
        </p>
      </section>

      <Walkthrough
        intro="A multi-variable query. A structured, cited response."
        annotation="Tested data cited to source. Synthesized data labeled. Gaps disclosed."
      />

      <section>
        <h2>Source coverage and methodology</h2>
        <p>
          Mantle retrieves from a structured database of cross-referenced
          assembly data. Every data point traces to a specific source, section,
          and verification date:
        </p>
        <p className={styles.sourcesList}>
          UL Product iQ · GA-600 · IBC · IECC · NRC Canada · ASHRAE · DOE BCL
        </p>
        <p>
          The system distinguishes between primary test data (ASTM E119, ASTM
          E90), code-mandated thresholds (IBC Table 601, IECC Table C402.1.3),
          and modeled/calculated values (DOE BCL). Confidence levels reflect
          this hierarchy — primary test data receives High confidence;
          synthesized or modeled data receives Moderate; incomplete or
          conflicting data receives Low.
        </p>
        <Link href="/methodology" className={styles.methodologyLink}>
          Full methodology — data sources, refresh cadence, confidence
          calculation, limitations →
        </Link>
      </section>

      <WaitlistForm questionPlaceholder="What cross-source verification would be most valuable for your current research?" />
    </>
  );
}
