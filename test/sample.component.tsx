import React from 'react';
import { Sample } from '../test/sample';
import { View, Text } from 'react-native';

interface SampleProps{
    data: Sample
}


function SampleComponent({data}:SampleProps){
    return(
    <View>
        <Text testID="name">{data.name}</Text>
        <Text testID="password">{data.password}</Text>
    </View>

    )
}

export default SampleComponent;