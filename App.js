import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
    return ( 
        <View style = { styles.container } >
            {/* Today's Tasks */}
            <View style={ styles.tasksWrapper }>
                <Text style={ styles.sectionTitle }>Today's Tasks</Text>
                <View style={ styles.items }>
                    { /* This place is where the tasks goes */ }
                    <Task text={`Feed 'Jelibon the Cat' with treat food`} />
                    <Task text={`Ask her out for a couple of coffee`} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    tasksWrapper : {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle : {
        fontSize: 24,
        fontWeight: 'bold',
    },
    items : {
        marginTop: 30,
    },
});