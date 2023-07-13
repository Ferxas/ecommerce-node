import React from "react";
import Header from './Header';
import Footer from './Footer';

export const Layout = (porps) => {
  return (
    <div>
      <Header />
      <main>
      {porps.children}
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
