import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Picture Frame Fence Installation in Sumner, WA | Cascade Fencing",
  description: "Premium picture frame cedar fence installation with elegant decorative trim. Upscale privacy fencing in Pierce County. Free estimates. Call (253) 228-9101.",
  keywords: "picture frame fence installation, decorative privacy fence, picture frame cedar fence, elegant fence installation, custom fence Sumner WA",
};

export default function PictureFrameFenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
