import React, {Component} from "react";
import Movie from './Movie';
import './MoviesContainer.css';
import data from './data/nowPlaying.json';


class MoviesContainer extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className="MoviesContainer">
        <Movie title={data.MovieFeedEntries[0].Movie.Title} poster={data.MovieFeedEntries[0].Movie.Media[1].Url} />
      </div>
    )
  }
}

export default MoviesContainer;

//data.MovieFeedEntries[0].Movie.Media[1].Url
//data.MovieFeedEntries[0].Movie.Title