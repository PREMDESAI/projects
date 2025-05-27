import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { gramCheckCss } from "../../assets/styles/gramCheckCss";

const GrammerCheck = () => {
  const [input, setInput] = useState("");
  const [res, setRes] = useState("");
  const [loadBack, setLoadBack] = useState(false);

  const checkHandler = async () => {
    if (input.length < 2) return;
    setLoadBack(true);
    const url = `https://bing-spell-check2.p.rapidapi.com/spellcheck?mode=spell&text=${input.trim()}`;
    try {
        const response = await fetch(url, options);
        await response.json()
          .then(result=>{
            if(result.flaggedTokens){
              let current = "", start = 0;
              result.flaggedTokens.forEach(element => {
                current = current + input.slice(start, element.offset);
                current = current + element.suggestions[0].suggestion;
                start = element.offset + element?.token.length;
              });
              if(start!=input.length){
                current = current + input.slice(start);
              }
              setRes(current)
            }
          })
        
        setLoadBack(false);
    } catch (error) {
        setLoadBack(false);
        console.error(error);
    }
  };

  return (
    <View style={{ height: "100%" }}>
      {loadBack && (
        <View
          style={[
            gramCheckCss.absolute,
            {
              top: "0%",
              width: "100%",
              height: "100%",
              zIndex: 100,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#00000050",
            },
          ]}
        >
          <ActivityIndicator size={"large"} color="#fff"></ActivityIndicator>
        </View>
      )}
      <View style={gramCheckCss.container}>
        {false && (
          <View style={gramCheckCss.msg}>
            <Text
              style={{ textAlign: "center", fontSize: 17, color: "#D7B313FF" }}
            >
              Use “an” instead of ‘a’ if the following word starts with a vowel
              sound, e.g. ‘an article’, ‘an hour’.
            </Text>
          </View>
        )}
        <View style={gramCheckCss.inputTxt}>
          <View style={[gramCheckCss.row, gramCheckCss.between]}>
            <Text>Input</Text>
            <Text>{input.length}/100</Text>
          </View>
          <TextInput
            maxLength={100}
            placeholderTextColor="#555"
            placeholder="Text"
            multiline={true}
            numberOfLines={3}
            style={gramCheckCss.input}
            onChangeText={(text) => setInput(text)}
            value={input}
          />
        </View>
        <TouchableOpacity onPress={checkHandler} style={gramCheckCss.btn}>
          <Text style={{ color: "#fff", fontSize: 17, textAlign: "center" }}>
            Tekshirish
          </Text>
        </TouchableOpacity>

        <View style={gramCheckCss.result}>
          <Text>Result</Text>
          <ScrollView>
            <TextInput value={res} style={gramCheckCss.resText} editable={false}/>
            {/* <Text style={gramCheckCss.resText}>{res}</Text> */}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default GrammerCheck;


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b0daa6b4b5mshe195d0534bfed1dp1c0470jsn3ac738645775',
		'X-RapidAPI-Host': 'bing-spell-check2.p.rapidapi.com'
	}
};


// {This s erro
//   "_type": "SpellCheck",
//   "flaggedTokens": [
//     {
//       "offset": 5,
//       "token": "s",
//       "type": "UnknownToken",
//       "suggestions": [
//         {
//           "suggestion": "is",
//           "score": 1
//         }
//       ]
//     },
//     {
//       "offset": 7,
//       "token": "erro",
//       "type": "UnknownToken",
//       "suggestions": [
//         {
//           "suggestion": "error",
//           "score": 1
//         }
//       ]
//     }
//   ],
//   "correctionType": "High"
// }