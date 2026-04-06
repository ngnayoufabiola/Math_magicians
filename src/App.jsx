import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/header';
import Home from './Components/Home';
import CalculatorPage from './Components/CalculatorPage';
import Quote from './Components/Quote';
import './assets/App.css';

const App = () => (
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

export default App;
