import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { gameStyle } from "../../../assets/styles/game";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import Checkbox from "expo-checkbox";
import { defaultStyle } from "../../../assets/styles/defaultStyle";

const SetParam = (props) => {
  const { gameParams, setGameParams, startGame, mode } = props;
  return (
    <View style={gameStyle.setParam}>
      <View style={gameStyle.setGroup}>
        <Text style={[gameStyle.paramTitle, {color: mode.text}]}>So'z darajasi</Text>
        <View style={[defaultStyle.row, defaultStyle.around]}>
          <View style={gameStyle.checkboxStyle}>
            <Checkbox
              style={{}}
              value={gameParams.gameLevel.a1}
              onValueChange={(value) =>
                setGameParams({
                  ...gameParams,
                  gameLevel: { ...gameParams.gameLevel, a1: value },
                })
              }
              color={gameParams.gameLevel.a1 ? "#4630EB" : undefined}
            />
            <Text style={{ marginStart: 5, color: mode.text }}>A1</Text>
          </View>
          <View style={gameStyle.checkboxStyle}>
            <Checkbox
              style={{}}
              value={gameParams.gameLevel.a2}
              onValueChange={(value) =>
                setGameParams({
                  ...gameParams,
                  gameLevel: { ...gameParams.gameLevel, a2: value },
                })
              }
              color={gameParams.gameLevel.a2 ? "#4630EB" : undefined}
            />
            <Text style={{ marginStart: 5, color: mode.text }}>A2</Text>
          </View>
          <View style={gameStyle.checkboxStyle}>
            <Checkbox
              style={{}}
              value={gameParams.gameLevel.b1}
              onValueChange={(value) =>
                setGameParams({
                  ...gameParams,
                  gameLevel: { ...gameParams.gameLevel, b1: value },
                })
              }
              color={gameParams.gameLevel.b1 ? "#4630EB" : undefined}
            />
            <Text style={{ marginStart: 5, color: mode.text }}>B1</Text>
          </View>
          <View style={gameStyle.checkboxStyle}>
            <Checkbox
              style={{}}
              value={gameParams.gameLevel.b2}
              onValueChange={(value) =>
                setGameParams({
                  ...gameParams,
                  gameLevel: { ...gameParams.gameLevel, b2: value },
                })
              }
              color={gameParams.gameLevel.b2 ? "#4630EB" : undefined}
            />
            <Text style={{ marginStart: 5, color: mode.text }}>B2</Text>
          </View>
          <View style={gameStyle.checkboxStyle}>
            <Checkbox
              style={{}}
              value={gameParams.gameLevel.c1}
              onValueChange={(value) =>
                setGameParams({
                  ...gameParams,
                  gameLevel: { ...gameParams.gameLevel, c1: value },
                })
              }
              color={gameParams.gameLevel.c1 ? "#4630EB" : undefined}
            />
            <Text style={{ marginStart: 5, color: mode.text }}>C1</Text>
          </View>
        </View>
      </View>
      <View style={gameStyle.setGroup}>
        <Text style={[gameStyle.paramTitle, {color: mode.text}]}>Belgilash vaqti (soniyada)</Text>
        <RadioButtonGroup
          containerStyle={gameStyle.radioBtnStyle}
          containerOptionStyle={{ marginHorizontal: 10, fontSize: 20 }}
          selected={gameParams.time}
          onSelected={(value) => setGameParams({ ...gameParams, time: value })}
          radioBackground="#00f"
          labelStyle={{color: mode.text}}
        >
          <RadioButtonItem value="5" label="5" />
          <RadioButtonItem value="10" label="10" />
          <RadioButtonItem value="15" label="15" />
          <RadioButtonItem value="20" label="20" />
          <RadioButtonItem value="30" label="30" />
        </RadioButtonGroup>
      </View>
      <View style={gameStyle.setGroup}>
        <Text style={[gameStyle.paramTitle, {color: mode.text}]}>Savollar soni</Text>
        <TextInput
          maxLength={2}
          placeholder="Savollar soni"
          inputMode="numeric"
          style={[gameStyle.input, {color: mode.text}]}
          keyboardType="numeric"
          onChangeText={(value)=>setGameParams({ ...gameParams, wordCount: value })}
          returnKeyType="go"
          value={`${gameParams.wordCount}`}
        />
      </View>
      <View style={gameStyle.setGroup}>
        <Text style={[gameStyle.paramTitle, {color: mode.text}]}>So'zlar turi</Text>
        <RadioButtonGroup
          containerStyle={gameStyle.radioBtnStyle}
          containerOptionStyle={{ marginHorizontal: 8 }}
          selected={gameParams.wordType}
          onSelected={(value) =>
            setGameParams({ ...gameParams, wordType: value })
          }
          radioBackground="#00f"
        >
          <RadioButtonItem
            value="eng"
            label={<Text style={{ fontSize: 15, color: mode.text }}>Inglizcha</Text>}
          />
          <RadioButtonItem
            value="uzb"
            label={<Text style={{ fontSize: 15, color: mode.text }}>Uzbekcha</Text>}
          />
          <RadioButtonItem
            value="mixed"
            label={<Text style={{ fontSize: 15, color: mode.text }}>Aralash</Text>}
          />
        </RadioButtonGroup>
      </View>
      <TouchableOpacity
        style={[
          gameStyle.gameTypeBtn,
          { backgroundColor: "#00f", marginVertical: 10 },
        ]}
        onPress={()=>startGame()}
      >
        <Text style={{ fontSize: 23, color: "#fff", textAlign: "center" }}>
          O'yinni boshlash
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SetParam;
