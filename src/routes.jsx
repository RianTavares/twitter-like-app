import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import UIShell from './template/UIShell';
import Home from './pages/Home';
import Likes from './pages/Likes';

const RoutesCpnt = () => (
  <BrowserRouter>
    <UIShell>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/likes" element={<Likes />} />
      </Routes>
    </UIShell>
  </BrowserRouter>
);

export default RoutesCpnt;
