import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { SIGNIN } from '../services/api/mutations/user-mutations';

function SigninScreen(): JSX.Element {
  const { replace } = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const [failed, setFailed] = useState(false);
  const [doSignin, { /* loading, */ error }] = useMutation(SIGNIN);

  const handleSubmit = async (event: any) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
    setFailed(false);
    const result = await doSignin({
      variables: {
        email: email,
        password: password
      }
    });
    if (form.checkValidity() === true && result.data.signin) {
      // success
      localStorage.setItem('token', result.data.signin);
      replace('/dashboard');
    } else {
      // failed
      setFailed(true);
    }
  };

  return (
    <div className="signin-container">
      <h1>Connexion</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="Form.ControlInput1-signin">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Form.ControlInput2-signin">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </Form.Group>
        <Button className="signin-button" type="submit">
        Se connecter
      </Button>
      </Form>
      {error && <p className="message-error">Une erreur s'est produite!</p>}
      {failed && <p className="message-fail">Données incorrectes!</p>}
      <Link className="signin-link" to="/signup">
        Pas encore de compte?
      </Link>
    </div>
  );
}

export default SigninScreen;
