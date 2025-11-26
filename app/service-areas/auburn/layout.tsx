import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fence Installation in Auburn, WA | Cascade Fencing | (253) 228-9101",
  description: "Expert fence installation and repair in Auburn, WA. Cedar privacy fences, custom designs. Local, trusted service. Free estimates. Call (253) 228-9101.",
  keywords: "fence installation Auburn WA, fence installer Auburn WA, wood fence installation Auburn WA, wood fence repair Auburn WA",
};

export default function AuburnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
