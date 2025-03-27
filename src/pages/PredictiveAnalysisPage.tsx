import  Navbar from '../components/Navbar';
import { BarChart2, TrendingUp, AlertTriangle, Check } from 'lucide-react';

const PredictiveAnalysisPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-green-600 text-white px-6 py-4">
              <h1 className="text-xl font-bold flex items-center">
                <BarChart2 className="mr-2" />
                E-Waste Predictive Analysis
              </h1>
              <p className="text-sm opacity-80">AI-powered insights on e-waste trends and impacts</p>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 mb-6">
                Our advanced AI analyzes global e-waste data to provide insights, predictions, and recommendations.
                These analytics help in understanding the e-waste crisis and developing effective management strategies.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center mb-3">
                    <TrendingUp className="text-blue-600 mr-2" />
                    <h2 className="text-lg font-semibold text-gray-800">Global E-Waste Trends</h2>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    AI analysis of current and projected e-waste generation worldwide.
                  </p>
                  <div className="bg-white rounded-lg p-3 border border-gray-200">
                    <p className="text-xs text-gray-500 mb-1">Global e-waste generation (Annual)</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold">57.4 Million Tons</span>
                      <span className="text-xs text-red-500">+21% over 5 years</span>
                    </div>
                  </div>
                  <div className="mt-3 bg-white rounded-lg p-3 border border-gray-200">
                    <p className="text-xs text-gray-500 mb-1">Projected by 2030</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold">74.7 Million Tons</span>
                      <span className="text-xs text-red-500">+30% increase</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center mb-3">
                    <AlertTriangle className="text-amber-600 mr-2" />
                    <h2 className="text-lg font-semibold text-gray-800">Environmental Impact</h2>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    AI assessment of environmental consequences of improper e-waste disposal.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Toxic Materials Leached</span>
                        <span className="text-red-500 font-medium">Severe Impact</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Greenhouse Gas Emissions</span>
                        <span className="text-amber-500 font-medium">Moderate Impact</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Resource Depletion</span>
                        <span className="text-red-500 font-medium">Severe Impact</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-center mb-3">
                  <Check className="text-green-600 mr-2" />
                  <h2 className="text-lg font-semibold text-gray-800">AI Recommendations</h2>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Based on our predictive analysis, here are AI-generated recommendations:
                </p>
                <ul className="space-y-2">
                  <li className="bg-white rounded-lg p-3 border border-gray-200 text-sm">
                    <span className="font-medium">Policy Development:</span> Implement extended producer responsibility policies in regions with high e-waste generation.
                  </li>
                  <li className="bg-white rounded-lg p-3 border border-gray-200 text-sm">
                    <span className="font-medium">Infrastructure Investment:</span> Increase recycling capacity by 40% in urban centers to manage projected e-waste growth.
                  </li>
                  <li className="bg-white rounded-lg p-3 border border-gray-200 text-sm">
                    <span className="font-medium">Consumer Awareness:</span> Focus education campaigns on proper disposal methods and benefits of recycling electronics.
                  </li>
                  <li className="bg-white rounded-lg p-3 border border-gray-200 text-sm">
                    <span className="font-medium">Technology Innovation:</span> Develop and implement advanced sorting technologies to improve recovery of valuable materials.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PredictiveAnalysisPage;
 