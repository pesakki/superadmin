import { React, useState } from "react";
//import "./App.css";
import {
  TextField,
  Button,
  Box,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import logo from "./dl_logo.png";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styled from "@emotion/styled";

const StyledTextField = styled(TextField)({
  fontSize: "bold",
  fontWeight: "bolder",
  border: "1px solid black",
  borderColor: "blue-magenta",
  borderRadius: 10,
  width: "110%",
});
const StyledButton = styled(Button)({
  margin: 10,
  borderRadius: 20,
  width: "110%",
  height: 40,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#29b6f6",
});

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickPassword = () => setShowPassword((show) => !show);
  return (
    <div style={{ background: " #D9F1FF" }}>
      <form color="#2c3956">
        <Box
          display={"flex"}
          flexDirection={"column"}
          maxWidth={480}
          alignItems={"center"}
          justifyContent={"center"}
          margin={"auto"}
          padding={5}
        >
          <img
            src={logo}
            style={{
              marginTop: 30,
              width: "35%",
            }}
          />
          <Typography marginTop={2} fontSize={18} padding={3} color={"#2c3956"}>
            Driving Profits from Services to Sales
          </Typography>
          <Typography
            marginTop={4}
            marginBottom={2}
            fontSize={30}
            padding={1.5}
            color={"#2c3956"}
          >
            Welcome Back!
          </Typography>

          <StyledTextField
            margin="normal"
            type="text"
            label="Username"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AccountCircleIcon />
                </InputAdornment>
              ),
            }}
          ></StyledTextField>

          <StyledTextField
            margin="normal"
            id="outlined-basic"
            variant="outlined"
            label="Password"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickPassword}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          ></StyledTextField>

          <StyledButton variant="contained">login</StyledButton>

          <Button
            style={{
              alignSelf: "flex-end",
              fontWeight: "normal",
              textTransform: "none",
              color: "#2c3956",
            }}
          >
            Forgot password?
          </Button>
        </Box>
      </form>
    </div>
  );
}
export default Login;

//npm install @mui/material @emotion/react @emotion/styled
//npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
