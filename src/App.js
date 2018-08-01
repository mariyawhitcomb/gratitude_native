import React, { Component } from "react";
import { Loading } from "./components/common/";
import Auth from "./screens/Auth";
import LoggedIn from "./screens/LoggedIn";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      jwt: "",
      loading: true
    };
    this.newJWT = this.newJWT.bind(this);
  }
  newJWT(jwt) {
    this.setState({
      jwt: jwt
    });
  }
  render() {
    console.log(this.state.jwt);
    if (!this.state.jwt) {
      return <Auth newJWT={this.newJWT} />;
    } else if (this.state.jwt) {
      return <LoggedIn />;
    }
  }
}
