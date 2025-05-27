import { Text, View, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";

import { defaultStyle } from "../../../assets/styles/defaultStyle";
import { learn } from "../../../assets/styles/learn";
import { Ionicons } from "@expo/vector-icons";

const SettingMode = (props) => {
  const { learnMode, setOrder, swapSequence, setSelectMode, startLearn, dispMode } =
    props;
  return (
    <View style={[learn.learnMode, {backgroundColor: (dispMode.text=="#fff")? "#2E343BEF" : "#B5B5C2FF"}]}>
      <Text style={[defaultStyle.tCenter, { fontSize: 20, fontWeight: "700", color: dispMode.text }]}>
        Sozlanmalari
      </Text>
      <Text style={[learn.settingTitle, {color: dispMode.text}]}>So'zlar ketma-ketlik</Text>
      <View
        style={[defaultStyle.row, defaultStyle.around, { marginStart: 40 }]}
      >
        <View style={defaultStyle.row}>
          <Checkbox
            style={learn.checkbox}
            value={learnMode.order}
            onValueChange={setOrder}
            color={learnMode.order ? "#4630EB" : undefined}
          />
          <Text style={{ fontSize: 18, margin: 8, marginStart: 0, color: dispMode.text }}>
            Tartibli
          </Text>
        </View>
        <View style={defaultStyle.row}>
          <Checkbox
            style={learn.checkbox}
            value={!learnMode.order}
            onValueChange={setOrder}
            color={!learnMode.order ? "#4630EB" : undefined}
          />
          <Text style={{ fontSize: 18, margin: 8, marginStart: 0, color: dispMode.text }}>
            Aralash
          </Text>
        </View>
      </View>
      <Text style={[learn.settingTitle, {color: dispMode.text}]}>So'zni topish</Text>
      <View style={[defaultStyle.row, { marginStart: 40 }]}>
        <View style={defaultStyle.column}>
          <Text style={{ fontSize: 18, margin: 8, marginStart: 0,color: dispMode.text }}>
            Chiqadigan
          </Text>
          <Text style={[learn.selectSequence, {color: dispMode.text, borderColor: dispMode.text}]}>{learnMode.sequence[0]}</Text>
        </View>
        <TouchableOpacity style={[learn.swapBtn, {borderColor: dispMode.text}]} onPress={swapSequence}>
          <Ionicons name="swap-horizontal" color={"#00f"} size={30} />
        </TouchableOpacity>
        <View style={defaultStyle.column}>
          <Text style={{ fontSize: 18, margin: 8, marginStart: 0, color: dispMode.text }}>
            Topish kerak
          </Text>
          <Text style={[learn.selectSequence, {color: dispMode.text, borderColor: dispMode.text}]}>{learnMode.sequence[1]}</Text>
        </View>
      </View>
      <Text style={[learn.settingTitle, {color: dispMode.text}]}>So'zlar topish usuli</Text>
      <View
        style={[defaultStyle.row, defaultStyle.around, { marginStart: 40 }]}
      >
        <View style={defaultStyle.row}>
          <Checkbox
            style={learn.checkbox}
            value={learnMode.selectMode}
            onValueChange={setSelectMode}
            color={learnMode.selectMode ? "#4630EB" : undefined}
          />
          <Text style={{ fontSize: 18, margin: 8, marginStart: 0, color: dispMode.text }}>
            Yozish
          </Text>
        </View>
        <View style={defaultStyle.row}>
          <Checkbox
            style={learn.checkbox}
            value={!learnMode.selectMode}
            onValueChange={setSelectMode}
            color={!learnMode.selectMode ? "#4630EB" : undefined}
          />
          <Text style={{ fontSize: 18, margin: 8, marginStart: 0, color: dispMode.text }}>
            Tanlash
          </Text>
        </View>
      </View>
      <TouchableOpacity style={learn.startBtn} onPress={startLearn}>
        <Text style={[defaultStyle.tCenter, { fontSize: 17, color: "#fff" }]}>
          Boshlash
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const randomizeData = (defaultArr) => {
    let data = defaultArr.slice();
    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [data[i], data[j]] = [data[j], data[i]];
    }
    return data;
  }

export {
    SettingMode,
    randomizeData,
}