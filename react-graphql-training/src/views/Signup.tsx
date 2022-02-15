import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { SIGNUP } from '../services/api/mutations/user-mutations';

function SignupScreen(): JSX.Element {
  const { replace } = useHistory();
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const [failed, setFailed] = useState(false);
  const [doSignUp, { /* loading, */ error }] = useMutation(SIGNUP);

  const handleSubmit = async (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false || password !== confirmPassword) {
      event.preventDefault();
      event.stopPropagation();
      setFailed(true);
    } else {
      setValidated(true);
      setFailed(false);
    await doSignUp({
      variables: {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password
      }
    });
    replace('/');
  }
};

  return (
    <div className="signup-container">
      <h1>Inscription</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="Form.ControlInput1-signup">
          <Form.Label className="signup-form-label">Firstname</Form.Label>
          <Form.Control type="text" placeholder="your firstname" value={firstname} onChange={(e) => setFirstName(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Form.ControlInput2-signup">
          <Form.Label className="signup-form-label">Lastname</Form.Label>
          <Form.Control type="text" placeholder="your lastname" value={lastname} onChange={(e) => setLastName(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Form.ControlInput3-signup">
          <Form.Label className="signup-form-label">Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Form.ControlInput4-signup">
          <Form.Label className="signup-form-label">Password</Form.Label>
          <Form.Control type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Form.ControlInput5-signup">
          <Form.Label className="signup-form-label">Confirmation du mot de passe</Form.Label>
          <Form.Control type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </Form.Group>
        <Button className="signup-button" type="submit">
        S'inscrire
      </Button>
      </Form>
      {error && <p className="message-error">Une erreur s'est produite!</p>}
      {failed && <p className="message-fail">Merci de compléter correctement le formulaire!</p>}
      <Link className="signup-link" to="/signin">
        Déjà un compte?
      </Link>
    </div>
  );
}

export default SignupScreen;
