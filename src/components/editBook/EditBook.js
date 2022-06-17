import React, {Component,useState, useEffect} from 'react'
import axios from "axios";
import { Link,Redirect } from "react-router-dom";
import { Navigate,Route } from "react-router-dom";
import {Navbar, Nav, NavDropdown,Form,FormControl,Button, Container} from 'react-bootstrap'
class EditBook extends Component {
    constructor(props){
        super(props);
        this.state = {
               data: {
                id: "",
                name: "",
                price: "",
                author: "",
                picture: "",
              },
              logged: false
            };
        }

    componentDidMount() {
        const book = JSON.parse(localStorage.getItem("bookData"));
        console.log(book);
        const { data } = this.state;
        data.id = book.id;
        data.name = book.Name;
        data.price = book.Price;
        data.author = book.Author;
        data.picture = book.Picture;
    this.setState({data})
        document.getElementsByName("name")[0].value = book.Name;
        document.getElementsByName("picture")[0].value = book.Picture;
        document.getElementsByName("author")[0].value = book.Author;
        document.getElementsByName("price")[0].value = book.Price;



    }
  
    onChangehandler = (e, key) => {
        console.log("Clicked");
        const { data } = this.state;
        data[e.target.name] = e.target.value;
        this.setState({ data });
        console.log(this.state);
      };

      onSubmitHandler = (e) => {
    axios
      .post("http://localhost:8000/api/book-edit",this.state.data)
      .then((response) => {
        if (response.data.status === 200) {
          console.log(response.data);
         
          
          
        }
        this.setState({logged: true})
        
      });
  };


    render(){
        const book = JSON.parse(localStorage.getItem("bookData"));
          return (
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name of book</Form.Label>
              <Form.Control name="name"  onChange={this.onChangehandler} placeholder={this.state.data.name} />
              
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Picture</Form.Label>
              <Form.Control name="picture" onChange={this.onChangehandler} placeholder="enter refernce ot Picture" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Author</Form.Label>
              <Form.Control name="author" onChange={this.onChangehandler} placeholder="enter Author" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Price</Form.Label>
              <Form.Control name="price"  onChange={this.onChangehandler}placeholder="enter Price" />
            </Form.Group>
            { this.state.logged ? <Navigate to="/Book" replace={true}/> : true }
            <a  className="btn btn-primary" type="submit" onClick={this.onSubmitHandler}>
              Edit
             
            </a>
           
          </Form>
           
          )};
}

export default EditBook;