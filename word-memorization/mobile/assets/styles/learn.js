import { StyleSheet } from "react-native";

export const learn = StyleSheet.create({
  input: {
    width: "100%",
    padding: 9,
    marginBottom: 10,
    marginTop: 5,
    borderRadius: 10,
    borderColor: "#000",
    borderWidth: 1,
    fontSize: 18,
  },
  learnMode: {
    width: "100%",
    position: "absolute",
    top: "10%",
    padding: 20,
    zIndex: 15,
    borderRadius: 15,
    borderColor: "#000",
    borderWidth: 1,
    // backgroundColor: "#B5B5C2FF",
  },
  text: {
    fontSize: 24,
    fontWeight: "600",
  },
  checkbox: {
    margin: 8,
  },
  settingTitle: {
    fontSize: 20,
    marginTop: 5,
    fontWeight: "700",
  },
  swapBtn: {
    padding: 10,
    // borderColor: "#000",
    borderRadius: 10,
    borderWidth: 0.5,
    marginHorizontal: 10,
    marginTop: 35,
  },
  selectSequence: {
    padding: 10,
    // borderColor: "#000",
    borderRadius: 10,
    borderWidth: 0.5,
    textAlign: "center",
    fontSize: 17,
  },
  startBtn: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#00f",
    borderColor: "#000",
    borderWidth: 0.3,
    marginVertical: 5,
  },
  disWord: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  moreBtn: {
    width: 30,
    position: "relative",
    left: "90%",
  },
  textSpeech: {
    width: 30,
    position: "relative",
    left: "90%",
  },
  learnMainText: {
    fontSize: 33,
    textAlign: "center",
  },
  learnTransText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontStyle: "italic",
  },
  answer: {
    padding: 10,
    borderRadius: 10,
  },
  corrAns: {
    fontSize: 25,
    textAlign: "center",
    borderWidth: 0.4,
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
  },
  nextBtn: {
    padding: 10,
    borderRadius: 10,
    borderColor: "#000",
    borderWidth: 0.3,
    marginVertical: 5,
  },
  selAnsBtn: {
    width: '45%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: "#000",
    borderWidth: 1,
    marginVertical: 5,
  }
});
