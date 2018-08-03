import React, { Component, Fragment } from "react";
import { Text, View } from "react-native";
import { Input, TextLink, Loading, Button } from "./common";
import axios from "axios";
import deviceStorage from "../services/deviceStorage";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: "",
      loading: false
    };
  }
  loginUser = () => {
    this.URL = "http://localhost:8000/token-auth/";
    const { username, password } = this.state;
    this.setState({ error: "", loading: true });
    axios
      .post(this.URL, {
        username: username,
        password: password
      })
      .then(response => {
        console.log(response);

        deviceStorage.saveItem("id_token", response.data.token);
        deviceStorage.saveItem("user_id", response.data.id.toString());
        this.props.newId(response.data.id.toString());
        this.props.newJWT(response.data.token);
      })
      .catch(error => {
        console.log(error);
        this.onLoginFail();
      });
  };
  onLoginFail = () => {
    this.setState({
      error: "Login Failed",
      loading: false
    });
  };

  render() {
    const { username, password, error, loading } = this.state;
    const { form, section, errorTextStyle } = styles;

    return (
      <Fragment>
        <View style={form}>
          <View style={section}>
            <Input
              placeholder="username"
              label="username"
              value={username}
              onChangeText={username => this.setState({ username })}
            />
          </View>

          <View style={section}>
            <Input
              secureTextEntry
              placeholder="password"
              label="password"
              value={password}
              onChangeText={password => this.setState({ password })}
            />
          </View>

          <Text style={errorTextStyle}>{error}</Text>

          {!loading ? (
            <Button onPress={this.loginUser}>Login</Button>
          ) : (
            <Loading size={"large"} />
          )}
        </View>
        <TextLink onPress={this.props.authSwitch}>
          Don't have an account? Register!
        </TextLink>
      </Fragment>
    );
  }
}

const styles = {
  form: {
    width: "100%",
    borderTopWidth: 1,
    borderColor: "#ddd"
  },
  section: {
    flexDirection: "row",
    borderBottomWidth: 1,
    backgroundColor: "#fff",
    borderColor: "#ddd"
  },
  errorTextStyle: {
    alignSelf: "center",
    fontSize: 18,
    color: "red"
  }
};

export { Login };
