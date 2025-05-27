import { View, Text, TouchableOpacity } from "react-native";
import TimeCounter from "./TimeCounter";
import { Feather, MaterialIcons } from '@expo/vector-icons';

const Playground = ({ mode }) => {
  return (
    <View style={{}}>
        <TimeCounter/>
      <View
        style={{
          height: 150,
          padding: 20,
          margin: 20,
          backgroundColor: "#007AFF9F",
          justifyContent: "center",
          borderRadius: 15,
        }}
      >
        <Text style={{ fontSize: 30, textAlign: "center" }}>World</Text>
      </View>
      <View style={{width: '100%', }}>
        <TouchableOpacity style={{ borderColor: "#000", borderWidth: 1, margin: 10, padding: 15, borderRadius: 25}}>
            <Text style={{fontSize: 20, color: '#000', textAlign: 'center'}}>So'z</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ borderColor: "#000", borderWidth: 1, margin: 10, padding: 15, borderRadius: 25}}>
            <Text style={{fontSize: 20, color: '#000', textAlign: 'center'}}>So'z</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ borderColor: "#000", borderWidth: 1, margin: 10, padding: 15, borderRadius: 25}}>
            <Text style={{fontSize: 20, color: '#000', textAlign: 'center'}}>So'z</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ borderColor: "#000", borderWidth: 1, margin: 10, padding: 15, borderRadius: 25}}>
            <Text style={{fontSize: 20, color: '#000', textAlign: 'center'}}>So'z</Text>
        </TouchableOpacity>
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginTop: 20}}>
        <TouchableOpacity style={{padding: 20, backgroundColor: '#f00', borderRadius: 15, marginHorizontal: 5, width: '30%'}}>
            <Feather name="x" size={24} style={{textAlign: "center"}} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 20, backgroundColor: '#f00', borderRadius: 15, marginHorizontal: 5, width: '30%'}}>
            <MaterialIcons name="next-plan" style={{textAlign: "center"}} size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 20, backgroundColor: '#19B922FF', borderRadius: 15, marginHorizontal: 5, width: '30%'}}>
            <MaterialIcons name="navigate-next" style={{textAlign: "center"}} size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Playground;
