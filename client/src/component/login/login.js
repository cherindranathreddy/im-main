import React,{useEffect} from "react";
import loginImg from "../../login.svg";
import Axios from "axios";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username:'',
        password:'',
        message:'',
    };
  }
  changeUsername = (event) =>{
      this.setState({username:event.target.value});
  }
  changePassword = (event) =>{
      this.setState({password:event.target.value});
  }
  changeMessage = (event) => {
      this.setState({message:event.data.message});
  }

  sendLoginDetails = () =>{
      Axios.post("http://localhost:3001/api/login",{
        username:this.state.username,
        password:this.state.password
    }).then((responce)=>{
        console.log(responce.data);
        if(responce.data.message){
            this.changeMessage(responce);
        }else{
            alert('welcome to dashBoard');
        }
    });
    Axios.defaults.withCredentials = true;

  }

  render() {
    return (
      <div className="base-container" >
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">USERNAME</label>
              <input type="text" name="username" placeholder="username" onChange={this.changeUsername}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">PASSWORD</label>
              <input type="password" name="password" placeholder="password" onChange={this.changePassword}/>
            </div>
          </div>
        </div>
        <div className="footer">
            {<p>{this.state.message}</p>}
          <button type="button" className="btn" onClick={this.sendLoginDetails}>
            Login
          </button>
        </div>
      </div>
    );
  }
}