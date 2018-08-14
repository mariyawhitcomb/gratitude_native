import React, { Component } from "react";
import { Text, View, ImageBackground } from "react-native";
import { withNavigation } from "react-navigation";

class EntryDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("details", this.props);
    return (
      <ImageBackground
        source={require("../components/common/img/cactus.jpg")}
        style={styles.imageStyle}
      >
        <View style={styles.container}>
          <Text style={styles.textStyle}> YOU ARE AWESOME </Text>
        </View>
      </ImageBackground>
    );
  }
}
const styles = {
  imageStyle: {
    resizeMode: "contain",
    height: "100%"
  },
  textStyle: {
    fontSize: 50,
    color: "green"
  },
  container: {
    justifyContent: "center",
    alignSelf: "center",
    flex: 1,
    marginBottom: 150
  }
};
export default withNavigation(EntryDetail);
