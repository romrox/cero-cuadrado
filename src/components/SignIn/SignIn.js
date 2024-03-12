import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./SignIn.css";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import logo from "../imagenes/logo.jpg";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { auth } from "../../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignUpPageClick = () => {
    navigate("/SignUp"); // Navega a la página de registro
  };
  const handleForgotPassPageClick = () => {
    navigate("/ForgotPass"); // Navega a la página de registro
  };

  const signin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);

      // Redirect to login or perform other actions upon successful registration
      navigate("/");
    } catch (error) {
      // Handle registration errors gracefully
      alert(error.message);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 30,
            display: "flex",
            position: "relative",
            flexDirection: "column",
            alignItems: "center",
            background: " #424242",
            color: "#fff",
            padding: 2,
            borderRadius: 2,
          }}
        >
          <img className="icono1" src={logo} alt="Logo" />

          <Typography component="h7" variant="h7">
            Iniciar sesión en tu cuenta
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
              fullWidth
              id="email"
              variant="filled"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              InputLabelProps={{
                sx: {
                  color: "#fff", // Color blanco para el label
                  "&::after": {
                    borderBottom: "2px solid #d21972",
                  },
                  "&:not(:placeholder-shown)": {
                    color: "#fff", // Color azul cuando el campo tiene texto escrito
                  },
                },
              }}
              InputProps={{
                sx: {
                  color: "#fff", // Color blanco para el texto dentro del campo de entrada
                  "&::after": {
                    borderBottom: "2px solid #d21972",
                  },

                  "&:not(:placeholder-shown)": {
                    color: "#fff", // Color azul cuando el campo tiene texto escrito
                  },
                },
              }}
            />
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
              fullWidth
              variant="filled"
              className="password"
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              InputLabelProps={{
                sx: {
                  color: "#fff", // Color blanco para el label
                  "&::after": {
                    borderBottom: "2px solid #d21972",
                  },
                  "&:not(:placeholder-shown)": {
                    color: "#fff", // Color azul cuando el campo tiene texto escrito
                  },
                },
              }}
              InputProps={{
                sx: {
                  color: "#fff", // Color blanco para el texto dentro del campo de entrada
                  "&::after": {
                    borderBottom: "2px solid #d21972",
                  },

                  "&:not(:placeholder-shown)": {
                    color: "#fff", // Color azul cuando el campo tiene texto escrito
                  },
                },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background: "#d2193b" }}
              onClick={signin}
            >
              Iniciar sesión
            </Button>
            <Grid container>
              <Grid item xs>
                <Button onClick={handleForgotPassPageClick}>
                  {"¿Has olvidado tu contraseña?"}
                </Button>
              </Grid>
              <Grid item>
                <Button onClick={handleSignUpPageClick}>
                  {"Crear una cuenta"}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
