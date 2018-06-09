import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Movies from 'containers/movies/Movies'

const Routes = (props) => (
    <Switch>
        <Route path="/login" render={() => <h1>Login</h1>} />
        <Route path="/register" render={() => <h1>Register</h1>} />
        <Route path="/movies" render={() => <Movies/>} />
        <Route path="/movies/:id" render={() => <h1>Movie</h1>} />
        <Route exact path="/" render={() => <Redirect to={'/movies'}/>} />
        <Route path="/**" render={() => <h1>404! Not found!</h1>} />
    </Switch>
);
export default Routes;