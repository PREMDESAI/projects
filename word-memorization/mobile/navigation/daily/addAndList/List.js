import React, { useState } from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";

import { defaultStyle } from "../../../assets/styles/defaultStyle";
import { addedList } from "../../../assets/styles/addwords";
import { Feather } from "@expo/vector-icons";
import { deleteWord } from "../../../services/wordDBService";


const AddeddList = (props) => {
  const {list, setMode, setEdit, fetchData, mode} = props;

    const [deleteId, setDeleteId] = useState('');
    const deleteHandler = () => {
      if(!deleteId) return;
      deleteWord(deleteId)
      fetchData()
      setDeleteId('')
    }
    const editHandler = (item) => {
      setEdit(item)
      setMode('add')
    }
  
    return (
        <View style={addedList.itemGroup}>
          {
            deleteId && 
            <View style={defaultStyle.modalBack}>
              <View style={defaultStyle.modalView}>
                <Text style={[defaultStyle.tCenter, {fontSize: 20, marginBottom: 3}]}>O'chirilsinmi ?</Text>
                <View style={defaultStyle.row}>
                  <TouchableOpacity style={[defaultStyle.btn, {backgroundColor: '#00f'}]} onPress={() => setDeleteId('')}>
                    <Text style={{color: '#fff'}}>Bekor qilish</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[defaultStyle.btn, {backgroundColor: '#f00'}]} onPress={deleteHandler} >
                    <Text style={{color: '#fff'}}>O'chirish</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          }
          {
            (list.length>0) ? 
            <View style={{height: '89%'}}>
              <FlatList
                data={list}
                style={addedList.list}
                renderItem={({item}) => (
                  <View style={[addedList.item, defaultStyle.row, defaultStyle.between]}>
                    <View>
                      <Text style={addedList.itemName}>So'z: {item.name}</Text>
                      <Text style={addedList.itemTranslation}>Tarjimasi: {item.translation}</Text>
                      <Text style={addedList.itemTranscription}>Transkripsiyasi: {item.transcription}</Text>
                      <Text style={addedList.example}>Namuna: {item.example}</Text>
                      <Text style={addedList.exampleMeang}>Namuna tarjimasi: {item.exampleMeaning}</Text>
                      <Text style={addedList.itemTranslation}>Holati : {
                        (item.status=="new")? "yangi so'z" :
                          (item.status=="repeat")? "takrorlash kerak" : "yodlangan so'z"
                      }</Text>
                    </View>
                    <View style={defaultStyle.column}>
                    <TouchableOpacity style={[addedList.moreListBtn, defaultStyle.row]}
                      onPress={()=>editHandler(item)}>
                      <Feather name="edit" size={25} color={"#000"} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[addedList.moreListBtn, defaultStyle.row]}
                      onPress={()=>setDeleteId(item.id)}>
                      <Feather name="trash" size={25} color={"#f00"} />
                    </TouchableOpacity>
                    </View>
                  </View>
                )}
                keyExtractor={item => item.id}
              />
            </View>
            :
            <Text style={[addedList.defaultMsg, {backgroundColor: mode.background2}]}>Ro'yxat bo'sh</Text>
          }
        </View>
    )
  }

  export default AddeddList;