import { StyleSheet } from "react-native";

export const loginStyle = StyleSheet.create({
  fullScreen: {
    width: "100%",
    height: "100%",
  },
  header: {
    top: "20%",
    textAlign: "center",
    fontSize: 30,
    color: "#fff",
    marginBottom: 5,
    position: "relative",
  },
  form: {
    top: "23%",
    position: "relative",
    marginTop: 30,
    marginHorizontal: 20,
  },
  input: {
    width: "100%",
    padding: 15,
    marginBottom: 10,
    marginTop: 5,
    borderRadius: 10,
    borderColor: "#fff",
    color: "#fff",
    borderWidth: 1,
    fontSize: 23,
  },
  sendBtn: {
    backgroundColor: "#4968ff",
    padding: 20,
    alignItems: "center",
    marginHorizontal: 30,
    borderRadius: 20,
    top: "30%",
  },
  nextMeth: {
    padding: 20,
    alignItems: "center",
    marginHorizontal: 30,
    top: "45%",
  },
  modalProgress: {
    position: 'absolute',
    width: '80%',
    top: '30%',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#fff',
    backgroundColor: '#FFFFFFCE',
    paddingHorizontal: 25,
    paddingVertical: 35,
    zIndex: 11,
    marginHorizontal: 30
  }
});

export const regisStyle = StyleSheet.create({
  fullScreen: {
    width: "100%",
    height: "100%",
  },
  header: {
    top: "15%",
    textAlign: "center",
    fontSize: 30,
    color: "#fff",
    marginBottom: 5,
    position: "relative",
  },
  form: {
    top: "18%",
    position: "relative",
    marginTop: 30,
    marginHorizontal: 20,
  },
  input: {
    width: "100%",
    padding: 15,
    marginBottom: 10,
    marginTop: 5,
    borderRadius: 10,
    borderColor: "#fff",
    color: "#fff",
    borderWidth: 1,
    fontSize: 23,
  },
  sendBtn: {
    backgroundColor: "#4968ff",
    padding: 20,
    alignItems: "center",
    marginHorizontal: 30,
    borderRadius: 20,
    top: "25%",
  },
  nextMeth: {
    padding: 20,
    alignItems: "center",
    marginHorizontal: 30,
    top: "35%",
  },
});
