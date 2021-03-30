import React, {Component} from "react";
import Movie from './Movie';
import './MoviesContainer.css';
import data from './data/nowPlaying.json';


class MoviesContainer extends Component {

  constructor(props) {
    super(props);
    this.state = { movies: [] };
    this.structureData = this.structureData.bind(this);

  }

  structureData(){
    var movieArray = [];

    for (var i=0; i < data.MovieFeedEntries.length; i++ ){
      var movieUrl = data.MovieFeedEntries[i].Movie.Media.find(
        function(movie){
          return movie.SubType == "TV_SmallPosterImage"
        }
      )
      console.log(data.MovieFeedEntries[i].Movie.Media);
      console.log(movieUrl);
      movieArray.push(movieUrl);
    }

    console.log(movieArray);

    this.setState({ movies: movieArray });
  }

  componentDidMount() {
    this.structureData();
  }

  render() {
    console.log(data);

    return (
      <div className="MoviesContainer">
        <Movie title={data.MovieFeedEntries[0].Movie.Title} poster={data.MovieFeedEntries[0].Movie.Media[1].Url} />
        
        {this.state.movies.map((m)=> (
          <Movie title={m.Title} poster={m.Url} />
        ))}
        
      </div>
    )
  }
}

export default MoviesContainer;

//data.MovieFeedEntries[0].Movie.Media[1].Url
//data.MovieFeedEntries[0].Movie.Title

/* {data.MovieFeedEntries.map((m)=> (
  <Movie title={m.Movie.Title} poster={m.Movie.Media[1].Url} />
))} */