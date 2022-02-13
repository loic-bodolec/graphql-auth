import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { GET_PROFILE } from '../services/api/queries/user-queries';

function Profile(): JSX.Element {
  const { data, loading /* , error */ } = useQuery(GET_PROFILE);

  return (
    <div className="dashboard-container">
      <h1>Mon profil</h1>
      {loading && <p>Chargement...</p>}
      {data && (
        <div>
          <p>Prénom : {data.getProfile.firstname}</p>
          <p>Nom : {data.getProfile.lastname}</p>
          <p>Email : {data.getProfile.email}</p>
        </div>
      )}
      <Link className="profile-link" to="/dashboard">
        retour au tableau de bord
      </Link>
    </div>
  );
}

export default Profile;
