import React from "react";
import { TextField, Container, Grid, Button, Box } from "@mui/material";

function Contact() {
  return (
    <div>
      {/* No se necesita la imagen de fondo */}
      <Container fixed>
        <Grid container spacing={1}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8} align="center">
            <Box
              height={300}
              width={200}
              my={4}
              display="flex"
              alignItems="center"
              gap={4}
              p={2}
              sx={{ border: "2px solid grey" }}
              bgcolor="primary.dark"
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <h1>Contact</h1>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-basic"
                    label="Correo"
                    variant="outlined"
                    color="success"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-basic"
                    label="Mensaje"
                    variant="outlined"
                    multiline
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained">Send</Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Contact;
