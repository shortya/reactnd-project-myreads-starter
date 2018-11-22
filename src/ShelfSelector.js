import React from 'react'
import { startCase } from 'lodash';

class BooksApp extends React.Component {

  render() {
    const {shelves} = this.props;
    return (
      <div className="app">
        <div className="book-shelf-changer">
          <select>
            <option value="move" disabled>Move to...</option>
            {Object.keys(shelves).map(key => 
              <option 
                key ={key}
                value={shelves[key]} >
              {startCase(shelves[key])}
              </option>
            )}
            <option value="none">None</option>
          </select>
        </div>
      </div>
    )
  }
}

export default BooksApp
