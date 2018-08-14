import React, { Component } from "react";
import { View, ImageBackground } from "react-native";
import { Button } from "../components/common/";

export default class LoggedIn extends Component {
  static navigationOptions = {
    title: "Welcome to Gratitude",
    header: {
      visible: false
    }
  };
  constructor(props) {
    super(props);
  }
  logout = () => {
    this.props.deleteJWT();
    this.props.deleteId();
  };
  newEntry = () => {
    this.props.navigation.navigate("EntryForm");
    // this.props.loadingFalse();
  };
  myEntries = () => {
    this.props.navigation.navigate("MyEntries");
  };
  render() {
    console.log(this.props);
    return (
      <ImageBackground
        source={require("../components/common/img/cactus.jpg")}
        style={styles.imageStyle}
      >
        <View style={styles.container}>
          <Button onPress={this.newEntry}>Create new Entry</Button>
          <Button onPress={this.myEntries}>Go to my Entries</Button>
          <Button onPress={this.logout}>Log Out</Button>
        </View>
      </ImageBackground>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center"
  },
  imageStyle: {
    resizeMode: "contain",
    height: "100%"
  }
};
