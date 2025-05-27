import { StyleSheet } from "react-native";

export const defaultStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    // backgroundColor: colors.background
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
  switchMode: {
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    // backgroundColor: "#fff",
  },
  switchBtn: {
    padding: 10,
    borderRadius: 10,
    // borderColor: "#000",
    borderWidth: 0.5,
  },
  modalBack: {
    width: "100%",
    height: "100%",
    // backgroundColor: "#1F1F1F81",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 10,
    margin: -10,
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    marginTop: 22,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    top: '25%',
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 12
  },
  btn: {
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 3,
  }
});
