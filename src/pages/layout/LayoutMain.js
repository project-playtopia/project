import React from 'react';
import { Outlet, useActionData } from 'react-router-dom';

const LayoutMain = () => {
  return (
    <div>
      <header></header>
      {/* min-width : 727px display none */}
      <nav className='mobile'></nav>
      {/* max-width : 727px display none */}
      <nav className='pc'></nav>
      <main>
        메인페이지 레이아웃 (footer 포함)
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default LayoutMain;