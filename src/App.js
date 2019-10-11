import React, {Component} from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Title from './components/Title';
import SearchForm from './components/SearchForm';

class App extends Component {
  state = {results: []}
  handleResults = (results) => {
    this.setState({results})
  }

  render() {
    return (
      <div className="App">
        <Title>Search Movies🍿</Title>
        <div className="SearchForm-wrapper">
          <SearchForm
            onResults={this.handleResults}
          />
        </div>
        {this.state.results.length === 0 
          ? <p className="p">Sin resultados</p> 
          : <p className="p">Con resultados</p> 
        }
      </div>
    );
  }
}

export default App;
