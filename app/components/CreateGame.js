import React from 'react';
import getQPointsUserInfo from '../utils/helpers';

class CreateGame extends React.Component{

  constructor(){
    super();
    this.state = {
      users: []
    }
  }

  componentWillMount(){
    this.init('kim.sora@web.de', '123')
  }

  init(username, password){
    getQPointsUserInfo(username, password).then(function(response){
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
  }

  handleClick(index, e){
    console.log(this.state.users[index].userEmail);
    var newUsers = this.state.users;
    newUsers[index].status = newUsers[index].status===false ?  true : false;
    this.setState( { users: newUsers } );
  }

  render(){
    var users = this.state.users;
    console.log('render');
    console.log(users);
    var programContent = (
      <tr key={0} >
        <td>Loading</td>
        <td></td>
      </tr>
    );
    if (users){
      programContent = users.map((user, index) => {
        return (
          <tr onClick={this.handleClick.bind(this, index)} key={index} className={user.status===true ? 'success' : ''} >
            <td>{user.userEmail}</td>
            <td>{user.firstName}</td>
          </tr>
        );
      });
    }
    return (
      <div className="panel panel-default">
        <div className='panel-heading'>Wähle Spielteilnehmer aus:</div>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Spieler</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {programContent}
          </tbody>
        </table>
      </div>
    )
  }
}

export default CreateGame

/* this.init('kim.sora@web.de', '123') */
/* this.init('olaf@guesswhapp.de', '12345') */