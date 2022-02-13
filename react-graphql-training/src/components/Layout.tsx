import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import SideBar from './nav/SideBar';

export const Layout = () => {
  const [isActive, setIsActive] = useState(false);
  const showSidebar = () => setIsActive(!isActive);

  const id = 'layout';

  return (
    <>
      <SideBar isActive={isActive} showSidebar={showSidebar} />
      <Header showSidebar={showSidebar} />
      <div data-testid={`${id}-children`}>
        <Outlet />
      </div>
    </>
  );
};
