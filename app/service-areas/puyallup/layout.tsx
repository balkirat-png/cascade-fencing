import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fence Installation Puyallup WA | Wood Fence Contractor | Cascade Fencing",
  description: "Professional fence installation in Puyallup, WA. Expert wood fence contractor with 20+ years experience. Cedar fences, repairs, custom designs. Free estimates. Call (253) 228-9101",
  keywords: "fence installation Puyallup, wood fence installation Puyallup, fence repair Puyallup, wood fence contractor Puyallup",
};

export default function PuyallupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
