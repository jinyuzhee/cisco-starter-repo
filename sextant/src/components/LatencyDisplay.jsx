import React, { useState, useEffect } from "react";
import { w3cwebsocket as WebSocket } from "websocket";

function LatencyDisplay() {
  const [latency, setLatency] = useState(null);

  useEffect(() => {
    const ws = new WebSocket("wss://pylon-server.onrender.com");

    ws.onmessage = (message) => {
      const packetTimestamp = parseInt(message.data);
      console.log("packet timestamp:", packetTimestamp);
      const latency = new Date().getTime() - packetTimestamp;
      console.log("Latency:", latency);
      setLatency(latency);
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
        {latency !== null ? (
          <p>The current packet latency is {latency}ms.</p>
        ) : (
          <p>Waiting for packets...</p>
        )}
    </div>
  );
}

export default LatencyDisplay;
