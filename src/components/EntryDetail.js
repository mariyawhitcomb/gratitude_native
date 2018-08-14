import React, { Component } from "react";
import { Text, View } from "react-native";
import { withNavigation } from "react-navigation";

class EntryDetail extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
export default withNavigation(EntryDetail);
