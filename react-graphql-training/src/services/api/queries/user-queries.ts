import { gql } from '@apollo/client';

/*
Define your differents queries
*/

export const GET_PROFILE = gql`
  query GetProfile {
    getProfile {
      firstname
      lastname
      email
    }
  }
`;

export const GET_USERS = gql`
  query GetUsers {
    getUsers {
      id
      firstname
      lastname
      email
    }
  }
`;
