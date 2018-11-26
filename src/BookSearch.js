import React from 'react'
import Book from './Book';  
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class BookSearch extends React.Component {

  state = {
    query: '',
    books: []
  };

  updateQuery = (query) => {
    BooksAPI.search(query)
    .then((books) => {
      if (books && !books.error) {
        [].concat(books.map(book => 
          (this.props.books.filter(b => 
            b.id === book.id 
            ).map(b => 
              book.shelf = b.shelf
            )
          )
        ),books.map(book => 
          (this.props.books.filter(b => 
            b.id !== book.id).map(b => 
              book.shelf = 'none')
          )
        ));
        this.setState({ books });
      } else {
          this.setState({ books: [] });
      }
    })
    this.setState(() => ({
        query: query.trim()
    }))
  };

  render() {

    const { query } = this.state;
    const { books, shelves, moveBook } = this.props;
    const showBooks = 
    query === '' ? books : this.state.books
    // for filtering without the API method:
        // books.filter((b) => 
        //     b.title.toLowerCase().includes(query.toLowerCase()) ||
        //   b.authors.some(a => 
        //     a.toLowerCase().includes(query.toLowerCase())
        //   )
        // ) ;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/' ></Link> 
          <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author" onChange={(e)=> this.updateQuery(e.target.value) } />
            </div>
        </div>
        <div className="search-books-results">
        {showBooks.length > 1 ? 
          <ol className="books-grid">
                {Object.keys(showBooks).map(key => 
                  (<Book key ={key}
                    shelves={shelves}
                    book={showBooks[key]}
                    img={showBooks[key].imageLinks ? showBooks[key].imageLinks.smallThumbnail : 'https://www.placecage.com/128/193' }
                    moveBook={moveBook}
                    />)
                  )
                } 
          </ol> : null }
        </div>
      </div>
    )
  }
}

export default BookSearch