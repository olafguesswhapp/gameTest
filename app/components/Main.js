import React from 'react';
import TopBar from './TopBar';

class Main extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			pages: [
				{ pageTitle: 'Players', pageLink: '/'},
				{ pageTitle: 'Games', pageLink: '/'},
				{ pageTitle: 'New Game', pageLink: '/game/new'}
			]
		}
	}

	render() {
		return (
	    <div className="container">
	      <TopBar pages={this.state.pages} />
	      <div className="jumbotron">
	        {this.props.children}
	      </div>
	    </div>
	  )
	}
}

export default Main