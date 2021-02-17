import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function TestComponent(){

    return (
        <View style={styles.view} >
            <Text style= {styles.textStyle} testID="name"> Testing Enzyme 1</Text>
            
        </View>
    );
}
export default TestComponent;

const styles = StyleSheet.create({
    view: {
        backgroundColor: 'red'
    },
    textStyle: {
        fontSize: 40,
    }
})