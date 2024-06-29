import React from "react";

import { Typography, Link, Container } from "@mui/material";
import "../App.css";


const Footer = () => {
 

  return (
    <footer className="footer">
      <Container maxWidth="sm">
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Cristian Romero 
        </Typography>
        <Typography variant="body2" align="center">
          Get connected with us on social networks:
          <Link href="#">Facebook</Link> | {" "}
          <Link href="https://www.linkedin.com/in/cristian-fernando-romero/">LinkedIn</Link>
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
