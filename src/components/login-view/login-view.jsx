// function component case :
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login-view.scss";
import RegistrationView from "../registration-view/registration-view";

export function LoginView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
    props.onLoggedIn(username);
  };

  return (
    <div className="Login">
      <Form>
        <Form.Group controlId="formUsername">
          <Form.Control
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Control
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Login
        </Button>
        {/* Link to RegistrationView doesn't work, "expected string"<p>
          Are you a new user? <br />
          Register{" "}
          <a link={<RegistrationView />} rel="registration link ">
            here
          </a>
          !
  </p> */}
      </Form>
    </div>
  );
}

// class component to see the difference between class and function components.
// import React from 'react'

// export class LoginView extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       username: '',
//       password: ''
//     };

//     this.onUsernameChange = this.onUsernameChange.bind(this);
//     this.onPaswordChange = this.onPasswordChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   onUsernameChange(event) {
//     this.setState({
//       username: event.target.value
//     });
//   }

//   onPasswordChange(event){
//     this.setState({
//       password: event.target.value
//     });
//   }

//   handleSubmit() {
//     const { username, password } = this.state;
//     console.log(username, password);
//     /* send a request to the server for authentication
//     then call this.props.onLoggedIn(username) */
//   }

//   render() {
//     return (
//       <form>
//         <label>
//           Username:
//           <input type="text" value={this.state.username} onChange={this.onUsernameChange } />
//         </label>
//         <label>
//           Password:
//           <input type="password" value={this.state.password} onChange={this.onPasswordChange} />
//         </label>
//         <button type="button" onClick={this.handleSubmit}>Submit</button>
//       </form>
//     );
//   }
// }