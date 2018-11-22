import React from 'react'
// import * as BooksAPI from './BooksAPI'
import ShelfSelector from './ShelfSelector';

class Book extends React.Component {

  render() {
    const { details, shelves } = this.props;
    return (
        <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" 
              style={{ width: 128, height: 193, backgroundImage: `url("${details.imageLinks.smallThumbnail}")` }}
              >
              </div>
              <ShelfSelector shelves= {shelves} />
            </div>
            <div className="book-title">{details.title}</div>
            <div className="book-authors">{details.authors}</div>
          </div>
        </li>
    )
  }
}

export default Book
