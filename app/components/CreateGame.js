import React from 'react';
import getUserList from '../utils/UserList';
import getGameList from '../utils/GameList';

class CreateGame extends React.Component{

  constructor(){
    super();
    this.state = {
      users: [],
      games: [],
      minPlayers: 0,
      maxPlayers: 0,
      countPlayers: 1
    }
  }

  componentWillMount(){
    this.init('kim.sora@web.de', '123')
  }

  init(username, password){
    getUserList(username, password).then(function(response){
      var obj = [{
        userEmail: 'host@game',
        firstName: 'Yourself',
        status: true
      }];
      obj = response.data.users.reduce(function(coll, user){
        coll.push({
          userEmail: user.userEmail,
          firstName: user.firstName,
          status: false
        });
        return coll;
      }, obj);
      this.setState({
        users: obj
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
    newGames.forEach(function(game){
      if(game.status===true){game.status = false}
    });
    newGames[index].status = newGames[index].status===false ?  true : false;
    this.setState({
      games: newGames,
      minPlayers: newGames[index].minPlayers,
      maxPlayers: newGames[index].maxPlayers,
    });
  }

  handleUserClick(index, e){
    console.log(this.state.users[index].userEmail);
    var newUsers = this.state.users;
    var counter = 0;
    if (newUsers[index].status===false) {
      newUsers[index].status = true;
      counter = 1;
    } else {
      newUsers[index].status = false;
      counter = -1;
    }
    console.log('change by ', counter);
    console.log(this.state.countPlayers);
    // newUsers[index].status = newUsers[index].status===false ?  true : false;
    this.setState({
      users: newUsers,
      countPlayers : this.state.countPlayers + counter
      });
    console.log(this.state.countPlayers);
  }

  minAndMaxPlayer(min, max){
    return min === max ?
      min : (min + ' bis ' + max);
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
              <td>{this.minAndMaxPlayer(game.minPlayers, game.maxPlayers)} </td>
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
            <tr onClick={this.handleUserClick.bind(this, index)} key={index} className={user.status===true ? 'info' : ''} >
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
    var reqPlayers = (this.state.countPlayers <= this.state.minPlayers) ?
      this.state.minPlayers :
      (this.state.countPlayers > this.state.minPlayers && this.state.countPlayers < this.state.maxPlayers) ?
      this.state.countPlayers : this.state.maxPlayers;

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
                    <th>Anzahl Spieler</th>
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
            <div className='panel-heading'>Wähle zusätzliche Spieler aus: ({this.state.countPlayers} von {reqPlayers})</div>
            <div className='panel-body'>
              <table className='table table-striped' key={0}>
                <thead>
                  <tr>
                    <th>Spieler-Email</th>
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