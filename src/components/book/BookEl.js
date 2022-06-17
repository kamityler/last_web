import React from 'react';
import './Book.css';
function Boooks (book){
    {console.log(book)}
    return (
          <div className="card" style={{width: "18rem"}}>
          <img className="card-img-top" src={book.book.Picture} alt="Card image cap"/>
          <div className="card-body">
          <h3 className="card-title">{book.book.Name}</h3>
          <h5 className="card-text">{book.book.Author}</h5>
          <p className="card-text">{book.book.Price}</p>
          
        </div>
      </div>
    );
}
export default Boooks;