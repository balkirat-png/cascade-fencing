import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hog Wire Fence Installation in Sumner, WA | Modern Rustic Fencing",
  description: "Professional hog wire fence installation in Sumner, Bonney Lake, and Pierce County. Wire panel fences with cedar frames. Maintains views. Free estimates. Call (253) 228-9101.",
  keywords: "hog wire fence installation, wire panel fence, modern rustic fence, hogwire fence Sumner WA, hog panel fence cedar",
};

export default function HogWireFenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
