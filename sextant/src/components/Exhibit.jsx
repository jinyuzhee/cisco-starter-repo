import React from 'react';
import { Typography, Paper } from '@material-ui/core';

function Exhibit(props) {
    return (
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          {props.title}
        </Typography>
        {props.children}
      </Paper>
    );
  }

export default Exhibit;
