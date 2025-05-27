import { useState } from "react";
import { View, TextInput, ScrollView, FlatList, Text } from "react-native";
import * as Speech from "expo-speech";

import { numList } from "../../assets/data/numers";
import { nums } from "../../assets/styles/nums";
import { defaultStyle } from "../../assets/styles/defaultStyle";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Nums = () => {
  const [viewNum, setViewNum] = useState("");
  const [input, setInput] = useState("");
  const viewNumHandler = () => {
    if (isNaN(input)) return;
    let number = numberToEnglish(input);
    setInput("");
    setViewNum(number);
  };
  const cancelView = () => {
    setViewNum("");
  };
  const enterNumber = (num) => {
    if (!isNaN(num)) setInput(num);
  };
  const showNum = (num, ordinal) => {
    alert("nomi: " + num + "\ntartibi:" + ordinal);
  };
  const speak = (name) => {
    Speech.speak(name);
  };
  return (
    <View style={defaultStyle.container}>
      <View style={[nums.numView, { top: viewNum != "" ? "10%" : "-50%" }]}>
        <View style={defaultStyle.column}>
          <TouchableOpacity
            style={[nums.cancelBtn, { backgroundColor: "#f00" }]}
            onPress={cancelView}
          >
            <Feather name="x" size={20} color={"#fff"} />
          </TouchableOpacity>
          <Text style={[defaultStyle.tCenter, { fontSize: 20, marginTop: 10 }]}>
            {viewNum}
          </Text>
          <TouchableOpacity
            style={[nums.cancelBtn, { backgroundColor: "#0f0" }]}
            onPress={() => speak(viewNum)}
          >
            <AntDesign name="sound" size={20} color={"#fff"} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={[defaultStyle.row, defaultStyle.between]}>
        <TextInput
          style={nums.input}
          value={input}
          onChangeText={(num) => enterNumber(num)}
          placeholder="123"
          keyboardType="number-pad"
        />
        <TouchableOpacity style={nums.btn} onPress={viewNumHandler}>
          <MaterialCommunityIcons name="eye-check" size={30} color={"#fff"} />
        </TouchableOpacity>
      </View>
      <View style={nums.list}>
        <FlatList
          data={numList}
          renderItem={({ item }) => (
            <View
              style={[nums.item, defaultStyle.row, defaultStyle.between]}
              key={item.name}
            >
              <Text style={{ fontSize: 17 }}>{item.num}</Text>
              <Text style={{ fontSize: 18 }}>{item.name}</Text>
              <View style={[defaultStyle.row, defaultStyle.between]}>
                <TouchableOpacity
                  style={nums.listBtn}
                  onPress={() => showNum(item.name, item.ordinal)}
                >
                  <Ionicons name="eye" size={20} color={"#000"} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={nums.listBtn}
                  onPress={() => speak(item.name)}
                >
                  <AntDesign name="sound" size={20} color={"#000"} />
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.name}
        />
      </View>
    </View>
  );
};

export default Nums;

function numberToEnglish(number) {
  const ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const teens = [
    "",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const tens = [
    "",
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  const thousands = ["", "thousand", "million", "billion", "trillion"];

  function convertChunk(number) {
    if (number === 0) return "";
    if (number < 10) return ones[number];
    if (number < 20) return teens[number - 10];
    if (number < 100) {
      const tensDigit = Math.floor(number / 10);
      const onesDigit = number % 10;
      return tens[tensDigit] + (onesDigit !== 0 ? "-" + ones[onesDigit] : "");
    }
    if (number < 1000) {
      const hundredsDigit = Math.floor(number / 100);
      const remainder = number % 100;
      return (
        ones[hundredsDigit] +
        " hundred" +
        (remainder !== 0 ? " and " + convertChunk(remainder) : "")
      );
    }
  }

  if (number === 0) return "zero";

  let result = "";
  let chunkIndex = 0;

  while (number > 0) {
    const chunk = number % 1000;
    if (chunk !== 0) {
      result = convertChunk(chunk) + " " + thousands[chunkIndex] + " " + result;
    }
    number = Math.floor(number / 1000);
    chunkIndex++;
  }

  return result.trim();
  // alert(result.trim())
}

//   // Test the function
//   const num = 123456789;
//   const englishNumber = numberToEnglish(num);
//   console.log(englishNumber);
