import React from 'react';
import { AppHeader } from '../AppHeader/AppHeader';
import { Editor } from '../Editor/Editor';
import { Route, Switch } from 'react-router-dom';
import { Privacy } from '../../routes';

export const App = () => <div>
    <AppHeader />
    <Switch>
      <Route path="/" exact component={Editor} />
      <Route path="/privacy" component={Privacy} />
    </Switch>
</div>