import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import ForgotPass from "./components/ForgotPass/ForgotPass";
import CentroDeCostos from "./components/pages/CentrodeCosto/CentrodeCosto";
import Empresas from "./components/pages/Empresas/Empresas";
import Proveedores from "./components/pages/Proveedores/Proveedores";
import FormasdePago from "./components/pages/FormasdePago/FormasdePago";
import Impuestos from "./components/pages/Impuestos/Impuestos";
import Porcentajes from "./components/pages/Porcentajes/Porcentajes";
import Rubros from "./components/pages/Rubros/Rubros";
import TipoDeComprobante from "./components/pages/TipodeComprobantes/TipodeComprobantes";
import TipoDeCosto from "./components/pages/TipodeCosto/TipodeCosto";
import TipoDeOperaciones from "./components/pages/TipodeOperaciones/TipodeOperaciones";
import PresupuestoCuerp from "./components/pages/Presupuesto/PresupuestoCuerp";
import Unidades from "./components/pages/Unidades/Unidades";

import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Insumos from "./components/pages/Insumos/Insumos";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ForgotPass" element={<ForgotPass />} />
        <Route path="/CentroDeCostos" element={<CentroDeCostos />} />
        <Route path="/Empresas" element={<Empresas />} />
        <Route path="/FormasdePago" element={<FormasdePago />} />
        <Route path="/Impuestos" element={<Impuestos />} />
        <Route path="/Porcentajes" element={<Porcentajes />} />
        <Route path="/Proveedores" element={<Proveedores />} />
        <Route path="/Rubros" element={<Rubros />} />
        <Route path="/TipoDeComprobante" element={<TipoDeComprobante />} />
        <Route path="/TipoDeCosto" element={<TipoDeCosto />} />
        <Route path="/TipoDeOperaciones" element={<TipoDeOperaciones />} />
        <Route path="/PresupuestoCuerp" element={<PresupuestoCuerp />} />
        <Route path="/Unidades" element={<Unidades />} />
        <Route path="/Insumos" element={<Insumos />} />
        <Route path="/" element={<Navigate to="/SignIn" />} />
      </Routes>
    </Router>
  );
};

export default App;
