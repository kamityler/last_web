import React, {Component,useState, useEffect}  from 'react';

import './Book.css';
import axios from "axios";
import {Navbar, Nav, NavDropdown,Form,FormControl,Button, Container} from 'react-bootstrap'

import {BrowserRouter as Router, Routes, Route , Link} from 'react-router-dom'

class Book extends Component {
  constructor(props){
      super(props);
      this.state = {
          book: props.constructor,
          itsLoged: false   
            
      }

  }

  componentDidMount() {
    this.setState({itsLoged: this.props.state})
  }
  Bla = ()=>{
    console.log("Succses");
    localStorage.setItem("bookData", JSON.stringify(this.state.book));
  }

  onSubmitHandler = (e) => {
       
   
axios
  .post("http://localhost:8000/api/del-book",this.state.book)
  .then((response) => {
    if (response.data.status === 200) {
      console.log(this.props.constructor);
      const b = this.state;
      this.props.callbackParent(this.state.book);
      localStorage.setItem("DeletedBook", b);
      this.setState({
        book: {
         
        },
      });
      setTimeout(() => {
        this.setState({ msg: "" });
      }, 2000);
    }

    alert(response.data.message);
  });
};

    render(){ 
      let book = this.state.book;          

    return (
       
            <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src={book.Picture} alt="Card image cap"/>
        <div className="card-body">
          <h3 className="card-title">{book.Name}</h3>
          <h5 className="card-text">{book.Author}</h5>
          <p className="card-text">{book.Price}</p>
          {
            
            this.state.itsLoged ? <Nav  className="btn btn-primary" onMouseEnter={this.Bla} as={Link} to="/EditBook"  >Edit</Nav> : true}

            {this.state.itsLoged ? <a  className="btn btn-primary" onClick={this.onSubmitHandler} >Delete</a> : true }
          
        </div>
      </div>
    );
  };
}
export default Book;