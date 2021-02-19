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
import { useDispatch, useSelector } from 'react-redux';
import WeekCategoryComponent from './WeekCategoryComponent';
import { addWeekCategory, getWeekCategories } from '../store/actions';
import categoryService from '../categories/categoryService';
import { WeekCategoryState } from '../store/store';

//need to import category class/interface from ./categories


interface weekProp {
  weekId: number
}

export default function weekCategoryList(qcWeek: weekProp) {
  const weekCatSelector = (state:WeekCategoryState) => state.weekCategoires;
  const weekCategories = useSelector(weekCatSelector);
  //categories is from another team so this will be error until the store is done
  const activeCatSelector = (state:CategoryState) => state.categoires;
  const activeCategories = useSelector(activeCatSelector);
  const dispatch = useDispatch();


  //get list of all catgories from this week from db
  let weekCategoriesAsCategory: category[] = []
  WeekCategoryService.getCategory(qcWeek.weekId).then((results) => {
    categoryService.getCategories().then((allCats)=>{
      let thisWeekCats:category[] = []
      allCats.forEach((allCatElement)=>{
        results.forEach((catid)=>{
          if (allCatElement.id == catid.category_id){
            thisWeekCats.push(allCatElement);
          };
        });
        
        dispatch(getWeekCategories(thisWeekCats));
      });
    }); 
  })

  //create a list of active categories that are not in weekCategories
  categoryService.getCategories('true').then((results) => {
    let availableCats: category[] = []
    results.forEach(element => {
      if (weekCategories.includes(element) == false){
       availableCats.push(element);
      };
    });
    //from other team
    dispatch(getCategories(availableCats));
  });

  function addCategory(newCat: category){
    let weekCat: weekCategory = new weekCategory;
    weekCat.categoryId = newCat.id;
    weekCat.qcWeekId = Number(qcWeek);
    WeekCategoryService.addCategory(weekCat).then(()=>{
      weekCategories.push(newCat);
      dispatch(addWeekCategory(weekCat))      
    });
  };

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
                data={activeCategories}
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
      {/* This is the categories we already have */}
      <FlatList
        data={weekCategories}
        renderItem={({ item }) => (<WeekCategoryComponent data={item}></WeekCategoryComponent>)}
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