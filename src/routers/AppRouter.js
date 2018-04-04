import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import Links from '../components/Links';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/aboutme" component={About} />
                <Route path="/links" component={Links} />
                <Route component={NotFoundPage} />
            </Switch>
            <p>Footer</p>
        </div>
    </BrowserRouter>
);

export default AppRouter;