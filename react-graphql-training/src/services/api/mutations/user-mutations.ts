import gql from 'graphql-tag';

/*
Define your differents mutations
*/

export const SIGNUP = gql`
  mutation signup($firstname: String!, $lastname: String!, $email: String!, $password: String!) {
    signup(firstname: $firstname, lastname: $lastname, email: $email, password: $password) {
      id
      firstname
      lastname
      email
    }
  }
`;

export const SIGNIN = gql`
  mutation signin($email: String!, $password: String!) {
    signin(email: $email, password: $password)
  }
`;
