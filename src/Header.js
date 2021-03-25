import React, {Component} from "react";
import './Header.css';
import logo from './images/logo.svg'

class Header extends Component {
  static defaultProps = {

  }

  render() {

    return (
      <div className="Header">
        <img src={logo} className="RegalLogo" alt="Regal Theaters logo" />
        <div className="OrangeBar"></div>
      </div>
    )
  }
}

export default Header;