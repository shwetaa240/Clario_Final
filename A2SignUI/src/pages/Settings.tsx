import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HelpPopover from "@/components/HelpPopover";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { User, MessageSquare, Languages, Palette, Save } from "lucide-react";

const Settings = () => {
  const { toast } = useToast();

  // Avatar Settings
  const [avatarGender, setAvatarGender] = useState("neutral");
  const [avatarStyle, setAvatarStyle] = useState("modern");
  const [signingSpeed, setSigningSpeed] = useState([1]);

  // Caption Settings
  const [captionSize, setCaptionSize] = useState([20]);
  const [captionColor, setCaptionColor] = useState("default");
  const [readingLevel, setReadingLevel] = useState("standard");
  const [autoSimplify, setAutoSimplify] = useState(false);

  // Language Settings
  const [defaultLanguage, setDefaultLanguage] = useState("en");
  const [autoDetect, setAutoDetect] = useState(true);


  const handleSave = () => {
    toast({
      title: "Settings Saved",
      description: "Your preferences have been updated successfully",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Settings</h1>
          <p className="text-muted-foreground">
            Customize your Clario experience for optimal accessibility
          </p>
        </div>

        <div className="space-y-6">
          {/* Avatar Settings */}
          <Card className="rounded-2xl border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Avatar Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="avatar-gender">Avatar Gender</Label>
                  <Select value={avatarGender} onValueChange={setAvatarGender}>
                    <SelectTrigger id="avatar-gender" className="rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="neutral">Neutral</SelectItem>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="avatar-style">Avatar Style</Label>
                  <Select value={avatarStyle} onValueChange={setAvatarStyle}>
                    <SelectTrigger id="avatar-style" className="rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="modern">Modern</SelectItem>
                      <SelectItem value="realistic">Realistic</SelectItem>
                      <SelectItem value="cartoon">Cartoon</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Signing Speed: {signingSpeed[0]}x</Label>
                <Slider
                  value={signingSpeed}
                  onValueChange={setSigningSpeed}
                  min={0.5}
                  max={2}
                  step={0.1}
                  className="mt-2"
                />
                <p className="text-xs text-muted-foreground">
                  Adjust how fast the avatar performs sign language gestures
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Caption Settings */}
          <Card className="rounded-2xl border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-accent" />
                Caption Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Caption Size: {captionSize[0]}px</Label>
                <Slider
                  value={captionSize}
                  onValueChange={setCaptionSize}
                  min={16}
                  max={32}
                  step={2}
                  className="mt-2"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="caption-color">Caption Color Theme</Label>
                  <Select value={captionColor} onValueChange={setCaptionColor}>
                    <SelectTrigger id="caption-color" className="rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Default</SelectItem>
                      <SelectItem value="high-contrast">High Contrast</SelectItem>
                      <SelectItem value="soft">Soft</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reading-level">Reading Level</Label>
                  <Select value={readingLevel} onValueChange={setReadingLevel}>
                    <SelectTrigger id="reading-level" className="rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="simple">Simple (Grade 5)</SelectItem>
                      <SelectItem value="standard">Standard (Grade 8)</SelectItem>
                      <SelectItem value="advanced">Advanced (Grade 12)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="auto-simplify">Auto-Simplify Text</Label>
                  <p className="text-xs text-muted-foreground">
                    Automatically simplify complex sentences
                  </p>
                </div>
                <Switch
                  id="auto-simplify"
                  checked={autoSimplify}
                  onCheckedChange={setAutoSimplify}
                />
              </div>
            </CardContent>
          </Card>

          {/* Language Settings */}
          <Card className="rounded-2xl border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Languages className="h-5 w-5 text-success" />
                Language Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="default-language">Default Language</Label>
                <Select value={defaultLanguage} onValueChange={setDefaultLanguage}>
                  <SelectTrigger id="default-language" className="rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hi">Hindi (हिन्दी)</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="mr">Marathi (मराठी)</SelectItem>
                    <SelectItem value="gu">Gujarati (ગુજરાતી)</SelectItem>
                    <SelectItem value="ta">Tamil (தமிழ்)</SelectItem>
                    <SelectItem value="te">Telugu (తెలుగు)</SelectItem>
                    <SelectItem value="bn">Bengali (বাংলা)</SelectItem>
                    <SelectItem value="ml">Malayalam (മലയാളം)</SelectItem>
                    <SelectItem value="or">Odia (ଓଡ଼ିଆ)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="auto-detect">Auto-Detect Language</Label>
                  <p className="text-xs text-muted-foreground">
                    Automatically identify the language being spoken
                  </p>
                </div>
                <Switch id="auto-detect" checked={autoDetect} onCheckedChange={setAutoDetect} />
              </div>
            </CardContent>
          </Card>


          {/* Save Button */}
          <div className="flex justify-end">
            <Button onClick={handleSave} variant="hero" size="lg" className="gap-2">
              <Save className="h-5 w-5" />
              Save All Settings
            </Button>
          </div>
        </div>
      </main>

      <Footer />
      <HelpPopover />
    </div>
  );
};

export default Settings;
