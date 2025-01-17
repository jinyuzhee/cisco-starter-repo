import './App.css';
import React from 'react';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import IPDisplay from './components/IPDisplay';
import LatencyDisplay from './components/LatencyDisplay';

function App() {
  return (
    <div className="App">
       <Banner title="Sextant" />
       <Exhibit title="IPv4 Address">
        <IPDisplay ipAddressType="v4" />
      </Exhibit>
      <Exhibit title="IPv6 Address">
        <IPDisplay ipAddressType="v6" />
      </Exhibit>
      <Exhibit title="Packet Latency">
        <LatencyDisplay />
      </Exhibit>
    </div>
  );
}

export default App;
