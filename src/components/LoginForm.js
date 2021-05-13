import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super(); 

    this.state = {
      username: 'username',
      password: 'password'
    };
  }

  
  handleUserChange = event => {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.handleLogin(this.state)
  }
  

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" 
              value={this.state.username}
              onChange={this.handleUserChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" 
              value={this.state.username}
              onChange={this.handleUserChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
