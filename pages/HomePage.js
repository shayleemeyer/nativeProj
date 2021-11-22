import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import Title from "../components/Title";
import QuizPage from "./QuizPage";

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.bannerContainer}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require("../assets/image1.jpg")}
        />
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate(QuizPage)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 300,
  },

  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    /* flex: 1, */
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
  button: {
    width: "100%",
    backgroundColor: "#757BC8",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
});
