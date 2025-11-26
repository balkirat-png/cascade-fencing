import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Fence Design & Installation in Sumner, WA | Cascade Fencing",
  description: "Custom cedar fence design and installation in Sumner, Bonney Lake, and Pierce County. Unique fence designs and custom gates. Free estimates. Call (253) 228-9101.",
  keywords: "custom fence design, custom cedar fence, unique fence installation, custom fence builder Sumner WA, custom wood fence designs",
};

export default function CustomFenceDesignsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
