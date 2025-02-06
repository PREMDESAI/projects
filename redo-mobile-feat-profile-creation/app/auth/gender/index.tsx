import { View, Pressable, FlatList, Dimensions } from "react-native";
import {
  IconButton,
  Text,
  Chip,
  Button,
  MD3Colors,
  Icon,
} from "react-native-paper";
import colors from "../.././../constants/colors";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const width = Dimensions.get("window").width - 40;

export default function index() {
  return (
    <SafeAreaView className="px-6 flex-1">
      <View className="flex flex-row justify-between items-center">
        <IconButton
          icon="chevron-left"
          className="border rounded-lg"
          style={{ borderColor: "#D6D3D1" }}
          borderless={true}
          iconColor={colors.primary}
          rippleColor={colors.secondary}
          size={20}
          onPress={() => console.log("Pressed")}
        />
        <Pressable>
          <Text variant="bodyLarge" className="text-primary font-bold">
            Skip
          </Text>
        </Pressable>
      </View>
      <View className="mt-8 mb-5">
        <Text
          variant="displayMedium"
          className="font-bold"
          style={{ color: "black" }}
        >
          I am a
        </Text>
      </View>
      <InterestBox />
      <Button mode="contained" className="rounded-lg mb-4">
        Continue
      </Button>
    </SafeAreaView>
  );
}

const interestsList = ["male", "female", "prefer not to say"];

function InterestBox() {
  return (
    // we cant use grid in react native
    <FlatList
      className="flex-1"
      contentContainerStyle={{ margin: 0 }}
      data={interestsList}
      renderItem={({ item, index }) => <InterestBoxItem item={item} />}
      keyExtractor={(item) => item}
    />
  );
}

function InterestBoxItem({ item }: { item: string }) {
  const [selected, setSelected] = useState(false);
  const currentColor = selected ? "white" : MD3Colors.primary30;
  return (
    <Chip
      mode={selected ? "flat" : "outlined"}
      disabled={false}
      style={{
        width: "100%",
        backgroundColor: selected ? colors.tertiary : "white",
      }}
      selected={selected}
      showSelectedCheck={true}
      showSelectedOverlay={true}
      className="my-1 py-3"
      onPress={() => setSelected((p) => !p)}
      elevated={false}
      textStyle={{ fontSize: 20, color: currentColor }}
      elevation={0}
    >{`${item[0].toUpperCase()}${item.substring(1)}`}</Chip>
  );
}
