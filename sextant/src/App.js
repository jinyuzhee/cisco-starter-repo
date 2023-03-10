import './App.css';
import React from 'react';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';

function App() {
  return (
    <div className="App">
       <Banner title="Sextant" />
       <Exhibit title="Exhibit 1">
        {/* Child components */}
      </Exhibit>
    </div>
  );
}

export default App;
