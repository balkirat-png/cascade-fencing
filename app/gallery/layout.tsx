import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wood Fence Gallery | Cedar Fence Photos | Cascade Fencing Sumner, WA",
  description: "View our portfolio of completed wood fence projects. Cedar privacy fences, horizontal designs, custom gates, and more. Serving Sumner and Pierce County.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
