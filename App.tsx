import {StyleSheet, TextInput, View} from 'react-native';
import {useState} from "react";

export default function App() {

    const [value, setValue] = useState('Text')

    return (
        <View style={styles.container}>
            <TextInput style={[globalStyles.border, styles.textInput]} value={value} onChangeText={setValue}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#316515',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        width: 200,
        backgroundColor: 'white',
        fontSize: 18,
        paddingVertical: 8,
        paddingHorizontal: 8,
    },
});

const globalStyles = StyleSheet.create({
    border: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
    },
})

// 13_00 02-Вводное видео
