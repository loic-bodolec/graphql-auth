import React, { useState } from 'react';
import Header from '../header/Header';
import SideBar from '../nav/SideBar';

type LayoutProps = {
  children: any;
};

const Layout = ({ children }: LayoutProps) => {
  const [isActive, setIsActive] = useState(false);
  const showSidebar = () => setIsActive(!isActive);

  return (
    <>
      <header className="header">
        <Header showSidebar={showSidebar} />
      </header>
      <nav className="sidebar">
        <SideBar isActive={isActive} showSidebar={showSidebar} />
      </nav>
      <main>{children}</main>
    </>
  );
};

export default Layout;
