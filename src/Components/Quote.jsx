import { useState, useEffect } from 'react';
import '../assets/Quote.css';

const Quote = () => {
  const [quote, setQuote] = useState('Loading...');

  const fetchQuote = async () => {
    try {
      const response = await fetch(
        'https://api.api-ninjas.com/v1/quotes',
        {
          method: 'GET',
          headers: {
            'X-Api-Key': 'RIhFjhRS0zMNSscKGu4HTZIQTjBZ1ybNRDoQnCpo',
          },
        },
      );

      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const data = await response.json();
      setQuote(`"${data[0].quote}" — ${data[0].author}`);
    } catch (err) {
      setQuote('Error fetching quote');
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote-container">
      <h2 className="quote-title">Daily Inspiration</h2>
      <p className="quote-text">{quote}</p>
      <button type="button" className="quote-btn" onClick={fetchQuote}>
        New Quote
      </button>
    </div>
  );
};

export default Quote;
