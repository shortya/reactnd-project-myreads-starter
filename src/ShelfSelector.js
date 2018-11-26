import React from 'react'
import { startCase } from 'lodash';

class ShelfSelector extends React.Component {

  handleChange = (e) => {
    const { moveBook, book} = this.props;
    moveBook(e.target.value, book); 
  };

  render() {
    const {shelves, book} = this.props;
    return (
      <div className="app">
        <div className="book-shelf-changer">
          <select defaultValue={book.shelf} onChange={this.handleChange} >
            <option value="move" disabled>Move to...</option>
            {Object.keys(shelves).map(key => 
              <option 
                key ={key}
                value={shelves[key]}
                 >
              {startCase(shelves[key])}
              </option>
            )}
            <option value="none" >None</option>
          </select>
        </div>
      </div>
    )
  }
}

export default ShelfSelector
