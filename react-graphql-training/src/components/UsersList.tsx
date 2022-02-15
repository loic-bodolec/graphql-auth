import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../services/api/queries/user-queries';

function UserList() {
  const { data, loading , error } = useQuery(GET_USERS);

  return (
    <div className="users-list-container">
      <h3 className="users-list-title">Liste des membres :</h3>
      {loading && <p>Chargement...</p>}
      {error && <p>Une erreur s'est produite...</p>}
      {data &&
        data.getUsers.map((user: any) => {
          return (
            <li key={user.id} className="user-informations">
              {user.firstname} {user.lastname}
            </li>
          );
        })}
    </div>
  );
}

export default UserList;
