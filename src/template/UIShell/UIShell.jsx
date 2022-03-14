import React from 'react';
import Menu from '../../components/Menu';
import TopBar from '../../components/TopBar';
import withRouter from '../helpers/withRouter';

const UIShell = ({ children }) => (
  <section className="twitter-like-app">
    <TopBar />
    {children}
    <Menu />
  </section>
);

export default withRouter(UIShell);
