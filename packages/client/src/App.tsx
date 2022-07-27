import "./App.css";
import { Navbar } from "./components";
import { Grid } from "@mui/material";
import { Routes } from "./Routes";
function App() {
  return (
    <Grid container>
      <Navbar />
      <Routes />
    </Grid>
  );
}

export default App;
