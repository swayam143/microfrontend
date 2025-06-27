import React, { Suspense, useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Button,
  Typography,
  Paper,
  CircularProgress,
  Stack,
} from "@mui/material";
import CustomHook from "./CustomHook";

const App = ({ title, setCount, count }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleCountChange = (operator) => {
    if (operator === "+") {
      setCount(count + 1);
    } else if (operator === "-" && count > 0) {
      setCount(count - 1);
    }
  };

  const generateRandomNumberString = () =>
    Math.floor(Math.random() * 10).toString();

  const handleReduxChange = () => {
    dispatch({
      type: "ShubhamUser/addUserName",
      payload: generateRandomNumberString(),
    });
  };

  return (
    <>
      <Suspense fallback={<CircularProgress />}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
          bgcolor="#f0f2f5"
          width="90vw"
        >
          <Paper
            elevation={3}
            sx={{ padding: 4, width: 400, textAlign: "center" }}
          >
            <Typography variant="h5" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Redux State:</strong> {user?.user || "N/A"}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleReduxChange}
              sx={{ my: 2 }}
            >
              Change Redux State
            </Button>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Props State Count: {count}
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
              <Button
                variant="outlined"
                color="success"
                onClick={() => handleCountChange("+")}
              >
                Increment
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => handleCountChange("-")}
              >
                Decrement
              </Button>
            </Stack>{" "}
            <CustomHook />
          </Paper>
        </Box>
      </Suspense>
    </>
  );
};

export default App;
