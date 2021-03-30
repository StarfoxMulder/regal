import React, {Component} from "react";
import Movie from './Movie';
import './MoviesContainer.css';
import data from './data/nowPlaying.json';


class MoviesContainer extends Component {

  constructor(props) {
    super(props);
    this.state = { movies: [], displayNum:10 };
    this.structureData = this.structureData.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }

  structureData(){
    var movieArray = [];

    for (var i=0; i < data.MovieFeedEntries.length; i++ ){
      var movieData = data.MovieFeedEntries[i].Movie.Media.find(
        function(movie){
          return movie.SubType == "TV_SmallPosterImage"
        }
      )
      if (!movieData.Title) {
        movieData.Title = data.MovieFeedEntries[i].Movie.Title
      }
      console.log(data.MovieFeedEntries[i].Movie.Media);
      console.log(movieData);
      movieArray.push(movieData);
    }

    console.log(movieArray);

    this.setState({ movies: movieArray });
  }

  componentDidMount() {
    this.structureData();
  }

  loadMore() {
    console.log("loadMore clicked.  Event bound properly.");
    var currentDisplayNum = this.state.displayNum;
    var newDisplayNum = currentDisplayNum+5;
    this.setState({displayNum: newDisplayNum});
  }

  render() {
    console.log(data);

    let displayingMovies = [];
    for(var x = 0; x < this.state.displayNum; x++){
      console.log(this.state.movies);
      let m = this.state.movies[x];
      console.log(m);
      displayingMovies.push(<Movie title={m.Title} poster={m.SecureUrl} key={x}/>);
    }

    return (
      <div className="MoviesContainer">
        {displayingMovies}
        <button onClick={this.loadMore} id="loadMore">Load More</button>
      </div>
    )
  }
}

export default MoviesContainer;

//data.MovieFeedEntries[0].Movie.Media[1].Url
//data.MovieFeedEntries[0].Movie.Title
//<Movie title={data.MovieFeedEntries[0].Movie.Title} poster={data.MovieFeedEntries[0].Movie.Media[1].Url} />

/* {data.MovieFeedEntries.map((m)=> (
  <Movie title={m.Movie.Title} poster={m.Movie.Media[1].Url} />
))} */
// this.state.movies.map((m, index)=> (
//   <Movie title={m.Title} poster={m.SecureUrl} key={index} />
// ))
