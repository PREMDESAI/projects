import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import * as Speech from "expo-speech";
import { Audio } from "expo-av";

import { defaultStyle } from "../../../assets/styles/defaultStyle";
import { learn } from "../../../assets/styles/learn";
import { Feather } from "@expo/vector-icons";
import { getWordWidthParam, updateWord } from "../../../services/wordDBService";
import { SettingMode, randomizeData } from "./utils";

const Repeatiton = ({dispMode}) => {
  const [words, setWords] = useState([]);
  const [learnMode, setLearnMode] = useState({
    order: true,
    sequence: ["eng", "uzb"],
    selectMode: true, //'select'//[write=true, select=false]
  });
  const [mode, setMode] = useState(false);
  const [sound, setSound] = React.useState();
  const [currentWord, setCurrentWord] = useState({});
  const [answers, setAnswers] = useState({
    correct: 0,
    wrong: 0,
    count: 0
  });
  const [showAns, setShowAns] = useState(false)
  const [ansTypingInput, setAnsTypingInput] = useState();
  const [answerStatus, setanswerStatus] = useState()

  const setOrder = () => {
    setLearnMode({ ...learnMode, order: !learnMode.order });
  };
  const swapSequence = () => {
    setLearnMode({ ...learnMode, sequence: learnMode.sequence.reverse() });
  };
  const setSelectMode = () => {
    setLearnMode({ ...learnMode, selectMode: !learnMode.selectMode });
  };
  const startLearn = async () => {
    //start learning
    if(words.length==0){
      alert("takrorlash uchun so'z yo'q");
      return;
    } 
    setMode(false);
    if(!learnMode.order) {
      let data = await randomizeData(words)
      setWords(data)
    }  
    setCurrentWord(words[answers.count]);
  };
  const checkAnswer = () => {
    if(!currentWord) return;
    const defaultName = (learnMode.sequence[0]=="eng")? currentWord.translation : currentWord.name;
    if(defaultName == ansTypingInput){
      //current answer
      setAnswers({...answers, correct: answers.correct+1, count: answers.count+1})
      setShowAns(true)
      playSound(true)
      setanswerStatus(true)
    }else{
      setAnswers({...answers, wrong: answers.wrong+1, count: answers.count+1})
      setShowAns(true)
      playSound(false)
      setanswerStatus(false)
    }
  }

  const nextWordHandler = (paramStatus) => {
    updateWord({...currentWord, status: paramStatus}, currentWord.id);
    if(answers.count == words.length) return;
    setShowAns(false)
    setCurrentWord(words[answers.count]);
    setAnsTypingInput("")
  }

  const speak = (thingToSay) => {
    Speech.speak(thingToSay);
  };
  async function playSound(status) {
    if(status) {
      const { sound } = await Audio.Sound.createAsync(
        require("../../../assets/sounds/currentAnswer.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    }
    else {
      const { sound } = await Audio.Sound.createAsync(
        require("../../../assets/sounds/wronganswer.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    }
    
  }
  
  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  useEffect(()=>{
    setMode(true);
    return;
    getWordWidthParam(null, 'repeat', null, null)
      .then((data) => {
        setWords(data);
      })
      .catch((err) => {
        alert(err);
      });
  }, [])

  return (
    <View>
      {mode && (
        <SettingMode
          learnMode={learnMode}
          setLearnMode={setLearnMode}
          setOrder={setOrder}
          swapSequence={swapSequence}
          setSelectMode={setSelectMode}
          startLearn={startLearn}
          dispMode={dispMode}
        />
      )}
      <View style={[learn.disWord, defaultStyle.column]}>
        <TouchableOpacity style={learn.moreBtn}>
          <Feather name="more-horizontal" size={25} color={"#000"} />
        </TouchableOpacity>
        {
          currentWord &&
          <Text style={learn.learnMainText}>
            { (learnMode.sequence[0]=="eng")? currentWord.name : currentWord.translation}
          </Text>
        }
        {
          (currentWord?.transcription)? 
          <Text style={learn.learnTransText}>[{currentWord.transcription}]</Text>
          : <Text style={learn.learnTransText}>[...]</Text>
        }
        <TouchableOpacity style={learn.textSpeech} onPress={
          ()=>speak(
            (learnMode.sequence[0]=="eng")? 
              currentWord.name : currentWord.translation)
          }>
          <Feather name="volume-2" size={25} color={"#000"} />
        </TouchableOpacity>
      </View>
      <View style={learn.answer}>
        {learnMode.selectMode ? (
          <View style={learn.ansTyping}>
            {(showAns)? 
              <Text style={[learn.corrAns, {color: (answerStatus)? "#0f0": "#f00"}]}>
                { (learnMode.sequence[0]=="eng")? currentWord.translation : currentWord.name}
              </Text>
            : <TextInput style={learn.input} placeholder="Javobni kiriting ..." value={ansTypingInput} onChangeText={setAnsTypingInput}/>
            }
          </View>
        ) : (
          <View style={[learn.ansSelect, { marginBottom: 10 }]}>
            <View style={[defaultStyle.row, defaultStyle.around]}>
              <TouchableOpacity style={learn.selAnsBtn}>
                <Text style={{ fontSize: 18, textAlign: "center" }}>
                  Answer1
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={learn.selAnsBtn}>
                <Text style={{ fontSize: 18, textAlign: "center" }}>
                  Answer1
                </Text>
              </TouchableOpacity>
            </View>
            <View style={[defaultStyle.row, defaultStyle.around]}>
              <TouchableOpacity style={learn.selAnsBtn}>
                <Text style={{ fontSize: 18, textAlign: "center" }}>
                  Answer1
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={learn.selAnsBtn}>
                <Text style={{ fontSize: 18, textAlign: "center" }}>
                  Answer1
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {
          (!showAns)?
          <TouchableOpacity style={learn.startBtn} onPress={checkAnswer}>
            <Text style={{ fontSize: 20, color: "#fff", textAlign: "center" }}>
              Tekshirish
            </Text>
          </TouchableOpacity>
          : <View style={[defaultStyle.column, { marginTop: 10 }]}>
            <TouchableOpacity
              style={[learn.nextBtn, { backgroundColor: "#D0AD13FF" }]}
              onPress={()=>nextWordHandler("repeat")}
            >
              <Text
                style={{ fontSize: 18, color: "#fff", textAlign: "center" }}
              >
                Takrorlash uchun qo'shish
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[learn.nextBtn, { backgroundColor: "#0AA408FF" }]}
              onPress={()=>nextWordHandler("memorized")}
            >
              <Text
                style={{ fontSize: 18, color: "#fff", textAlign: "center" }}
              >
                Yod olinganlarga qo'shish
              </Text>
            </TouchableOpacity>
          </View>
        }
      </View>
    </View>
  );
};


export default Repeatiton;