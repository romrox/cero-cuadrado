import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import AccountCircle from "@mui/icons-material/AccountCircle";
import logo from "../imagenes/logo.jpg";
import "./Navbar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";

import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useNavigate } from "react-router-dom";
import ListItemText from "@mui/material/ListItemText";

export default function PrimarySearchAppBar() {
  const [state, setState] = React.useState({
    left: false,
  });

  const navigate = useNavigate();

  const handleCentrodecostoPageClick = () => {
    navigate("/CentroDeCostos"); // Navega a la página de registro
  };

  const handleEmpresasPageClick = () => {
    navigate("/Empresas"); // Navega a la página de registro
  };

  const handleFormasdePagoPageClick = () => {
    navigate("/FormasdePago"); // Navega a la página de registro
  };

  const handleImpuestosPageClick = () => {
    navigate("/Impuestos"); // Navega a la página de registro
  };

  const handlePorcentajesPageClick = () => {
    navigate("/Porcentajes"); // Navega a la página de registro
  };

  const handleProveedoresPageClick = () => {
    navigate("/Proveedores"); // Navega a la página de registro
  };

  const handleRubrosPageClick = () => {
    navigate("/Rubros"); // Navega a la página de registro
  };

  const handleTipoDeComprobantePageClick = () => {
    navigate("/TipoDeComprobante"); // Navega a la página de registro
  };

  const handleTipoDeCostoPageClick = () => {
    navigate("/TipoDeCosto"); // Navega a la página de registro
  };

  const handleTipoDeOperacionesPageClick = () => {
    navigate("/TipoDeOperaciones"); // Navega a la página de registro
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 400,
        display: "flex",
        flexDirection: "column",
        background: "#423f3fff",
        height: "100vh",
        color: "white",

        padding: 1,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Typography variant="h6" gutterBottom align="center" marginBottom="15px">
        <strong>Catálogo</strong>
      </Typography>
      <List
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "3vh",
          color: "white",

          borderTop: "2px solid #8d6363",
        }}
      >
        <ListItem disablePadding>
          <ListItemButton onClick={handleCentrodecostoPageClick}>
            <ListItemText primary="Cento de Costos" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleEmpresasPageClick}>
            <ListItemText primary="Empresas" />
          </ListItemButton>
        </ListItem>
      </List>

      <List
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "3vh",
          color: "white",
        }}
      >
        <ListItem disablePadding>
          <ListItemButton onClick={handleProveedoresPageClick}>
            <ListItemText primary="Proveedores" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Unidades" />
          </ListItemButton>
        </ListItem>
      </List>
      <List
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "3vh",
          color: "white",
        }}
      >
        <ListItem disablePadding>
          <ListItemButton onClick={handleTipoDeCostoPageClick}>
            <ListItemText primary="Tipo de costos" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handlePorcentajesPageClick}>
            <ListItemText primary="Porcentajes" />
          </ListItemButton>
        </ListItem>
      </List>
      <List
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "3vh",
          color: "white",
        }}
      >
        <ListItem disablePadding>
          <ListItemButton onClick={handleRubrosPageClick}>
            <ListItemText primary="Rubros" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleTipoDeOperacionesPageClick}>
            <ListItemText primary="Tipo de operaciones" />
          </ListItemButton>
        </ListItem>
      </List>
      <List
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "3vh",
          color: "white",
        }}
      >
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="SubRubros" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleTipoDeComprobantePageClick}>
            <ListItemText primary="Tipo de comprobantes" />
          </ListItemButton>
        </ListItem>
      </List>
      <List
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "3vh",
          color: "white",
        }}
      >
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Tareas" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleFormasdePagoPageClick}>
            <ListItemText primary="Formas de pago" />
          </ListItemButton>
        </ListItem>
      </List>
      <List
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "3vh",
          color: "white",
        }}
      >
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Insumos" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Plan de cuentas" />
          </ListItemButton>
        </ListItem>
      </List>
      <List
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "3vh",
          color: "white",
        }}
      >
        <ListItem disablePadding>
          <ListItemButton onClick={handleImpuestosPageClick}>
            <ListItemText primary="Impuestos" />
          </ListItemButton>
        </ListItem>
      </List>

      <Typography variant="h6" gutterBottom align="center">
        <strong>Madulos</strong>
      </Typography>
      <List
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "3vh",
          marginBottom: "15px",
          borderTop: "2px solid #8d6363",
          color: "white",
        }}
      >
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Presupuesto" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Movimientos" />
          </ListItemButton>
        </ListItem>
      </List>

      <Typography variant="h6" gutterBottom align="center">
        <strong>Resultados</strong>
      </Typography>
      <List
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "3vh",

          borderTop: "2px solid #8d6363",
          color: "white",
        }}
      >
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Informes" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: " #2e2d2d", color: "#fff" }}>
        <Toolbar>
          <img className="icono" src={logo} alt="Logo" />

          <Box
            className="boxc"
            onClick={list}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button
                  onClick={toggleDrawer(anchor, true)}
                  color="primary"
                  style={{ color: "#fff" }}
                >
                  <DashboardIcon /> <Typography>Catálogo</Typography>
                </Button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1 }} align="left" />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton size="large" edge="end" color="inherit">
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
