import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from "react-redux";
import Home from './Home';
import Catalogo from './Catalogo';
import Contacta from './Contacta';
import ElementUno from './ElementUno';
import Login from './Login';
import Dashboard from './Dashboard';
import Register from './Register';
import ElementDos from './ElementDos';
import { store } from "./state/store"

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/contacta" element={<Contacta />} />
          <Route path="/catalogo/element/1" element={< ElementUno />} />
          <Route path="/catalogo/element/2" element={< ElementDos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);
