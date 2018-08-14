import React, { Component } from "react";
import { Loading } from "./components/common/Loading";
import Auth from "./screens/Auth";
import LoggedIn from "./screens/LoggedIn";

export default class Home extends Component {
  static navigationOptions = {
    title: "Welcome to Gratitude"
  };
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.loading) {
      return <Loading size={"large"} />;
    } else if (!this.props.jwt) {
      return (
        <Auth
          newJWT={this.props.newJWT}
          newId={this.props.newId}
          navigation={this.props.navigation}
        />
      );
    } else if (this.props.jwt) {
      return (
        <LoggedIn
          deleteJWT={this.props.deleteJWT}
          deleteId={this.props.deleteId}
          jwt={this.props.jwt}
          user_id={this.props.user_id}
          navigation={this.props.navigation}
          loadingFalse={this.props.loadingFalse}
        />
      );
    }
  }
}
