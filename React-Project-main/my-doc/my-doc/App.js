import React from 'react';
import {ScrollView,Text,View,StyleSheet} from 'react-native';
import DoctorList from './DoctorList';
import SearchBar from './SearchBar';

function App(){
  const doctors=[
    {name:'Dr. John Smith',specialty:'Dermatologist',rating:4.9,avatar:require('./assets/gamer.png')},
    {name:'Dr. Anna Dinn',specialty:'Psychologist',rating:4.9,avatar:require('./assets/girl.png')},
    {name:'Dr. Angela Rayez',specialty:'Therapist',rating:4.8,avatar:require('./assets/woman.png')},
    {name:'Dr. Chris Bronte',specialty:'Dentist',rating:5.0,avatar:require('./assets/man.png')}
  ];
  return(
    <ScrollView contentContainerStyle={styles.container}>
      <SearchBar/>
      <Text style={styles.title}>Let's find your doctor</Text>
      <DoctorList doctors={doctors}/>
    </ScrollView>
  );
}

const styles=StyleSheet.create({
  container:{
    paddingVertical:150,
    paddingHorizontal:15,
    backgroundColor:'#121212',
    alignItems:'center',
  },
  title:{
    fontSize:22,
    fontWeight:'bold',
    marginBottom:20,
    textAlign:'left',
    marginTop:5,
    color:'#FFFFFF',
    alignSelf:'flex-start',
  },
});

export default App;
