import React, {Component,useState, useEffect} from 'react'
import axios from "axios";
import { Link,Redirect } from "react-router-dom";
import Book from '../book/Book';
class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            main_books:[],
            books:[],
            logged: false
        }
    }
    

    ChangeState = (value) =>{
        this.setState({logged: value})
    }

    onChildChanged(newState) {
        this.state.books.splice(1,newState);
    
        // this.setState({
        //     books: b
        // });
        let user = localStorage.getItem("DeletedBook");
        console.log("Deleted" + newState);
    }

    componentDidMount() {
        this.setState({logged: this.props.state})
        axios
        .get("http://localhost:8000/api/read-books")
        .then((response) => {
        //console.log(response.data.data);
        this.setState({main_books: response.data.data});
        this.setState({books: response.data.data});
        });
        console.log(this.state.books);
    }

    updateData = (value) => {
    
    }
    
    render(){
            const books = this.state.books;
            const logged = this.state.logged
          return (
        
            <div>
                <div id='shop-container' className='grid md:flex'>
                        
                                    
                                
        
                    <div id='product-container' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10 lg:w-4/5 md:w-3/4 px-12'>
                    
                    {console.log("Logged :" + logged)}
                        {

    
                           books.map(book => <Book constructor={book}  callbackParent={this.onChildChanged.bind(this)} state = {this.state.logged} ></Book>)
                            
                        }
                       
                        
                    </div>
        
                    
                </div>
                  
              
        
              </div>
             
            );
                    }

}
export default Main;