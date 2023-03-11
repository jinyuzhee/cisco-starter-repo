import React, { useState, useEffect } from 'react';
import axios from 'axios';

function IPDisplay(props) {
    const [ipAddress, setIpAddress] = useState("");
  
    useEffect(() => {
      const ipAddressType = props.ipAddressType === "v4" ? "ipv4" : "ipv6";
      axios
        .get(`https://api.ipify.org?format=json&${ipAddressType}=true`)
        .then((response) => setIpAddress(response.data.ip))
        .catch((error) => console.log(error));
    }, [props.ipAddressType]);

    return (
        <div>
          <p>
            Your public {props.ipAddressType.toUpperCase()} address is: {ipAddress}
          </p>
        </div>
      );
    } 

export default IPDisplay;
