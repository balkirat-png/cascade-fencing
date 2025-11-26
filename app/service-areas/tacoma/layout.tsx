import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fence Installer Tacoma WA | Wood Fence Contractor Tacoma | Cascade Fencing",
  description: "Professional fence installer Tacoma WA with 20+ years experience. Expert wood fence contractor Tacoma WA, wood fence installation. Free estimates. Call (253) 228-9101",
  keywords: "fence installer Tacoma WA, wood fence contractor Tacoma WA, wood fence installation Tacoma",
};

export default function TacomaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
