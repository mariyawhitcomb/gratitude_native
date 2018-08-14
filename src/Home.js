import React, { Component } from "react";
import { Text, View } from "react-native";
import { Loading } from "./components/common/Loading";
import Auth from "./screens/Auth";
import LoggedIn from "./screens/LoggedIn";
import deviceStorage from "./services/deviceStorage";
import EntryForm from "./components/EntryForm";
import MyEntries from "./components/MyEntries";

export default class Home extends Component {
  static navigationOptions = {
    title: "Home"
  };
  constructor(props) {
    super(props);
    this.state = {
      jwt: "",
      user_id: "",
      loading: true
    };
    this.deleteJWT = deviceStorage.deleteJWT.bind(this);
    this.deleteId = deviceStorage.deleteId.bind(this);
    this.loadJWT = deviceStorage.loadJWT.bind(this);
    this.loadId = deviceStorage.loadId.bind(this);
    this.loadJWT();
    this.loadId();
  }
  newJWT = jwt => {
    this.setState({
      jwt: jwt
    });
  };
  newId = id => {
    this.setState({
      user_id: id
    });
  };
  render() {
    if (this.state.loading) {
      return <Loading size={"large"} />;
    } else if (!this.state.jwt) {
      return (
        <Auth
          newJWT={this.newJWT}
          newId={this.newId}
          navigation={this.props.navigation}
        />
      );
    } else if (this.state.jwt) {
      return (
        <LoggedIn
          deleteJWT={this.deleteJWT}
          deleteId={this.deleteId}
          jwt={this.state.jwt}
          user_id={this.state.user_id}
          navigation={this.props.navigation}
        />
      );
    }
  }
}
