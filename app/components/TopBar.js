import React from 'react';
import {Link} from 'react-router';

const TopBar = () => {
	return (
		<nav className="navbar navbar-default" role="navigation">
      <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
        <Link to={'/'} >MENU </Link>
        <Link to={'/game/new'} >New Game</Link>
      </div>
    </nav>
	)
}

export default TopBar