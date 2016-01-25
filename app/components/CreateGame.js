import React from 'react';
import getUserList from '../utils/UserList';
import getGameList from '../utils/GameList';

class CreateGame extends React.Component{

  constructor(){
    super();
    this.state = {
      users: [],
      games: []
    }
  }

  componentWillMount(){
    this.init('kim.sora@web.de', '123')
  }

  init(username, password){
    getUserList(username, password).then(function(response){
      this.setState({
        users: response.data.users.map(function(user){
          var obj = {
            userEmail: user.userEmail,
            firstName: user.firstName,
            status: false
          };
          return obj;
        })
      });
    }.bind(this));

    getGameList().then(function(response){
      this.setState({
        games: response.data.games.map(function(game){
          var obj = {
            gameTitle: game.gameTitle,
            minPlayers: game.minPlayers,
            maxPlayers: game.maxPlayers,
            status: false
          };
          return obj;
        })
      });
    }.bind(this));
  }

  handleGameClick(index, e){
    console.log(this.state.games[index].gameTitle);
    var newGames = this.state.games;
    newGames[index].status = newGames[index].status===false ?  true : false;
    this.setState( { games: newGames } );
  }

  handleUserClick(index, e){
    console.log(this.state.users[index].userEmail);
    var newUsers = this.state.users;
    newUsers[index].status = newUsers[index].status===false ?  true : false;
    this.setState( { users: newUsers } );
  }

  displayGameList(){
    var games = this.state.games;
    console.log(games);
    if (games){
      return(
        games.map((game, index) => {
          return (
            <tr onClick={this.handleGameClick.bind(this, index)} key={index} className={game.status===true ? 'success' : ''} >
              <td>{game.gameTitle}</td>
              <td>{game.minPlayers} / {game.maxPlayers} </td>
            </tr>
          );
        })
      )  
    } else {
      return (
        <tr key={0} >
          <td>Loading</td>
          <td></td>
        </tr>
      );
    }
  };

  displayUserList(){
    var users = this.state.users;
    console.log(users);
    if (users){
      return(
        users.map((user, index) => {
          return (
            <tr onClick={this.handleUserClick.bind(this, index)} key={index} className={user.status===true ? 'success' : ''} >
              <td>{user.userEmail}</td>
              <td>{user.firstName}</td>
            </tr>
          );
        })
      )  
    } else {
      return (
        <tr key={0} >
          <td>Loading</td>
          <td></td>
        </tr>
      );
    }
  };

  render(){
    var games = this.state.games;
    console.log('render');
    var userList = this.displayUserList();
    var gameList = this.displayGameList();
    return (
      <div className='row'>
        <div className='col-md-6'>
          <div className="panel panel-default">
            <div className='panel-heading'>Wähle ein Spiel aus:</div>
            <div className='panel-body'>
              <table className='table table-striped' key={1}>
                <thead>
                  <tr>
                    <th>Spiel</th>
                    <th>Anzahl</th>
                  </tr>
                </thead>
                <tbody>
                  {gameList}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className='col-md-1'></div>

        <div className="col-md-6">
          <div className="panel panel-default">
            <div className='panel-heading'>Wähle Spielteilnehmer aus:</div>
            <div className='panel-body'>
              <table className='table table-striped' key={0}>
                <thead>
                  <tr>
                    <th>Spieler</th>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>
                  {userList}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default CreateGame

/* this.init('kim.sora@web.de', '123') */
/* this.init('olaf@guesswhapp.de', '12345') */