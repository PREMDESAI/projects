import { StyleSheet } from "react-native";

export const feetback = StyleSheet.create({
  main: {
    marginHorizontal: 17,
    padding: 10,
    borderRadius: 10,
    position: 'relative',
    top: '-10%',
    backgroundColor: "#fff",
  },
  btnGroup: {
    borderRadius: 10,
    padding: 5,
    marginVertical: 10,
    borderWidth: 0.2,
    borderColor: "#000",
  },
  feedBackBtn: {
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 10,
  },
  input: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: "#000",
    fontSize: 17,
    margin: 5,
  },
  textArea: {
    // height: 50
  },
  sendBtn: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#00f',
    margin: 10,
  }
});

export const info = StyleSheet.create({
  main: {
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 10,
    position: 'relative',
    top: '-10%',
    // backgroundColor: "#fff",
  },
  btnGroup: {
    borderRadius: 10,
    padding: 5,
    marginVertical: 10,
    borderWidth: 0.2,
    // borderColor: "#000",
  },
  contactBtn: {
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 10,
  },
  textHeader: {
    fontWeight: '700',
    fontSize: 18
  },
  text: {
    fontSize: 17,
    marginBottom:  5,
    textAlign: 'justify'
  }
});

export const setting = StyleSheet.create({
  group: {
    margin: 5,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff'
  },
  input: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: "#000",
    fontSize: 17,
    margin: 5,
  },
  sendBtn: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#00f',
    margin: 10,
  },
  textHeader: {
    fontWeight: '700',
    fontSize: 19,
    marginTop: 5
  },
  text: {
    fontSize: 17,
    marginBottom:  5,
    textAlign: 'justify'
  },
  hr: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#000'
  },
  logoutModal: {
    position: 'absolute', 
    top: "30%",
    backgroundColor: '#fff',
    zIndex: 12,
    padding: 15,
    marginHorizontal: 30,
    borderRadius: 15,
    borderWidth: 1,
  },
  modalBtn: {
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 5,
    marginVertical: 10
  }
})
