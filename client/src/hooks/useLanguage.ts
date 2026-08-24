import { useEffect, useState } from "react";
import i18n from "@/i18n";

export const useLanguage = () => {
  const [language, setLanguage] = useState<"ar" | "en">(
    (i18n.language as "ar" | "en") || "ar"
  );
  const [isRTL, setIsRTL] = useState(language === "ar");

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setLanguage(lng as "ar" | "en");
      setIsRTL(lng === "ar");
      document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = lng;
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  const changeLanguage = (lng: "ar" | "en") => {
    i18n.changeLanguage(lng);
  };

  return { language, isRTL, changeLanguage };
};
