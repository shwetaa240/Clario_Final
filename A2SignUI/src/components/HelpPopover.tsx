import {
  HelpCircle,
  Mic,
  MessageSquare,
  User,
  Combine,
  Languages,
  WifiOff,
  Sparkles,
  Zap,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const HelpPopover = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full 
          shadow-[0_0_15px_rgba(59,130,246,0.4)] 
          bg-gradient-to-r from-blue-500 to-purple-600 
          text-white hover:scale-110 hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] 
          transition-all duration-300 ease-in-out z-50"
          aria-label="Help and guidance"
        >
          <HelpCircle className="h-6 w-6 animate-pulse" />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className="w-80 md:w-96 rounded-2xl p-0 border-0 shadow-2xl 
        backdrop-blur-xl bg-white/10 dark:bg-slate-900/30"
        align="end"
      >
        <div className="relative">
          {/* Gradient bar at top */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 rounded-t-2xl" />

          <ScrollArea className="h-[500px] p-6 space-y-6 text-foreground animate-fade-in">
            {/* Header */}
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-accent animate-bounce-subtle" />
              <div>
                <h3 className="font-bold text-lg">Getting Started with Clario</h3>
                <p className="text-sm text-muted-foreground">
                  Your quick guide to accessibility features ✨
                </p>
              </div>
            </div>

            <Separator className="bg-gradient-to-r from-blue-500 to-purple-500 h-[2px]" />

            {/* Speech to Text */}
            <div className="glass p-3 rounded-lg hover:scale-[1.02] transition-transform">
              <div className="flex items-center gap-2">
                <Mic className="h-5 w-5 text-blue-500 animate-bounce-subtle" />
                <h4 className="font-semibold">Speech to Text</h4>
              </div>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                Click <strong>“Start Listening”</strong> to capture live audio. Speak clearly, and
                captions appear instantly. You can also upload pre-recorded audio or video.
              </p>
            </div>

            {/* Text to Avatar */}
            <div className="glass p-3 rounded-lg hover:scale-[1.02] transition-transform">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-accent animate-bounce-subtle" />
                <h4 className="font-semibold">Text to Avatar</h4>
              </div>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                Type or paste any text to see it come alive in Indian Sign Language (ISL) through a
                3D animated avatar — perfect for learning and communication.
              </p>
            </div>

            {/* Display Modes */}
            <div className="glass p-3 rounded-lg hover:scale-[1.02] transition-transform">
              <div className="flex items-center gap-2">
                <Combine className="h-5 w-5 text-blue-500" />
                <h4 className="font-semibold">Display Modes</h4>
              </div>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2 items-center">
                  <MessageSquare className="h-4 w-4 text-primary" />
                  <span>Text Only – View captions without avatar</span>
                </li>
                <li className="flex gap-2 items-center">
                  <User className="h-4 w-4 text-accent" />
                  <span>Avatar Only – Watch ISL animation only</span>
                </li>
                <li className="flex gap-2 items-center">
                  <Combine className="h-4 w-4 text-success" />
                  <span>Both – Captions and avatar together</span>
                </li>
              </ul>
            </div>

            {/* Languages */}
            <div className="glass p-3 rounded-lg hover:scale-[1.02] transition-transform">
              <div className="flex items-center gap-2">
                <Languages className="h-5 w-5 text-blue-400" />
                <h4 className="font-semibold">Multilingual Support</h4>
              </div>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                Supports Hindi, English, Marathi, Gujarati, Tamil, Telugu, Bengali, Malayalam, and
                Odia — with automatic detection coming soon.
              </p>
            </div>

            {/* Offline Mode */}
            <div className="glass p-3 rounded-lg hover:scale-[1.02] transition-transform">
              <div className="flex items-center gap-2">
                <WifiOff className="h-5 w-5 text-destructive animate-pulse" />
                <h4 className="font-semibold">Offline Mode</h4>
              </div>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                If the internet disconnects, Clario switches to local AI inference automatically. 
                You’ll see an offline indicator until it reconnects.
              </p>
            </div>

            {/* Pro Tips */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-3 border border-blue-400/20">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-5 w-5 text-yellow-400" />
                <h4 className="font-semibold">Pro Tips 💡</h4>
              </div>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Adjust caption speed in Settings for better readability</li>
                <li>• Use <kbd>Tab</kbd> and <kbd>Enter</kbd> for keyboard navigation</li>
                <li>• Enable simplified mode for easier comprehension</li>
                <li>• Customize avatar style and signing speed in preferences</li>
              </ul>
            </div>
          </ScrollArea>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default HelpPopover;
