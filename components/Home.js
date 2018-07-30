import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { createStackNavigator } from "react-navigation";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "This is a home page"
    };
  }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <Button
          style={{ fontSize: 20, color: "green" }}
          onPress={() =>
            this.props.navigation.navigate("List", { name: "name" })
          }
          title="Button"
        />
      </View>
    );
  }
}
