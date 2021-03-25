import React, {Component} from "react";
import './Movie.css';

class Movie extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className="Movie">
        <img className="MoviePoster" src={this.props.poster} alt={this.props.title}/>
        <p className="MovieTitle">{this.props.title}</p>
      </div>
    )
  }
}

export default Movie;