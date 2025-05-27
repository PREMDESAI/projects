import {
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { defaultStyle } from "../../assets/styles/defaultStyle";
import { loginStyle } from "../../assets/styles/auth";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { setTokenToDB } from "../../services/tokenService";
import { emailIsValid } from "../../assets/utils/validator";

const Login = ({ setAuthMeth, setToken }) => {
  const [protsess, setProtsess] = useState(false)
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const submitHandler = async () => {
    if (!emailIsValid(userData.email)) {
      alert("Email xato kiritilgan");
      return;
    }
    if (userData.password.length < 6) {
      alert("Parol 6 ta belgidan kam");
      return;
    }
    setProtsess(true)
    try {
      const res = await fetch(
        "https://word-memorization.onrender.com/api/auth/",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
          body: JSON.stringify({
            email: userData.email.toLowerCase(),
            password: userData.password,
          }),
        }
      );
      if (res.status == 200) {
        res.json().then((data) => {
          setTokenToDB("wordMemorizationAuthToken", data.authToken);
          setToken(data);
          setProtsess(false)
        });
      } else {
        res.json().then((err) => alert("Xatolik: " + err.error));
        setProtsess(false)
      }
    } catch (error) {
      alert(error);
      setProtsess(false)
    }    
  };
  return (
    <ImageBackground
      style={loginStyle.fullScreen}
      source={require("../../assets/img/background.jpg")}
    >
      {protsess && (
        <View style={loginStyle.modalProgress}>
          <Text style={{ fontSize: 27, textAlign: "center", marginBottom: 30 }}>
            Iltimos kuring
          </Text>
          <ActivityIndicator size={"large"} color="#00f" />
        </View>
      )}
      <Text style={loginStyle.header}>Tizimga kirish</Text>
      <View style={loginStyle.form}>
        <TextInput
          style={loginStyle.input}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor={"#fff"}
          value={userData.email}
          onChangeText={(val) => setUserData({ ...userData, email: val })}
        />
        <TextInput
          style={loginStyle.input}
          placeholder="Parol"
          secureTextEntry={true}
          placeholderTextColor={"#fff"}
          value={userData.password}
          onChangeText={(val) => setUserData({ ...userData, password: val })}
        />
      </View>
      <TouchableOpacity style={loginStyle.sendBtn} onPress={submitHandler}>
        <Text style={{ fontSize: 18, color: "#fff" }}>Kirish</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={loginStyle.nextMeth}
        onPress={() => setAuthMeth("regis")}
      >
        <View style={defaultStyle.row}>
          <Text style={{ fontSize: 18, color: "#fff" }}>
            Yangi hisob yaratish
          </Text>
          <AntDesign
            name="right"
            color={"#fff"}
            size={18}
            style={{ paddingTop: 5, marginStart: 4 }}
          />
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Login;
