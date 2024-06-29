import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import cristian_photo from "../images/cristian_photo.png";
import background from "../images/background_home.jpg";
import "../App.css";
import Contact from "./Contact";
import Projects from "./Projects";
import Footer from "./Footer";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ColumnsGrid() {
  return (
    <div className="App-homepage">
      <Box sx={{ flexGrow: 1, m: 2 }}>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={5}>
            {/* <Item>xs=8</Item> */}
            <img src={cristian_photo} alt="Logo" />
          </Grid>
          <Grid item xs={5}>
            {/*   <Item>xs=8</Item> */}
            Hi, my name is Cristian, im a software developer, i love programming
            and i love to learn new things, i have experience in web
            development, mobile development and desktop development, i have
            experience in the following technologies: React, React Native,
            Node.js, Express.js, MongoDB, MySQL, PostgreSQL, Python, Django,
            Flask, Java, Spring Boot, C#, .NET, Xamarin, WPF, UWP, Xamarin
            Forms, WPF, UWP, Xamarin Forms, HTML, CSS, JavaScript, TypeScript,
            C, C++, C#, Java, Python
          </Grid>
        </Grid>
      </Box>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
