import  Navbar from '../components/Navbar';
import { Camera, Upload, MapPin } from 'lucide-react';
import { useState } from 'react';

const DumpingReporterPage = () => {
  const [formData, setFormData] = useState({
    description: '',
    location: '',
    type: '',
    severity: 'medium'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would connect to backend in full implementation
    alert('Report submitted successfully! Our team will review the information.');
    setFormData({
      description: '',
      location: '',
      type: '',
      severity: 'medium'
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-green-600 text-white px-6 py-4">
              <h1 className="text-xl font-bold flex items-center">
                <Camera className="mr-2" />
                E-Waste Dumping Reporter
              </h1>
              <p className="text-sm opacity-80">Report illegal e-waste dumping activities in your area</p>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 mb-6">
                Help us keep our environment clean by reporting inappropriate e-waste disposal. All reports are kept confidential and will be verified by our AI system.
              </p>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Upload Images</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center bg-gray-50">
                      <Upload className="h-12 w-12 text-gray-400 mb-2" />
                      <p className="text-sm text-gray-500 mb-1">Drag and drop images here, or click to upload</p>
                      <p className="text-xs text-gray-400">Supported formats: JPG, PNG (max 10MB)</p>
                      <button type="button" className="mt-4 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                        Select Files
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MapPin className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="Address or coordinates"
                          className="pl-10 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm border-gray-300 rounded-md py-2 border"
                          required
                        />
                      </div>
                      <p className="mt-1 text-xs text-gray-500">Or use "Get Current Location" button</p>
                      <button type="button" className="mt-2 text-green-600 text-sm hover:text-green-800">
                        Get Current Location
                      </button>
                    </div>
                    
                    <div>
                      <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Type of E-Waste</label>
                      <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md border"
                        required
                      >
                        <option value="">Select type</option>
                        <option value="computers">Computers & Laptops</option>
                        <option value="phones">Phones & Tablets</option>
                        <option value="appliances">Household Appliances</option>
                        <option value="batteries">Batteries</option>
                        <option value="mixed">Mixed E-Waste</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describe what you observed, approximate quantity, and any other relevant details..."
                      className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md border p-2"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Severity</label>
                    <div className="flex items-center space-x-4">
                      <label className="inline-flex items-center">
                        <input 
                          type="radio" 
                          name="severity" 
                          value="low" 
                          checked={formData.severity === 'low'}
                          onChange={handleChange}
                          className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"
                        />
                        <span className="ml-2 text-sm text-gray-700">Low</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input 
                          type="radio" 
                          name="severity" 
                          value="medium" 
                          checked={formData.severity === 'medium'}
                          onChange={handleChange}
                          className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"
                        />
                        <span className="ml-2 text-sm text-gray-700">Medium</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input 
                          type="radio" 
                          name="severity" 
                          value="high" 
                          checked={formData.severity === 'high'}
                          onChange={handleChange}
                          className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"
                        />
                        <span className="ml-2 text-sm text-gray-700">High</span>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    className="ml-3 inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Submit Report
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DumpingReporterPage;
 