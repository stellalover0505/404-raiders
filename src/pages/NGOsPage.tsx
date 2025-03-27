import  Navbar from '../components/Navbar';
import { Heart, Users, Globe, Calendar } from 'lucide-react';

const NGOsPage = () => {
  const ngos = [
    {
      name: "E-Waste Solutions Alliance",
      mission: "Promoting responsible e-waste management through education, collection events, and policy advocacy.",
      location: "Global (HQ in London)",
      founded: 2010,
      programs: ["Collection Drives", "School Education", "Corporate Partnerships"],
      impact: "Collected over 5 million pounds of e-waste from improper disposal"
    },
    {
      name: "Digital Divide Initiative",
      mission: "Refurbishing and distributing used electronics to underserved communities to bridge the digital divide.",
      location: "United States, Canada, Mexico",
      founded: 2008,
      programs: ["Tech Refurbishment", "Digital Literacy", "Community Labs"],
      impact: "Provided 50,000+ refurbished devices to schools and communities"
    },
    {
      name: "Green Circuit International",
      mission: "Developing sustainable e-waste processing methods and advocating for circular economy practices.",
      location: "Asia-Pacific Region",
      founded: 2015,
      programs: ["Recycling Innovation", "Policy Development", "Research"],
      impact: "Implemented sustainable recycling programs in 18 countries"
    }
  ];

  const upcomingEvents = [
    {
      name: "World E-Waste Day Collection Drive",
      date: "October 14, 2023",
      location: "Multiple Locations",
      organizer: "E-Waste Solutions Alliance"
    },
    {
      name: "E-Waste Management Summit",
      date: "November 8-9, 2023",
      location: "Virtual Conference",
      organizer: "Green Circuit International"
    },
    {
      name: "Computer Rebuilding Workshop",
      date: "September 25, 2023",
      location: "New York City, NY",
      organizer: "Digital Divide Initiative"
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
                <Heart className="mr-2" />
                NGO Partners
              </h1>
              <p className="text-sm opacity-80">Connect with non-profit organizations working on e-waste management</p>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 mb-6">
                Our platform connects with NGOs focused on e-waste management, electronic recycling, and digital equity. 
                Find organizations aligned with your interests and discover opportunities to get involved.
              </p>
              
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-green-600" />
                  Featured NGOs
                </h2>
                
                <div className="space-y-6">
                  {ngos.map((ngo, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-medium text-green-700 text-lg">{ngo.name}</h3>
                      
                      <div className="mt-2 flex flex-wrap items-center text-sm text-gray-500">
                        <div className="flex items-center mr-4 mb-2">
                          <Globe className="h-4 w-4 mr-1" />
                          <span>{ngo.location}</span>
                        </div>
                        <div className="flex items-center mb-2">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>Founded {ngo.founded}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mt-2">{ngo.mission}</p>
                      
                      <div className="mt-3">
                        <p className="text-xs text-gray-500 mb-1">Key Programs:</p>
                        <div className="flex flex-wrap gap-1">
                          {ngo.programs.map((program, idx) => (
                            <span key={idx} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                              {program}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-3">
                        <p className="text-xs text-gray-500 mb-1">Impact:</p>
                        <p className="text-sm text-gray-600">{ngo.impact}</p>
                      </div>
                      
                      <div className="mt-4 flex space-x-2">
                        <button className="text-sm bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-colors">
                          Support
                        </button>
                        <button className="text-sm bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-50 transition-colors">
                          Learn More
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-green-600" />
                  Upcoming NGO Events
                </h2>
                
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Organizer</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {upcomingEvents.map((event, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{event.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.location}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.organizer}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-4 text-center">
                  <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                    View All Events
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NGOsPage;
 