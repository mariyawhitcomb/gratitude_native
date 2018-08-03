import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button } from "../components/common/Button";
import navigation from "../screens/LoggedIn";
import { createStackNavigator } from "react-navigation";
import axios from "axios";

export default class MyEntries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    const entriesUrl = `http://localhost:8000/gratitude/entries/${
      this.props.user_id
    }`;
    axios
      .get(entriesUrl)
      .then(response => {
        console.log(response);
        this.setState({
          data: response.data
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const entries = this.state.data.map(entry => {
      return (
        <View>
          <Text>Date {entry.date}</Text>
          <Text>Reason #1 {entry.reason1}</Text>
          <Text>Reason #2 {entry.reason2}</Text>
          <Text>Reason #3 {entry.reason3}</Text>
          <Text>Goal {entry.goal}</Text>
        </View>
      );
    });
    return <View>{entries}</View>;
  }
}
const styles = {
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  labelStyle: {
    fontSize: 16,
    paddingLeft: 20,
    flex: 1
  },
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 3
  }
};
