import { Redux } from 'pages';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import '../index.css';
import { Routes } from './Routes';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={Routes.Redux} element={<Redux />} />
      </Switch>
    </BrowserRouter>
  );
};
