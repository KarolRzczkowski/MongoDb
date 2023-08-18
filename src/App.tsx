// App.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [enginesData, setEnginesData] = useState([]);

  useEffect(() => {
    axios.get('/api/engines') // Poprawny adres URL serwera
      .then(response => {
        setEnginesData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {enginesData.map(engine => (
        <div key={engine._id}>
          <p>Model: {engine.model}</p>
          <p>HorsePower: {engine.HorsePower}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
