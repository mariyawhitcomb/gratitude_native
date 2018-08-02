import { AsyncStorage } from "react-native";

const deviceStorage = {
  async saveItem(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log("AsyncStorage Error: " + error.message);
    }
  },
  async loadJWT() {
    try {
      const value = await AsyncStorage.getItem("id_token");
      if (value !== null) {
        this.setState({
          jwt: value,
          loading: false
        });
      } else {
        this.setState({
          loading: false
        });
      }
    } catch (error) {
      console.log("AsyncStorage Error: " + error.message);
    }
  },
  async deleteJWT() {
    console.log("running");
    try {
      await AsyncStorage.removeItem("id_token").then(() => {
        this.setState({
          jwt: ""
        });
      });
    } catch (error) {
      console.log("AsyncStorage Error: " + error.message);
    }
  },

  async loadId() {
    try {
      const value = await AsyncStorage.getItem("user_id");
      if (value !== null) {
        console.log(`id value in loadId ${value}`);
        this.setState({
          user_id: value,
          loading: false
        });
      } else {
        console.log(`id value in loadId ${value}`);
        this.setState({
          loading: false
        });
      }
    } catch (error) {
      console.log("AsyncStorage Error: " + error.message);
    }
  },
  // async getId() {
  //   try {
  //     await AsyncStorage.getItem("user_id").then(id => {
  //       console.log(id);
  //       return id;
  //     });
  //   } catch (error) {
  //     console.log("AsyncStorage Error: " + error.message);
  //   }
  // },
  async deleteId() {
    console.log("running delete Id");
    try {
      await AsyncStorage.removeItem("user_id").then(() => {
        this.setState({
          user_id: ""
        });
      });
    } catch (error) {
      console.log("AsyncStorage Error: " + error.message);
    }
  }
};

export default deviceStorage;
