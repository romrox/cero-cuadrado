import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import logo from "../imagenes/logo.jpg";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { auth } from "../../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
    });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignInPageClick = () => {
    navigate("/SignIn"); // Navega a la página de registro
  };

  const forgotpass = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await sendPasswordResetEmail(auth, email);

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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background: "#d2193b" }}
              onClick={forgotpass}
            >
              Actualizar
            </Button>
            <Button
              fullWidth
              variant="contained"
              onClick={handleSignInPageClick}
              sx={{ background: "#d2193b" }}
            >
              Cancelar
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
