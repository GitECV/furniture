import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from "react-redux";
import Home from './Home';
import Catalogo from './Catalogo';
import Contacta from './Contacta';
import Element from './Element';
import Login from './Login';
import Dashboard from './Dashboard';
import { store } from "./state/store"

import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/contacta" element={<Contacta />} />
          <Route path="/element" element={< Element />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

reportWebVitals();
