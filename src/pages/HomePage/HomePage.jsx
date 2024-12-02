import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h2>Welcome to the Wizard and Spell Collection</h2>
      <p>Navigate to either Wizards or Spells:</p>
      <Link to="/wizards">Go to Wizards</Link>
      <br />
      <Link to="/spells">Go to Spells</Link>
    </div>
  );
};

export default HomePage;