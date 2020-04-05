import React from 'react';
import { AppHeader } from '../AppHeader/AppHeader';
import { Editor } from '../Editor/Editor';
import { Route, Switch } from 'react-router-dom';
import { Privacy } from '../../routes';
import { Terms } from '../../routes/Terms/Terms';

export const App = () => <div>
    <AppHeader />
    <Switch>
      <Route path="/" exact component={Editor} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
    </Switch>
</div>