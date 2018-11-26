import React from 'react'
// import ReactDOM from 'react-dom'
import Book from './Book';  
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'


class BookSearch extends React.Component {
  
  state = {
    query: '',
    searchResult: [{id: 'dfakfk'}],
    books: []
  };

  // updateQuery = (query) => {
  //   this.setState(() => ({
  //       query: query.trim()
  //   }))
  // };
  // checkResults = () => {
  //   // if (this.state.searchResult.length > 0) {
  //     this.props.books.map((b) => {
  //       const newBook = this.state.searchResult.find(s => 
  //         b.id !== s.id

  //       );
  //       return newBook.shelf = "none";
  //       // return console.log(newBookList);
  //     })

  //   // }
  // };

  // handleSearchResults = () => {
  //     this.state.searchResultlength > 0 ? 
  //     this.state.searchResult.map((s) => { 
  //     const existingBook = this.props.books.find(
  //       (book) => book.id === s.id
  //     ) }) :
  //     null
  // }
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
            b.id !== book.id 
            ).map(b => 
              book.shelf = 'none'
            )
          )
        )
        );
        // books.sort(sortBy('title'));
        this.setState({ books });
      } else {
          this.setState({ books: [] });
      }
      // this.setState(() => ({
      //   searchResult: books
      // }))
    })
    this.setState(() => ({
        query: query.trim()
    }))
  };

  render() {

    const { query } = this.state;
    const { books, shelves, moveBook } = this.props;
    // const searchBookList = [].concat(
    //   // this.state.searchResult.length < 1 ? books : 
    //     books.filter(b => 
    //     this.state.searchResult.filter(s => 
    //       books.every(b => {
    //         return console.log(b.id, s.id) 
    //         // return b.id !== s.id ? s.shelf = 'none' : null
    //       })
    //     )), 
    //     // this.state.searchResult.filter(s => 
    //     //   books.every(b => {
    //     //     return console.log(b.id, s.id) 
    //     //   })
    //     // ), 
    //     [1])
          // this.state.searchResult.filter(s => books.every(b => s.item !== b.item))


    const showBooks = 
    query === '' ? books : this.state.books
        // books.filter((b) => 
        //     b.title.toLowerCase().includes(query.toLowerCase()) ||
        //   b.authors.some(a => 
        //     a.toLowerCase().includes(query.toLowerCase())
        //   )
        // ) ;
    console.log( 'showbooks', showBooks)
    console.log('stte', this.state.books)
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