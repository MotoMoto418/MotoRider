import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function Tile(props) {
  const uniTheme = createTheme({
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
  });

  const brandTheme = createTheme({
    typography: {
      fontSize: 15,
      fontWeight: 800,
    },
  });

  const modelTheme = createTheme({
    typography: {
      fontSize: 13,
      fontWeight: 800,
    },
  });

  return (
    <>
      <div className="col-lg-3 tile-container">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ThemeProvider theme={uniTheme}>
            <Card sx={{ maxWidth: 345, minWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={props.image}
                  alt={props.alt}
                />
                <CardContent>
                  <ThemeProvider theme={brandTheme}>
                    <Typography gutterBottom variant="h5" component="div">
                      {props.brand}
                    </Typography>
                  </ThemeProvider>
                  <ThemeProvider theme={modelTheme}>
                    <Typography variant="body2" color="text.secondary">
                      {props.model}
                    </Typography>
                  </ThemeProvider>
                  {/* <button type="button" class="btn btn-dark">RENT</button> */}
                  <a className="btn btn-dark rent-btn container" href="/rent">RENT</a>
                </CardContent>
              </CardActionArea>
            </Card>
          </ThemeProvider>
        </div>
      </div>
    </>
  );
}
