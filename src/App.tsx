import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";

function App() {
  const [value, setValue] = useState<number>(0);
  const [process1, setProcess1] = useState<number>(0);
  const [inputValues, setInputValues] = useState<string[]>([]);
  const [calculateType, setCalculateType] = useState<number>();

  const handleChange = (e: any) => {
    setValue(e.target.value);
    console.log(value);
  };

  const handleClick = (e: any) => {
    inputValues.push(e);
    setValue(parseInt(inputValues.join("")));
    console.log(inputValues);
    console.log(value);
  };

  const calculate = (number1: number, number2: number) => {
    switch (calculateType) {
      case 1:
        let result = number1 + number2;
        setValue(result);
        break;
      case 2:
        let result2 = number1 - number2;
        setValue(result2);
        break;
      case 3:
        let result3 = number1 * number2;
        setValue(result3);
        break;
      case 4:
        let result4 = number1 / number2;
        setValue(result4);
        break;
      default:
        break;
    }
  };
  return (
    <Card className="card">
      <CardContent>
        <Box sx={{ flexGrow: 1 }}>
          <TextField
            id="display"
            sx={{ width: "100%", marginBottom: 4, direction: "RTL" }}
            value={value}
            onChange={handleChange}
            type="number"
          />
          <Grid container spacing={1} sx={{ marginBottom: 4 }}>
            <Grid item xs={4}>
              <Button
                variant="contained"
                sx={{ width: "100%" }}
                onClick={() => handleClick(1)}
              >
                1
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                sx={{ width: "100%" }}
                onClick={() => handleClick(2)}
              >
                2
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                sx={{ width: "100%" }}
                onClick={() => handleClick(3)}
              >
                3
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={1} sx={{ marginBottom: 4 }}>
            <Grid item xs={4}>
              <Button
                variant="contained"
                sx={{ width: "100%" }}
                onClick={() => handleClick(4)}
              >
                4
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                sx={{ width: "100%" }}
                onClick={() => handleClick(5)}
              >
                5
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                sx={{ width: "100%" }}
                onClick={() => handleClick(6)}
              >
                6
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={1} sx={{ marginBottom: 4 }}>
            <Grid item xs={4}>
              <Button
                variant="contained"
                sx={{ width: "100%" }}
                onClick={() => handleClick(7)}
              >
                7
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                sx={{ width: "100%" }}
                onClick={() => handleClick(8)}
              >
                8
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                sx={{ width: "100%" }}
                onClick={() => handleClick(9)}
              >
                9
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={1}
            sx={{ marginBottom: 4, display: "flex", justifyContent: "center" }}
          >
            <Grid item xs={4}>
              <Button
                variant="contained"
                sx={{ width: "100%" }}
                onClick={() => handleClick(0)}
              >
                0
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={1} sx={{ marginBottom: 4 }}>
            <Grid item xs={4}>
              <Button
                variant="outlined"
                sx={{ width: "100%" }}
                onClick={() => {
                  setProcess1(value);
                  setValue(0);
                  setInputValues([]);
                  setCalculateType(1);
                }}
              >
                +
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="outlined"
                sx={{ width: "100%" }}
                onClick={() => {
                  setProcess1(value);
                  setValue(0);
                  setInputValues([]);
                  setCalculateType(2);
                }}
              >
                -
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="outlined"
                sx={{ width: "100%" }}
                onClick={() => {
                  setProcess1(value);
                  setValue(0);
                  setInputValues([]);
                  setCalculateType(3);
                }}
              >
                X
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={1} sx={{ marginBottom: 4 }}>
            <Grid item xs={4}>
              <Button
                variant="outlined"
                sx={{ width: "100%" }}
                onClick={() => {
                  setProcess1(value);
                  setValue(0);
                  setInputValues([]);
                  setCalculateType(4);
                }}
              >
                /
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="outlined"
                sx={{ width: "100%" }}
                color="error"
                onClick={() => {
                  setValue(0);
                  setInputValues([]);
                }}
              >
                C
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="outlined"
                sx={{ width: "100%" }}
                onClick={() => calculate(process1, value)}
                color="success"
              >
                =
              </Button>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
      <CardActions>
        <Typography>
          Ertuğrul Emre Cihan Tarafından Geliştirilmiştir.
        </Typography>
      </CardActions>
    </Card>
  );
}

export default App;
