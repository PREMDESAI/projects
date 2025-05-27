import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons, Feather, MaterialIcons, Entypo } from "@expo/vector-icons";
// import { defaultStyle } from "../assets/styles/defaultStyle";
import TodaysWordStudy from './daily/TodaysWordStudy'

//screens
import HomeScreen from "./screens/Home";
import AddWords from './daily/AddWords';
import Setting from './info/setting';
import Game from './screens/Game';

const Tab = createMaterialBottomTabNavigator();

export default function MainScreen({navigation, mode}) {
  const goToOutScreen = (screenName) => {
    navigation.navigate(screenName)
  }
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      labelStyle={{ fontSize: 10 }}
      style={{ backgroundColor: mode.background}}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: "Asosiy",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={26} />
          ),
        }}
      >
        {props => <HomeScreen {...props} goToOutScreen={goToOutScreen} mode={mode} />}
      </Tab.Screen>
      <Tab.Screen
        name="learn"
        options={{
          tabBarLabel: "O'rganish",
          tabBarIcon: ({ color }) => (
            <Feather name="repeat" size={24} color={color} />
          ),
        }}
      >
        {props => <TodaysWordStudy {...props} dispMode={mode} />}
      </Tab.Screen>
      <Tab.Screen
        name="add"
        options={{
          tabBarLabel: "So'z qo'shish",
          tabBarIcon: ({ color }) => (
            <Ionicons name="add-circle-sharp" size={25} color={color} />
          ),
        }}
      >
        {props => <AddWords {...props} mode={mode} />}
      </Tab.Screen>
      <Tab.Screen
        name="game"
        options={{
          tabBarLabel: "Game",
          tabBarIcon: ({ color }) => (
            <Entypo name="game-controller" size={24} color={color} />
          ),
        }}
      >
        {props => <Game {...props} mode={mode} />}
      </Tab.Screen>
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: "Sozlanmalar",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-settings" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// function MainScreen1({ navigation }) {
//   const updateInfo = () => {
//     alert("Bu funksiyalar yaqin orada qo'shiladi");
//   };
//   return (
    // <View style={defaultStyle.container}>
    //   <ScrollView style={defaultStyle.column}>
    //     {/* Kunlik so'z o'rganish */}
    //     <View style={[defaultStyle.column, { marginBottom: 2 }]}>
    //       <Text style={{ fontSize: 15 }}>Kunlik so'z o'rganish</Text>
    //       <View style={[defaultStyle.column, mainStyle.itemGroup]}>
    //         <TouchableOpacity
    //           style={[defaultStyle.row, mainStyle.item]}
    //           onPress={() => navigation.navigate("So'z qo'shish")}
    //         >
    //           <AntDesign name="pluscircleo" size={25} color={"#0f0"} />
    //           <Text style={{ marginStart: 10, fontSize: 20 }}>
    //             So'z qo'shish va qo'shilgan so'zlar
    //           </Text>
    //         </TouchableOpacity>
    //         <View style={mainStyle.hr}></View>
    //         <TouchableOpacity
    //           style={[defaultStyle.row, mainStyle.item]}
    //           onPress={() => navigation.navigate("Bugungi so'zlarni o'rganish")}
    //         >
    //           <Feather name="refresh-ccw" size={25} color={"#00f"} />
    //           <Text style={{ marginStart: 10, fontSize: 20 }}>
    //             So'zlarni o'rganish va takrorlash
    //           </Text>
    //         </TouchableOpacity>
    //         <View style={mainStyle.hr}></View>
    //         <TouchableOpacity
    //           style={[defaultStyle.row, mainStyle.item]}
    //           onPress={() => navigation.navigate("Yod olingan so'zlar")}
    //         >
    //           <Feather name="bookmark" size={25} color={"#50C878"} />
    //           <Text style={{ marginStart: 10, fontSize: 20 }}>
    //             Yod olingan so'zlar
    //           </Text>
    //         </TouchableOpacity>
    //       </View>
    //     </View>
    //     {/* Qo'shimcha (maxsus) o'rganish */}
    //     <View style={[defaultStyle.column, { marginBottom: 2 }]}>
    //       <Text style={{ fontSize: 15 }}>Qo'shimcha (maxsus) o'rganish</Text>
    //       <View style={[defaultStyle.column, mainStyle.itemGroup]}>
    //         <TouchableOpacity
    //           style={[defaultStyle.row, mainStyle.item]}
    //           onPress={updateInfo}
    //         >
    //           <Ionicons name="pencil-outline" size={25} color={"#0f0"} />
    //           <Text style={{ marginStart: 10, fontSize: 20 }}>
    //             Toifa tanlash
    //           </Text>
    //         </TouchableOpacity>
    //         <View style={mainStyle.hr}></View>
    //         <TouchableOpacity
    //           style={[defaultStyle.row, mainStyle.item]}
    //           onPress={updateInfo}
    //         >
    //           <AntDesign name="pluscircleo" size={25} color={"#0f0"} />
    //           <Text style={{ marginStart: 10, fontSize: 20 }}>
    //             Toifa bo'yicha so'z o'rganish
    //           </Text>
    //         </TouchableOpacity>
    //         <View style={mainStyle.hr}></View>
    //         <TouchableOpacity
    //           style={[defaultStyle.row, mainStyle.item]}
    //           onPress={updateInfo}
    //         >
    //           <Feather name="refresh-ccw" size={25} color={"#00f"} />
    //           <Text style={{ marginStart: 10, fontSize: 20 }}>
    //             So'zlarni takrorlash
    //           </Text>
    //         </TouchableOpacity>
    //       </View>
    //     </View>
    //     {/* Qo'shimcha imkoniyatlar */}
    //     <View style={[defaultStyle.column, { marginBottom: 2 }]}>
    //       <Text style={{ fontSize: 15 }}>Qo'shimcha imkoniyatlar</Text>
    //       <View style={[defaultStyle.column, mainStyle.itemGroup]}>
    //         <TouchableOpacity
    //           style={[defaultStyle.row, mainStyle.item]}
    //           onPress={() => navigation.navigate("Translate")}
    //         >
    //           <MaterialCommunityIcons
    //             name="translate"
    //             size={25}
    //             color={"#9457EB"}
    //           />
    //           <Text style={{ marginStart: 10, fontSize: 20 }}>
    //             Tarjima qilish
    //           </Text>
    //         </TouchableOpacity>
    //         <View style={mainStyle.hr}></View>
    //         <TouchableOpacity
    //           style={[defaultStyle.row, mainStyle.item]}
    //           onPress={() => navigation.navigate("Gramatik tekshiruv")}
    //         >
    //           <FontAwesome5 name="spell-check" size={25} color={"#516512"} />
    //           <Text style={{ marginStart: 10, fontSize: 20 }}>
    //             Gramatik tekshiruv
    //           </Text>
    //         </TouchableOpacity>
    //         <View style={mainStyle.hr}></View>
    //         <TouchableOpacity
    //           style={[defaultStyle.row, mainStyle.item]}
    //           onPress={() => navigation.navigate("Noto'g'ri fe'llar")}
    //         >
    //           <Ionicons name="list" size={25} color={"#B91786"} />
    //           <Text style={{ marginStart: 10, fontSize: 20 }}>
    //             Noto'g'ri fe'llar
    //           </Text>
    //         </TouchableOpacity>
    //         <View style={mainStyle.hr}></View>
    //         <TouchableOpacity
    //           style={[defaultStyle.row, mainStyle.item]}
    //           onPress={() => navigation.navigate("Alifbo")}
    //         >
    //           <MaterialCommunityIcons
    //             name="alphabetical"
    //             size={25}
    //             color={"#121786"}
    //           />
    //           <Text style={{ marginStart: 10, fontSize: 20 }}>Alifbo</Text>
    //         </TouchableOpacity>
    //         <View style={mainStyle.hr}></View>
    //         <TouchableOpacity
    //           style={[defaultStyle.row, mainStyle.item]}
    //           onPress={() => navigation.navigate("Raqamlar")}
    //         >
    //           <MaterialCommunityIcons
    //             name="numeric"
    //             size={25}
    //             color={"#00ff00"}
    //           />
    //           <Text style={{ marginStart: 10, fontSize: 20 }}>Raqamlar</Text>
    //         </TouchableOpacity>
    //       </View>
    //     </View>
    //     {/* Statistika */}
    //     <Statistika/>
    //     {/* Dastur haqida */}
    //     <View style={[defaultStyle.column, { marginBottom: 2 }]}>
    //       <Text style={{ fontSize: 15 }}>Dastur haqida</Text>
    //       <View style={[defaultStyle.column, mainStyle.itemGroup]}>
    //         <TouchableOpacity
    //           style={[defaultStyle.row, mainStyle.item]}
    //           onPress={() => navigation.navigate("Sozlanmalar")}
    //         >
    //           <AntDesign name="setting" size={25} color={"#00f"} />
    //           <Text style={{ marginStart: 10, fontSize: 20 }}>Sozlanmalar</Text>
    //         </TouchableOpacity>
    //         <View style={mainStyle.hr}></View>
    //         <TouchableOpacity
    //           style={[defaultStyle.row, mainStyle.item]}
    //           onPress={() => navigation.navigate("Fikr-mulohazalar")}
    //         >
    //           <Octicons name="feed-discussion" size={25} color={"#50C878"} />
    //           <Text style={{ marginStart: 10, fontSize: 20 }}>
    //             Fikr-mulohazalar
    //           </Text>
    //         </TouchableOpacity>
    //         <View style={mainStyle.hr}></View>
    //         <TouchableOpacity
    //           style={[defaultStyle.row, mainStyle.item]}
    //           onPress={() => navigation.navigate("Dastur haqida ma'lumot")}
    //         >
    //           <AntDesign name="infocirlceo" size={25} color={"#B91786"} />
    //           <Text style={{ marginStart: 10, fontSize: 20 }}>
    //             Dastur haqida va bog'lanish
    //           </Text>
    //         </TouchableOpacity>
    //         {/* <View style={mainStyle.hr}></View> */}
    //         {/* <TouchableOpacity style={[defaultStyle.row, mainStyle.item]}
    //           onPress={()=>navigation.navigate("Bog'lanish")}>
    //           <AntDesign name="contacts" size={25} color={"#9457EB"} />
    //           <Text style={{marginStart: 10, fontSize: 20}}>Bog'lanish</Text>
    //         </TouchableOpacity> */}
    //       </View>
    //     </View>
    //   </ScrollView>
    // </View>
