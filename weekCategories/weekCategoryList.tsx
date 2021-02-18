import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import  {weekCategory}  from './weekCategory';
import {
  MenuProvider,
  Menu,
  MenuTrigger,
  MenuOptions,
  MenuOption,
} from 'react-native-popup-menu';

//store should have the week id, and list of weekCategories

function addCategory(id:number){
    console.log(id);
    //add code to update weakCategory list

}


export default function weekCategoryList(){
    <View style = {styles.container}>

    </View>

}


export class App extends Component{
    render(){
        return(
            <MenuProvider style={styles.container}>
            <Text>+</Text>
            <Menu onSelect={value => { addCategory(value) }}>
              <MenuTrigger text='+' />
              <MenuOptions>
                <FlatList
                  data={list}
                  renderItem={({ item }) => (
                    <MenuOption value={Number(item.id)} text={item.skill}/>
                  )}
                  style={{ height: 200 }}
                />
              </MenuOptions>
            </Menu>
          </MenuProvider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
    }
})