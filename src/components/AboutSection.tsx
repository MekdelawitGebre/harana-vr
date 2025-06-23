import { Leaf, Globe, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-forest-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-forest-800 mb-6">
              Discover Oromia's Hidden Gem
            </h2>
            <div className="w-24 h-1 bg-forest-500 mx-auto mb-8"></div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-fade-in">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-forest-700">Harana VR</strong> revolutionizes how we experience Ethiopia's natural wonders. Through our innovative combination of artificial intelligence and virtual reality technology, we bring the pristine beauty of Harana Forest in Oromia directly to you —no matter where you are in the world.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Our immersive platform serves as a bridge between technology and nature, offering virtual explorers an authentic journey through one of Ethiopia's most stunning landscapes. Every virtual step reveals the rich biodiversity, cultural significance, and environmental importance of this remarkable ecosystem.
              </p>

              {/* Key Points */}
              <div className="space-y-6 pt-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-forest-100 p-3 rounded-full">
                    <Globe className="h-6 w-6 text-forest-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest-800 mb-2">Global Tourism</h3>
                    <p className="text-gray-600">Making Oromia's natural beauty accessible to international visitors and promoting sustainable tourism.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-sunset-100 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-sunset-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest-800 mb-2">Cultural Education</h3>
                    <p className="text-gray-600">Sharing the rich traditions and stories of the Oromo people through immersive storytelling.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-forest-100 p-3 rounded-full">
                    <Leaf className="h-6 w-6 text-forest-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest-800 mb-2">Environmental Awareness</h3>
                    <p className="text-gray-600">Inspiring conservation efforts and environmental consciousness through virtual connection with nature.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image/Visual Content */}
            <div className="relative animate-scale-in">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop&crop=center" 
                  alt="Harana Forest landscape showing lush green trees and water"
                  className="w-full h-96 object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/30 to-transparent"></div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Harana Forest, Oromia</h3>
                  <p className="text-forest-100">A pristine ecosystem waiting to be explored</p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg animate-float">
                <div className="text-2xl">🌿</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-sunset-400 rounded-full p-4 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-2xl">🦋</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
