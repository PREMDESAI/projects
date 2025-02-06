import React, { useRef} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  View,
} from "react-native";
import { Button } from "react-native-paper";
import AuthHolder, {
  AuthInput,
  AuthLogo,
} from "../../../components/UI/AuthHolder";

export default function index() {
  return (
    <AuthHolder linkText="Login">
      <Login />
    </AuthHolder>
  );
}

function Login() {
  const loginRef = useRef({ email: "", password: "" });
  function changeField(key: string, value: string) {
    loginRef.current[key] = value;
  }
  return (
    <SafeAreaView className="px-6 flex-1 flex-col justify-start items-center z-10">
      <AuthLogo />
      <View className="w-full">
        <AuthInput
          isPassword={false}
          label="Email"
          placeholder="m@gmail.com"
          onChange={(text: string) => changeField("email", text)}
        />
        <AuthInput
          isPassword={true}
          label="Password"
          placeholder="Your password"
          onChange={(text: string) => changeField("email", text)}
        />
      </View>
      <Button mode="contained" className="rounded-lg mt-4 mb-2 w-full">
        Login
      </Button>
      <Text>
        New User? <Text className="text-primary">Sign Up</Text>
      </Text>
    </SafeAreaView>
  );
}
