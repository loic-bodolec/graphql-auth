import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const SIGNUP = gql`
  mutation signup($firstname: String!, $lastname: String!, $email: String!, $password: String!) {
    signup(firstname: $firstname, lastname: $lastname, email: $email, password: $password) {
      id
      firstname
      lastname
      email
    }
  }
`;

function SignupScreen(): JSX.Element {
  const push = useNavigate();
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [doSignUp, { loading, error }] = useMutation(SIGNUP);

  const onSubmit = async () => {
    await doSignUp({
      variables: {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password
      }
    });
    // success
    push('/signin');
  };

  return (
    <div className="signup-container">
      <h1>Inscription</h1>
      <Form>
        <Form.Group className="mb-3" controlId="Form.ControlInput1-signup">
          <Form.Label>Firstname</Form.Label>
          <Form.Control type="text" placeholder="your firstname" value={firstname} onChange={(e) => setFirstName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Form.ControlInput2-signup">
          <Form.Label>Lastname</Form.Label>
          <Form.Control type="text" placeholder="your lastname" value={lastname} onChange={(e) => setLastName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Form.ControlInput3-signup">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Form.ControlInput4-signup">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="name@example.com" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
      </Form>
      <Button className="signup-button" onClick={onSubmit} disabled={loading === true}>
        S'inscrire
      </Button>
      {error && <p>Error</p>}
      <Link className="signup-link" to="/signin">
        Déjà un compte?
      </Link>
    </div>
  );
}

export default SignupScreen;
