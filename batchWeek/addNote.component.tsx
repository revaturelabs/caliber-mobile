import React from 'react';
import { View, Button, TextInput } from 'react-native';


function AddNoteComponent(){
    return (
        <View>
            <TextInput>Overall Note: </TextInput>
            <Button title='Add Overall Note' onPress={()=>''}></Button>
        </View>
    )
}

export default AddNoteComponent;