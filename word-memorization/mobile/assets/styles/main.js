import { StyleSheet } from "react-native";

export const mainStyle = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
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
  tCenter: {
    textAlign: "center",
  },
  itemGroup: {
    margin: 5,
    borderRadius: 10,
    // backgroundColor: "#fff",
    padding: 10,
  },
  item: {
    padding: 10,
    paddingStart: 5,
  },
  hr: {
    height: 0.5,
    width: "98%",
    alignSelf: "center",
    margin: 5,
    backgroundColor: "#000",
  },
  weekDay: {
    width: 40,
    height: 40,
    padding: 10,
    borderRadius: 50,
    borderWidth: 0.2,
    borderColor: "#000",
    margin: 5,
  },
  stats: {
    padding: 10,
    borderRadius: 5,
    margin: 5,
    backgroundColor: "#ccc",
  },
  btn: {
    width: 50,
    height: 50,
    padding: 9,
    borderRadius: 10,
  },
});
