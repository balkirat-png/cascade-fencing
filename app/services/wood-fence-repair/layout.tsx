import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wood Fence Repair Sumner, WA | Fast, Professional Service | Cascade Fencing",
  description: "Professional wood fence repair in Sumner and Pierce County. Post replacement, rail repairs, leaning fence correction. 20+ years experience. Call (253) 228-9101",
};

export default function WoodFenceRepairLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
