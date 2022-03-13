import React from 'react';
import Routes from './routes';

import TopBar from './components/TopBar';
import Menu from './components/Menu';

const App = () => (
  <section className="twitter-like-app">
    <TopBar />
    <Routes />
    <Menu />
  </section>
);

export default App;
