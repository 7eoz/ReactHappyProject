import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/landing';
import OrphanageMaps from './pages/OrphanagesMap';

function Routes() {
    return (
        <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/app" component={OrphanageMaps}/>
        </Switch>
        </BrowserRouter>
    );
}

export default Routes;