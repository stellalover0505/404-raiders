import  Navbar from '../components/Navbar';
import { Globe, FileText, AlertCircle, HelpCircle } from 'lucide-react';

const GovernmentPage = () => {
  const regulations = [
    {
      name: "E-Waste Management Rules",
      region: "United States",
      status: "Active",
      year: 2020,
      summary: "Comprehensive framework for e-waste collection, processing, and extended producer responsibility.",
      key_points: [
        "Mandates registration of all e-waste recyclers",
        "Sets recovery and recycling targets",
        "Prohibits disposal in landfills"
      ]
    },
    {
      name: "WEEE Directive",
      region: "European Union",
      status: "Active",
      year: 2012,
      summary: "Waste Electrical and Electronic Equipment directive setting collection, recovery, and recycling targets.",
      key_points: [
        "Producer financing for collection and treatment",
        "Minimum recovery rates by category",
        "Free take-back requirement"
      ]
    },
    {
      name: "Circular Electronics Initiative",
      region: "Global",
      status: "Proposed",
      year: 2023,
      summary: "International framework to promote circular economy principles in electronics manufacturing and disposal.",
      key_points: [
        "Design for repairability and recyclability",
        "Standardization of components",
        "Global tracking system for e-waste movement"
      ]
    }
  ];

  const resources = [
    {
      title: "E-Waste Compliance Guide for Businesses",
      type: "PDF Guide",
      organization: "Environmental Protection Agency",
      description: "Comprehensive guide for businesses on complying with e-waste regulations."
    },
    {
      title: "Grant Programs for E-Waste Innovation",
      type: "Funding Information",
      organization: "Department of Energy",
      description: "Details on government grants available for e-waste processing technology development."
    },
    {
      title: "Public-Private Partnership Framework",
      type: "Policy Document",
      organization: "Ministry of Environment",
      description: "Guidelines for establishing partnerships between government and private sector for e-waste management."
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
                <Globe className="mr-2" />
                Government Resources
              </h1>
              <p className="text-sm opacity-80">Access regulations, policies, and official resources for e-waste management</p>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 mb-6">
                Stay informed about government regulations, compliance requirements, and public resources related to e-waste management.
                Our platform provides up-to-date information on policies affecting e-waste handling across different regions.
              </p>
              
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-green-600" />
                  Key E-Waste Regulations
                </h2>
                
                <div className="space-y-6">
                  {regulations.map((regulation, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-green-700">{regulation.name}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          regulation.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {regulation.status}
                        </span>
                      </div>
                      
                      <div className="mt-1 text-sm text-gray-500">
                        {regulation.region} • Established {regulation.year}
                      </div>
                      
                      <p className="text-gray-600 text-sm mt-2">{regulation.summary}</p>
                      
                      <div className="mt-3">
                        <p className="text-xs text-gray-500 mb-1">Key Points:</p>
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                          {regulation.key_points.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-3">
                        <button className="text-blue-600 text-sm hover:underline flex items-center">
                          <FileText className="h-4 w-4 mr-1" />
                          View Full Documentation
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-800 mb-3">Official Resources</h2>
                
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resource</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Organization</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {resources.map((resource, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-6 py-4 text-sm">
                            <div className="font-medium text-blue-600 hover:underline cursor-pointer">{resource.title}</div>
                            <div className="text-xs text-gray-500 mt-1">{resource.description}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{resource.type}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{resource.organization}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-yellow-800 mb-1">Compliance Alert System</h3>
                      <p className="text-sm text-yellow-700">
                        Subscribe to receive alerts about changes to e-waste regulations that may affect your business or community.
                      </p>
                      <button className="mt-3 text-sm bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition-colors">
                        Subscribe to Alerts
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                  <div className="flex items-start">
                    <HelpCircle className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-blue-800 mb-1">Regulatory Assistance</h3>
                      <p className="text-sm text-blue-700">
                        Need help navigating e-waste regulations? Our AI assistant can provide guidance and connect you with government resources.
                      </p>
                      <button className="mt-3 text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors">
                        Get Assistance
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GovernmentPage;
 