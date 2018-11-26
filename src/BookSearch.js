import React from 'react'
// import ReactDOM from 'react-dom'
import Book from './Book';


class BookSearch extends React.Component {
  
  state = {
    query: ''
  };

  updateQuery = (query) => {
    this.setState(() => ({
        query: query.trim()
    }))};

  render() {

    const { query } = this.state;
    const { shelf, books, allBooks, shelves, moveBook } = this.props;

    const showBooks = 
    query === '' ? books : 
        books.filter((b) => 
            b.title.toLowerCase().includes(query.toLowerCase()) ||
            // console.log(b.authors) 
          b.authors.some(a => 
            a.toLowerCase().includes(query.toLowerCase())
          )
        ) ;
            // b.authors.toLowerCase()
            // console.log(b.title) ;
    console.log(showBooks)

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={() => this.updateQuery({ showSearchPage: false })}>Close</button>
          <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author" onChange={(e)=> this.updateQuery(e.target.value) } />
            </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
                {Object.keys(showBooks).map(key => 
                  (<Book key ={key}
                    shelves={shelves}
                    book={showBooks[key]}
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