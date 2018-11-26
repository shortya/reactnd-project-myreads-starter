import React from 'react'
// import ReactDOM from 'react-dom'
import Book from './Book';


class BookSearch extends React.Component {

  render() {
    const { shelf, books, allBooks, shelves, moveBook } = this.props;
    
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
          <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author"/>
            </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
                {Object.keys(books).map(key => 
                  (<Book key ={key}
                    shelves={shelves}
                    book={books[key]}
                    allBooks={allBooks}
                    moveBook={moveBook}
                    />)
                  ) 
                } 
              </ol>
        </div>
      </div>
    )
  }
}

export default BookSearch