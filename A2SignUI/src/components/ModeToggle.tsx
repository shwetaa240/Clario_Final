import { Button } from "@/components/ui/button";
import { MessageSquare, User, Combine } from "lucide-react";
import { cn } from "@/lib/utils";

export type DisplayMode = "text" | "avatar" | "both";

interface ModeToggleProps {
  mode: DisplayMode;
  onModeChange: (mode: DisplayMode) => void;
}

const ModeToggle = ({ mode, onModeChange }: ModeToggleProps) => {
  return (
    <div
      className="
        flex items-center gap-2 
        bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 
        border border-blue-500/20 
        backdrop-blur-md 
        rounded-2xl p-2 
        shadow-md hover:shadow-blue-500/20 
        transition-all duration-300 ease-in-out
      "
    >
      {/* Text Mode */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onModeChange("text")}
        className={cn(
          "gap-2 rounded-xl transition-all duration-300",
          mode === "text"
            ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30 scale-105"
            : "hover:bg-blue-500/10 hover:text-blue-500"
        )}
        aria-label="Text only mode"
      >
        <MessageSquare
          className={cn(
            "h-4 w-4 transition-transform",
            mode === "text" ? "scale-110 animate-bounce-subtle" : ""
          )}
        />
        <span className="hidden sm:inline font-medium">Text</span>
      </Button>

      {/* Avatar Mode */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onModeChange("avatar")}
        className={cn(
          "gap-2 rounded-xl transition-all duration-300",
          mode === "avatar"
            ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30 scale-105"
            : "hover:bg-purple-500/10 hover:text-purple-500"
        )}
        aria-label="Avatar only mode"
      >
        <User
          className={cn(
            "h-4 w-4 transition-transform",
            mode === "avatar" ? "scale-110 animate-bounce-subtle" : ""
          )}
        />
        <span className="hidden sm:inline font-medium">Avatar</span>
      </Button>

      {/* Both Mode */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onModeChange("both")}
        className={cn(
          "gap-2 rounded-xl transition-all duration-300",
          mode === "both"
            ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30 scale-105"
            : "hover:bg-cyan-500/10 hover:text-cyan-500"
        )}
        aria-label="Both text and avatar mode"
      >
        <Combine
          className={cn(
            "h-4 w-4 transition-transform",
            mode === "both" ? "scale-110 animate-bounce-subtle" : ""
          )}
        />
        <span className="hidden sm:inline font-medium">Both</span>
      </Button>
    </div>
  );
};

export default ModeToggle;
