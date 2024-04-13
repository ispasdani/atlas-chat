import { create } from "zustand";
import { Subscription } from "@/types/Subscription";

export type LanguagesSupported =
  | "en"
  | "es"
  | "de"
  | "fr"
  | "ro"
  | "sq"
  | "bs"
  | "bg"
  | "zh-CN"
  | "cs"
  | "hr"
  | "da"
  | "fi"
  | "el"
  | "hu"
  | "ko"
  | "no"
  | "pl";

export const LanguagesSupportedMap: Record<LanguagesSupported, string> = {
  en: "English",
  es: "Spanish",
  de: "German",
  fr: "French",
  ro: "Romanian",
  sq: "Albanian",
  bs: "Bosnian",
  bg: "Bulgarian",
  "zh-CN": "Chinese (Simplified)",
  cs: "Czech",
  hr: "Croatian",
  da: "Danish",
  fi: "Finnish",
  el: "Greek",
  hu: "Hungarian",
  ko: "Korean",
  no: "Norwegian",
  pl: "Polish",
};

interface LanguageState {
  language: LanguagesSupported;
  setLanguage: (language: LanguagesSupported) => void;
  getLanguages: (isPro: boolean) => LanguagesSupported[];
  getNotSupportedLanguages: (isPro: boolean) => LanguagesSupported[];
}

export const useLanguageStore = create<LanguageState>()((set, get) => ({
  language: "en",
  setLanguage: (language: LanguagesSupported) => set({ language }),
  getLanguages: (isPro: boolean) => {
    //If The user is pro, return all supported languages
    if (isPro)
      return Object.keys(LanguagesSupportedMap) as LanguagesSupported[];

    //If not pro, return only the first language
    return Object.keys(LanguagesSupportedMap).slice(
      0,
      1
    ) as LanguagesSupported[];
  },
  getNotSupportedLanguages: (isPro: boolean) => {
    if (isPro) return []; // No unsupported languages for "PRO" users
    return Object.keys(LanguagesSupportedMap).slice(1) as LanguagesSupported[];
  },
}));

interface SubscriptionState {
  subscription: Subscription | null | undefined;
  setSubscription: (subscription: Subscription | null) => void;
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  subscription: undefined,
  setSubscription: (subscription: Subscription | null) => set({ subscription }),
}));
