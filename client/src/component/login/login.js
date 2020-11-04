import React from "react";
import {useState,useEffect} from "react";
import loginImg from "../../login.svg";
import Axios from "axios";

export function Login() {
  const [username,setusername]=useState("");
  const [password,setpassword]=useState("");
  const [message,setmessage]=useState("");

  const changeUsername = (event) =>{
      setusername(event.target.value);
  }
   const changePassword = (event) =>{
      setpassword(event.target.value);
  }
  const changeMessage = (event) => {
      setmessage(event.data.message);
  }

  const sendLoginDetails = () =>{
      Axios.post("http://localhost:3001/api/login",{
        username:username,
        password:password
    }).then((responce)=>{
        console.log(responce.data);
        if(responce.data.message){
            changeMessage(responce);
        }else{
            alert('welcome to dashBoard');
        }
    });
    Axios.defaults.withCredentials = true;
  }

  useEffect(()=>{
      Axios.get("http://localhost:3001/api/login").then((responce)=>{
          if(responce.data.loggedIn == true){
            console.log(responce.data);
            alert('already logged in');
          }
      })
  },[]);

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
              <input type="text" name="username" placeholder="username" onChange={changeUsername}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">PASSWORD</label>
              <input type="password" name="password" placeholder="password" onChange={changePassword}/>
            </div>
          </div>
        </div>
        <div className="footer">
            {<p>{message}</p>}
          <button type="button" className="btn" onClick={sendLoginDetails}>
            Login
          </button>
        </div>
      </div>
    );
}
