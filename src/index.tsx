import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Catalogo from './Catalogo';
import Contacta from './Contacta';
import Element from './Element';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/contacta" element={<Contacta />} />
          <Route path="/element" element={< Element />} />
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
