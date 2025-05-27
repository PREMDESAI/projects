import { View, Text, FlatList, TouchableOpacity } from "react-native";
import * as Speech from 'expo-speech';

import { defaultStyle } from "../../assets/styles/defaultStyle";
import { irregularVerbStyle } from "../../assets/styles/irregularVerbs";
import { irregularVerbData } from "../../assets/data/verbs";

const IrregularVerbs = () => {
  const speak = (name) => {
    Speech.speak(name);
  };
  return (
    <View style={[defaultStyle.container, irregularVerbStyle.list]}>
      <FlatList
        data={irregularVerbData}
        renderItem={({ item }) => (
          <View
            style={[
              irregularVerbStyle.item,
              defaultStyle.row,
              defaultStyle.between,
            ]}
          >
            <TouchableOpacity
              style={defaultStyle.column}
              onPress={() => speak(item.verb[0])}
            >
              <Text style={{ fontSize: 16 }}>{item.verb[0]}</Text>
              <Text style={{ fontSize: 16 }}>{item.verb[1]}</Text>
            </TouchableOpacity>
            <View style={irregularVerbStyle.wr}></View>
            <TouchableOpacity
              style={defaultStyle.column}
              onPress={() => speak(item.pastSimple[0])}
            >
              <Text style={{ fontSize: 16 }}>{item.pastSimple[0]}</Text>
              <Text style={{ fontSize: 16 }}>{item.pastSimple[1]}</Text>
            </TouchableOpacity>
            <View style={irregularVerbStyle.wr}></View>
            <TouchableOpacity
              style={defaultStyle.column}
              onPress={() => speak(item.pastParticiple[0])}
            >
              <Text style={{ fontSize: 16 }}>{item.pastParticiple[0]}</Text>
              <Text style={{ fontSize: 16 }}>{item.pastParticiple[1]}</Text>
            </TouchableOpacity>
            <View style={irregularVerbStyle.wr}></View>
            <Text style={{ fontSize: 16 }}>{item.translate}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default IrregularVerbs;
