import { Languages } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Added flag emojis for clarity
const languages = [
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳" },
  { code: "en", name: "English", nativeName: "English", flag: "🇬🇧" },
  { code: "mr", name: "Marathi", nativeName: "मराठी", flag: "🇮🇳" },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી", flag: "🇮🇳" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்", flag: "🇮🇳" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు", flag: "🇮🇳" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা", flag: "🇧🇩" },
  { code: "ml", name: "Malayalam", nativeName: "മലയാളം", flag: "🇮🇳" },
  { code: "or", name: "Odia", nativeName: "ଓଡ଼ିଆ", flag: "🇮🇳" },
];

interface LanguageSelectorProps {
  value?: string;
  onValueChange?: (value: string) => void;
}

const LanguageSelector = ({ value = "en", onValueChange }: LanguageSelectorProps) => {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger
        className="
          w-[220px] rounded-2xl border-2 border-transparent
          bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20
          hover:from-blue-500/30 hover:to-purple-500/30 
          focus:ring-2 focus:ring-blue-500/40 transition-all duration-300
          backdrop-blur-md text-foreground font-medium shadow-md
          hover:shadow-blue-500/20
        "
      >
        <div className="flex items-center gap-2">
          <Languages className="h-4 w-4 text-primary animate-pulse" />
          <SelectValue placeholder="Select language" />
        </div>
      </SelectTrigger>

      <SelectContent
        className="
          backdrop-blur-lg bg-white/10 dark:bg-slate-900/60 
          border border-blue-500/30 rounded-xl shadow-lg animate-fade-in
        "
      >
        {languages.map((lang) => (
          <SelectItem
            key={lang.code}
            value={lang.code}
            className="
              hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-purple-500/30
              cursor-pointer transition-all duration-300 rounded-md px-2 py-2
              focus:bg-gradient-to-r focus:from-blue-500/40 focus:to-purple-500/40
            "
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">{lang.flag}</span>
              <div>
                <p className="font-semibold text-foreground">{lang.name}</p>
                <p className="text-xs text-muted-foreground">{lang.nativeName}</p>
              </div>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;
