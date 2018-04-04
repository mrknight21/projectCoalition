import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Coalition</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Map</NavLink>
        <NavLink to="/aboutme" activeClassName="is-active">About us</NavLink>
        <NavLink to="/links" activeClassName="is-active">Relevant links</NavLink>
    </header>
);

export default Header;