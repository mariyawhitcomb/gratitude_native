import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  FlatList
} from "react-native";
import { Button } from "../components/common/Button";
import { createStackNavigator } from "react-navigation";
import axios from "axios";
import { TextLink } from "../components/common/TextLink";
import { List, ListItem } from "react-native-elements";
import { StackNavigator } from "react-navigation";
import { withNavigation } from "react-navigation";

export default class MyEntries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    const entriesUrl = `http://localhost:8000/gratitude/entries/${
      this.props.user_id
    }`;
    axios
      .get(entriesUrl)
      .then(response => {
        console.log("response", response);
        this.setState({
          data: response.data
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    console.log("props", this.props);
    console.log(this.state.data);
    return (
      <ImageBackground
        source={require("../components/common/img/cactus.jpg")}
        style={styles.imageStyle}
      >
        <List
          containerStyle={{
            borderTopWidth: 0,
            borderBottomWidth: 0,
            backgroundColor: "#ffffff00",
            height: "60%"
          }}
        >
          <FlatList
            data={this.state.data}
            renderItem={({ index, item }) => (
              <ListItem
                onPress={() =>
                  this.props.navigation.navigate(
                    "Detail"
                    // , {
                    //   name: `${entry.name}`,
                    //   entry: `${entry.entry}`,
                    //   img: `${this.state.base_url}${item.photo}`,
                    //   address: `${item.address}`
                    // }
                  )
                }
                key={item.id}
                title={item.date}
                titleStyle={{ fontSize: 16 }}
                titleContainerStyle={{ marginLeft: 120 }}
                subtitle={
                  <View style={styles.subtitleView}>
                    <Text style={styles.entryText}>
                      {index} Reason #1 {item.reason1}
                    </Text>
                    <Text style={styles.entryText}>
                      Reason #2 {item.reason2}
                    </Text>
                    <Text style={styles.entryText}>
                      Reason #3 {item.reason3}
                    </Text>

                    <Text style={styles.locText}>Goal {item.goal}</Text>
                  </View>
                }
                containerStyle={{
                  borderBottomWidth: 1,
                  marginBottom: 20
                }}
              />
            )}
            keyExtractor={item => item.id.toString()}
          />
        </List>
        <Button onPress={this.props.leaveScreen}>Go back</Button>
      </ImageBackground>
    );
  }
}
const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 30,
    flexWrap: "wrap",
    border: 1
  },
  labelStyle: {
    fontSize: 16,
    paddingLeft: 20,
    flex: 1
  },
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 3
  },
  imageStyle: {
    resizeMode: "contain",
    height: "100%"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  subtitleView: {
    flexDirection: "column",
    paddingLeft: 10,
    paddingTop: 5,
    marginLeft: 110
  },
  entryText: {
    paddingLeft: 10,
    color: "grey"
  },
  locText: {
    paddingLeft: 10,
    color: "grey",
    marginTop: 6,
    fontSize: 12
  },
  titleText: {
    fontWeight: "bold"
  }
};
