import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SalaryReveal – Uncover Hidden LinkedIn Salary Ranges",
  description: "ML-powered Chrome extension that predicts salary ranges for LinkedIn job posts missing compensation data."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f7d6e981-7189-4021-8010-a1ac6da949ac"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