//   );
// }

// const Statistika = () => {
//   const [words, setWords] = useState({
//     new: 0,
//     memorized: 0,
//     repeat: 0,
//   });
//   const fetchData = () => {
//     getWords()
//       .then((datas) => {
//         const data = {new: 0, repeat:0, memorized:0};
//         datas.forEach((element) => {
//           element.status == "new"
//             ? data.new++
//             : element.status == "memorized"
//             ? data.memorized++
//             : data.repeat++
//         });
//         setWords(data)
//       })
//       .catch((err) => {
//         alert(err);
//       });
//   }
//   useEffect(() => {
//     fetchData()
//   }, []);
//   const dayOfWeek = new Date().getDay();
//   return (
//     <View style={[defaultStyle.column, { marginBottom: 2 }]}>
//       <Text style={{ fontSize: 15 }}>Statistika</Text>
//       <View style={[defaultStyle.column, mainStyle.itemGroup]}>
//         <View style={defaultStyle.row}>
//           <View
//             style={[
//               mainStyle.weekDay,
//               { backgroundColor: (dayOfWeek === 1)? "#ccc" : "" },
//             ]}
//           >
//             <Text>Du</Text>
//           </View>
//           <View
//             style={[
//               mainStyle.weekDay,
//               { backgroundColor: (dayOfWeek === 2) ? "#ccc" : "" },
//             ]}
//           >
//             <Text>Se</Text>
//           </View>
//           <View
//             style={[
//               mainStyle.weekDay,
//               { backgroundColor: (dayOfWeek === 3) ? "#ccc" : "" },
//             ]}
//           >
//             <Text>Ch</Text>
//           </View>
//           <View
//             style={[
//               mainStyle.weekDay,
//               { backgroundColor: (dayOfWeek === 4) ? "#ccc" : "" },
//             ]}
//           >
//             <Text>Pa</Text>
//           </View>
//           <View
//             style={[
//               mainStyle.weekDay,
//               { backgroundColor: (dayOfWeek === 5) ? "#ccc" : "" },
//             ]}
//           >
//             <Text>Ju</Text>
//           </View>
//           <View
//             style={[
//               mainStyle.weekDay,
//               { backgroundColor: (dayOfWeek === 6) ? "#ccc" : "" },
//             ]}
//           >
//             <Text>Sh</Text>
//           </View>
//           <View
//             style={[
//               mainStyle.weekDay,
//               { backgroundColor: (dayOfWeek === 0) ? "#ccc" : "" },
//             ]}
//           >
//             <Text>Ya</Text>
//           </View>
//         </View>
//         <View style={defaultStyle.column}>
//           <View style={mainStyle.stats}>
//             <Text>Yangi so'zlar: {words.new}</Text>
//           </View>
//           <View style={mainStyle.stats}>
//             <Text>Yodlangan so'zlar: {words.memorized}</Text>
//           </View>
//           <View style={mainStyle.stats}>
//             <Text>Takrorlash kerak bo'lgan so'zlar: {words.repeat}</Text>
//           </View>
//           <View style={[defaultStyle.row, defaultStyle.between]}>
//             <Text style={{fontSize: 20, padding: 10}}>Jami: {words.new + words.memorized + words.repeat}</Text>
//             <TouchableOpacity
//               style={mainStyle.btn}
//             >
//               <FontAwesome name="refresh" size={30} color={"#000"} />
//             </TouchableOpacity>
//           </View>
//         </View>
//         <View style={[mainStyle.hr, { marginVertical: 10 }]}></View>
//         <View style={[defaultStyle.row, defaultStyle.between]}>
//           <View style={defaultStyle.column}>
//             <View style={defaultStyle.row}>
//               <FontAwesome
//                 name="line-chart"
//                 size={25}
//                 color={"#50C878"}
//                 style={{ margin: 10, marginEnd: 15 }}
//               />
//               <View style={defaultStyle.column}>
//                 <Text style={{ fontSize: 18 }}>Kunlik reja</Text>
//                 <Text style={{ fontSize: 20 }}>0/10</Text>
//               </View>
//             </View>
//             <Text style={{ margin: 5, fontSize: 15 }}>
//               Bir oyda 0/300 ta yangi so'z
//             </Text>
//           </View>
//           <TouchableOpacity
//             style={[mainStyle.btn, {backgroundColor: "#0f0",}]}
//           >
//             <Ionicons name="pencil" size={30} color={"#000"} />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };
