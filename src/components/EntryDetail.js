import React, { Component } from "react";
import { Text, View } from "react-native";
import { withNavigation } from "react-navigation";

class EntryDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("details", this.props);
    return (
      <View>
        <Text> Hello </Text>
      </View>
    );
  }
}
export default withNavigation(EntryDetail);
