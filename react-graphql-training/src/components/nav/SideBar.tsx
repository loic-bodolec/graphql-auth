import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { AiOutlineClose, AiOutlineDashboard } from 'react-icons/ai';
import { MdAddCircleOutline, MdPeopleAlt } from 'react-icons/md';

type SideBarProps = {
  isActive: boolean;
  showSidebar: () => void;
};

const Sidebar = ({ isActive, showSidebar }: SideBarProps) => {
  return (
    <section>
      <IconContext.Provider value={{ color: '#2e4acd' }}>
        <nav className={`sidebar-nav ${isActive && 'active'}`}>
          <div className="sidebar-wrap">
            <div className="menu-cross">
              <AiOutlineClose onClick={showSidebar} />
            </div>
            <Nav.Item className="sidebar-nav-item">
              <Nav.Link href="/dashboard">
                <AiOutlineDashboard className="sidebar-icon" /> Tableau de bord
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="sidebar-nav-item">
              <Nav.Link href="/users">
                <MdPeopleAlt className="sidebar-icon" /> Liste des membres
              </Nav.Link>
            </Nav.Item>
            <Button className="add-project-button" size="sm">
              <MdAddCircleOutline className="add-icon" /> Nouveau projet
            </Button>
          </div>
        </nav>
      </IconContext.Provider>
    </section>
  );
};

export default Sidebar;
