import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Connect 101 - Employee Matching Platform",
  description: "Smart employee matching system connecting junior and senior employees at ATB Financial for mentorship and coffee chats",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
