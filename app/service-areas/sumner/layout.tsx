import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wood Fence Installation Sumner WA | Cedar Fence Contractor | Cascade Fencing",
  description: "Professional wood fence installation in Sumner, WA. Local fence contractor with 20+ years experience. Cedar privacy fences, repairs, custom designs. Free estimates. Call (253) 228-9101",
  keywords: "wood fence installation Sumner WA, fence contractor Sumner, cedar fence Sumner, fence repair Sumner WA, privacy fence installation Sumner",
};

export default function SumnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
