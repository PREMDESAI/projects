import {
    ToastAndroid,
    Platform
} from "react-native";

const notify = (message) => {
    if (Platform.OS == 'android') {
        ToastAndroid.show(message, ToastAndroid.SHORT);
    }
}

export default notify;