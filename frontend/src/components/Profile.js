import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function Profile(props) {
  const uniTheme = createTheme({
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
  });

  const welcomeTheme = createTheme({
    typography: {
      fontSize: 16,
      fontWeight: 800,
    },
  });

  return (
    <>
      <div className="card text-center" style={{width: "20rem"}}>
        <div className="card-body">
          <p className="card-text profile-txt">WELCOME {props.name}</p>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
      </div>
    </>
  );
}
