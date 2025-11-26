import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cedar Privacy Fence Installation in Sumner, WA | Cascade Fencing",
  description: "Expert cedar privacy fence installation in Sumner, Bonney Lake, and Pierce County. 6ft cedar fences for complete privacy and security. Free estimates. Call (253) 228-9101.",
  keywords: "cedar privacy fence installation, 6 foot cedar fence, privacy fence installation near me, cedar fence builder near me, privacy fence Sumner WA",
};

export default function CedarPrivacyFenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
