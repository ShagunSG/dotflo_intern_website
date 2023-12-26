import React from 'react';
import Navbar from './Components/Navbar.js'
import Cards from './Components/Cards.js'

const App = () => {
  return (
    <div>
      <Navbar />
      <h1>Hello, It's my first React App!</h1>
      <h2>Happy Coding!!</h2>
      <Cards />
    </div>
  );
};

export default App;