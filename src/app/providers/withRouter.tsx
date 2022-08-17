import { BrowserRouter } from 'react-router-dom';

export const withRouter = (Component: React.FC) => () =>
  (
    <BrowserRouter>
      <Component />
    </BrowserRouter>
  );
