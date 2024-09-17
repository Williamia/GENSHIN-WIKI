import React from 'react';
import Footer from '../Footer/footer';
import Menu from '../Menu/menu';
import './layout.css';

function Layout({ children }) {
  return (
    <div className="layout-class">
      <Menu />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
