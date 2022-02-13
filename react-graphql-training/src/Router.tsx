import { useQuery } from '@apollo/client';
import { BrowserRouter, /* Navigate, */ Route, Routes } from 'react-router-dom';
import { GET_PROFILE } from './services/api/queries/user-queries';
import HomeScreen from './views/Home';
import SigninScreen from './views/Signin';
import SignupScreen from './views/Signup';
import DashboardScreen from './views/Dashboard';
import ProfileScreen from './views/Profile';
import { Layout } from './components/Layout';

function Router(): JSX.Element {
  const { data /*, loading, error */ } = useQuery(GET_PROFILE);

  return (
    <BrowserRouter>
      <Routes>
        {/*         <Navigate to={data ? '/dashboard' : '/'} /> */}
        <Route path="/" element={<HomeScreen />} />
        <Route path="/signin" element={<SigninScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        {data ? (
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<DashboardScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Route>
        ) : (
          '/'
        )}
        <Route path="*" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
