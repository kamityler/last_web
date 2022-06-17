import React, {Component,useState, useEffect} from 'react'
import axios from "axios";
import { Link,Redirect } from "react-router-dom";
import {Navbar, Nav, NavDropdown,Form,FormControl,Button, Container} from 'react-bootstrap'
class AddBook extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {
                name: "",
                price: "",
                author: "",
                picture: "",
              },
        }

    }

    onChangehandler = (e, key) => {
        console.log("Clicked");
        const { data } = this.state;
        data[e.target.name] = e.target.value;
        this.setState({ data });
        console.log(this.state);
      };


      onSubmitHandler = (e) => {
       
        e.preventDefault();
        this.setState({ isLoading: true });
        this.setState({ isLoading: true });
    axios
      .post("http://localhost:8000/api/adds-book",this.state.data)
      .then((response) => {
        if (response.data.status === 200) {
          console.log(response.data);
         
          this.setState({
            data: {
              name: "",
              picture: "",
              author: "",
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
            const books = this.state.books;
          return (
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name of book</Form.Label>
              <Form.Control name="name"  onChange={this.onChangehandler} placeholder="enter name of book" />
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

            
            <Button variant="primary" type="submit" onClick={this.onSubmitHandler}>
              Submit
            </Button>
          </Form>
          );
                    }

}
export default AddBook;