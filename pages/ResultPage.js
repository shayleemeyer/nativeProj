import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import HomePage from "./HomePage";
/* import { TouchableOpacity } from "react-native-gesture-handler"; */

const ResultPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Result</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{
            uri: "https://picsum.photos/200/300",
          }}
        />
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate(HomePage)}>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResultPage;

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
});
