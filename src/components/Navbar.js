import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed " style={{
        background:"#Od4757",
      }} >
        <Toolbar>

          <Typography 
            variant="h5" 
            component="div" 
            sx={{ flexGrow: 1 }}
            style={{
              
              display:"flex",
             justifyContent:"center",
             alignItems:"center",
              
            }}> 
            TO-DO LIST
          </Typography>
        </Toolbar>

      </AppBar>
    </Box>

  );
}
