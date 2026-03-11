"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function TermsModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="underline underline-offset-4 transition-colors cursor-pointer text-sm"
        style={{ color: "var(--theme-text-muted)" }}
      >
        תקנון המבצע
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-6"
            dir="rtl"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto z-10"
              style={{ backgroundColor: "var(--theme-bg-card)", border: "1px solid var(--theme-border)" }}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-500 hover:text-white transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <h2 className="font-[family-name:var(--font-heebo)] font-black text-2xl text-white mb-6">
                תקנון מבצע הצטרפות מיוחדת
              </h2>
              <h3 className="font-[family-name:var(--font-heebo)] font-bold text-lg text-gray-300 mb-6">
                קאנטרי גרייט שייפ נשר
              </h3>

              <div className="space-y-6 text-sm leading-relaxed" style={{ color: "var(--theme-text-muted)" }}>
                <div>
                  <h4 className="text-white font-bold mb-2">1. מהות המבצע</h4>
                  <p>המבצע מוגבל ל-50 הנרשמים הראשונים בלבד דרך דף זה.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">2. דמי רישום</h4>
                  <p>התשלום בסך 150 ש&quot;ח הינו תשלום חד-פעמי בגין דמי רישום, המשמש גם לשריון ההטבה.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">3. תנאי המנוי</h4>
                  <p>המבצע מקנה חודש ראשון ב-1 ש&quot;ח בלבד. לאחר מכן, הלקוח יחויב בעלות חודשית קבועה של 249 ש&quot;ח.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">4. אופן התשלום</h4>
                  <p>התשלום החודשי יבוצע באמצעות הוראת קבע בכרטיס האשראי, ללא תפיסת מסגרת אשראי.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">5. השלמת רישום</h4>
                  <p>לאחר תשלום דמי הרישום, נציג מטעם הנהלת הקאנטרי ייצור קשר טלפוני להשלמת הליך הרישום והקמת הוראת הקבע.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">6. מדיניות ביטולים והחזרים (אפס סיכון)</h4>
                  <p>הלקוח רשאי לבטל את עסקת דמי הרישום (150 ש&quot;ח) בתוך 14 ימים מיום ביצוע התשלום, ולקבל החזר כספי מלא.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">7. ביטול מנוי שוטף</h4>
                  <p>המנוי הינו ללא התחייבות. הלקוח רשאי לבטל את המנוי בכל עת, בהודעה מוקדמת של 30 יום מראש.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">8. תנאים כלליים</h4>
                  <p>ההרשמה והכניסה לקאנטרי מותרת למעל גיל 18 בלבד. ט.ל.ח. החברה רשאית להפסיק או לשנות את תנאי המבצע בכל עת.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
