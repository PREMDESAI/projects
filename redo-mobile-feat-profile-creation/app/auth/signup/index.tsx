import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import AuthHolder, {
  AuthInput,
  AuthLogo,
  useAuthContext,
} from "../../../components/UI/AuthHolder";
import DateTimeInput from "../../../components/UI/DateTimeInput";


export default function index() {
  return (
    <AuthHolder linkText="SignUp">
      <SignUp />
    </AuthHolder>
  );
}

function SignUp() {
  const loginRef = useRef({ username: "", dob: null, email: "", password: "" });
  function changeField(key: string, value: string|Date) {
    loginRef.current[key] = value;
  }
  return (
    <SafeAreaView className="px-6 flex-1 flex-col justify-start items-center z-10">
      <AuthLogo />
      <View className="w-full">
        <AuthInput
          isPassword={false}
          label="Username"
          placeholder="Your full name"
          onChange={(text: string) => changeField("username", text)}
        />
        <DateTimeInput onChange={(date)=>changeField("dob",date)}/>
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
        SignUp
      </Button>
      <Text>
        Already an user? <Text className="text-primary">Login</Text>
      </Text>
    </SafeAreaView>
  );
}
