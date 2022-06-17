import React, {Component,useState, useEffect} from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { Navigate,Route } from "react-router-dom";
import {Navbar, Nav, NavDropdown,Form,FormControl,Button, Container} from 'react-bootstrap'
import NavBar from './../navbar/NavBar';


class Auth extends Component {
  constructor(props){
      super(props);
      this.state = {
          logged: false,
          name: "",
          trylogin: true,
          msg:" "
      }
  }

  onSubmitHandler = (e) => {
    this.setState({ isLoading: true });
    const b = document.getElementsByClassName("Info")
    console.log("email:" +  b[0].value,)
    axios
      .post("http://localhost:8000/api/user-login", {
        email: b[0].value,
        password: b[1].value,
      })
      .then((response) => {
        
        if (response.data.status === 200){
         
          localStorage.setItem("userData", JSON.stringify(response.data.data));
          console.log("true");
          setTimeout(() => { this.setState({ logged: true });
          this.props.callbackParent(this.state.logged);
           
          }, 200);
          
        }
        else
        {
          console.log(response.data.message)
          this.setState({msg: response.data.message})
        }
      });
    };
  
  render() {
    return (
        <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label >Email address</label>
              <input
                type="email"
                className="form-control mt-1 Info"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1 Info"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              
            </div>
            
          </div>
        </form>
        <button type="submit" className="btn btn-primary" onClick={this.onSubmitHandler}>
                Submit
                
        </button>
        <div><a>{this.state.msg}</a></div>
            
          { this.state.logged ? setTimeout(() => {
          }, 2000) : true}
          { this.state.logged ? <Navigate to="/Search" replace={true}/> : true }
      </div>
      
      
    )};
}

export default Auth;