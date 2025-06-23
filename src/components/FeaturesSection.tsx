import { Eye, Brain, BookOpen, Shield } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Eye,
    title: "Immersive VR Journey",
    description:
      "Step into Harana Forest with stunning 360-degree visuals and spatial audio that make you feel like you're truly there.",
    color: "forest",
    bgGradient: "from-forest-100 to-forest-200",
  },
  {
    icon: Brain,
    title: "AI-Powered Interaction",
    description:
      "Our intelligent guide adapts to your interests, providing personalized insights about flora, fauna, and local culture.",
    color: "sunset",
    bgGradient: "from-forest-100 to-forest-200",
  },
  {
    icon: BookOpen,
    title: "Cultural Storytelling",
    description:
      "Discover the rich heritage of the Oromo people through interactive stories and traditional knowledge passed down through generations.",
    color: "earth",
    bgGradient: "from-forest-100 to-forest-200",
  },
  {
    icon: Shield,
    title: "Conservation Awareness",
    description:
      "Learn about environmental challenges and conservation efforts while developing a deeper connection with nature.",
    color: "forest",
    bgGradient: "from-forest-100 to-forest-200",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-forest-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-forest-800 mb-6">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the perfect fusion of cutting-edge technology and
              natural beauty through our innovative VR platform
            </p>
            <div className="w-24 h-1 bg-forest-500 mx-auto mt-8"></div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              const colorClasses = {
                forest: "text-forest-600 bg-forest-100",
                sunset: "text-sunset-600 bg-sunset-100",
                earth: "text-earth-600 bg-earth-100",
              };

              return (
                <Card
                  key={index}
                  className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-gradient-to-br ${feature.bgGradient} animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader className="pb-4">
                    <div
                      className={`w-16 h-16 rounded-2xl ${
                        colorClasses[feature.color as keyof typeof colorClasses]
                      } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-forest-800 group-hover:text-forest-700 transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-700 text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Feature Highlights */}
          <div className="mt-16 bg-white rounded-3xl p-8 shadow-xl animate-fade-in">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="text-4xl font-bold text-forest-600">4K</div>
                <div className="text-forest-800 font-semibold">
                  Ultra HD Resolution
                </div>
                <div className="text-gray-600 text-sm">
                  Crystal clear visuals for maximum immersion
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-4xl font-bold text-sunset-600">360°</div>
                <div className="text-forest-800 font-semibold">
                  Full Panoramic View
                </div>
                <div className="text-gray-600 text-sm">
                  Complete freedom to explore every angle
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-4xl font-bold text-earth-600">AI</div>
                <div className="text-forest-800 font-semibold">
                  Smart Guidance
                </div>
                <div className="text-gray-600 text-sm">
                  Personalized learning experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
