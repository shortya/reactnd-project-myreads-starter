import React from 'react'
// import ReactDOM from 'react-dom'


class BookSearch extends React.Component {

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
          <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author"/>
            </div>
        </div>
        <div className="search-books-results">
            <ol className="books-grid"></ol>
        </div>
      </div>
    )
  }
}

export default BookSearch