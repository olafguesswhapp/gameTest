var React = require('react');

var CreateGame = React.createClass({

	render: function() {
		return (
			<div className="row">
        <div className="col-md-4">
          <p>erste Spalte</p>
        </div>
        <div className="col-md-4">
          <p>zweite Spalte</p>
        </div>
        <div className="col-md-4">
          <p>dritte Spalte</p>
        </div>
      </div>
		);
	}

});

module.exports = CreateGame;