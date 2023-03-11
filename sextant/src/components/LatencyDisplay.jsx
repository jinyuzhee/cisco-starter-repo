import React, { useState, useEffect } from "react";
import io from "socket.io-client";

function LatencyDisplay() {
  const [latency, setLatency] = useState(null);

  useEffect(() => {
    const socket = io("http://pylon-server.onrender.com:55455");

    socket.on("message", (data) => {
      const packetTimestamp = parseInt(data);
      console.log("packet timestamp:", packetTimestamp);
      const latency = new Date().getTime() - packetTimestamp;
      console.log("Latency:", latency);
      setLatency(latency);
    });

    return () => {
      socket.close();
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
