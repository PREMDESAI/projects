import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";

import {AntDesign} from '@expo/vector-icons'
import { defaultStyle } from "../../assets/styles/defaultStyle";
import Repeatiton from "./learn/repeatiton";
import Learn from "./learn/learning";
import CustomHeader from "../components/header";

export default function TodaysWordStudy({navigation, dispMode}) {
  const [mode, setMode] = useState("learn");
  const switchHandler = (mode) => {
    setMode(mode);
  };
  const selectedStyle = { backgroundColor: (dispMode.text=="#fff")? "#00f": "#ccc" , borderColor: dispMode.text };

  return (
    <View style={[defaultStyle.container, {backgroundColor: dispMode.background}]}>
      <TouchableOpacity
        style={{ position: "absolute", margin: 10, zIndex: 10 }}
        onPress={() => navigation.jumpTo("Home")}
      >
        <AntDesign name="left" size={28} color={dispMode.text} />
      </TouchableOpacity>
      <CustomHeader
        title={
          mode == "learn"
            ? "So'zlarni o'rganish"
            : "So'zlarni qayta takrorlash"
        }
      />
      <View
        style={[defaultStyle.row, defaultStyle.around, defaultStyle.switchMode]}
      >
        <TouchableOpacity
          style={[defaultStyle.switchBtn, mode == "learn" ? selectedStyle : {borderColor: dispMode.text}]}
          onPress={() => switchHandler("learn")}
        >
          <Text style={{color: dispMode.text}}>Bugungi so'zni o'rganish</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            defaultStyle.switchBtn,
            mode == "repeat" ? selectedStyle : {borderColor: dispMode.text},
          ]}
          onPress={() => {}}//switchHandler("repeat")}
        >
          <Text style={{color: dispMode.text}}>So'zlarni takrorlash</Text>
        </TouchableOpacity>
      </View>
      {mode === "learn" ? <Learn dispMode={dispMode} /> : <Repeatiton dispMode={dispMode} />}
    </View>
  );
}
