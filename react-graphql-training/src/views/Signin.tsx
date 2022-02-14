import { useMutation } from '@apollo/client';
import { /* useEffect,  */ useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { SIGNIN } from '../services/api/mutations/user-mutations';

function SigninScreen(): JSX.Element {
  const push = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [failed, setFailed] = useState(false);
  const [doSignin, { loading, error }] = useMutation(SIGNIN);

  /* provisional */
  /** 
  function refreshPage() {
    window.location.reload();
  } 
  */

  const onSubmit = async () => {
    setFailed(false);
    const result = await doSignin({
      variables: {
        email: email,
        password: password
      }
    });
    if (result.data.signin) {
      // success
      localStorage.setItem('token', result.data.signin);
      push('/dashboard');
      /* refreshPage(); */
    } else {
      // failed
      setFailed(true);
    }
  };

  return (
    <div className="signin-container">
      <h1>Connexion</h1>
      <Form>
        <Form.Group className="mb-3" controlId="Form.ControlInput1-signin">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Form.ControlInput2-signin">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
      </Form>
      <Button className="signin-button" onClick={onSubmit} disabled={loading === true}>
        Se connecter
      </Button>
      {error && <p>Erreur!</p>}
      {failed && <p>Données incorrectes!</p>}
      <Link className="signin-link" to="/signup">
        Pas encore de compte?
      </Link>
    </div>
  );
}

export default SigninScreen;
