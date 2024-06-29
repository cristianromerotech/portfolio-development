import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TerminalIcon from '@mui/icons-material/Terminal';

const pages = ['Projects', 'Contact','About me'];

function ResponsiveAppBar() {



  return (
    <AppBar position="static" >
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          <TerminalIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 95,
              display: {  md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Cristian
          </Typography>






 
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
        
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

      
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
