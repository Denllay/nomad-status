import { Route, Routes as UIRoutes } from 'react-router-dom';

import { Faq } from './Faq';
import { Main } from './Main';

export const Routes = () => {
  return (
    <UIRoutes>
      <Route path='/' element={<Main />} />
      <Route path='faq' element={<Faq />} />
    </UIRoutes>
  );
};
