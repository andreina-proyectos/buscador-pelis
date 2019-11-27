import React, {Component} from 'react';
import Title from '../components/Title';
import SearchForm from '../components/SearchForm';
import MoviesList from '../components/MoviesList';
import './Home.scss';

class Home extends Component {
  state = {
    results: [],
    usedSearch: false
  }

  handleResults = (searchedResults) => {
    this.setState({
      results: searchedResults,
      usedSearch:true,
    })
  }

  handleRenderResults = () => {
    return(
      this.state.results.length === 0 
        ? <p className="text__no-result">Sorry!
            <span role="img" aria-label="sad face">😞</span>
            Results not found!
          </p> 
        : <MoviesList
            movies= {this.state.results}
          />
      
    )
  }

  render() {
    return(
      <div>
        <Title>Search Movies🍿</Title>
          <div className="SearchForm__wrapper">
            <SearchForm
              onResults={this.handleResults}
            />
          </div>
          {this.state.usedSearch
          ? this.handleRenderResults()
          : <small>Use this form to search a movie</small>
          }
      </div>
    )
  }
}

export default Home;