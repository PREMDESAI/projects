import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { defaultStyle } from "../../assets/styles/defaultStyle";

import Add from "./addAndList/Add";
import AddeddList from "./addAndList/List";
import { createWordTable, getWords } from "../../services/wordDBService";
import CustomHeader from "../components/header";

export default function AddWords({navigation, mode}) {
  const [modeScreen, setModeScreen] = useState("add");
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState("");

  const fetchData = () => {
    return;
    getWords()
      .then((data) => {
        setList(data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const switchHandler = (modeScreen) => {
    setModeScreen(modeScreen);
    if (modeScreen === "addeddList") fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);
  const selectedStyle = { backgroundColor: "#71BBF8FF", borderColor: "#fff" };

  return (
    <View style={[defaultStyle.container, {backgroundColor: mode.background}]}>
      <TouchableOpacity style={{position: 'absolute', margin: 10, zIndex: 10}} onPress={() => navigation.jumpTo("Home")}>
        <AntDesign name="left" size={28} color={mode.text} />
      </TouchableOpacity>
      <CustomHeader
        title={
          modeScreen != "addeddList" ? "Yangi so'z qo'shish" : "Qo'shilgan so'zlar"
        }
      />
      <View
        style={[defaultStyle.row, defaultStyle.around, defaultStyle.switchMode, {backgroundColor: mode.background}]}
      >
        <TouchableOpacity
          style={[defaultStyle.switchBtn, modeScreen == "add" ? selectedStyle : "", {borderColor: mode.text}]}
          onPress={() => switchHandler("add")}
        >
          <Text style={{fontSize: 18, color: mode.text}}>Yangi so'z qo'shish</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            defaultStyle.switchBtn,
            modeScreen == "addeddList" ? selectedStyle : "",, {borderColor: mode.text}
          ]}
          onPress={() => switchHandler("addeddList")}
        >
          <Text style={{fontSize: 18, color: mode.text}}>Qo'shilgan so'zlar</Text>
        </TouchableOpacity>
      </View>
      {modeScreen === "add" ? (
        <Add fetchData={fetchData} edit={edit} setEdit={setEdit} mode={mode} />
      ) : (
        <AddeddList
          fetchData={fetchData}
          list={list}
          setMode={setModeScreen}
          setEdit={setEdit}
          mode={mode}
        />
      )}
    </View>
  );
}
