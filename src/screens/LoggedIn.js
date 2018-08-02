import React, { Component } from "react";
import { View } from "react-native";
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
  logout = () => {
    this.props.deleteJWT();
    this.props.deleteId();
  };
  newEntry = () => {
    this.setState({
      newEntry: true
    });
    console.log("new entry pressed");
  };
  myEntries = () => {
    this.setState({
      myEntries: true
    });
  };
  render() {
    console.log(`JWT in logged in ${this.props.jwt}`);
    console.log(`ID in logged in ${this.props.user_id}`);
    if (this.state.newEntry) {
      return (
        <View>
          <EntryForm jwt={this.props.jwt} user_id={this.props.user_id} />
        </View>
      );
    } else if (this.state.myEntries) {
      return (
        <View>
          <MyEntries jwt={this.props.jwt} user_id={this.props.user_id} />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Button onPress={this.newEntry}>Create new Entry</Button>
          <Button onPress={this.myEntries}>Go to my Entries</Button>
          <Button onPress={this.logout}>Log Out</Button>
        </View>
      );
    }
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center"
  }
};
