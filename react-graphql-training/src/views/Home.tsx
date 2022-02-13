import { useHistory } from 'react-router';
import { Button } from 'react-bootstrap';
import Logo from '../assets/logo.png';

function HomeScreen(): JSX.Element {
  const { push } = useHistory();

  return (
    <div className="home-container">
      <img className="logo-home" src={Logo} alt="logo" />
      <h1 className="home-title">My title</h1>
      <p className="home-texte">lorem ipsum!</p>
      <div className="home-buttons">
        <Button
          className="home-button"
          onClick={() => {
            push('/signin');
          }}
        >
          Connexion
        </Button>
        <Button
          className="home-button"
          onClick={() => {
            push('/signup');
          }}
        >
          Inscription
        </Button>
      </div>
    </div>
  );
}

export default HomeScreen;
