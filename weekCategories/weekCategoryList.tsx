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
import WeekCategoryService from './WeekCategoryService';
import { useDispatch } from 'react-redux';


interface category{
  numid:Number;
  skill:String;
}


export default function weekCategoryList(categories: weekCategory[]) {

  //need to get unique qc week number from store
  const dispatch = useDispatch();
  


  //store should have the week id, and list of weekCategories
  let categoryNames: category[] = [];
  categories.forEach(item =>{
    getName(item.category_id);
  })
  

  function getName(id:number){
    WeekCategoryService.getCategory(id).then((result) =>{
      let item: category = {numid:id, skill:String(result)}
      categoryNames.push(item);
    })

  }

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
                data={categoryNames}
                renderItem={({ item }) => (
                  <MenuOption value={Number(item.numid)} text={String(item.skill)} />
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
      <Text>Categories: </Text>
      <FlatList
        data = {categoryNames}
        renderItem={({item}) => (<WeekCategoryComponent data={item}></WeekCategoryComponent>)}
      />
      {App}
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