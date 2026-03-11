import type { Metadata } from "next";
import { Heebo, Assistant } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
});

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  variable: "--font-assistant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "קאנטרי גרייט שייפ נשר | הצטרפות במחיר מיוחד",
  description:
    "הצטרפו לקאנטרי גרייט שייפ נשר — חדר כושר, בריכה מקורה, סאונה, ג׳קוזי ועוד. מבצע מיוחד לזמן מוגבל.",
  openGraph: {
    title: "קאנטרי גרייט שייפ נשר | הצטרפות במחיר מיוחד",
    description:
      "הצטרפו לקאנטרי גרייט שייפ נשר — חדר כושר, בריכה מקורה, סאונה, ג׳קוזי ועוד.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${assistant.variable}`}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
