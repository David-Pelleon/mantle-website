import styles from "./Walkthrough.module.css";

interface WalkthroughProps {
  intro: string;
  annotation: string;
}

export default function Walkthrough({ intro, annotation }: WalkthroughProps) {
  return (
    <section className={styles.walkthroughSection}>
      <p className={styles.intro}>{intro}</p>
      <p className={styles.question}>
        &ldquo;What&apos;s the thinnest 1-hour wall assembly with STC 50+ for
        multifamily?&rdquo;
      </p>

      <div className={styles.walkthrough}>
        <div className={styles.header}>
          <div>
            <span className={styles.id}>UL U419</span>
            <span className={styles.description}>
              1-hour fire-rated wall assembly
            </span>
          </div>
          <span className={styles.confidence}>
            <span className={`${styles.confidenceDot} ${styles.high}`}></span>{" "}
            High
          </span>
        </div>

        <div className={styles.grid}>
          <div className={styles.gridHeader}>
            <span>FIRE</span>
            <span>STC</span>
            <span>THICKNESS</span>
            <span>STUD</span>
            <span>R-VAL</span>
          </div>
          <div className={styles.gridData}>
            <span>1 hr</span>
            <span>52</span>
            <span>5-1/8&quot;</span>
            <span>3-5/8&quot; CFS</span>
            <span>13</span>
          </div>
        </div>

        <div className={styles.narrative}>
          <p>
            UL U419 is rated 1-hour per ASTM E119{" "}
            <a href="#source-1" className={styles.citation}>
              [1]
            </a>
            . GA-600 lists STC 52 for this configuration with 3-1/2&quot;
            mineral wool at 2.5 pcf minimum density{" "}
            <a href="#source-2" className={styles.citation}>
              [2]
            </a>
            . No independent acoustic test data exists for the fiberglass
            variant — manufacturer-reported STC 48, lab conditions{" "}
            <span className={styles.dataGap}>[data gap]</span>.
          </p>
        </div>

        <div className={styles.sources}>
          <div className={styles.divider}></div>
          <p className={styles.panelLabel}>Sources</p>
          <p className={styles.source} id="source-1">
            [1] UL Product iQ, Design No. U419 — verified April 2026
          </p>
          <p className={styles.source} id="source-2">
            [2] GA-600, 22nd Ed., Assembly GA-WP-8422
          </p>
        </div>

        <div className={styles.limitations}>
          <p className={styles.panelLabel}>Limitations</p>
          <p className={styles.limitationText}>
            Lab STC; field performance typically 5-8 pts lower. Verify
            insulation substitution against the specific UL listing before
            specifying.
          </p>
        </div>
      </div>

      <p className={styles.annotation}>{annotation}</p>
    </section>
  );
}
