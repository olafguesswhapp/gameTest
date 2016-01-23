import React from 'react';
import getQPointsUserInfo from '../utils/helpers';

class CreateGame extends React.Component{

  constructor(){
    super();
    this.state = {
      responseData: {}
    }
  }

  componentWillMount(){
    this.init('kim.sora@web.de', '123')
  }

  init(username, password){
    getQPointsUserInfo(username, password).then(function(response){
      this.setState({
        responseData: response.data 
      });
    }.bind(this));
  }

  render(){
    var responseData = this.state.responseData;
    console.log('render');
    console.log(responseData.programData);
    var programContent = '';
    if (responseData.programData){
      programContent = responseData.programData.map((data, index) => {
        console.log(data.programName);
        return (
          <div className="col-md-4" key={index}>
            <p>{data.programName}</p>
            <p>{data.programCompany}</p>
          </div>
        );
      });
    }
    return (
      <div className="row">
        <div className="col-md-4">
          <p>{responseData.message}</p>
        </div>
        {programContent}

      </div>
    )
  }
}

export default CreateGame

/* this.init('kim.sora@web.de', '123') */
/* this.init('olaf@guesswhapp.de', '12345') */