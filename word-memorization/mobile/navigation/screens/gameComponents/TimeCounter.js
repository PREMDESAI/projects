import { View, Text, StyleSheet } from 'react-native';

const TimeCounter = () => {
    return (
        <View style={{width: '100%',display: 'flex', flexDirection: 'row', paddingHorizontal: 10}}>
            <View style={{width: "80%"}}>
                <Text style={styles.questionNum}>1/10</Text>
                <View style={{ height: 10, borderRadius: 8, borderWidth: 1, borderColor: '#000', padding: 0, width: '100%', marginTop: -10}}>
                    <View style={{width: '80%', backgroundColor: '#00f',  height: '100%', borderRadius: 8}}></View>
                </View>
            </View>
                <Text style={styles.time}>0:08</Text>
                
        </View>
    );
}

export default TimeCounter;

const styles = StyleSheet.create({
    questionNum: {
        padding: 10,
        fontSize: 18,
        borderRadius: 10,
        textAlign: "center",
        backgroundColor: "#AE74FF9F",
        paddingBottom: 15
    },
    time: {
        fontSize: 20, 
        marginStart: 10, 
        borderRadius: 10, 
        borderWidth: 1, 
        borderColor: '#000', 
        padding: 8,
        paddingTop: 10
    }
})