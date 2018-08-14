import React, { Component } from "react";
import Auth from "./screens/Auth";
import LoggedIn from "./screens/LoggedIn";
import deviceStorage from "./services/deviceStorage";
import { createStackNavigator } from "react-navigation";
import EntryForm from "./components/EntryForm";
import MyEntries from "./components/MyEntries";
import Home from "./Home";
import EntryDetail from "./components/EntryDetail";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      jwt: "",
      user_id: "",
      loading: false
    };
    this.deleteJWT = deviceStorage.deleteJWT.bind(this);
    this.deleteId = deviceStorage.deleteId.bind(this);
    this.loadJWT = deviceStorage.loadJWT.bind(this);
    this.loadId = deviceStorage.loadId.bind(this);
    this.loadId();
    this.loadJWT();
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
    const Routes = createStackNavigator({
      Home: {
        screen: props => (
          <Home
            {...props}
            loading={this.state.loading}
            loadJWT={this.loadJWT}
            loadId={this.loadId}
            newJWT={this.newJWT}
            newId={this.newId}
            deleteJWT={this.deleteJWT}
            deleteId={this.deleteId}
            jwt={this.state.jwt}
            user_id={this.state.user_id}
            loadingFalse={this.loadingFalse}
          />
        ),
        navigationOptions: {
          title: "Welcome to Gratitude",
          headerBackTitle: "Back"
        }
      },
      Auth: {
        screen: props => (
          <Auth
            {...props}
            loadJWT={this.loadJWT}
            loadId={this.loadId}
            newJWT={this.newJWT}
            newId={this.newId}
            deleteJWT={this.deleteJWT}
            deleteId={this.deleteId}
            jwt={this.state.jwt}
            user_id={this.state.user_id}
          />
        )
      },
      LoggedIn: {
        screen: props => (
          <LoggedIn
            {...props}
            loadJWT={this.loadJWT}
            loadId={this.loadId}
            newJWT={this.newJWT}
            newId={this.newId}
            deleteJWT={this.deleteJWT}
            deleteId={this.deleteId}
            jwt={this.state.jwt}
            user_id={this.state.user_id}
            loadingFalse={this.loadingFalse}
          />
        ),
        navigationOptions: {
          title: "Welcome to Gratitude",
          headerLeft: null
        }
      },
      EntryForm: {
        screen: props => (
          <EntryForm
            {...props}
            jwt={this.state.jwt}
            user_id={this.state.user_id}
          />
        )
      },
      MyEntries: {
        screen: props => <MyEntries {...props} user_id={this.state.user_id} />
      },
      Detail: {
        screen: props => <EntryDetail {...props} />,
        navigationOptions: {
          title: "Detail"
        }
      }
    });
    return <Routes />;
  }
}
