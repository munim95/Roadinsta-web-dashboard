import React, { useState } from 'react';
import './Quotes.css';

function Quotes() {
  // Dummy data for quotes
  const [quotes, setQuotes] = useState([
    {
      id: 1,
      distance: 20,
      vehicleType: 'SUV',
      location: 'City A',
      quoteAmount: '$50'
    },
    {
      id: 2,
      distance: 30,
      vehicleType: 'Coupe',
      location: 'City B',
      quoteAmount: '$40'
    }
  ]);

  return (
    <div className="quotes-container">
      <h2>Automate Quotes</h2>
      <div className="quotes-list">
        {quotes.map(quote => (
          <div key={quote.id} className="quote">
            <p><strong>Distance:</strong> {quote.distance} miles</p>
            <p><strong>Vehicle Type:</strong> {quote.vehicleType}</p>
            <p><strong>Location:</strong> {quote.location}</p>
            <p><strong>Quote Amount:</strong> {quote.quoteAmount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quotes;
