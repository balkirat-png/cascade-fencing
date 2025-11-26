import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wood Fence Installer Renton | Privacy Fence Installation Renton WA | Cascade Fencing",
  description: "Professional wood fence installer Renton with 20+ years experience. Privacy fence installation Renton, fence installation Renton WA. Free estimates. Call (253) 228-9101",
  keywords: "wood fence installer Renton, privacy fence installation Renton, fence installation Renton WA",
};

export default function RentonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
