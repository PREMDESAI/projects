import {
  Canvas,
  RadialGradient,
  ImageShader,
  vec,
  Group,
  Circle,
  useImage,
  Paint,
} from "@shopify/react-native-skia";
import colors from "../../../constants/colors";
import React from "react";
import { Dimensions, Text, View } from "react-native";
import RemojiHeroImg from "../../../assets/RemojiHero.png";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Chip, TextInput } from "react-native-paper";
export default function index() {
  const height = Dimensions.get("screen").height;

  return (
    <View style={{ flex: 1, marginTop: -40, position: "relative" }}>
      <Background />
      <View
        className="absolute z-10 w-full items-center"
        style={{ top: height / 2 + 100 }}
      >
        <View className="w-[80%] bg-white px-6 py-4 rounded-lg shadow-lg">
          <Button
            mode="contained"
            className="rounded-md"
            icon={"upload"}
            contentStyle={{ flexDirection: "row-reverse" }}
          >
            Upload Image
          </Button>
          <TextInput
            className="mt-5"
            mode="outlined"
            contentStyle={{ backgroundColor: "white" }}
            outlineColor="white"
            activeOutlineColor="white"
            placeholderTextColor="#D4D4D8"
            multiline={true}
            placeholder="Write a little description about yourself to generate your Avatar"
          />
        </View>
      </View>
    </View>
  );
}

function Background() {
  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("screen").height;
  const centerImage = useImage(RemojiHeroImg);
  return (
    <Canvas style={{ flex: 1 }}>
      <Group>
        <Circle cx={width / 2} cy={height / 2} r={height} />
        <RadialGradient
          c={vec(width / 2, height / 2 - 100)}
          r={2 * height}
          colors={[
            "white",
            colors["tertiary"],
            colors["secondary"],
            colors["primary"],
          ]}
        />
        <Circle cx={width / 2} cy={height / 2 - 100} r={width / 4}>
          <ImageShader
            image={centerImage}
            fit="cover"
            rect={{
              x: width / 4,
              y: height / 4,
              width: width / 2,
              height: height / 4,
            }}
          ></ImageShader>
          <Paint strokeWidth={10} style={"stroke"} color={"white"} />
        </Circle>

        <Circle
          cx={width / 2}
          cy={height / 2 - 100}
          r={width / 4 + 50}
          style={"stroke"}
        >
          <Paint strokeWidth={2} style={"stroke"} color={"white"} />
        </Circle>
      </Group>
    </Canvas>
  );
}
