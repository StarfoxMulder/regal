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
<<<<<<< HEAD
        {displayingMovies}
        <button onClick={this.loadMore} id="loadMore">Load More</button>
=======
        <Movie title={data.MovieFeedEntries[0].Movie.Title} poster={data.MovieFeedEntries[0].Movie.Media[1].Url} />
        
        {this.state.movies.map((m)=> (
          <Movie title={m.Title} poster={m.Url} />
        ))}
        
>>>>>>> parent of 2feafc2... Making sure all changes were saved to match with the previous push description.
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
// this.state.movies.map((m, index)=> (
//   <Movie title={m.Title} poster={m.SecureUrl} key={index} />
// ))
