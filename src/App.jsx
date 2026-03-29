import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home.jsx';
import CalculatorPage from './pages/CalculatorPage.jsx';
import Quote from './pages/Quote.jsx';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />

      <main className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;