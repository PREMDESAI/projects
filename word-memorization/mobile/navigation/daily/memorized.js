import { useState, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { defaultStyle } from "../../assets/styles/defaultStyle";
import { Feather } from "@expo/vector-icons";
import { deleteWord, getWordWidthParam } from "../../services/wordDBService";
import { memorizedStyle } from "../../assets/styles/memorizedStyle";

const Memorized = () => {
  const [words, setWords] = useState([]);
  const [deleteId, setDeleteId] = useState("");
  const [search, setSearch] = useState("");

  const fetchData = () => {
    getWordWidthParam(null, "memorized", null, null)
      .then((data) => {
        setWords(data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const deleteHandler = () => {
    if (!deleteId) return;
    deleteWord(deleteId);
    fetchData();
    setDeleteId("");
  };

  useEffect(() => {
    fetchData();
  }, []);

  const list = [];
  words.forEach((element) => {
    if(element.name.toLowerCase().indexOf(search.toLowerCase()) === -1){
      return;
    } 
    list.push(element);
  });
  return (
    <View style={memorizedStyle.itemGroup}>
      <TextInput
            style={memorizedStyle.searchInout}
            placeholder="Izlash..."
            value={search}
            onChangeText={setSearch}
          />
      {deleteId && (
        <View style={defaultStyle.modalBack}>
          <View style={defaultStyle.modalView}>
            <Text
              style={[defaultStyle.tCenter, { fontSize: 20, marginBottom: 3 }]}
            >
              O'chirilsinmi ?
            </Text>
            <View style={defaultStyle.row}>
              <TouchableOpacity
                style={[defaultStyle.btn, { backgroundColor: "#00f" }]}
                onPress={() => setDeleteId("")}
              >
                <Text style={{ color: "#fff" }}>Bekor qilish</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[defaultStyle.btn, { backgroundColor: "#f00" }]}
                onPress={deleteHandler}
              >
                <Text style={{ color: "#fff" }}>O'chirish</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      {list?.length > 0 ? (
        <View style={{ height: "89%" }}>
          <FlatList
            data={words}
            style={memorizedStyle.list}
            renderItem={({ item }) => (
              <View
                style={[
                  memorizedStyle.item,
                  defaultStyle.row,
                  defaultStyle.between,
                ]}
              >
                <View>
                  <Text style={memorizedStyle.itemName}>So'z: {item.name}</Text>
                  <Text style={memorizedStyle.itemTranslation}>
                    Tarjimasi: {item.translation}
                  </Text>
                  <Text style={memorizedStyle.itemTranscription}>
                    Transkripsiyasi: {item.transcription}
                  </Text>
                  {
                    item.example &&
                    <Text style={memorizedStyle.example}>
                      Namuna: {item.example}
                    </Text>
                  }
                  {
                    item.exampleMeaning &&
                    <Text style={memorizedStyle.exampleMeang}>
                      Namuna tarjimasi: {item.exampleMeaning}
                    </Text>
                  }
                </View>
                <View style={defaultStyle.column}>
                  <TouchableOpacity
                    style={[memorizedStyle.moreListBtn, defaultStyle.row]}
                    onPress={() => {}}
                  >
                    <Feather name="trash" size={25} color={"#f00"} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      ) : (
        <Text style={memorizedStyle.defaultMsg}>Ro'yxat bo'sh</Text>
      )}
    </View>
  );
};

export default Memorized;
