import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solid Board Fence Installation in Sumner, WA | Cascade Fencing",
  description: "Professional solid board cedar fence installation with no gaps for maximum privacy. Expert installation in Pierce County. Free estimates. Call (253) 228-9101.",
  keywords: "solid board fence installation, solid cedar fence, no-gap privacy fence, wood fence installation Sumner WA, cedar board fence",
};

export default function SolidBoardFenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
