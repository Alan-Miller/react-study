import React from 'react';
import { withRouter, Link } from 'react-router-dom';

function Header(props) {

    return (
        <div className="Header">
            <h1>{props.children}</h1>
            <div className="links">
                <Link to="/"><div>Home</div></Link>
                <Link to="/data"><div>Data</div></Link>
                <Link to="/db"><div>DB</div></Link>
                <Link to="/test"><div>Test</div></Link>
                <Link to="/starwars"><div>StarWars</div></Link>
                <Link to="/pokemon"><div>Pokemon</div></Link>
            </div>
            <div className="location">props.location.pathname is: {JSON.stringify(props.location.pathname, null, 3)}</div>
        </div>
    )
}

export default withRouter(Header);