
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";


const VisitOromiaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-sunset-50 to-earth-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-sunset-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-forest-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Inspirational Quote */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-3xl md:text-4xl font-bold text-forest-800 leading-relaxed mb-8">
                "Virtual exploration opens hearts, real visits create lasting connections."
              </blockquote>
              <div className="w-32 h-1 bg-gradient-to-r from-forest-500 to-sunset-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-700 leading-relaxed">
                Experience Oromia virtually, then make it your next adventure destination
              </p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - Image and Stats */}
            <div className="space-y-8 animate-scale-in">
              <Card className="overflow-hidden shadow-2xl border-0">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop&crop=center" 
                      alt="Beautiful landscape of Oromia with mountains and mist"
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">Oromia Awaits</h3>
                      <p className="text-gray-200">Ethiopia's largest and most diverse region</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

            
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-forest-800 mb-6">
                  From Virtual to Reality
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  While our VR experience offers an incredible journey through Harana Forest, nothing compares to breathing the fresh mountain air, hearing the rustle of leaves, and connecting with the warm hospitality of the Oromo people in person.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Let virtual reality inspire your next real-world adventure. Oromia offers pristine landscapes, rich cultural experiences, and unforgettable memories waiting to be made.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-forest-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-forest-800">Eco-Tourism Paradise</h4>
                    <p className="text-gray-600">Sustainable travel experiences that support local communities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-sunset-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-forest-800">Cultural Immersion</h4>
                    <p className="text-gray-600">Authentic experiences with traditional music, food, and customs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-earth-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-forest-800">Adventure Activities</h4>
                    <p className="text-gray-600">Hiking, wildlife spotting, and photography opportunities</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-forest-500 to-forest-600 hover:from-forest-600 hover:to-forest-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Plan Your Visit
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-forest-500 text-forest-700 hover:bg-forest-50 font-semibold rounded-full transition-all duration-300"
                >
                  Explore More
                </Button>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default VisitOromiaSection;
