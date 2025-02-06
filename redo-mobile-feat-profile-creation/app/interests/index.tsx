import { View, Pressable, FlatList, Dimensions } from "react-native";
import { IconButton, Text, Chip,Button,MD3Colors , Icon} from "react-native-paper";
import colors from "../../constants/colors";
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
          variant="displaySmall"
          className="font-bold"
          style={{ color: colors.primary }}
        >
          Your Interests
        </Text>
        <View>
          <Text style={{ color: colors.secondary }}>
            Select a few of your interests and let everyone
          </Text>
          <Text style={{ color: colors.secondary }}>
            know what are you are passionate about
          </Text>
        </View>
      </View>
      <InterestBox />
      <Button mode="contained" className="rounded-lg mb-4">Continue</Button>
    </SafeAreaView>
  );
}

const interestsList = [
  { name: "photography", icon: "camera-enhance-outline" },
  { name: "shopping", icon: "shopping" },
  { name: "karaoke", icon: "music" },
  { name: "yoga", icon: "yoga" },
  { name: "cooking", icon: "food-takeout-box-outline" },
  { name: "cricket", icon: "tennis" },
  { name: "run", icon: "run" },
  { name: "art", icon: "drawing" },
  { name: "swimming", icon: "swim" },
  { name: "extreme", icon: "hiking" },
  { name: "music", icon: "music-note" },
  { name: "drink", icon: "glass-cocktail" },
  { name: "video games", icon: "gamepad-variant" },
  { name: "movies", icon: "movie" },
  { name: "reading", icon: "book" },
  { name: "travel", icon: "airplane" },
  { name: "hiking", icon: "hiking" },
];

function InterestBox() {
  return (
    // we cant use grid in react native
    <FlatList
      className="flex-1"
      contentContainerStyle={{margin:0}}
      columnWrapperStyle={{ justifyContent: "space-between"}}
      numColumns={2}
      data={interestsList}
      renderItem={({ item, index }) => (
        <InterestBoxItem name={item.name} icon={item.icon} key={index} />
      )}
      keyExtractor={({ name }) => name}
    />
  );
}

function InterestBoxItem({ icon, name }) {
  const [selected,setSelected] = useState(false)
  const currentColor = selected?"white":MD3Colors.primary30
  return (
    <Chip
      mode={selected?"flat":"outlined"}
      disabled={false}
      style={{ width: width / 2 - 10,backgroundColor:selected?colors.tertiary:"white" }}
      className="my-1"
      onPress={()=>setSelected(p=>!p)}
      elevated={false}
      textStyle={{ fontSize: 15 , color:currentColor}}
      icon={ ()=><Icon
        source={icon}
        size={15}
        color={currentColor}
      />}
      elevation={0}
    >{`${name[0].toUpperCase()}${name.substring(1)}`}</Chip>
  );
}
