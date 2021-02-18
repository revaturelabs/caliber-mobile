import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { weekCategory } from './weekCategory';
import {
  MenuProvider,
  Menu,
  MenuTrigger,
  MenuOptions,
  MenuOption,
} from 'react-native-popup-menu';




export default function weekCategoryList() {

  //store should have the week id, and list of weekCategories
  let catList: any = [];

  function addCategory(id: number) {
    console.log(id);
    //add code to update weekCategory list

  }

  class App extends Component {
    render() {
      return (
        <MenuProvider style={styles.menu}>
          {/* what happens when an item in menu is clicked (on top of the menu closing) */}
          <Menu onSelect={value => { addCategory(value) }}>
            {/* what must be clicked for menu to appear */}
            <MenuTrigger text='+' />
            {/* items in the menu */}
            <MenuOptions>
              <FlatList
                data={catList}
                renderItem={({ item }) => (
                  <MenuOption value={Number(item.id)} text={item.skill} />
                )}
                style={{ height: 200 }}
              />
            </MenuOptions>
          </Menu>
        </MenuProvider>
      )
    }
  }

  return (
    <View style={styles.container}>

    </View>

  )

}


// this is the pop-up menu


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  menu: {
    flexDirection: 'row',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'sand'
  }
})