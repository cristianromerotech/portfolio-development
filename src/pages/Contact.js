import { TextField, Container, Grid, Button, Box } from "@mui/material";
//import background_blue from "../images/background_blue.jpg";
import "../App.css";
import { grey } from "@mui/material/colors";
const accent = grey["A100"];

function Contact() {
  return (
    <div /*  style={{ backgroundImage: `url(${background_blue})` }}  */>
      <Container fixed>
        <h1>Contact</h1>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField id="outlined-basic" label="Correo" variant="outlined" />
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
        <br />
      </Container>
    </div>
  );
}

export default Contact;
