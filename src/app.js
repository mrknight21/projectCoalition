
import React from 'react';
import ReactDOM from 'react-dom';
import "normalize.css/normalize.css";
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';

const Layout = (props) => {
    return (
        <div>
            <AppRouter/>
        </div>
    );
}

ReactDOM.render(<Layout/>, document.getElementById('app'));
