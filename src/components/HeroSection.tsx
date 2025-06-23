
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-forest-900/80 via-forest-800/70 to-forest-700/60"
        style={{
          backgroundImage: `url('https://cdn.pixabay.com/photo/2022/06/20/07/32/dirt-road-7273240_1280.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-forest-400/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sunset-400/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Harana VR</span>
            <span className="block text-3xl md:text-4xl font-normal text-forest-100 mt-2">
              Explore Harana Forest in Oromia through AI & VR
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-forest-50 mb-12 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in the breathtaking beauty of Ethiopia's Harana
            Forest through cutting-edge virtual reality technology powered by
            artificial intelligence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-forest-500 hover:bg-forest-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Enter VR Experience
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            {/* <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-forest-800 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              Enter VR Experience
            </Button> */}
          </div>

          {/* Stats or Features Preview */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-forest-100">
            <div className="text-center">
              <div className="text-2xl font-bold">360°</div>
              <div className="text-sm">Virtual Tours</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">AI</div>
              <div className="text-sm">Powered Guide</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">4K</div>
              <div className="text-sm">Resolution</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full margin-top-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
