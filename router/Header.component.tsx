import React from 'react';
import { Text, View } from 'react-native';
import { Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

interface HeaderComponentProps {
  heading: string;
  navigation: any;
}

export function HeaderComponent(props: HeaderComponentProps) {
  return (
    <View>
      <Icon.Button name='ios-menu' size={25}></Icon.Button>
      <Text>{props.heading}</Text>
      <Image
        style={{ width: 165, height: 50, margin: 30 }}
        source={require('./rev-logo.png')}
      />
    </View>
  );
}
