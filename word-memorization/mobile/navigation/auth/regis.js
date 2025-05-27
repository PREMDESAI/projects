import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  ActivityIndicator
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { defaultStyle } from "../../assets/styles/defaultStyle";
import { regisStyle } from "../../assets/styles/auth";
import { loginStyle } from "../../assets/styles/auth";
import { useState } from "react";
import { emailIsValid } from "../../assets/utils/validator";
import { setTokenToDB } from "../../services/tokenService";

const Regis = ({ setAuthMeth, setToken }) => {
  const [protsess, setProtsess] = useState(false)
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submitHandler = async () => {
    if (userData.name.length < 3) {
      alert("Ism xato kiritilgan");
      return;
    }
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
        "https://word-memorization.onrender.com/api/user/",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
          body: JSON.stringify({
            name: userData.name,
            email: userData.email.toLowerCase(),
            password: userData.password,
          }),
        }
      );
      if(res.status==200){
          res.json().then((data) => {
            setTokenToDB("wordMemorizationAuthToken", data.authToken)
            setToken(data);
            setProtsess(false)
          });
      }else{
        res.json().then(err=>alert("Xatolik: "+err.error))
        setProtsess(false)
      }
    } catch (error) {
      setProtsess(false)
      alert(error);
    }
  };

  return (
    <ImageBackground
      style={regisStyle.fullScreen}
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
      <Text style={regisStyle.header}>Ro'yxatdan o'tish</Text>
      <View style={regisStyle.form}>
        <TextInput
          style={regisStyle.input}
          placeholder="Ism"
          placeholderTextColor={"#fff"}
          value={userData.name}
          onChangeText={(val) => setUserData({ ...userData, name: val })}
        />
        <TextInput
          style={regisStyle.input}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor={"#fff"}
          value={userData.email}
          onChangeText={(val) => setUserData({ ...userData, email: val })}
        />
        <TextInput
          style={regisStyle.input}
          placeholder="Parol"
          secureTextEntry={true}
          placeholderTextColor={"#fff"}
          value={userData.password}
          onChangeText={(val) => setUserData({ ...userData, password: val })}
        />
      </View>
      <TouchableOpacity style={regisStyle.sendBtn} onPress={submitHandler}>
        <Text style={{ fontSize: 18, color: "#fff" }}>Yuborish</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={regisStyle.nextMeth}
        onPress={() => setAuthMeth("login")}
      >
        <View style={defaultStyle.row}>
          <Text style={{ fontSize: 18, color: "#fff" }}>Tizimga kirish</Text>
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

export default Regis;
