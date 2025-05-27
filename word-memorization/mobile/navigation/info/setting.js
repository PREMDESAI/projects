import {
  Switch,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  TextInput,
} from "react-native";
import { setting } from "../../assets/styles/info";
import { defaultStyle } from "../../assets/styles/defaultStyle";
import { useState } from "react";
import { deleteToken } from "../../services/tokenService";
import { Feather, AntDesign, Ionicons } from "@expo/vector-icons";
import CustomHeader from "../components/header";

const Setting = ({ navigation, setToken, token = "sdas" }) => {
  const [modal, setModal] = useState(false);
  const logoutHandler = () => {
    return;
    // deleteToken("wordMemorizationAuthToken")
    // setToken('')
  };
  return (
    <View>
      <TouchableOpacity
        style={{ position: "absolute", margin: 10, zIndex: 10 }}
        onPress={() => navigation.jumpTo("Home")}
      >
        <AntDesign name="left" size={28} color="black" />
      </TouchableOpacity>
      <CustomHeader title="Sozlanmalar" />
      {modal && (
        <View style={setting.logoutModal}>
          <Text style={{ fontSize: 25, textAlign: "center" }}>
            Dastur hisobidan chiqishni hohlaysizmi ?{" "}
          </Text>
          <View style={[defaultStyle.row, defaultStyle.around]}>
            <TouchableOpacity
              style={[setting.modalBtn, { backgroundColor: "#00f" }]}
              onPress={() => setModal(false)}
            >
                <Feather name="x" size={28} color="#fff" />
              {/* <Text style={{ fontSize: 18, color: "#fff" }}>Qaytish</Text> */}
            </TouchableOpacity>
            <TouchableOpacity
              style={[setting.modalBtn, { backgroundColor: "#f00" }]}
              onPress={logoutHandler}
            >
                <Ionicons name="exit-outline" size={28} color="#fff" />
                {/* <MaterialIcons name="done" size={24} color="black" /> */}
              {/* <Text style={{ fontSize: 18, color: "#fff" }}>Chiqish</Text> */}
            </TouchableOpacity>
          </View>
        </View>
      )}
      <ScrollView>
        <View style={defaultStyle.container}>
          <Text style={setting.textHeader}>Profil sozlanmalari</Text>
          <View style={setting.group}>
            <TextInput
              placeholder="Ism"
              style={setting.input}
              editable={false}
              defaultValue={token.name}
            />
            <TextInput
              placeholder="Email"
              style={setting.input}
              editable={false}
              defaultValue={token.email}
            />
            <TouchableOpacity style={setting.sendBtn} disabled>
              <Text
                style={[defaultStyle.tCenter, { fontSize: 17, color: "#fff" }]}
              >
                Saqlash
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={setting.textHeader}>Xabar sozlanmalari</Text>
          <View style={setting.group}>
            <View style={[defaultStyle.row, defaultStyle.between]}>
              <Text style={[setting.text, { paddingTop: 8, fontSize: 18 }]}>
                Bildrishnomalar
              </Text>
              <Switch />
            </View>
            <View style={setting.hr}></View>
            <View style={[defaultStyle.row, defaultStyle.between]}>
              <Text style={[setting.text, { paddingTop: 8, fontSize: 18 }]}>
                Tebranish
              </Text>
              <Switch />
            </View>
          </View>
          <Text style={setting.textHeader}>Xabar sozlanmalari</Text>
          <View style={setting.group}>
            <View style={[defaultStyle.row, defaultStyle.between]}>
              <Text style={[setting.text, { paddingTop: 8, fontSize: 18 }]}>
                Dark mode
              </Text>
              <Switch />
            </View>
            <View style={setting.hr}></View>
            <TouchableOpacity style={setting.sendBtn}>
              <View style={[defaultStyle.row, defaultStyle.around]}>
                <Feather name="refresh-ccw" size={20} color={"#fff"} />
                <Text
                  style={{ textAlign: "center", fontSize: 17, color: "#fff" }}
                >
                  Ma'lumotlarni sinxronlash
                </Text>
              </View>
            </TouchableOpacity>
            {/* <View style={[defaultStyle.row, defaultStyle.between]}>
                            <Text style={[setting.text, {paddingTop: 8, fontSize: 18}]}>Bildrishnomalar</Text>
                            <Switch/>
                        </View>
                        <View style={setting.hr}></View>
                        <View style={[defaultStyle.row, defaultStyle.between]}>
                            <Text style={[setting.text, {paddingTop: 8, fontSize: 18}]}>Tebranish</Text>
                            <Switch/>
                        </View>*/}
          </View>
          <TouchableOpacity
            style={[
              setting.sendBtn,
              { backgroundColor: "#fff", borderWidth: 0.5 },
            ]}
            onPress={() => setModal(true)}
          >
            <Text style={{ color: "#f00", fontSize: 17, textAlign: "center" }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Setting;
