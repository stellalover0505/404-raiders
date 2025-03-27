import  Navbar from '../components/Navbar';
import { useState } from 'react';
import { Send } from 'lucide-react';

const ChatbotPage = () => {
  const [messages, setMessages] = useState<{type: 'user' | 'bot', text: string}[]>([
    {type: 'bot', text: 'Hello! I\'m your E-Waste Management Assistant. How can I help you today?'}
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;
    
    const userMessage = {type: 'user' as const, text: input};
    setMessages([...messages, userMessage]);
    setInput('');
    
    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        type: 'bot' as const, 
        text: 'Thank you for your question about e-waste management. This is a placeholder response. In the full implementation, this would connect to the Gemini API to provide intelligent responses about e-waste management.'
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-green-600 text-white px-6 py-4">
            <h1 className="text-xl font-bold">E-Waste Management Chatbot</h1>
            <p className="text-sm opacity-80">Powered by Gemini AI</p>
          </div>
          
          <div className="h-96 overflow-y-auto p-4 bg-gray-50">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`mb-4 ${message.type === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div 
                  className={`inline-block p-3 rounded-lg ${
                    message.type === 'user' 
                      ? 'bg-green-600 text-white rounded-br-none' 
                      : 'bg-gray-200 text-gray-800 rounded-bl-none'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t">
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about e-waste management..."
                className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button 
                onClick={handleSend}
                className="bg-green-600 text-white px-4 py-2 rounded-r-lg hover:bg-green-700 transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChatbotPage;
 