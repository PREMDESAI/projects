import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { translateCss } from "../../assets/styles/translate";
const Translate = () => {
    const [input, setInput] = useState("");
  const [res, setRes] = useState("");
  const [loadBack, setLoadBack] = useState(false);
  const [fromTo, setFromTo] = useState(["English", "Uzbek"]);

  const translateHundler = async () => {
    if (input.length < 2) return;
    setLoadBack(true);
    const from = fromTo[0];
    const to = fromTo[1];
    const url = `https://translated-mymemory---translation-memory.p.rapidapi.com/get?langpair=${from}%7C${to}&q=${input}&mt=1&onlyprivate=0&de=a%40b.c`;
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setRes(result.responseData.translatedText);
      setLoadBack(false);
    } catch (error) {
      console.error(error);
      setLoadBack(false);
    }
  };
    return (
        <View style={{ height: "100%" }}>
      {loadBack && (
        <View
          style={[
            translateCss.absolute,
            {
              top: "0%",
              width: "100%",
              height: "100%",
              zIndex: 100,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#00000050",
            },
          ]}
        >
          <ActivityIndicator size={"large"} color="#fff"></ActivityIndicator>
        </View>
      )}
      <View style={translateCss.container}>
        <View style={translateCss.inputTxt}>
          <View style={[translateCss.row, translateCss.between]}>
            <Text>{fromTo[0]}</Text>
            <Text>{input.length}/100</Text>
          </View>
          <TextInput
            maxLength={100}
            placeholderTextColor="#000"
            placeholder="Enter text"
            multiline={true}
            numberOfLines={3}
            style={translateCss.input}
            onChangeText={(text) => setInput(text)}
            value={input}
          />
        </View>
        <View style={[translateCss.row, translateCss.around]}>
          <TouchableOpacity
            onPress={() => {
              setFromTo([fromTo[1], fromTo[0]]);
            }}
            style={[
              translateCss.row,
              {
                padding: 10,
                borderWidth: 1,
                borderColor: "#00f",
                borderRadius: 10,
              },
            ]}
          >
            <Text>{fromTo[0]}</Text>
            <AntDesign
              name="arrowright"
              size={22}
              color="#00f"
              style={{ marginEnd: 10, marginStart: 10 }}
            />
            <Text>{fromTo[1]}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={translateHundler} style={translateCss.btn}>
            <Text style={{ color: "#fff", fontSize: 17 }}>Translate</Text>
          </TouchableOpacity>
        </View>
        <View style={translateCss.result}>
          <Text>{fromTo[1]}</Text>
          <ScrollView>
            <Text style={translateCss.resText}>{res}</Text>
          </ScrollView>
        </View>
      </View>
    </View>
    )
}

const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b0daa6b4b5mshe195d0534bfed1dp1c0470jsn3ac738645775",
      "X-RapidAPI-Host":
        "translated-mymemory---translation-memory.p.rapidapi.com",
    },
  };

export default Translate;