import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ManagePage } from './pages/ManagePage';

export const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Switch>
          <Route path="/" exact>
            <ManagePage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
