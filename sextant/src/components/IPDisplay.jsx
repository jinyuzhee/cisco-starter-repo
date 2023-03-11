import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Typography } from "@material-ui/core";

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
          <Typography variant="body1">
            Your public {props.ipAddressType.toUpperCase()} address is: {ipAddress}
          </Typography>
        </div>
      );
    } 

export default IPDisplay;
