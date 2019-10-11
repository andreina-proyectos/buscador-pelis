import React, {Component} from 'react';

class SearchForm extends Component {
  render () {
    return(
      <div className="field has-addons">
        <div className="control">
          <input 
            class="input" 
            type="text" 
            placeholder="Movie to search..."/>
        </div>
        <div className="control">
          <button className="button is-info">
            Search
          </button>
        </div>
      </div>
    )
  }
}

export default SearchForm;