import  Navbar from '../components/Navbar';
import { DollarSign } from 'lucide-react';

const PriceManagerPage = () => {
  const deviceTypes = [
    { 
      name: 'Smartphones', 
      items: [
        { device: 'iPhone 12', condition: 'Excellent', price: '$180-220' },
        { device: 'Samsung Galaxy S21', condition: 'Good', price: '$150-190' },
        { device: 'Google Pixel 5', condition: 'Fair', price: '$120-160' }
      ] 
    },
    { 
      name: 'Laptops', 
      items: [
        { device: 'MacBook Pro 2019', condition: 'Excellent', price: '$450-550' },
        { device: 'Dell XPS 13', condition: 'Good', price: '$320-420' },
        { device: 'Lenovo ThinkPad', condition: 'Fair', price: '$220-320' }
      ] 
    },
    { 
      name: 'Tablets', 
      items: [
        { device: 'iPad Pro 11"', condition: 'Excellent', price: '$350-450' },
        { device: 'Samsung Tab S7', condition: 'Good', price: '$230-300' },
        { device: 'Microsoft Surface', condition: 'Fair', price: '$180-250' }
      ] 
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
                <DollarSign className="mr-2" />
                E-Waste Price Manager
              </h1>
              <p className="text-sm opacity-80">AI-powered pricing recommendations for electronic recycling</p>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 mb-6">
                Our price manager uses AI to analyze current market trends and provide fair value estimates for your electronic devices. 
                These values are updated regularly based on market conditions.
              </p>
              
              <div className="space-y-8">
                {deviceTypes.map((type, index) => (
                  <div key={index}>
                    <h2 className="text-lg font-semibold text-gray-800 mb-3">{type.name}</h2>
                    <div className="bg-gray-50 rounded-lg overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Device</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Condition</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estimated Value</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {type.items.map((item, idx) => (
                            <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.device}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.condition}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">{item.price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-4">
                <h3 className="text-blue-800 font-medium mb-2">Get Custom Price Estimate</h3>
                <p className="text-blue-600 text-sm mb-4">
                  Don't see your device listed? Our AI can provide a custom estimate based on device specifications.
                </p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Request Custom Estimate
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PriceManagerPage;
 