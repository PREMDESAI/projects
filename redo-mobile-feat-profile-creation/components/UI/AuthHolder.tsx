import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import GradientCircle from "../UI/GradientCircle";
import colors from "../../constants/colors";
import { Dimensions, Image, Keyboard, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import Logo from "../../assets/logo.png"
interface IAuthContext {
  KeyboardVisible: boolean;
}

const AuthContextProvider = createContext<IAuthContext>({
  KeyboardVisible: false,
});

export const useAuthContext = () =>
  useContext<IAuthContext>(AuthContextProvider);
export default function AuthHolder({ children, linkText }) {
  const [isInput, setIsInput] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setIsInput(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsInput(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  return (
    <AuthContextProvider.Provider value={{ KeyboardVisible: isInput }}>
      <View style={{ flex: 1 }}>
        <UpperCircle />
        <Text className="text-xl font-bold p-2">{linkText}</Text>
        {children}
        <LowerLeftCircle />
        <LowerCircle />
      </View>
    </AuthContextProvider.Provider>
  );
}

function UpperCircle() {
  return (
    <View
      style={{
        position: "absolute",
        top: -100,
        zIndex: 0,
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height,
      }}
    >
      <GradientCircle
        style={{ flex: 1 }}
        radius={500}
        x={0}
        y={0}
        colors={[colors["primary-graident"]]}
      />
    </View>
  );
}
function LowerCircle() {
  return (
    <View
      style={{
        position: "absolute",
        zIndex: 0,
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height,
      }}
    >
      <GradientCircle
        style={{ flex: 1 }}
        radius={250}
        x={Dimensions.get("screen").width}
        y={Dimensions.get("screen").height}
        colors={[colors["primary-graident"]]}
      />
    </View>
  );
}

function LowerLeftCircle() {
  return (
    <View
      style={{
        position: "absolute",
        zIndex: 0,
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height,
      }}
    >
      <GradientCircle
        style={{ flex: 1 }}
        radius={80}
        x={0}
        y={Dimensions.get("screen").height - 300}
        colors={[colors["primary-graident"]]}
        // colors={["red"]}
      />
    </View>
  );
}

export function AuthInput({
  onChange,
  label,
  placeholder,
  isPassword,
}) {
  return (
    <TextInput
      label={label}
      mode="outlined"
      secureTextEntry={isPassword}
      placeholder={placeholder}
      outlineStyle={{ borderColor: "gray", borderRadius: 15 }}
      style={{ marginBottom: 12 }}
      activeOutlineColor={"black"}
      onChangeText={onChange}
      textColor="black"
    />
  );
}


export function AuthLogo(){
  const {KeyboardVisible} = useAuthContext()
  return <Image
        style={{
          objectFit: "cover",
          width: KeyboardVisible ? 200 : 300,
          height: KeyboardVisible ? 50 : 300,
        }}
        source={Logo}
      />
}