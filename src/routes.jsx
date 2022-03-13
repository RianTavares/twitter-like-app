import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';

const RoutesCpnt = () => (
  <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default RoutesCpnt;
