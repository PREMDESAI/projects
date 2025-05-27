import { StyleSheet } from "react-native";

export const gameStyle = StyleSheet.create({
  back: {
    position: "absolute",
    width: "110%",
    height: "100%",
    top: 0,
    left: 0,
    right: 0,
    // backgroundColor: "#6E6E6EAB",
  },
  modal: {
    width: "80%",
    padding: 20,
    // backgroundColor: "#fff",
    top: "23%",
    marginHorizontal: "6%",
  },
  gameTypeBtn: {
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 3,
    borderWidth: 1,
    borderColor: "#00f",
  },
  paramTitle: {
    marginTop: 5,
    fontSize: 20,
  },
  radioBtnStyle: {
    display: "flex",
    flexDirection: "row",
  },
  setGroup: {},
  input: {
    width: "100%",
    borderRadius: 5,
    borderWidth: 0.8,
    borderColor: "#00f",
    padding: 10,
    fontSize: 18,
    textAlign: 'center'
  },
  checkboxGroup: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10
  },
  checkboxStyle: {
    display: 'flex',
    flexDirection: 'row',

  }
});
