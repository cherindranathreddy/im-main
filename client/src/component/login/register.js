import React from "react";
import loginImg from "../../login.svg";
import Axios from "axios";

export class Register extends React.Component{
  constructor(props) {
    super(props);
    this.state={
        username : "",
        email : "",
        password:"",
    };
  }

  changeUsername = (event) =>{
      this.setState({username:event.target.value});
  }
  changeEmail = (event)=>{
      this.setState({email:event.target.value});
  }
  changePassword = (event) =>{
      this.setState({password:event.target.value});
  }
  sendDetails = () =>{
    Axios.post("http://localhost:3001/api/register",{
        username:this.state.username,
        email:this.state.email,
        password:this.state.password
    }).then((responce)=>{
        console.log(responce.data);
        alert('go to login page');
    });
  }

  render() {
    return (
      <div className="base-container" >
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">USERNAME</label>
              <input type="text" name="username" placeholder="username" onChange={this.changeUsername} />
            </div>
            <div className="form-group">
              <label htmlFor="email">EMAIL</label>
              <input type="text" name="email" placeholder="email" onChange={this.changeEmail}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">PASSWORD</label>
              <input type="password" name="password" placeholder="password" onChange = {this.changePassword} />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={this.sendDetails}>
            Register
          </button>
        </div>
      </div>
    );
  }
}
