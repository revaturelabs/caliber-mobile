import React from 'react';
import { View, Button, TextInput } from 'react-native';


function AddNoteComponent(){

    function handleChange(){

    }
    return (
        <View>
            Overall Note: <TextInput onChangeText={()=>{}}> </TextInput>
            <Button title='Add Overall Note' onPress={()=>''}></Button>
        </View>
    )
}

export default AddNoteComponent;