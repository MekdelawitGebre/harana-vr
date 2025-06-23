
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle, Calendar } from "lucide-react";

const DemoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-forest-900 to-forest-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-sunset-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experience the Magic
            </h2>
            <p className="text-xl text-forest-100 max-w-3xl mx-auto leading-relaxed">
              Get a glimpse of what awaits you in the virtual forests of Oromia
            </p>
            <div className="w-24 h-1 bg-sunset-400 mx-auto mt-8"></div>
          </div>

          {/* Demo Video/Preview Area */}
          <div className="grid gap-12 items-center">
            {/* Video Preview */}
            <div className="animate-scale-in">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-video bg-gradient-to-br from-forest-600 to-forest-800 flex items-center justify-center group cursor-pointer hover:scale-105 transition-transform duration-500">
                    <img
                      src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=800&h=450&fit=crop&crop=center"
                      alt="VR Demo Preview - Harana Forest"
                      className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                    />
                    <div className="relative z-10 text-center">
                      <PlayCircle className="h-20 w-20 text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                      <p className="text-white font-semibold text-lg">
                        Watch Teaser
                      </p>
                      <p className="text-forest-100 text-sm">2:30 mins</p>
                    </div>
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Stats Section */}
        
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
