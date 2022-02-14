import React from 'react';
import { useQuery } from '@apollo/client';
import { useHistory } from 'react-router';
import { Button } from 'react-bootstrap';
import { GET_PROFILE } from '../services/api/queries/user-queries';
import UserList from '../components/UsersList';

function DashboardScreen(): JSX.Element {
  const { replace } = useHistory();
  const { data /* , loading */, error } = useQuery(GET_PROFILE);

  const onSignOut = () => {
    localStorage.removeItem('token');
    replace('/');
  };

  return (
    <>
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
