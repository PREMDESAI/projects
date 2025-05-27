import { View, FlatList, Text, TouchableOpacity} from "react-native";
import * as Speech from 'expo-speech';

import { defaultStyle } from '../../assets/styles/defaultStyle'
import { absStyle } from "../../assets/styles/abc";
import {absData} from '../../assets/data/abcData'
const Abc = () => {
  const speak = (name) => {
    Speech.speak(name);
  };
    return(
        <View style={[defaultStyle.container, absStyle.list]}>
            <FlatList
                data={absData}
                renderItem={({item}) => (
                    <TouchableOpacity 
                        style={[absStyle.item, defaultStyle.row, defaultStyle.around]}
                        onPress={()=>speak(item.name)}>
                      <Text style={{fontSize: 17}}>{item.Uppercase}</Text>
                      <Text style={{fontSize: 16}}>{item.Lowercase}</Text>  
                      <Text style={{fontSize: 17}}>{item.name}</Text>  
                      <Text style={{fontSize: 17}}>{item.pronunciation}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.Uppercase}
                /> 
        </View>
    )
}

export default Abc;

























