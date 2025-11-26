import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wood Fence Installation Bellevue | Fence Contractor Bellevue WA | Cascade Fencing",
  description: "Expert wood fence installation Bellevue with 20+ years experience. Professional fence contractor Bellevue WA, privacy fence installation. Free estimates. Call (253) 228-9101",
  keywords: "wood fence installation Bellevue, fence contractor Bellevue WA, privacy fence installation Bellevue",
};

export default function BellevueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
