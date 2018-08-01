import React, { Component, Fragment } from "react";
import { View, Text } from "react-native";
import { Input, TextLink, Button, Loading } from "./common";
import axios from "axios";
import deviceStorage from "../services/deviceStorage";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      password_confirmation: "",
      error: "",
      loading: false
    };
  }
  registerUser = () => {
    this.URL = "http://localhost:8000/gratitude/users/";
    const { email, password, password_confirmation, username } = this.state;

    this.setState({ error: "", loading: true });
    axios
      .post(this.URL, {
        username: username,
        password: password
      })
      .then(response => {
        console.log(response);
        deviceStorage.saveItem("id_token", response.data.token);
        this.props.newJWT(response.data.token);
      })
      .catch(error => {
        console.log(error);
        this.onRegistrationFail();
      });
  };
  onRegistrationFail = () => {
    this.setState({
      error: "Registration Failed",
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
            <Button onPress={this.registerUser}>Register</Button>
          ) : (
            <Loading size={"large"} />
          )}
        </View>
        <TextLink onPress={this.props.authSwitch}>
          Already have an account? Log in!
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

export { Registration };
