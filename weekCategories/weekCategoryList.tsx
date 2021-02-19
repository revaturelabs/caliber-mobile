import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { weekCategory } from './WeekCategory';
import {
  MenuProvider,
  Menu,
  MenuTrigger,
  MenuOptions,
  MenuOption,
} from 'react-native-popup-menu';
import WeekCategoryService from './WeekCategoryService';
import { useDispatch } from 'react-redux';
import WeekCategoryComponent from './WeekCategoryComponent';
//need to import category class/interface from ./categories




export default function weekCategoryList() {

  //need to get unique qc week number from store
  const dispatch = useDispatch();
  //either get weekCategories from store or make weekCategories and send to store;
  //either get a list of active categories from store or create one
  

  


 
  function getName(id:number){
   //given the category id, get the actual category
  }



  function addCategory(id: number) {
    console.log(id);
    //add code to update weekCategory list using the given category id
    //on hold until we know if there is a list of categorys in store or what service to call if it's not in store

  }

  //This is our pop-up menu
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

  //create an array of active + unused categories; this is for our pop-up menu


   //use our array of weekCategores (contains category id and week id) and retrieves the full category
  //This is for diplaying categories already inside of the week
  /* let categories: category[] = [];
  weekCategories.forEach(item =>{
    categories.push(getName(item.category_id));
  }) */

  return (
    <View style={styles.container}>
      <Text>Categories: </Text>
      {/* This is the categories we already have */}
      <FlatList
        data = {categoryNames}
        renderItem={({item}) => (<WeekCategoryComponent data={item}></WeekCategoryComponent>)}
      />
      {/* This is our button that creates a pop-up menu of categories we can add */}
      {App}
    </View>

  )

}





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