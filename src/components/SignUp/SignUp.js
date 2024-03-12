import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import logo from "../imagenes/logo.jpg";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
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

  const handleSignInPageClick = () => {
    navigate("/SignIn"); // Navega a la página de registro
  };

  const signup = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      // Redirect to login or perform other actions upon successful registration
      navigate("/SignIn");
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
          color="text.secondary"
        >
          <img className="icono1" src={logo} alt="Logo" />
          <Typography component="h7" variant="h7">
            Registrar una cuenta
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  fullWidth
                  variant="filled"
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
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
              </Grid>
              <Grid item xs={12} color="primary">
                <TextField
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  fullWidth
                  variant="filled"
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="new-password"
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
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                background: "#d2193b",
              }}
              onClick={signup}
            >
              Registrar
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button onClick={handleSignInPageClick} sx={{ mt: 3, mb: 2 }}>
                  ¿Ya tienes una cuenta? Iniciar sesión
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
