import type { Metadata } from "next";
import WaitlistForm from "@/components/WaitlistForm";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "How Mantle Works — Methodology",
  description:
    "Mantle cross-references UL, GA-600, IBC, IECC, NRC, ASHRAE, and DOE data. Every claim is cited. Every limitation is stated. Here's how.",
  openGraph: {
    title: "How Mantle Works — Evidence-based assembly intelligence",
    description:
      "Retrieval, not generation. Every assembly claim cited to source. Confidence levels on every response. Limitations stated.",
  },
};

export default function Methodology() {
  return (
    <>
      <section>
        <h2 className={styles.headerTitle}>How Mantle works</h2>
        <p>
          Mantle is a retrieval system, not a generative model. It
          cross-references tested assembly data from authoritative sources and
          returns cited answers structured for professional use.
        </p>
      </section>

      <section>
        <h2>What happens when you ask a question</h2>
        <ol className={styles.steps}>
          <li>
            Your question is parsed into structured parameters: fire rating,
            acoustic performance, thickness, stud type, thermal performance,
            code context.
          </li>
          <li>
            Those parameters query a structured database of cross-referenced
            assembly data — not a language model&apos;s training corpus.
          </li>
          <li>
            Matching assemblies are ranked by relevance to your specific
            constraints.
          </li>
          <li>
            Each result is returned with:
            <ul className={styles.stepsSub}>
              <li>Performance data from the source document</li>
              <li>Inline citations linking every claim to its source</li>
              <li>A confidence level (High, Moderate, or Low)</li>
              <li>Stated limitations and data gaps</li>
            </ul>
          </li>
        </ol>
        <p className={styles.emphasis}>
          No assembly data is generated. Every value in a Mantle response exists
          in a source document. The system finds it, cross-references it, and
          cites it.
        </p>
      </section>

      <section>
        <h2>Where the data comes from</h2>

        <div className={styles.sourceEntry}>
          <h3>UL Product iQ</h3>
          <p>
            Fire-rated assembly designs. Test reports per ASTM E119. UL design
            numbers, hourly ratings, construction details, and tested
            configurations.
          </p>
          <p className={styles.sourceMeta}>
            Coverage: UL-listed wall assemblies. Floor/ceiling and roof
            assemblies are not yet covered.
          </p>
          <p className={styles.sourceMeta}>
            Refresh: Monitored for listing updates. New and revised designs
            ingested within 30 days of publication.
          </p>
        </div>

        <div className={styles.sourceEntry}>
          <h3>GA-600</h3>
          <p>
            Fire and acoustic performance data for gypsum board assemblies. STC
            ratings, construction specifications, insulation requirements.
          </p>
          <p className={styles.sourceMeta}>
            Coverage: 22nd Edition, full wall assembly catalog.
          </p>
          <p className={styles.sourceMeta}>
            Refresh: Updated with each new GA-600 edition.
          </p>
        </div>

        <div className={styles.sourceEntry}>
          <h3>IBC (International Building Code)</h3>
          <p>
            Fire-resistance requirements, occupancy separations, shaft enclosure
            requirements, code-mandated assembly performance thresholds.
          </p>
          <p className={styles.sourceMeta}>
            Coverage: 2021 IBC. Local amendments are not included — verify
            against your jurisdiction&apos;s adopted code.
          </p>
          <p className={styles.sourceMeta}>
            Refresh: Updated with each new IBC edition (3-year cycle).
          </p>
        </div>

        <div className={styles.sourceEntry}>
          <h3>IECC (International Energy Conservation Code)</h3>
          <p>
            Thermal performance requirements by climate zone. R-value minimums,
            continuous insulation requirements, envelope compliance paths.
          </p>
          <p className={styles.sourceMeta}>Coverage: 2021 IECC.</p>
          <p className={styles.sourceMeta}>
            Refresh: Updated with each new IECC edition (3-year cycle).
          </p>
        </div>

        <div className={styles.sourceEntry}>
          <h3>NRC Canada (National Research Council)</h3>
          <p>
            Acoustic test data. Independent laboratory STC and OITC measurements
            for wall assemblies. Field performance data where available.
          </p>
          <p className={styles.sourceMeta}>
            Coverage: Published NRC acoustic test reports for wall assemblies.
          </p>
          <p className={styles.sourceMeta}>
            Refresh: As new reports are published.
          </p>
        </div>

        <div className={styles.sourceEntry}>
          <h3>ASHRAE</h3>
          <p>
            Energy standards and thermal performance requirements. Climate zone
            definitions, envelope performance criteria.
          </p>
          <p className={styles.sourceMeta}>
            Coverage: ASHRAE 90.1 and relevant thermal performance standards.
          </p>
          <p className={styles.sourceMeta}>
            Refresh: Updated with each new standard edition.
          </p>
        </div>

        <div className={styles.sourceEntry}>
          <h3>DOE BCL (Building Component Library)</h3>
          <p>
            Thermal performance data, assembly U-factors, material properties
            for energy modeling.
          </p>
          <p className={styles.sourceMeta}>
            Coverage: Wall assembly thermal data.
          </p>
          <p className={styles.sourceMeta}>
            Refresh: As DOE publishes updates.
          </p>
        </div>

        <p className={styles.closing}>
          These are the same sources you already rely on. Mantle doesn&apos;t
          replace them — it makes cross-referencing them faster.
        </p>
      </section>

      <section className={styles.sectionContent}>
        <h2>How citations work</h2>
        <p>
          Every factual claim in a Mantle response is cited to a specific
          source, section, and verification date.
        </p>

        <h3>What &ldquo;cited&rdquo; means:</h3>
        <ul className={styles.methodList}>
          <li>
            The source document is named (e.g., UL Product iQ, Design No. U419)
          </li>
          <li>
            The specific section or data point is identified (e.g., GA-600, 22nd
            Ed., Assembly GA-WP-8422)
          </li>
          <li>
            The verification date is stated (e.g., verified April 2026)
          </li>
        </ul>

        <h3>What &ldquo;verified&rdquo; means:</h3>
        <p>
          A human reviewer has confirmed that the data in Mantle&apos;s database
          matches the current source document. The verification date tells you
          when that confirmation last occurred.
        </p>

        <h3>When a source can&apos;t be linked:</h3>
        <p>
          If a data point cannot be traced to a specific source, Mantle does not
          present it as fact. It is labeled:
        </p>
        <ul className={styles.methodList}>
          <li>
            <strong>[estimate]</strong> — derived from similar assemblies
          </li>
          <li>
            <strong>[inference]</strong> — calculated from related data
          </li>
          <li>
            <strong>[data gap]</strong> — no data available
          </li>
        </ul>
        <p>
          You always know which claims are sourced and which are not.
        </p>
      </section>

      <section>
        <h2>What confidence levels mean</h2>
        <p>
          Every Mantle response carries a confidence level. Here&apos;s what
          each one means:
        </p>

        <div className={styles.confidenceEntry}>
          <div className={styles.confidenceHeader}>
            <span
              className={`${styles.confidenceDot} ${styles.confidenceHigh}`}
            ></span>
            <span className={styles.confidenceLabelHigh}>High</span>
          </div>
          <p>
            Data from a primary authoritative source, directly cited. The
            assembly data is current, the source is verifiable, and no
            conflicting data exists in other sources.
          </p>
        </div>

        <div className={styles.confidenceEntry}>
          <div className={styles.confidenceHeader}>
            <span
              className={`${styles.confidenceDot} ${styles.confidenceModerate}`}
            ></span>
            <span className={styles.confidenceLabelModerate}>Moderate</span>
          </div>
          <p>
            Synthesized across sources or estimated from similar data. The
            assembly likely performs as described, but the specific configuration
            has not been independently tested in this exact form.
          </p>
        </div>

        <div className={styles.confidenceEntry}>
          <div className={styles.confidenceHeader}>
            <span
              className={`${styles.confidenceDot} ${styles.confidenceLow}`}
            ></span>
            <span className={styles.confidenceLabelLow}>Low</span>
          </div>
          <p>
            Missing data, conflicting sources, or requires verification. Mantle
            is telling you what it found, but professional verification is
            strongly recommended before specifying.
          </p>
        </div>

        <p>
          Confidence is calculated per response, not per source. A
          High-confidence answer means every data point in that response traces
          to a primary source without conflict.
        </p>
      </section>

      <section className={styles.sectionContent}>
        <h2>What Mantle does not do</h2>

        <h3>Current scope:</h3>
        <ul className={styles.methodList}>
          <li>
            Wall assemblies only. Floor/ceiling, roof, and exterior assemblies
            are not yet covered.
          </li>
          <li>
            UL-listed assemblies and GA-600-cataloged assemblies. Proprietary
            manufacturer assemblies not in UL or GA-600 are not included.
          </li>
          <li>
            US and Canadian codes and standards. International building codes are
            not covered.
          </li>
        </ul>

        <h3>What Mantle cannot do:</h3>
        <ul className={styles.methodList}>
          <li>
            Replace professional judgment. Assembly selection involves
            project-specific factors (local code amendments, AHJ
            interpretations, budget, schedule, contractor capability) that no
            database can account for.
          </li>
          <li>
            Substitute for code review. Mantle retrieves code requirements — it
            does not interpret them for your project.
          </li>
          <li>
            Guarantee field performance. Lab test data describes idealized
            conditions. Field performance depends on installation quality,
            detailing, and site conditions.
          </li>
        </ul>

        <p className={styles.emphasis}>Verify before you specify.</p>
      </section>

      <section>
        <h2>How data stays current</h2>
        <p>
          Assembly data changes. UL listings are revised. Code editions are
          updated. New test data is published. Mantle&apos;s methodology
          accounts for this:
        </p>
        <ul className={styles.methodList}>
          <li>
            Every data point carries a verification date. You can see when it
            was last confirmed against the source.
          </li>
          <li>
            Source updates are monitored and ingested on a defined schedule.
          </li>
          <li>
            When a source is updated, affected assemblies are re-verified before
            new data is displayed.
          </li>
          <li>
            If a UL listing is revised or withdrawn, the assembly is flagged and
            the previous data is not served without notation.
          </li>
        </ul>
        <p>
          The verification date is your signal. If it&apos;s recent, the data
          reflects the current source. If it&apos;s older, check the source
          directly for updates.
        </p>
      </section>

      <section className={styles.sectionContent}>
        <h2>Editorial independence</h2>
        <p>
          Mantle is free for architects. The business model is funded by
          manufacturers who pay for specification intelligence — not for
          placement or influence.
        </p>

        <h3>What this means in practice:</h3>
        <ul className={styles.methodList}>
          <li>
            Manufacturer payments do not influence which assemblies appear in
            results.
          </li>
          <li>
            Manufacturer payments do not influence how assemblies are ranked.
          </li>
          <li>
            Manufacturer payments do not influence confidence levels, citations,
            or stated limitations.
          </li>
          <li>Editorial independence is contractually guaranteed.</li>
        </ul>

        <p>
          If a manufacturer&apos;s product appears in a result, it&apos;s
          because it&apos;s part of a tested, cited assembly — not because they
          paid.
        </p>
      </section>

      <WaitlistForm />
    </>
  );
}
