import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { gameStyle } from "../../../assets/styles/game";
import { defaultStyle } from "../../../assets/styles/defaultStyle";
import SetParam from "./setParams";
import CustomSwitchBtn from "./customSwitchBtn";

const CustomModal = ({mode}) => {
  const [gameType, setGameType] = useState("one"); //many
  const [manyGameType, setManyGameType] = useState("connect"); //create
  const [gameParams, setGameParams] = useState({
    gameLevel: {
      a1: true,
      a2: false,
      b1: false,
      b2: false,
      c1: false,
    },
    time: 5,
    wordType: "mixed",
    wordCount: 10,
  });

  const startGameWithOne = () => {
    if (
      !gameParams.gameLevel.a1 &&
      !gameParams.gameLevel.a2 &&
      !gameParams.gameLevel.b1 &&
      !gameParams.gameLevel.b2 &&
      !gameParams.gameLevel.c1
    ) {
      return alert("So'z darajasi kamida bitta belgilanishi shart");
    }
    if (gameParams.wordCount<5) {
        return alert('Sozlar soni kamida 5ta bo`lishi kerak');
    }
  };

  const startGameWithMany = () => {

  }

  return (
    <View style={[gameStyle.modal, {backgroundColor: (mode.text=="#fff")? "#353A40F8": mode.background}]}>
      <Text style={{ fontSize: 22, textAlign: "center", marginBottom: 5,color: mode.text }}>
        O'yin paramertlarini kiriting{" "}
      </Text>
      <CustomSwitchBtn
        mode={mode}
        text={["Bir kishilik", "Ko'p kishilik"]}
        val={gameType}
        setVal={setGameType}
        defValue={["one", "many"]}
      />
      {gameType == "one" ? (
        <SetParam
          gameParams={gameParams}
          setGameParams={setGameParams}
          startGame={startGameWithOne}
          mode={mode}
        />
      ) : (
        <View style={defaultStyle.column}>
          <CustomSwitchBtn
            mode={mode}
            text={["O'yinga qo'shilish", "O'yin yaratish"]}
            val={manyGameType}
            setVal={setManyGameType}
            defValue={["connect", "create"]}
            style={{ marginTop: 10 }}
          />
          {manyGameType == "create" ? (
            <SetParam gameParams={gameParams} setGameParams={setGameParams} startGame={startGameWithMany} mode={mode} />
          ) : (
            <View>
              <Text style={[gameStyle.paramTitle, {color: mode.text}]}>O'yin kodini kiriting</Text>
              <TextInput
                maxLength={5}
                placeholder="o'yin kodi"
                placeholderTextColor={mode.text}
                style={[gameStyle.input, {color: mode.text}]}
                // setValue={(value) =>setGameParams({ ...gameParams, wordCount: value })}
                returnKeyType="go"
                // value={`${gameParams.wordCount}`}
              />
              <TouchableOpacity
                style={[
                  gameStyle.gameTypeBtn,
                  { marginTop: 10, backgroundColor: "#00f" },
                ]}
              >
                <Text
                  style={{ color: "#fff", fontSize: 20, textAlign: "center" }}
                >
                  O'yinga kirish
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default CustomModal;
