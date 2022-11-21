import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { CardActionArea } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function Tile(props) {
  const uniTheme = createTheme({
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
  });

  const nameTheme = createTheme({
    typography: {
      fontSize: 25,
    },
  });

  const desTheme = createTheme({
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
  });

  return (
    <>
      <div className="col-lg-3">
        <ThemeProvider theme={uniTheme}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image={props.image}
                alt={props.alt}
              />
              <CardContent>
                <ThemeProvider theme={nameTheme}>
                  <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                  </Typography>
                </ThemeProvider>
                <Typography variant="body2" color="text.secondary">
                  {props.des}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </ThemeProvider>
      </div>
    </>
  );
}
