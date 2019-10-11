import React, {Component} from 'react';
const API_KEY ='4c7944fa';

class SearchForm extends Component {
  state={
    inputMovie:''
  }

  handleInputChange = (event) => {
    this.setState({inputMovie: event.currentTarget.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {inputMovie} = this.state;

    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
      .then(response => response.json())
      .then(results => {
        const {Search, totalresults} = results;
        console.log({Search, totalresults});
        this.props.onResults(Search)
      })
  }

  render () {
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input 
              className="input" 
              type="text" 
              placeholder="Movie to search..."
              onChange={this.handleInputChange}/>
          </div>
          <div className="control">
            <button className="button is-info">
              Search
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default SearchForm;