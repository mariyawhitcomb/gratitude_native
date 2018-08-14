import React, { Component } from "react";
import { Loading } from "./components/common/";
import Auth from "./screens/Auth";
import LoggedIn from "./screens/LoggedIn";
import deviceStorage from "./services/deviceStorage";
import { createStackNavigator } from "react-navigation";
import EntryForm from "./components/EntryForm";
import MyEntries from "./components/MyEntries";
import Home from "./Home";
import EntryDetail from "./components/EntryDetail";

export default class App extends Component {
  render() {
    const Routes = createStackNavigator({
      Home: { screen: Home },
      Auth: { screen: Auth },
      LoggedIn: {
        screen: LoggedIn,
        navigationOptions: {
          title: "Welcome to Gratitude",
          headerBackTitle: "Back"
        }
      },
      EntryForm: { screen: EntryForm },
      MyEntries: { screen: MyEntries },
      Detail: {
        screen: EntryDetail,
        navigationOptions: {
          title: "Detail"
        }
      }
    });
    return <Routes />;
  }
}
