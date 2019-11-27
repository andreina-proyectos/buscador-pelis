import React, {Component} from 'react';
import ButtonBackToHome from '../components/ButtonBackToHome';
const API_KEY ='4c7944fa';

class Detail extends Component {
  state = {
    movie: {},
  }

  fetchMovie({id}) {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then(response => response.json())
      .then(movie => {
        this.setState({movie:movie})
      })
  }

  componentDidMount() {
    console.log(this.props);
    const {movieId} = this.props.match.params;
    this.fetchMovie({id: movieId})
  };

  render() {
    const {Title, Poster, Actors, Plot, Metascore} = this.state.movie;
    return(
      <div className="detail__movie-wrapper">
        <ButtonBackToHome />
        <h1 className="movie__title">{Title}</h1>
        <img src={Poster} alt={Title}/>
        <h3 className="movie__actors">{Actors}</h3>
        <span className="movie__score">{Metascore}</span>
        <p className="movie__plot">{Plot}</p>
      </div>
    )
  }
}

export default Detail;