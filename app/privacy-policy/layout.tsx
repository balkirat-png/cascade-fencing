import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Cascade Fencing & Repair",
  description: "Privacy policy for Cascade Fencing & Repair. Learn how we protect and use your information when you contact us for fence installation services.",
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
