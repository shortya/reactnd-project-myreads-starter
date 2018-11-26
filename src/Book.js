import React from 'react'
import ShelfSelector from './ShelfSelector'

class Book extends React.Component {

  render() {
    const { book, shelves, moveBook, img } = this.props;

    return (
        <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" 
              style={{ width: 128, height: 193, backgroundImage: `url("${img}")` }}
              >
              </div>
              <ShelfSelector 
                shelves= {shelves}
                book={book}
                moveBook={moveBook}
              />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors ? book.authors.join(', '): 'n/a'}</div>
          </div>
        </li>
    )
  }
}

export default Book
