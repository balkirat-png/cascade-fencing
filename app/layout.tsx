import type { Metadata } from "next";
import { Young_Serif, Poppins } from "next/font/google";
import "./globals.css";

const youngSerif = Young_Serif({
  variable: "--font-young-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Wood Fence Installation & Repair Sumner, WA | Cascade Fencing",
  description:
    "Professional wood fence installation and repair in Sumner, WA. 20+ years experience with cedar fences. Free estimates. Serving Pierce County and surrounding areas.",
  keywords:
    "wood fence installation Sumner, fence contractor Sumner WA, cedar fence installation, fence repair near me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://universe-static.elfsightcdn.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://static.elfsight.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://phosphor.utils.elfsightcdn.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://universe-static.elfsightcdn.com" />
        <link rel="dns-prefetch" href="https://static.elfsight.com" />
        <link rel="dns-prefetch" href="https://phosphor.utils.elfsightcdn.com" />
      </head>
      <body className={`${youngSerif.variable} ${poppins.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
