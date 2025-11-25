import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Cascade Fencing & Repair | Local Fence Contractor Sumner, WA",
  description: "Learn about Cascade Fencing & Repair. 20+ years of expert wood fence installation and repair. Owner-led service, local business, 60+ five-star reviews.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
