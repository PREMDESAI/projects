import { View, ActivityIndicator } from "react-native";
import { Text } from "react-native-paper";


const Waiting = ({mode}) => {
    return (
        <View style={{justifyContent: 'center', flex: 1}}>
            <Text style={{fontSize: 25, textAlign: 'center', marginTop: -40}}>Iltimos kuting</Text>
            <Text style={{fontSize: 25, textAlign: 'center', marginTop: 0, marginBottom: 20}}>Ma'lumotlar tayyorlanmoqda</Text>
            <ActivityIndicator size={80} color={"#000"}></ActivityIndicator>
        </View>
    );
}

export default Waiting;
