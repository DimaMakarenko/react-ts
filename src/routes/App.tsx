import { Redux, ReduxToolkit } from 'feature';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import '../index.css';
import { Routes } from './Routes';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={Routes.Redux} element={<Redux />} />
        <Route path={Routes.ReduxToolkit} element={<ReduxToolkit />} />
      </Switch>
    </BrowserRouter>
  );
};
