import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function TestComponent(){

    return (
        <View style={styles.view}>
            <Text style= {styles.text}> Testing Enzyme 1</Text>
            <Text style= {styles.text}> Testing Enzyme 2</Text>
            <Text style= {styles.text}> Testing Enzyme 3</Text>
        </View>
    );
}
export default TestComponent;

const styles = StyleSheet.create({
    view: {
        backgroundColor: 'red'
    },
    text: {
        fontSize: 40,
    }
})