import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox"

export default function App() {

    const [value, setValue] = useState('Text')
    
    const [tasks, setTasks] = useState([
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'CSS', isDone: true},
        {id: 3, title: 'JS', isDone: false},
        {id: 4, title: 'React', isDone: true},
        {id: 5, title: 'React native', isDone: false},
    ])    

    const addTask = () => {
        const newTask = {id: tasks.length + 1, title: value, isDone: false}
        setTasks ([...tasks, newTask])
        setValue('')
    }

    return (
        <View style={styles.container}>
            {/*<HideKeyboard>
                <View>
                    <TextInput style={[globalStyles.border, styles.textInput]} value={value} onChangeText={setValue}/>
                </View>
            </HideKeyboard>*/}
            <TextInput style={[globalStyles.border, styles.textInput]} value={value} onChangeText={setValue}/>
            <View style={{marginBottom: 12}}>
                <Button title={'Add task'} color={'#f89e3a'} onPress={addTask}/>
            </View>
            <View style={{width: '60%'}}>
                {tasks.map((task) => {
                    return <View key={task.id} style={styles.boxTask}>
                        <BouncyCheckbox isChecked={task.isDone}/>
                        <Text style={{color: 'white'}}>{task.title}</Text>
                    </View>
                })}
            </View>
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
        width: '60%',
        backgroundColor: 'white',
        fontSize: 18,
        paddingVertical: 8,
        paddingHorizontal: 8,
        marginBottom: 8,
    },
    boxTask: {
        flexDirection: 'row',
        marginBottom: 5,
    }
});

const globalStyles = StyleSheet.create({
    border: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
    },
})

// const HideKeyboard = ({children}: { children: ReactNode }): ReactElement => {
//     <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//         {children}
//     </TouchableWithoutFeedback>
// }

// 47_30 02-Вводное видео
