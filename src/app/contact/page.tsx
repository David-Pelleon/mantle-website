import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — Mantle",
  description: "Get in touch with the Mantle team.",
  openGraph: {
    title: "Contact Mantle",
    description: "Questions about Mantle? Get in touch.",
  },
};

export default function Contact() {
  return <ContactForm />;
}
