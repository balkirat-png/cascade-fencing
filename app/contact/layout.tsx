import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Cascade Fencing | Free Estimates Sumner, WA | (253) 228-9101",
  description: "Contact Cascade Fencing for free fence estimates. 24-hour response guarantee. Expert wood fence installation and repair in Sumner and Pierce County. Call (253) 228-9101",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
