import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import Home from "./components/Home";
import List from "./components/List";
import Form from "./components/Form";

export default createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home",
      headerBackTitle: "Back"
    }
  },
  List: {
    screen: List,
    navigationOptions: {
      title: "List"
    }
  },
  Form: {
    screen: Form,
    navigationOptions: {
      title: "Form"
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
