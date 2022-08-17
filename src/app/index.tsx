import { Nav } from '@components/Nav';
import { Routes } from '@pages/routes';

import { withProviders } from './providers';

import './style/index.scss';

const App = () => {
  return (
    <>
      <Nav />
      <Routes />
    </>
  );
};

export default withProviders(App);
