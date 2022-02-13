import React from 'react';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { GET_PROFILE } from '../services/api/queries/user-queries';
import UserList from '../components/UsersList';

function DashboardScreen(): JSX.Element {
  const push = useNavigate();
  const { data /* , loading */, error } = useQuery(GET_PROFILE);

  const onSignOut = () => {
    localStorage.removeItem('token');
    push('/');
  };

  return (
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
  );
}

export default DashboardScreen;
