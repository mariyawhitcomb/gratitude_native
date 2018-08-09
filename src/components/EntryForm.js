import React, { Component, Fragment } from "react";
import { Text, View, ImageBackground } from "react-native";
import axios from "axios";
import { Input, TextLink, Loading, Button } from "./common";
import List from "./List";
import deviceStorage from "../services/deviceStorage";
import MyEntries from "./MyEntries";
import FormImage from "./common/FormImage";

export default class EntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reason1: "",
      reason2: "",
      reason3: "",
      goal: "",
      author: null,
      error: "",
      loading: false,
      myEntries: false
    };
  }
  componentDidMount() {
    console.log(`JWT in form ${this.props.jwt}`);
    console.log(`ID in form ${this.props.user_id}`);
  }

  createEntry = () => {
    this.URL = "http://localhost:8000/gratitude/entry/";
    const { reason1, reason2, reason3, goal, author } = this.state;
    this.setState({ error: "", loading: true });
    var token = `jwt ${this.props.jwt}`;
    // var headers = {
    //   "Content-Type": "application / json",
    //   authorization: token
    // };
    axios
      .post(this.URL, {
        reason1: reason1,
        reason2: reason2,
        reason3: reason3,
        goal: goal,
        author: this.props.user_id
      })
      .then(response => {
        console.log(response);
      })
      .then(() => {
        this.props.myEntries();
      })
      .catch(error => {
        console.log(error);
        this.createEntryFail();
      });
  };

  createEntryFail = () => {
    this.setState({
      error: "Creating Entry Failed",
      loading: false
    });
  };
  render() {
    const { reason1, reason2, reason3, goal, error, loading } = this.state;
    const { form, section, errorTextStyle, text, imageStyle, empty } = styles;
    if (this.state.myEntries) {
      return (
        <View>
          <MyEntries />
        </View>
      );
    } else {
      return (
        <ImageBackground
          source={require("../components/common/img/cactus.jpg")}
          style={imageStyle}
        >
          <View style={form}>
            <View style={section}>
              <Text style={text}>I am Grateful because:</Text>
            </View>
            <View style={section}>
              <Input
                placeholder="Reason #1"
                label="Reason #1"
                value={reason1}
                onChangeText={reason1 => this.setState({ reason1 })}
              />
            </View>
            <View style={section}>
              <Input
                placeholder="Reason #2"
                label="Reason #2"
                value={reason2}
                onChangeText={reason2 => this.setState({ reason2 })}
              />
            </View>
            <View style={section}>
              <Input
                placeholder="Reason #3"
                label="Reason #3"
                value={reason3}
                onChangeText={reason3 => this.setState({ reason3 })}
              />
            </View>
            <View style={section}>
              <Input
                placeholder="Your goal for today"
                multiline
                label="Goal"
                value={goal}
                onChangeText={goal => this.setState({ goal })}
              />
            </View>
            <Text style={errorTextStyle}>{error}</Text>

            {!loading ? (
              <Button onPress={this.createEntry}>Submit</Button>
            ) : (
              <Loading size={"large"} />
            )}
            <Button onPress={this.props.leaveScreen}>Go back</Button>
            <View style={empty} />
          </View>
        </ImageBackground>
      );
    }
  }
}
const styles = {
  form: {
    width: "100%",
    height: "100%",
    borderTopWidth: 1,
    borderColor: "#ddd",
    justifyContent: "center"
  },
  section: {
    flexDirection: "row",
    borderBottomWidth: 1,
    backgroundColor: "#ffffff05",
    opacity: 0.8,
    borderColor: "#ddd",
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 10
  },
  errorTextStyle: {
    alignSelf: "center",
    fontSize: 18,
    color: "red"
  },
  container: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    fontSize: 20
  },
  imageStyle: {
    resizeMode: "contain"
  },
  empty: {
    height: 200
  }
};
