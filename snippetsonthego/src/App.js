import React from 'react';
import Navbar from './Components/Navbar.js'
import Quote from './Components/Quote.js'
import Cards from './Components/Cards.js'
import Footer from './Components/Footer.js'

const App = () => {
  return (
    <div>
      <Navbar />
      <Quote />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;