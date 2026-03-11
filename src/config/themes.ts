import type { ThemePath } from "@/components/ThemeProvider";

/* ========================================
   MASTER TESTIMONIALS ARRAY
   (Indexed by all paths)
   ======================================== */

export const masterTestimonials = [
  {
    name: "אייל שריג",
    initial: "א",
    text: "מרכז ספורט עם מחיר הוגן למגוון פעילויות ספורטיביות. נקי, מתחדש וכיף.",
    stars: 5,
    reviews: "230 ביקורות",
  },
  {
    name: "David Fox",
    initial: "D",
    text: "בריכה חיצונית גדולה, בריכה מקורה עם הרבה מסלולי שחייה, שתי מגלשות מים לילדים, בריכת פעוטות.",
    stars: 5,
    reviews: "199 ביקורות",
  },
  {
    name: "מאיר בוזגלו",
    initial: "מ",
    text: "קאנטרי ברמה הכי גבוהה. עשיתי מנוי שנתי אחרי שבדקתי כמה מקומות, גם המחיר טוב.",
    stars: 5,
    reviews: "184 ביקורות",
  },
  {
    name: "Moti Saddia",
    initial: "M",
    text: "קאנטרי מפנק עם כל האמצעים לספורט, כושר ואורח חיים בריא — חוגים, ספא וג׳קוזי.",
    stars: 5,
    reviews: "9 ביקורות",
  },
  {
    name: "Benci Katz",
    initial: "B",
    text: "בא בשמחה למרכז הספורט הזה. מרגיש כמו בית.",
    stars: 5,
    reviews: "43 ביקורות",
  },
];

/* ========================================
   MASTER FACILITIES ARRAY
   ======================================== */

export const masterFacilities = [
  {
    id: "gym",
    src: "/images/gym1.jpg",
    alt: "חדר כושר גרייט שייפ",
    label: "חדר כושר",
    emotion: "הכוח לחזור לעצמכם. בלי לחץ, בקצב שלכם. מתחם כושר שמותאם להחזיר לכם את האנרגיה והחיוניות.",
  },
  {
    id: "pool-indoor",
    src: "/images/pool-indoor.jpg",
    alt: "בריכה מקורה מחוממת",
    label: "בריכה מקורה",
    emotion: "השקט של הבוקר. 45 דקות של שחייה בבריכה מחוממת שמנקות את הראש מכל הלחצים.",
  },
  {
    id: "sauna",
    src: "/images/sauna.jpg",
    alt: "סאונה וספא",
    label: "סאונה & ספא",
    emotion: "הניתוק המוחלט. לשים את הטלפון בצד, לקחת נשימה עמוקה, ולשחרר את השרירים ואת שגרת היומיום.",
  },
  {
    id: "pool-outdoor",
    src: "/images/pool-outdoor.jpg",
    alt: "בריכה חיצונית",
    label: "בריכה חיצונית",
    emotion: "",
  },
  {
    id: "studio",
    src: "/images/studio.jpg",
    alt: "סטודיו חוגים",
    label: "סטודיו & חוגים",
    emotion: "האדרנלין של ביחד. אימוני סטודיו שיזכירו לכם כמה כיף זה לדחוף את הגוף קדימה.",
  },
];

/* ========================================
   THEME CONTENT INTERFACE
   ======================================== */

export interface ThemeContent {
  hero: {
    badge: string;
    badgeGlow: boolean;
    headline: string;
    highlightedText: string;
    subHeadline: string;
    bodyCopy: string;
    ctaText: string;
    backgroundImage: string;
    infoBadges: string[];
  };
  voss: {
    headerAccent: string;
    headerTitle: string;
    questions: Array<{
      iconName: "Wallet" | "Flame" | "Crown" | "Clock" | "Heart" | "Dumbbell" | "Waves" | "Target" | "Zap";
      question: string;
    }>;
  };
  guilt: {
    headerAccent: string;
    paragraphs: string[];
    highlightedMessages: string[];
  };
  facilities: {
    order: string[]; // facility IDs in display order
    prominentId: string; // which one gets the large card
  };
  testimonials: {
    indices: number[];
  };
  costOfInaction: {
    question: string;
  };
  cta: {
    sectionHeadline: string;
    sectionSubheadline: string;
    buttonText: string;
  };
  stickyBar: {
    leftText: string;
    ctaText: string;
  };
  showSections: {
    video: boolean;
    pricingTable: boolean;
    savingsCalculator: boolean;
    comparisonTable: boolean;
  };
  countdown: {
    label: string;
    targetDate: string;
  };
}

/* ========================================
   THEME CONTENT PER PATH
   ======================================== */

