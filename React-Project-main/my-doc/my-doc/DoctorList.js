import React from 'react';
import {View,StyleSheet} from 'react-native';
import DoctorCard from './DoctorCard';

function DoctorList({doctors}){
  return(
    <View style={styles.doctorGrid}>
      {doctors.map((doctor,index) =>(
        <DoctorCard
          key={index}
          name={doctor.name}
          specialty={doctor.specialty}
          rating={doctor.rating}
          avatar={doctor.avatar}
        />
      ))}
    </View>
  );
}

const styles=StyleSheet.create({
  doctorGrid:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between',
    width:'90%',
  },
  footer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#FFFFFF',
    width: '100%',
    alignItems: 'center',
    elevation: 2,
  },
});

export default DoctorList;
