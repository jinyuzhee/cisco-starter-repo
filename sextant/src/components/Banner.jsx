import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

function Banner(props) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Banner;
