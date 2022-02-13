import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import Logo from '../../assets/logo.png';

type HeaderProps = {
  showSidebar: () => void;
};

const Header = ({ showSidebar }: HeaderProps) => {
  return (
    <IconContext.Provider value={{ color: 'hsl(240, 100%, 50%)' }}>
      <div className="top-navbar">
        <div className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </div>
        <div className="menu-bars-title">
          <Link className="logo-link" to="/dashboard">
            <img className="logo-header" src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="top-links">
          <Link to="/profile" className="header-link">
            <FaIcons.FaRegUserCircle />
          </Link>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Header;
