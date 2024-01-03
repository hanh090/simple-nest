import React, { ReactElement, useState } from "react";
import "./App.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import useApi from "./hooks/useApi";

export interface AppProps {}

const App = (): ReactElement => {
  const { fetchData: login, loading: isLoginning } = useApi({
    endpoint: "/login",
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box component="form" m={4}>
      <Box my={2}>
        <TextField id="outlined-disabled" label="Username" />
      </Box>
      <Box my={2}>
        <TextField id="outlined-disabled" label="Password" />
      </Box>
      <Box display="flex">
        <LoadingButton
          variant="outlined"
          sx={{ mr: 1 }}
          loading={isLoginning}
          onClick={() => login({ username, password })}
        >
          Login
        </LoadingButton>
        <Button variant="contained" color="success">
          Sign up
        </Button>
      </Box>
    </Box>
  );
};
export default App;
