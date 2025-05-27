import { View, Text } from "react-native";
import useThemeColors from "../../hooks/useThemeColors";

const CustomHeader = ({title}) => {
    const color = useThemeColors()
    return (
        <View style={{width: '100%', height: 50, marginBottom: 5}}>
            <Text style={{color: color.text, fontSize: 22, textAlign: 'center', margin: 7, fontFamily: 'serif'}}>{title}</Text>
        </View>
    )
}

export default CustomHeader;