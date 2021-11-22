import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ResultPage from "./ResultPage";

const QuizPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.question}>
        <Text style={styles.questionText}>this is a question</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.optionsButton}>
          <Text style={styles.optionsText}>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionsButton}>
          <Text style={styles.optionsText}>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionsButton}>
          <Text style={styles.optionsText}>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionsButton}>
          <Text style={styles.optionsText}>Option 1</Text>
        </TouchableOpacity>
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>END</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => navigation.navigate(ResultPage)}>
            <Text>End</Text>
          </TouchableOpacity> */}
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
    alignItems: "center",
  },

  options: {
    marginVertical: 16,
    flex: 1,
  },

  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#757BC8",
    padding: 12,
    paddingHorizontal: 12,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
  questionText: {
    fontSize: 32,
  },
  optionsText: {
    fontSize: 24,
    fontWeight: "400",
    color: "white",
  },
  optionsButton: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: "#DDBDFC",
    paddingHorizontal: 12,
    borderRadius: 12,
  },
});
