import { useQuery } from '@apollo/client';
import { Redirect, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { GET_PROFILE } from './services/api/queries/user-queries';
import HomeScreen from './views/Home';
import SigninScreen from './views/Signin';
import SignupScreen from './views/Signup';
import DashboardScreen from './views/Dashboard';
import ProfileScreen from './views/Profile';
import Layout from './components/layout/Layout';

function Router(): JSX.Element {
  const { data /*, loading, error */ } = useQuery(GET_PROFILE);

  return (
    <BrowserRouter>
      <Redirect exact path="/" to={data ? '/dashboard' : '/'} />
      <Route exact path="/signin">
        <SigninScreen />
      </Route>
      <Route exact path="/signup">
        <SignupScreen />
      </Route>
      {data && (
        <Layout>
          <Route exact path="/dashboard">
            <DashboardScreen />
          </Route>
          <Route exact path="/profile">
            <ProfileScreen />
          </Route>
        </Layout>
      )}
      <Route exact path="/">
        <HomeScreen />
      </Route>
    </BrowserRouter>
  );
}

export default Router;
