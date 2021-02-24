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
import WeekCategoryService from '../WeekCategories/WeekCategoryService';
import { useDispatch, useSelector } from 'react-redux';
import WeekCategoryComponent from './WeekCategoryComponent';
import { addWeekCategory, getWeekCategories } from '../store/actions';
import categoryService from '../categories/categoryService';
import { CategoryState, WeekCategoryState } from '../store/store';
import { Category } from '../categoriesFeature/Category';

//need to import category class/interface from ./categories


interface weekProp {
  weekId: number
}

/**
 * Display a list of current categories for the week and a button to add categories to the week
 * 
 * @param {weekProp} qcWeek - The weekId of the current week
 */

export default function weekCategoryList(qcWeek: weekProp) {
  const weekCatSelector = (state:WeekCategoryState) => state.weekCategories;
  const weekCategories = useSelector(weekCatSelector);
  //categories is from another team so this will be error until the store is done
  const activeCatSelector = (state:CategoryState) => state.categories;
  const activeCategories = useSelector(activeCatSelector);
  const dispatch = useDispatch();


  //get list of all catgories from this week from db
  let weekCategoriesAsCategory: Category[] = []
  WeekCategoryService.getCategory(qcWeek.weekId).then((results) => {
    categoryService.getCategories().then((allCats:Category[])=>{
      let thisWeekCats:Category[] = []
      allCats.forEach((allCatElement)=>{
        results.forEach((catid)=>{
          if (allCatElement.categoryid == catid.categoryId){
            thisWeekCats.push(allCatElement);
          };
        });
        
        dispatch(getWeekCategories(thisWeekCats));
      });
    }); 
  })

  //create a list of active categories that are not in weekCategories
  categoryService.getCategories('true').then((results) => {
    let availableCats: Category[] = []
    results.forEach(element => {
      if (weekCategories.includes(element) == false){
       availableCats.push(element);
      };
    });
    //from other team
    dispatch(getCategories(availableCats));
  });


  /**
 * Add a category to the database and update the store
 * 
 * @param {Category} newCat - The category to be added to the week
 * qcWeek is what was passed to weekCategoryList function
 */
  function addCategory(newCat: Category){
    let weekCat: weekCategory = new weekCategory;
    weekCat.categoryId = newCat.id;
    weekCat.qcWeekId = Number(qcWeek);
    WeekCategoryService.addCategory(weekCat).then(()=>{
      weekCategories.push(newCat);
      dispatch(addWeekCategory(weekCat))      
    });
  };



  return (
    <View style={styles.container}>
      <Text>Categories: </Text>
      {/* This is the categories we already have */}
      <FlatList
        data={weekCategoriesAsCategory}
        horizontal={false}
        numColumns={10}
        renderItem={({ item }) => (<WeekCategoryComponent data={item}></WeekCategoryComponent>)}
      />
      {/* This is our pop-up menu of categories we can add */}
      <MenuProvider style={styles.menu}>
          {/* what happens when an item in menu is clicked (on top of the menu closing) */}
          <Menu onSelect={value => { addCategory(value) }}>
            {/* what must be clicked for menu to appear */}
            <MenuTrigger text='+' />
            {/* items in the menu */}
            <MenuOptions>
              <FlatList
                data={activeCategories}
                renderItem={({ item }) => (
                  <MenuOption value={Number(item.numid)} text={String(item.skill)} />
                )}
                style={{ height: 100 }}
              />
            </MenuOptions>
          </Menu>
        </MenuProvider>
    </View>

  )

}





const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  menu: {
    flexDirection: 'row',
    width:200,
    height:100,
    marginLeft:10,
  }
})