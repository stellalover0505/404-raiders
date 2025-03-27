import  { Link } from 'react-router-dom';
import { MessageCircle, BarChart2, Map, Camera, Users, Heart, Globe } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img 
                src="https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/e7e12486-b00d-40e8-702b-7aa399b43b00/public" 
                alt="404 Raiders Logo" 
                className="h-12 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-gray-900">404 RAIDERS</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/chatbot" className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors flex items-center">
              <MessageCircle className="mr-1 h-4 w-4" />
              <span>Chatbot</span>
            </Link>
            <Link to="/price-manager" className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">
              <span>Price Manager</span>
            </Link>
            <Link to="/predictive-analysis" className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors flex items-center">
              <BarChart2 className="mr-1 h-4 w-4" />
              <span>Analysis</span>
            </Link>
            <Link to="/dumping-locator" className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors flex items-center">
              <Map className="mr-1 h-4 w-4" />
              <span>Locator</span>
            </Link>
            <Link to="/dumping-reporter" className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors flex items-center">
              <Camera className="mr-1 h-4 w-4" />
              <span>Reporter</span>
            </Link>
            <Link to="/connecting-people" className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors flex items-center">
              <Users className="mr-1 h-4 w-4" />
              <span>Connect</span>
            </Link>
            <Link to="/ngos" className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors flex items-center">
              <Heart className="mr-1 h-4 w-4" />
              <span>NGOs</span>
            </Link>
            <Link to="/government" className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors flex items-center">
              <Globe className="mr-1 h-4 w-4" />
              <span>Government</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
 