import { StyleSheet, Text, View } from "react-native";
import { PieChartStatistics } from "../../components/statistics";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const Result = ({ mode }) => {
  return (
    <ScrollView>
      <Text style={styles.header}>Natija</Text>
      <PieChartStatistics
        mode={mode}
        data={[
          {
            name: "To'g'ri",
            population: 20,
            color: "#19B922FF",
            legendFontColor: "#7F7F7F",
            legendFontSize: 18,
          },
          {
            name: "Xato",
            population: 5,
            color: "#f00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 18,
          },
          {
            name: "O‘tqazilgan",
            population: 2,
            color: "#ff0",
            legendFontColor: "#7F7F7F",
            legendFontSize: 18,
          },
        ]}
      />
      <TouchableOpacity style={styles.moreBtn}>
        <Text style={{ textAlign: "center", fontSize: 20, color: "#fff" }}>
          {true ? "ko'rib chiqish" : "yashirish"}
        </Text>
      </TouchableOpacity>
      <View style={{display: 'flex', flexDirection: 'column'}}>
        <View style={styles.card}>
            <Text style={styles.quest}>1. Word</Text>
            <Text style={[styles.answer, {backgroundColor: '#0f0'}]}>Translation</Text>
            <Text style={[styles.answer, {}]}>Translation</Text>
            <Text style={[styles.answer, {backgroundColor: '#f00'}]}>Translation</Text>
            <Text style={[styles.answer, {}]}>Translation</Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.quest}>1. Word</Text>
            <Text style={[styles.answer, {backgroundColor: '#0f0'}]}>Translation</Text>
            <Text style={[styles.answer, {}]}>Translation</Text>
            <Text style={[styles.answer, {backgroundColor: '#f00'}]}>Translation</Text>
            <Text style={[styles.answer, {}]}>Translation</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Result;

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    textAlign: "center",
  },
  moreBtn: {
    borderRadius: 15,
    backgroundColor: "#00f",
    padding: 15,
    marginTop: 10,
  },
  card: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderColor: "#00f",
    borderWidth: 1
  },
  quest: {
    fontSize: 18,
    // textAlign: 'center',
    marginBottom: 5,
    paddingStart: 10
  },
  answer: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#00f",
    marginHorizontal: 4,
    marginVertical: 5,
    padding: 5,
    textAlign: 'center',
    fontSize: 17
  }
});
