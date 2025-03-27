import  Navbar from '../components/Navbar';
import { MapPin, Search } from 'lucide-react';

const DumpingLocatorPage = () => {
  const recyclingCenters = [
    {
      name: "EcoTech Recycling Center",
      address: "123 Green Street, New York, NY 10001",
      phone: "(212) 555-1234",
      hours: "Mon-Sat: 9AM-6PM",
      acceptedItems: ["Computers", "Phones", "Televisions", "Batteries"]
    },
    {
      name: "GreenCycle E-Waste Solutions",
      address: "456 Sustainability Ave, New York, NY 10002",
      phone: "(212) 555-5678",
      hours: "Mon-Fri: 8AM-7PM, Sat: 10AM-4PM",
      acceptedItems: ["All Electronics", "Appliances", "Batteries", "Light Bulbs"]
    },
    {
      name: "TechReclaim Processing Center",
      address: "789 Recycle Blvd, New York, NY 10003",
      phone: "(212) 555-9012",
      hours: "Mon-Sun: 10AM-5PM",
      acceptedItems: ["Computers", "Servers", "Networking Equipment", "Office Electronics"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-green-600 text-white px-6 py-4">
              <h1 className="text-xl font-bold flex items-center">
                <MapPin className="mr-2" />
                E-Waste Dumping Locator
              </h1>
              <p className="text-sm opacity-80">Find the nearest e-waste collection points</p>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <div className="flex mb-4">
                  <input
                    type="text"
                    placeholder="Enter your location or zip code"
                    className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button className="bg-green-600 text-white px-4 py-2 rounded-r-lg hover:bg-green-700 transition-colors flex items-center">
                    <Search size={20} className="mr-1" />
                    Find
                  </button>
                </div>
                
                <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center border">
                  <div className="text-center text-gray-500">
                    <MapPin size={40} className="mx-auto mb-2 text-gray-400" />
                    <p>Map view will appear here</p>
                    <p className="text-sm">(Using Google Maps API in full implementation)</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-3">Nearby E-Waste Collection Centers</h2>
                
                <div className="space-y-4">
                  {recyclingCenters.map((center, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-medium text-green-700">{center.name}</h3>
                      <p className="text-gray-600 text-sm mt-1">{center.address}</p>
                      <p className="text-gray-600 text-sm">{center.phone} • {center.hours}</p>
                      
                      <div className="mt-2">
                        <p className="text-xs text-gray-500 mb-1">Accepted Items:</p>
                        <div className="flex flex-wrap gap-1">
                          {center.acceptedItems.map((item, idx) => (
                            <span key={idx} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-3 flex justify-between">
                        <button className="text-blue-600 text-sm hover:underline">Get Directions</button>
                        <button className="text-green-600 text-sm hover:underline">More Info</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DumpingLocatorPage;
 