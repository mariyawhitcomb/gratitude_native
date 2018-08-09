import React, { Component } from "react";
import { Text, View, Image } from "react-native";

export default class FormImage extends Component {
  render() {
    return <Image source={require("./img/heart.jpg")} />;
  }
}
