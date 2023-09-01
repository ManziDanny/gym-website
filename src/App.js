import React from 'react'
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Support from './components/Support';
import Platforms from './components/Platforms';
import Membership from './components/Membership';
import Bottom from './components/Bottom';

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Support />
      <Platforms />
      <Membership />
      <Bottom />
       
    </div>
  );
}

export default App;
