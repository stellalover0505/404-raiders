import  Navbar from '../components/Navbar';
import { Users, Search, MessageSquare, User } from 'lucide-react';

const ConnectingPeoplePage = () => {
  const communities = [
    {
      name: "E-Waste Innovators",
      members: 1243,
      description: "Engineers and tech enthusiasts developing innovative solutions for e-waste recycling and repurposing.",
      topics: ["Innovation", "Technology", "DIY"]
    },
    {
      name: "Responsible Disposal Network",
      members: 895,
      description: "Community focused on promoting responsible disposal practices and raising awareness about e-waste impacts.",
      topics: ["Education", "Awareness", "Best Practices"]
    },
    {
      name: "E-Waste Policy Advocates",
      members: 621,
      description: "Working together to influence policy changes for better e-waste management at local and national levels.",
      topics: ["Policy", "Advocacy", "Regulation"]
    }
  ];

  const experts = [
    {
      name: "Dr. Sarah Chen",
      role: "E-Waste Researcher",
      organization: "Environmental Sciences Institute",
      expertise: ["Material Recovery", "Environmental Impact", "Recycling Technologies"]
    },
    {
      name: "Michael Rodriguez",
      role: "Recycling Program Director",
      organization: "GreenTech Recycling",
      expertise: ["Collection Systems", "Processing Methods", "Urban Mining"]
    },
    {
      name: "Priya Sharma",
      role: "Policy Consultant",
      organization: "Sustainable Technologies Council",
      expertise: ["E-Waste Legislation", "Extended Producer Responsibility", "Circular Economy"]
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
                <Users className="mr-2" />
                Connecting People
              </h1>
              <p className="text-sm opacity-80">Connect with experts, communities, and individuals interested in e-waste management</p>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Search for people, communities, or topics..."
                    className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button className="bg-green-600 text-white px-4 py-2 rounded-r-lg hover:bg-green-700 transition-colors">
                    <Search size={20} />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2 text-green-600" />
                    Communities
                  </h2>
                  
                  <div className="space-y-4">
                    {communities.map((community, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between">
                          <h3 className="font-medium text-green-700">{community.name}</h3>
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            {community.members} members
                          </span>
                        </div>
                        
                        <p className="text-gray-600 text-sm mt-2">{community.description}</p>
                        
                        <div className="mt-3">
                          <div className="flex flex-wrap gap-1">
                            {community.topics.map((topic, idx) => (
                              <span key={idx} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <button className="mt-3 text-sm bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-colors">
                          Join Community
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <User className="h-5 w-5 mr-2 text-green-600" />
                    E-Waste Experts
                  </h2>
                  
                  <div className="space-y-4">
                    {experts.map((expert, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <h3 className="font-medium text-green-700">{expert.name}</h3>
                        <p className="text-gray-600 text-sm">{expert.role} at {expert.organization}</p>
                        
                        <div className="mt-2">
                          <p className="text-xs text-gray-500 mb-1">Expertise:</p>
                          <div className="flex flex-wrap gap-1">
                            {expert.expertise.map((item, idx) => (
                              <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mt-3 flex space-x-2">
                          <button className="text-sm bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-colors">
                            Connect
                          </button>
                          <button className="text-sm bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-50 transition-colors">
                            View Profile
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h2 className="font-medium text-gray-800 mb-2">Looking for More Connections?</h2>
                <p className="text-gray-600 text-sm mb-3">
                  Our AI can match you with people, organizations, and communities based on your interests and goals in e-waste management.
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm">
                  Get Personalized Recommendations
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ConnectingPeoplePage;
 