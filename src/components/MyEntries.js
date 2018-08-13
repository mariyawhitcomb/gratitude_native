// import React, { Component } from "react";
// import {
//   Text,
//   View,
//   ImageBackground,
//   ScrollView,
//   FlatList
// } from "react-native";
// import { Button } from "../components/common/Button";
// import { createStackNavigator } from "react-navigation";
// import axios from "axios";
// import { TextLink } from "../components/common/TextLink";

// export default class MyEntries extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: []
//     };
//   }
//   componentDidMount() {
//     const entriesUrl = `http://localhost:8000/gratitude/entries/${
//       this.props.user_id
//     }`;
//     axios
//       .get(entriesUrl)
//       .then(response => {
//         console.log(response);
//         this.setState({
//           data: response.data
//         });
//       })
//       .catch(error => console.log(error));
//   }
//   renderSeparator = () => {
//     return (
//       <View
//         style={{
//           height: 1,
//           width: "86%",
//           backgroundColor: "#CED0CE",
//           marginLeft: "14%",
//           marginTop: "3%"
//         }}
//       />
//     );
//   };

//   render() {
//     console.log(this.state.data);
//     return (
//       <ImageBackground
//         source={require("../components/common/img/cactus.jpg")}
//         style={styles.imageStyle}
//       >
//         {/* <View> */}
//         <Button onPress={this.props.leaveScreen}>Go back</Button>
//         <FlatList
//           data={this.state.data}
//           renderItem={() =>
//             this.state.data.map((entry, index) => {
//               return (
//                 <View key={index} style={styles.containerStyle}>
//                   <TextLink>{entry.date}</TextLink>
//                   <Text>Reason #1 {entry.reason1}</Text>
//                   <Text>Reason #2 {entry.reason2}</Text>
//                   <Text>Reason #3 {entry.reason3}</Text>
//                   <Text>Goal {entry.goal}</Text>
//                 </View>
//               );
//             })
//           }
//         />
//         {/* </View> */}
//       </ImageBackground>
//     );
//   }
// }
// const styles = {
//   containerStyle: {
//     // flex: 1,
//     flexDirection: "column",
//     alignItems: "flex-start",
//     marginLeft: 30,
//     flexWrap: "wrap",
//     border: 1
//   },
//   labelStyle: {
//     fontSize: 16,
//     paddingLeft: 20,
//     flex: 1
//   },
//   inputStyle: {
//     color: "#000",
//     paddingRight: 5,
//     paddingLeft: 5,
//     fontSize: 18,
//     lineHeight: 23,
//     flex: 3
//   },
//   imageStyle: {
//     resizeMode: "contain",
//     height: "100%"
//   }
// };

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
        console.log(response);
        this.setState({
          data: response.data
        });
      })
      .catch(error => console.log(error));
  }
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%",
          marginTop: "3%"
        }}
      />
    );
  };

  render() {
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
            renderItem={() =>
              this.state.data.map((entry, index) => {
                return (
                  <ListItem
                    key={index}
                    onPress={
                      () => console.log("pressed")
                      // this.props.navigation.navigate("Detail", {
                      //   name: `${entry.name}`,
                      //   entry: `${entry.entry}`,
                      //   img: `${this.state.base_url}${item.photo}`,
                      //   address: `${item.address}`
                      // })
                    }
                    title={entry.date}
                    titleStyle={{ fontSize: 16 }}
                    titleContainerStyle={{ marginLeft: 120 }}
                    // subtitle={
                    //   <View style={styles.subtitleView}>
                    //     <Text style={styles.entryText}>
                    //       Reason #1 {entry.reason1}
                    //     </Text>
                    //     <Text style={styles.entryText}>
                    //       Reason #2 {entry.reason2}
                    //     </Text>
                    //     <Text style={styles.entryText}>
                    //       Reason #3 {entry.reason3}
                    //     </Text>

                    //     <Text style={styles.locText}>Goal {entry.goal}</Text>
                    //   </View>
                    // }
                    containerStyle={{
                      borderBottomWidth: 1,
                      marginBottom: 20
                    }}
                  />
                );
              })
            }
            keyExtractor={entry => entry.id}
            // ItemSeparatorComponent={this.renderSeparator}
          />
        </List>
        <Button onPress={this.props.leaveScreen}>Go back</Button>
      </ImageBackground>
    );
  }
}
const styles = {
  containerStyle: {
    // flex: 1,
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
