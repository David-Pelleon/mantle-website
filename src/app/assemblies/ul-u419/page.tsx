import type { Metadata } from "next";
import WaitlistForm from "@/components/WaitlistForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "UL U419 — 1-Hour Fire-Rated Wall Assembly | Mantle",
  description:
    'UL U419: 1-hour fire-rated CFS wall assembly. STC 52, 5-1/8" total thickness. Cross-referenced data from UL Product iQ and GA-600, with citations.',
  openGraph: {
    title: "UL U419 — Cited Assembly Data",
    description:
      '1-hour fire, STC 52, 5-1/8" thickness. Every claim traced to source.',
  },
};

export default function ULU419() {
  return (
    <>
      <section>
        <div className={styles.meta}>
          <span className={styles.type}>Wall Assembly</span>
          <span className={styles.confidence}>
            <span className={`${styles.confidenceDot} ${styles.high}`}></span>{" "}
            High Confidence
          </span>
        </div>
        <h1 className={styles.title}>UL U419</h1>
        <p className={styles.subtitle}>
          1-hour fire-rated wall assembly — Cold-formed steel framing
        </p>
      </section>

      <section>
        <h2>Performance Summary</h2>
        <div className={styles.dataTable}>
          <div className={styles.row}>
            <span className={styles.label}>Fire Rating</span>
            <span className={styles.value}>1 hour</span>
            <span className={styles.source}>
              <a href="#source-1" className={styles.citation}>[1]</a>
            </span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>Test Standard</span>
            <span className={styles.value}>ASTM E119</span>
            <span className={styles.source}>
              <a href="#source-1" className={styles.citation}>[1]</a>
            </span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>STC Rating</span>
            <span className={styles.value}>52</span>
            <span className={styles.source}>
              <a href="#source-2" className={styles.citation}>[2]</a>
            </span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>Total Thickness</span>
            <span className={styles.value}>5-1/8&quot;</span>
            <span className={styles.source}>
              <a href="#source-1" className={styles.citation}>[1]</a>
            </span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>Stud</span>
            <span className={styles.value}>3-5/8&quot; CFS, 25 ga min</span>
            <span className={styles.source}>
              <a href="#source-1" className={styles.citation}>[1]</a>
            </span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>Stud Spacing</span>
            <span className={styles.value}>24&quot; o.c. max</span>
            <span className={styles.source}>
              <a href="#source-1" className={styles.citation}>[1]</a>
            </span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>Cavity Insulation</span>
            <span className={styles.value}>
              3-1/2&quot; mineral wool, 2.5 pcf min density
            </span>
            <span className={styles.source}>
              <a href="#source-2" className={styles.citation}>[2]</a>
            </span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>R-Value</span>
            <span className={styles.value}>13</span>
            <span className={styles.source}>
              <a href="#source-2" className={styles.citation}>[2]</a>
            </span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>Gypsum Board</span>
            <span className={styles.value}>
              5/8&quot; Type X, both sides
            </span>
            <span className={styles.source}>
              <a href="#source-1" className={styles.citation}>[1]</a>
            </span>
          </div>
        </div>
      </section>

      <section>
        <h2>Construction Details</h2>
        <div className={styles.construction}>
          <h3>Layers (face to face)</h3>
          <ol className={styles.layers}>
            <li>5/8&quot; Type X gypsum board</li>
            <li>3-5/8&quot; CFS studs at 24&quot; o.c.</li>
            <li>
              3-1/2&quot; mineral wool insulation (2.5 pcf min)
            </li>
            <li>5/8&quot; Type X gypsum board</li>
          </ol>

          <h3>Fastening</h3>
          <p>
            Gypsum board attached with 1&quot; Type S drywall screws at 12&quot;
            o.c. on field, 8&quot; o.c. on edges. Joints staggered 24&quot;
            between sides.
          </p>

          <h3>Code Context</h3>
          <p>
            IBC Table 601 requires 1-hour fire-resistance rating for Type V-A
            construction bearing walls and Type III-A exterior walls. This
            assembly satisfies the 1-hour requirement for occupancy separations
            per IBC Section 508.4.
          </p>
        </div>
      </section>

      <section>
        <h2>Acoustic Performance</h2>
        <div className={styles.detailSection}>
          <p>
            GA-600 lists STC 52 for this configuration with mineral wool
            insulation at 2.5 pcf minimum density{" "}
            <a href="#source-2" className={styles.citation}>[2]</a>.
          </p>

          <h3>Fiberglass Variant</h3>
          <p>
            No independent acoustic test data exists for the fiberglass
            insulation variant. Manufacturer-reported STC 48, lab conditions.{" "}
            <span className={styles.dataGap}>[data gap]</span>
          </p>

          <h3>Field Performance</h3>
          <p>
            Lab STC values are measured under idealized conditions per ASTM E90.
            Field performance (FSTC) is typically 5-8 points lower due to
            flanking paths, penetrations, and installation variance. This
            derating is consistent with NRC Canada field measurement research.
          </p>

          <h3>IBC Acoustic Requirements</h3>
          <p>
            IBC Section 1207.2 requires STC 50 minimum (lab) or FSTC 45 minimum
            (field) for wall assemblies separating dwelling units in multifamily
            occupancies. This assembly meets the lab threshold at STC 52. Field
            verification recommended.
          </p>
        </div>
      </section>

      <section>
        <h2>Thermal Performance</h2>
        <div className={styles.detailSection}>
          <p>
            Cavity R-value of 13 with mineral wool insulation. Effective R-value
            is reduced by thermal bridging through CFS studs — typical effective
            R-value for this framing configuration is approximately R-9 to R-10
            at the stud location.
          </p>

          <h3>Energy Code Context</h3>
          <p>
            IECC 2021 Table C402.1.3 requires continuous insulation (c.i.) for
            steel-framed walls in Climate Zones 4 and above. This assembly as
            shown does not include c.i. — an additional layer of continuous
            insulation outboard of the sheathing is required for energy code
            compliance in most climate zones.
          </p>
          <p className={styles.thermalNote}>
            Verify against your project&apos;s climate zone and adopted energy
            code edition.
          </p>
        </div>
      </section>

      <section>
        <h2>Sources</h2>
        <div className={styles.sourcesPanel}>
          <p className={styles.sourceEntry} id="source-1">
            [1] UL Product iQ, Design No. U419 — verified April 2026
          </p>
          <p className={styles.sourceEntry} id="source-2">
            [2] GA-600, 22nd Ed., Assembly GA-WP-8422
          </p>
        </div>
      </section>

      <section>
        <h2>Limitations</h2>
        <ul className={styles.limitationsList}>
          <li>
            STC 52 is a lab value (ASTM E90). Field performance will be lower.
          </li>
          <li>
            Fiberglass insulation variant lacks independent acoustic test data.
          </li>
          <li>
            Thermal performance does not account for continuous insulation —
            verify energy code compliance separately.
          </li>
          <li>
            Local code amendments and AHJ interpretations may impose additional
            requirements.
          </li>
          <li>
            Assembly selection requires professional judgment considering
            project-specific factors.
          </li>
        </ul>
        <p className={styles.limitationsEmphasis}>
          Verify before you specify.
        </p>
      </section>

      <WaitlistForm questionPlaceholder="What assembly are you trying to specify right now?" />
    </>
  );
}
