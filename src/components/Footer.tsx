"use client";

import TermsModal from "./TermsModal";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative py-12 border-t" style={{ borderColor: "var(--theme-border)" }}>
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <Image
          src="/images/logo.png"
          alt="גרייט שייפ"
          width={100}
          height={100}
          className="mx-auto opacity-50"
        />
        <p className="text-sm leading-relaxed" style={{ color: "var(--theme-text-muted)" }}>
          הרשמה מראש בלבד | מעל גיל 18 | כפוף לתקנון | על בסיס מקום פנוי
        </p>
        <TermsModal />
        <p className="text-xs" style={{ color: "var(--theme-text-muted)", opacity: 0.6 }}>
          קאנטרי גרייט שייפ, נשר
        </p>
        <p className="text-xs" style={{ color: "var(--theme-text-muted)", opacity: 0.4 }}>
          © {new Date().getFullYear()} Great Shape Country Club. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  );
}
