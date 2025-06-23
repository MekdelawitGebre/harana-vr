import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, MessageCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const FooterSection = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const scriptId =
        "AKfycbwZ3lUzOAtsBEC_xhaCEvkDIUrbnOh9iv7ILMxCDXMH3RCd0TcsFYTk7jD8dwiJkfyqcg";

      const baseUrl =
        import.meta.env.MODE === "development"
          ? "/api"
          : `https://script.google.com/macros/s/${scriptId}/exec`;

      const res = await fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        toast({
          title: "Feedback Sent",
          description: "Thank you for helping improve Harana VR!",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Submission Failed",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Submit error:", error);
      toast({
        title: "Network Error",
        description: "Could not send feedback. Try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-forest-900 via-forest-800 to-forest-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-sunset-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <MessageCircle className="mr-3 h-6 w-6 text-sunset-400" />
                  Share Your Feedback
                </CardTitle>
                <CardDescription className="text-forest-100">
                  Help us improve Harana VR with your thoughts and suggestions.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="bg-white/10 border-white/30 text-white placeholder:text-forest-200 focus:border-sunset-400"
                  />
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="bg-white/10 border-white/30 text-white placeholder:text-forest-200 focus:border-sunset-400"
                  />
                </div>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your feedback about Harana VR..."
                  rows={4}
                  className="bg-white/10 border-white/30 text-white placeholder:text-forest-200 focus:border-sunset-400"
                />
                <Button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full bg-sunset-500 hover:bg-sunset-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  {loading ? "Sending..." : "Send Feedback"}
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="border-t border-white/20 pt-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-forest-200 text-sm">
                © 2025 Harana VR. Built with passion for Oromia's natural
                heritage.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