export const themeContent: Record<ThemePath, ThemeContent> = {
  /* ----------------------------------------
     🔄 ROUTINE — "חוזר לשגרה"
     Returning customer, warm, familiar, home
     ---------------------------------------- */
  routine: {
    hero: {
      badge: "חודש מרץ ב-1 ש״ח בלבד!",
      badgeGlow: true,
      headline: "נראה שחיכית לתירוץ",
      highlightedText: "מספיק טוב כדי לחזור הביתה",
      subHeadline: "השגרה החדשה שלכם מתחילה כאן.",
      bodyCopy:
        "הקצינו בדיוק 50 חבילות VIP ללקוחות עבר של קאנטרי גרייט שייפ נשר שמוכנים להתחיל מחדש ולחזור לשגרה שלהם. במקום לחכות ליום הפתוח — שריינו עכשיו את עסקת ה-VIP שלכם אונליין. תעריף קבוע ומוזל במיוחד, ללא התחייבות, ואפס סיכון.",
      ctaText: "שריון עסקת ה-VIP ב-150 ש״ח",
      backgroundImage: "/images/gym1.jpg",
      infoBadges: ["50 מקומות בלבד", "ללא התחייבות", "מחיר מובטח ל-5 שנים"],
    },
    voss: {
      headerAccent: "שאלה אחת קטנה",
      headerTitle: "תהיו כנים עם עצמכם",
      questions: [
        {
          iconName: "Wallet",
          question:
            "האם זה רעיון רע לחסוך כמעט 2,500 שקלים בשנה על הבריאות שלכם?",
        },
        {
          iconName: "Flame",
          question:
            "האם ויתרתם לחלוטין על התחושה של לסיים אימון טוב עם אנרגיות שיא?",
        },
        {
          iconName: "Crown",
          question:
            "האם תהיו נגד לקבל מנוי לקאנטרי שאתם כבר מכירים, בתעריף פרימיום ששמור רק ל-50 הראשונים?",
        },
      ],
    },
    guilt: {
      headerAccent: "רגע של כנות",
      paragraphs: [
        "זה בסדר ששמתם את עצמכם על ״השתק״ לתקופה.",
        "החיים עמוסים. העבודה, המשפחה, החדשות... קל מאוד לשים את עצמנו בסוף התור.",
        "אבל ההזדמנות הזו, עם 50 חבילות ה-VIP, נוצרה בדיוק כדי לתת לכם את הדחיפה הקטנה הזו חזרה למסלול.",
      ],
      highlightedMessages: [
        "זה לא חייב להיות מושלם, זה רק צריך להתחיל.",
        "ואנחנו כאן כדי לעשות את הצעד הראשון קל ככל האפשר.",
      ],
    },
    facilities: {
      order: ["gym", "pool-indoor", "sauna", "pool-outdoor", "studio"],
      prominentId: "gym",
    },
    testimonials: {
      indices: [0, 2], // אייל שריג, מאיר בוזגלו
    },
    costOfInaction: {
      question: "עוד כמה חודשים של ״מחר אתחיל״?",
    },
    cta: {
      sectionHeadline:
        "השגרה החדשה שלכם מתחילה בהחלטה אחת קטנה (ובטוחה)",
      sectionSubheadline: "אני מוכן/ה להתחיל מחדש — שריינו לי את ההטבה",
      buttonText: "שריינו לי את ההטבה",
    },
    stickyBar: {
      leftText: "חודש מרץ ב-1 ש״ח + מנוי VIP",
      ctaText: "שריון עסקת ה-VIP ב-150 ש״ח",
    },
    showSections: {
      video: true,
      pricingTable: true,
      savingsCalculator: true,
      comparisonTable: true,
    },
    countdown: {
      label: "ההטבה נסגרת בעוד",
      targetDate: "2026-04-01T00:00:00+03:00",
    },
  },

  /* ----------------------------------------
     🧖 RELAX — "בא לנשום ולנתק"
     Stressed person seeking escape, calm
     ---------------------------------------- */
  relax: {
    hero: {
      badge: "45 דקות שהן רק שלך",
      badgeGlow: false,
      headline: "מתי לאחרונה עשית",
      highlightedText: "משהו רק בשביל עצמך?",
      subHeadline: "הגוף שלך מבקש הפסקה. תן לו.",
      bodyCopy:
        "סאונה שמפשירה את המתח, בריכה מחוממת שמנקה את הראש, ג׳קוזי שמשחרר הכל. קאנטרי גרייט שייפ נשר זה לא חדר כושר — זה מקום לנשום. ובמחיר שלא מלחיץ.",
      ctaText: "שריין את הפינוק שלך",
      backgroundImage: "/images/sauna.jpg",
      infoBadges: ["סאונה + ג׳קוזי + בריכה", "ללא התחייבות", "249 ש״ח לחודש"],
    },
    voss: {
      headerAccent: "בואו נהיה כנים רגע",
      headerTitle: "מתי בפעם האחרונה...",
      questions: [
        {
          iconName: "Clock",
          question:
            "האם זה באמת בלתי אפשרי להקדיש 45 דקות בשבוע רק לעצמכם?",
        },
        {
          iconName: "Heart",
          question:
            "האם ויתרתם לגמרי על התחושה של לצאת רגועים, חמים, ועם ראש נקי?",
        },
        {
          iconName: "Waves",
          question:
            "האם תהיו נגד מקום שקט, חמים, בלי טלפונים — ב-5 דקות נסיעה מהבית?",
        },
      ],
    },
    guilt: {
      headerAccent: "רגע של אמת",
      paragraphs: [
        "הגוף שלך שולח לך סימנים כבר חודשים.",
        "הגב תפוס, השינה לא מספיקה, והראש לא מפסיק לרוץ. אתה יודע שאתה צריך לעצור — אבל תמיד יש משהו יותר דחוף.",
        "הרגע הזה? הוא לא דחוף. הוא חשוב. ואתה מגיע לו.",
      ],
      highlightedMessages: [
        "לא צריך להיות ספורטאי. צריך רק להגיע.",
        "45 דקות של שקט יכולות לשנות לך את השבוע.",
      ],
    },
    facilities: {
      order: ["sauna", "pool-indoor", "pool-outdoor", "studio", "gym"],
      prominentId: "sauna",
    },
    testimonials: {
      indices: [0, 3], // אייל שריג (נקי/מתחדש), Moti (ספא וג׳קוזי)
    },
    costOfInaction: {
      question: "עוד כמה בוקרים תקום עייף ומותש?",
    },
    cta: {
      sectionHeadline: "הזמן שלך מתחיל בהחלטה אחת קטנה",
      sectionSubheadline: "אני מוכן/ה לקחת הפסקה — שריינו לי את המקום",
      buttonText: "שריין את הפינוק שלך",
    },
    stickyBar: {
      leftText: "סאונה • ג׳קוזי • בריכה מחוממת",
      ctaText: "שריין את הפינוק שלך",
    },
    showSections: {
      video: false,
      pricingTable: false,
      savingsCalculator: false,
      comparisonTable: false,
    },
    countdown: {
      label: "ההטבה נסגרת בעוד",
      targetDate: "2026-04-01T00:00:00+03:00",
    },
  },

  /* ----------------------------------------
     💪 ATHLETE — "מתאמן רציני"
     Serious athlete, results-driven
     ---------------------------------------- */
  athlete: {
    hero: {
      badge: "מתחם אימון מלא",
      badgeGlow: false,
      headline: "אתה יודע שאתה צריך",
      highlightedText: "מקום שדוחף אותך קדימה",
      subHeadline: "ציוד אמיתי. בריכת שחייה. חוגים שמאתגרים.",
      bodyCopy:
        "חדר כושר מאובזר, בריכה עם מסלולי שחייה אמיתיים, סטודיו עם חוגים שדוחפים קדימה. קאנטרי גרייט שייפ נשר — הכל במקום אחד, במחיר שלא שובר את הכיס.",
      ctaText: "שריין את המקום שלך",
      backgroundImage: "/images/gym1.jpg",
      infoBadges: ["חדר כושר + בריכה + סטודיו", "249 ש״ח לחודש", "ללא התחייבות"],
    },
    voss: {
      headerAccent: "בואו נדבר תכל׳ס",
      headerTitle: "שאלות שרק אתה יודע את התשובה",
      questions: [
        {
          iconName: "Dumbbell",
          question:
            "האם באמת אפשר להתקדם בחדר כושר בלי ציוד מספיק ובלי בריכה?",
        },
        {
          iconName: "Target",
          question:
            "האם ויתרת על הרעיון של בריכת שחייה עם מסלולים אמיתיים, לא בריכת פעוטות?",
        },
        {
          iconName: "Zap",
          question:
            "האם תגיד לא למתחם אימון מלא — כושר, בריכה, סטודיו — ב-249 ש״ח?",
        },
      ],
    },
    guilt: {
      headerAccent: "בוא נהיה ישירים",
      paragraphs: [
        "אתה מתאמן. אבל אתה יודע שאתה יכול יותר.",
        "חדר כושר רגיל מגביל אותך. אין בריכה, אין חוגים, אין מגוון. אתה עושה את אותו דבר כל יום ומקווה לתוצאות שונות.",
        "המקום הזה נבנה בשביל אנשים כמוך — כאלה שלוקחים את האימון ברצינות.",
      ],
      highlightedMessages: [
        "הציוד קיים. המסלולים קיימים. חסר רק אתה.",
        "עוד כמה אימונים בינוניים לפני שתעשה את הצעד?",
      ],
    },
    facilities: {
      order: ["gym", "studio", "pool-indoor", "pool-outdoor", "sauna"],
      prominentId: "gym",
    },
    testimonials: {
      indices: [1, 4], // David Fox (מסלולי שחייה), Benci Katz (מרכז ספורט)
    },
    costOfInaction: {
      question: "עוד כמה אימונים בינוניים בחדר כושר שלא דוחף אותך?",
    },
    cta: {
      sectionHeadline: "התוצאות שלך מתחילות בהחלטה אחת",
      sectionSubheadline: "אני מוכן/ה להתאמן ברצינות — שריינו לי את המקום",
      buttonText: "שריין את המקום שלך",
    },
    stickyBar: {
      leftText: "כושר • בריכה • סטודיו • 249 ש״ח/חודש",
      ctaText: "שריין את המקום שלך",
    },
    showSections: {
      video: false,
      pricingTable: true,
      savingsCalculator: false,
      comparisonTable: true,
    },
    countdown: {
      label: "ההטבה נסגרת בעוד",
      targetDate: "2026-04-01T00:00:00+03:00",
    },
  },
};
