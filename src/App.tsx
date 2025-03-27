import  { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChatbotPage from './pages/ChatbotPage';
import PriceManagerPage from './pages/PriceManagerPage';
import PredictiveAnalysisPage from './pages/PredictiveAnalysisPage';
import DumpingLocatorPage from './pages/DumpingLocatorPage';
import DumpingReporterPage from './pages/DumpingReporterPage';
import ConnectingPeoplePage from './pages/ConnectingPeoplePage';
import NGOsPage from './pages/NGOsPage';
import GovernmentPage from './pages/GovernmentPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chatbot" element={<ChatbotPage />} />
      <Route path="/price-manager" element={<PriceManagerPage />} />
      <Route path="/predictive-analysis" element={<PredictiveAnalysisPage />} />
      <Route path="/dumping-locator" element={<DumpingLocatorPage />} />
      <Route path="/dumping-reporter" element={<DumpingReporterPage />} />
      <Route path="/connecting-people" element={<ConnectingPeoplePage />} />
      <Route path="/ngos" element={<NGOsPage />} />
      <Route path="/government" element={<GovernmentPage />} />
    </Routes>
  );
}

export default App;
 