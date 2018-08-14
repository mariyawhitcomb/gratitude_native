import React, { Component } from "react";
import { View, ImageBackground } from "react-native";
import { Button, TextLink } from "../components/common/";
import { createStackNavigator } from "react-navigation";
import EntryForm from "../components/EntryForm";
import MyEntries from "../components/MyEntries";

export default class LoggedIn extends Component {
  static navigationOptions = {
    title: "Welcome to Gratitude"
  };
  constructor(props) {
    super(props);
    this.state = {
      newEntry: false,
      myEntries: false
    };
  }
  leaveScreen = () => {
    this.setState({
      newEntry: false,
      myEntries: false
    });
  };
  logout = () => {
    this.props.deleteJWT();
    this.props.deleteId();
  };
  newEntry = () => {
    this.setState({
      newEntry: true
    });
    console.log("new entry pressed");
    // this.props.navigation.navigate("EntryForm");
  };
  myEntries = () => {
    this.setState({
      myEntries: true,
      newEntry: false
    });
  };
  render() {
    if (this.state.newEntry) {
      return (
        <View>
          <EntryForm
            jwt={this.props.jwt}
            user_id={this.props.user_id}
            logout={this.logout}
            leaveScreen={this.leaveScreen}
            myEntries={this.myEntries}
          />
        </View>
      );
    } else if (this.state.myEntries) {
      return (
        <View>
          <MyEntries
            jwt={this.props.jwt}
            user_id={this.props.user_id}
            logout={this.logout}
            leaveScreen={this.leaveScreen}
            navigation={this.props.navigation}
          />
        </View>
      );
    } else {
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
