import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "Mantle — Evidence-based assembly intelligence for architects",
  description:
    "Mantle cross-references UL, GA-600, IBC, and NRC data to answer assembly questions in seconds — with full citations. Free for architects.",
  openGraph: {
    title: "Mantle — Assembly research, cited to source",
    description:
      "4-5 sources per decision. One query. Every answer cites the source document.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Source+Serif+4&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <nav className={`content-width ${styles.nav}`}>
          <Link href="/" className={styles.nav__wordmark}>
            mantle
          </Link>
          <Link href="/methodology" className={styles.nav__link}>
            Methodology
          </Link>
        </nav>

        <main className="content-width">{children}</main>

        <footer className={`content-width ${styles.footer}`}>
          <div className={styles.footer__divider}></div>
          <Link href="/" className={styles.footer__wordmark}>
            mantle
          </Link>
          <p className={styles.footer__tagline}>
            Evidence-based assembly intelligence for architects.
          </p>
          <div className={styles.footer__links}>
            <Link href="/methodology">Methodology</Link>
            <Link href="/for/architects">For Architects</Link>
            <Link href="/for/specifiers">For Specifiers</Link>
            <Link href="/for/building-science">For Building Science</Link>
            <Link href="/assemblies/ul-u419">UL U419</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <p className={styles.footer__copyright}>&copy; 2026 Mantle</p>
          <p className={styles.footer__systemMessage}>
            Verify before you specify.
          </p>
        </footer>
      </body>
    </html>
  );
}
