import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

class MoviesList extends Component {
  render() {
    const {movies} = this.props;
    return(
      <div className="MoviesList">
        {
          movies.map(movie => {
            return(
              <div 
                className="MoviesList-item"
                key={movie.imdbID}
              >
                <Movie
                title={movie.Title}
                year={movie.Year}
                poster={movie.Poster}
                id={movie.imdbID}
                />
              </div>
            )
          })
        }
      </div>
    )
  }
}


MoviesList.propTypes = {
  movies:PropTypes.array,
};

export default MoviesList;