import React, { Component } from "react";
import { Loading } from "./components/common/";
import Auth from "./screens/Auth";
import LoggedIn from "./screens/LoggedIn";
import deviceStorage from "./services/deviceStorage";
import { createStackNavigator } from "react-navigation";
import EntryForm from "./components/EntryForm";
import MyEntries from "./components/MyEntries";

// const Routes = createStackNavigator({
//   App: { screen: App },
//   LoggedIn: { screen: LoggedIn },
//   NewEntry: { screen: EntryForm },
//   MyEntries: { screen: MyEntries }
// });

export default class App extends Component {
  static navigationOptions = {
    title: "Home"
  };
  constructor(props) {
    super(props);
    this.state = {
      jwt: "",
      user_id: "",
      loading: true
    };
    this.deleteJWT = deviceStorage.deleteJWT.bind(this);
    this.deleteId = deviceStorage.deleteId.bind(this);
    this.loadJWT = deviceStorage.loadJWT.bind(this);
    this.loadId = deviceStorage.loadId.bind(this);
    this.loadJWT();
    this.loadId();
  }
  newJWT = jwt => {
    this.setState({
      jwt: jwt
    });
  };
  newId = id => {
    this.setState({
      user_id: id
    });
  };

  render() {
    if (this.state.loading) {
      return <Loading size={"large"} />;
    } else if (!this.state.jwt) {
      return <Auth newJWT={this.newJWT} newId={this.newId} />;
    } else if (this.state.jwt) {
      return (
        <LoggedIn
          deleteJWT={this.deleteJWT}
          deleteId={this.deleteId}
          jwt={this.state.jwt}
          user_id={this.state.user_id}
        />
      );
    }
  }
}
