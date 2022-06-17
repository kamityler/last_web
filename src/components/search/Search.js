import React, {Component,useState, useEffect} from 'react'
import axios from "axios";
import Boooks from '../book/BookEl';
class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            main_books:[],
            books:[]}
    }
    componentDidMount() {
        axios
        .get("http://localhost:8000/api/read-books")
        .then((response) => {
        //console.log(response.data.data);
        this.setState({main_books: response.data.data});
        this.setState({books: response.data.data});
        });
        console.log(this.state.books);
    }

     SearchFunc = () => {
        const b = this.state.main_books
        const search_books = [];
        const SearchImp = document.getElementsByClassName("me-2");
        b.forEach(el => {
            console.log(el.Name);
            
            if(el.Name.toLowerCase() === SearchImp[0].value.toLowerCase()){
                search_books.push(el)
                console.log(el.Name + "==" + SearchImp[0].value.toLowerCase())
            }
            if(el.Price.toLowerCase() === SearchImp[0].value.toLowerCase()){
                search_books.push(el);
                console.log(el.Name + "==" + SearchImp[0].value.toLowerCase())
            }
            if(el.Author.toLowerCase() === SearchImp[0].value.toLowerCase())
            {
                console.log(el.Name + "==" + SearchImp[0].value.toLowerCase())
                search_books.push(el)
            }
        });

        this.state.books = search_books
        console.log(search_books);
        
        this.setState({books: this.state.books});
        console.log(this.state.books);
        
    };
    render(){
        const re = this.state.books;
        return (
            <div>
                <div id='shop-container' className='grid md:flex'>
                    <input type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                    <button className="btn btn-primary"  onClick={this.SearchFunc}  >Search</button>
                    <div id='product-container' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10 lg:w-4/5 md:w-3/4 px-12'>
                        {this.state.books.map(books => <Boooks book={books}   ></Boooks>)}
                    </div>
                </div>
            </div>
        );
    }

}
export default Search;