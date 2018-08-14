import React, { Component } from "react";
import { View, ImageBackground } from "react-native";
import { Registration } from "../components/Registration";
import { Login } from "../components/Login";

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: true
    };
    this.whichForm = this.whichForm.bind(this);
    this.authSwitch = this.authSwitch.bind(this);
  }
  authSwitch = () => {
    if (this.state.showLogin == false) {
      this.setState({ showLogin: true });
    } else {
      this.setState({ showLogin: false });
    }
  };
  whichForm = () => {
    if (this.state.showLogin) {
      return (
        <Login
          authSwitch={this.authSwitch}
          newJWT={this.props.newJWT}
          newId={this.props.newId}
          navigation={this.props.navigation}
        />
      );
    } else {
      return (
        <Registration
          authSwitch={this.authSwitch}
          newJWT={this.props.newJWT}
          newId={this.props.newId}
          navigation={this.props.navigation}
        />
      );
    }
  };
  render() {
    return (
      <ImageBackground
        source={require("../components/common/img/cactus.jpg")}
        style={styles.background}
      >
        <View style={styles.container}>{this.whichForm()}</View>
      </ImageBackground>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  background: {
    resizeMode: "contain",
    height: "100%"
  }
};
