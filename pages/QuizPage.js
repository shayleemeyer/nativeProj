import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ResultPage from "./ResultPage";

const QuizPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.question}>
        <Text>this is a question</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity>
          <Text>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Option 1</Text>
        </TouchableOpacity>
        <View style={styles.buttons}>
          <TouchableOpacity>
            <Text>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(ResultPage)}>
            <Text>End</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default QuizPage;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
  question: {
    marginVertical: 16,
  },

  options: {
    marginVertical: 16,
    flex: 1,
  },

  buttons: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  button: {
    width: "100%",
    backgroundColor: "#757BC8",

    padding: 20,
    borderRadius: 16,
  },
});
