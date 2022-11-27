import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import moment from "moment";

import { DesktopDateTimePicker } from "@mui/x-date-pickers";

import RentRate from "./RentRate";

export default function RentPopUp() {
  const uniTheme = createTheme({
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
  });

  const d = new Date();
  var dateString =
    d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
  var now = moment();
  console.log(dateString);
  const [fromDate, setFromDate] = useState(moment(dateString, "DD-MM-YYYY"));
  const [toDate, setToDate] = useState(moment(dateString, "DD-MM-YYYY"));

  console.log(
    moment(fromDate).format("DD/MM/YYYY"),
    moment(toDate).format("DD/MM/YYYY"),
    moment(fromDate).format("hh:mm"),
    moment(toDate).format("HH:mm")
  );

  const handleClickRentNow = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="center">
        <ThemeProvider theme={uniTheme}>
          <Card sx={{ minWidth: 500 }}>
            <CardContent>
              <div className="row">
                <div className="col-lg-6">
                  <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DesktopDateTimePicker
                      renderInput={(props) => <TextField {...props} />}
                      label="From"
                      value={fromDate}
                      onChange={(newValue) => {
                        setFromDate(newValue);
                      }}
                    />
                  </LocalizationProvider>
                </div>
                <div className="col-lg-6">
                  <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DateTimePicker
                      sx={{ minWidth: 200 }}
                      renderInput={(props) => <TextField {...props} />}
                      label="To"
                      value={toDate}
                      onChange={(newValue) => {
                        setToDate(newValue);
                      }}
                    />
                  </LocalizationProvider>
                </div>
              </div>
              <a
                className="btn btn-dark container rent-btn"
                href="/rent"
                onClick={handleClickRentNow}
              >
                PAY NOW
              </a>
            </CardContent>
          </Card>
        </ThemeProvider>
      </div>
    </>
  );
}
