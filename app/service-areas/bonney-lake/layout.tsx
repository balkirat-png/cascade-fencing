import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wood Fence Installation Bonney Lake WA | Cedar Fence Contractor | Cascade Fencing",
  description: "Professional wood fence installation in Bonney Lake, WA. Expert fence contractor with 20+ years experience. Cedar privacy fences, repairs, custom designs. Free estimates. Call (253) 228-9101",
  keywords: "wood fence installation Bonney Lake, fence contractor Bonney Lake, fence installation Bonney Lake, wood fence repair Bonney Lake",
};

export default function BonneyLakeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
