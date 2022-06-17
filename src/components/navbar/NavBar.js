import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown,Form,FormControl,Button, Container} from 'react-bootstrap'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'


import Auth from '../auth/Auth';
import Main from '../main/Main';
import Book from '../book/Book';
import Search from '../search/Search';
import AddBook from '../addBook/AddBook';
import EditBook from '../editBook/EditBook';
class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            logged: false,
            
        }
    }

    onChildChanged(newState) {
        this.setState({
            logged: newState
        });
        this.setState({name: localStorage.getItem("userData").full_name})
        let b = "full_name";
        
    }
    onBook(newState) {
        this.setState({
            logged: newState
        });
        this.setState({name: localStorage.getItem("userData").full_name})
        let b = "full_name";
        
    }
    

    render() {
        let user = JSON.parse(localStorage.getItem("userData"));
        return (
            <Router>
                <div>
                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Container fluid>
                            <Navbar.Brand href="/Book">BookSite</Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll>
                                <Nav.Link as={Link} to="/Book">Home</Nav.Link>
                                <Nav.Link as={Link} to="/Search">Search</Nav.Link>
                                {this.state.logged  ?<Nav.Link as={Link} to="/AddBook">Add Book</Nav.Link> : true}
                                {!this.state.logged  ? <Nav.Link as={Link} to="/Login">Login</Nav.Link> : <Nav.Link>{user.full_name}</Nav.Link> }
                            </Nav>
                            
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div>
                    <Routes>
                        {<Route path="/Login" element={<Auth callbackParent={this.onChildChanged.bind(this)}/>}/>}
                        {<Route path="/Search" element={<Search/>}/>}
                        {<Route path="/AddBook" element={<AddBook/>}/>}
                        {<Route path="/EditBook" element={<EditBook/>}/>}
                        {<Route path="/Book" element={<Main state = {(this.state.logged)}/>}/>
                        }
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default NavBar;




