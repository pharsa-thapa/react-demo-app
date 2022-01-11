import React from 'react';
import { Switch } from 'react-router-dom';
import { Home as MainPage } from 'src/pages';
import { Minimal } from 'src/layouts';
import { RouteWithLayout } from './components';

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        exact
        component={MainPage}
        layout={Minimal}
        noFooter={true}
        path="/"
      />
    </Switch>
  );
};

export default Routes;
