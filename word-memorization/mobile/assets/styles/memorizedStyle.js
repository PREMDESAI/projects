import { StyleSheet } from "react-native";

export const memorizedStyle = StyleSheet.create({
    itemGroup: {
      width: '100%', 
      height: '100%', 
      margin: 10,
      zIndex: 9
    },
    list: {
      height: '75%'
    },
    item: {
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#fff',
      shadowColor:'#000',
      marginEnd: 20,
      marginVertical: 10
    },
    itemName: {
      fontSize: 18,
      fontWeight: "bold"
    },
    itemTranslation: {
      fontSize: 17,
      fontWeight: '700'
    },  
    itemTranscription: {
      fontStyle:"italic",
    },  
    example: {},  
    exampleMeang: {},  
    moreBtn: {
      margin: 5,
      padding: 3
    },
    defaultMsg: {
      padding: 10,
      fontSize: 20,
      borderRadius: 10,
      backgroundColor: '#fff',
      marginEnd: 20,
      textAlign: 'center'
    },
    moreFun: {
      width: '85%',
      margin: 25,
      borderRadius: 10,
      borderColor: '#000',
      borderWidth: 0.5,
      backgroundColor: '#fff',
      zIndex: 999,
      height: 300,
      position: 'absolute',
      top: '25%',
      bottom: -64,
      padding: 10,
    },
    moreListBtn: {
      padding: 10,
      margin: 10,
      borderBottomWidth:.5,
      borderColor: "#ccc"
    },
    saveToDB: {
      marginVertical: 10,
      marginEnd: 15,
      padding: 15,
      borderRadius: 10,
      backgroundColor: '#00f',
    },
    searchInout: {
        borderRadius: 10,
        borderColor: '#000',
        borderWidth: 1,
        backgroundColor: '#fff',
        padding: 10,
        width: '95%',
        fontSize: 20
    }
});