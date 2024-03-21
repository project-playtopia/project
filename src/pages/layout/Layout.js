import React from 'react';
import { Outlet, useActionData } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header></header>
      {/* min-width : 727px display none */}
      <nav className='mobile'></nav>
      {/* max-width : 727px display none */}
      <nav className='pc'></nav>
      <main>
        레이아웃
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;