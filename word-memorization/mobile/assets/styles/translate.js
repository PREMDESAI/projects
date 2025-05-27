import { StyleSheet } from "react-native";

export const translateCss = StyleSheet.create({
  absolute: {
    position: "absolute",
  },
  relative: {
    position: "relative",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  between: {
    justifyContent: "space-between",
  },
  around: {
    justifyContent: "space-around",
  },
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
    marginTop: 20,
    padding: 10,
    backgroundColor: "#00f",
    color: "#fff",
  },
  inputTxt: {
    margin: 10,
    borderRadius: 15,
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    color: "#000",
  },
  input: {
    margin: 10,
    borderWidth: 1,
    color: "#000",
    fontSize: 20,
    borderColor: "#fff",
    textAlignVertical: "top",
  },
  btn: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#00f",
  },
  result: {
    margin: 10,
    borderRadius: 15,
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    color: "#000",
  },
  resText: {
    margin: 10,
    fontSize: 20,
    color: "#008",
    height: 90,
  },
});