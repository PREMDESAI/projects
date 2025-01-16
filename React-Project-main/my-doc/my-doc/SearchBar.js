import React from 'react';
import {View,TextInput,Image,StyleSheet} from 'react-native';

function SearchBar(){
  return(
    <View style={styles.searchContainer}>
      <Image 
        source={require('./assets/Search.png')} 
        style={styles.searchIcon} 
      />
      <TextInput
        placeholder="Search conditions, doctors..."
        style={styles.searchBar}
        placeholderTextColor="#C7C7CD"
      />
    </View>
  );
}

const styles=StyleSheet.create({
  searchContainer:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#333333',
    borderRadius:20,
    paddingVertical:10,
    paddingHorizontal:15,
    marginBottom:20,
    width:'100%',
    elevation:2,
  },
  searchIcon:{
    width:17,
    height:17,
    tintColor:'#888',
    marginRight:5,
  },
  searchBar:{
    flex:1,
    fontSize:16,
    color:'#888',
    outline:'none',
    backgroundColor:'transparent',
  },
});

export default SearchBar;
