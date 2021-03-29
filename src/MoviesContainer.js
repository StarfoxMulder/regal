import React, {Component} from "react";
import Movie from './Movie';
import './MoviesContainer.css';
import data from './data/nowPlaying.json';


class MoviesContainer extends Component {

  constructor(props) {
    super(props);

    this.structureData = this.structureData.bind(this);
    
  }

  structureData(){
    for (var i=0; i < data.MovieFeedEntries[0].length; i++ ){
      var movieUrl = data.MovieFeedEntries[0].Movie.Media.find(
        function(movie){
          return movie.key == "TV_SmallPosterImage"
        }
      )
      movieArray.push(movieUrl)
    }
    console.log(movieArray);
  }

  render() {
    console.log(data);
    var movieArray = [];
    this.structureData();

    return (
      <div className="MoviesContainer">
        <Movie title={data.MovieFeedEntries[0].Movie.Title} poster={data.MovieFeedEntries[0].Movie.Media[1].Url} />

        {data.MovieFeedEntries.map((m)=> (
          <Movie title={m.Movie.Title} poster={m.Movie.Media[1].Url} />
        ))}
      </div>
    )
  }
}

export default MoviesContainer;

//data.MovieFeedEntries[0].Movie.Media[1].Url
//data.MovieFeedEntries[0].Movie.Title