import React, { useState } from 'react';

const MeaningFinder = () => {
  const [name, setName] = useState('');

  const handleClick = async () => {
    if (!name) return; // Don't do anything if name is empty

    try {
      const response = await fetch(`https://api.agify.io/?name=${encodeURIComponent(name)}`);
      const data = await response.json();

      // Print only the API response to the console
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter a name"
      />
      <button onClick={handleClick}>Get Meaning</button>
    </div>
  );
};

export default MeaningFinder;