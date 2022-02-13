import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useHistory } from 'react-router';
import Header from '../components/header/Header';
import SideBar from '../components/nav/SideBar';
import { Button } from 'react-bootstrap';
import { GET_PROFILE } from '../services/api/queries/user-queries';
import UserList from '../components/UsersList';

function DashboardScreen(): JSX.Element {
  const [isActive, setIsActive] = useState(false);
  const showSidebar = () => setIsActive(!isActive);
  const { replace } = useHistory();
  const { data /* , loading */, error } = useQuery(GET_PROFILE);

  const onSignOut = () => {
    localStorage.removeItem('token');
    replace('/');
  };

  return (
    <>
      <Header showSidebar={showSidebar} />
      <SideBar isActive={isActive} showSidebar={showSidebar} />
      <div className="dashboard-container">
        <h1>Tableau de bord</h1>
        {error && <p>Erreur!</p>}
        {data && (
          <div>
            <p>Hello {data.getProfile.firstname}!</p>
            <Button size="sm" onClick={onSignOut}>
              Sign out
            </Button>
          </div>
        )}
        <UserList />
      </div>
    </>
  );
}

export default DashboardScreen;
