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
import { Category } from '../categories/Category';

//need to import category class/interface from ./categories


interface weekProp {
  weekId: number
}

export default function weekCategoryList(qcWeek: weekProp) {
  const weekCatSelector = (state: WeekCategoryState) => state.weekCategories;
  const weekCategories = useSelector(weekCatSelector);
  //categories is from another team so this will be error until the store is done
  /* const activeCatSelector = (state:CategoryState) => state.categoires;
  const activeCategories = useSelector(activeCatSelector); */
  const activeCategories: Category[] = [{ categoryid: 0, skill: 'React', active: true }, { categoryid: 1, skill: 'TypeScript', active: true }]
  const dispatch = useDispatch();


  //get list of all catgories from this week from db
  let weekCategoriesAsCategory: Category[] = []
  WeekCategoryService.getCategory(qcWeek.weekId).then((results) => {
    categoryService.getCategories().then((allCats) => {
      let thisWeekCats: Category[] = []
      allCats.forEach((allCatElement) => {
        
        results.forEach((catid) => {
          if (allCatElement.id == catid.categoryId) {
            thisWeekCats.push(allCatElement as Category);
          };
        });
        weekCategoriesAsCategory = thisWeekCats;
        dispatch(getWeekCategories(thisWeekCats));
      });
    });
  })

  //create a list of active categories that are not in weekCategories
  categoryService.getCategories('true').then((results) => {
    let availableCats: Category[] = []
    results.forEach(element => {
      if (weekCategoriesAsCategory.includes(element) == false) {
        availableCats.push(element);
      };
    });
    //from other team
    dispatch(getCategories(availableCats));
  });

  function addCategory(newCat: Category) {
    let weekCat: weekCategory = new weekCategory;
    weekCat.categoryId = newCat.id;
    weekCat.qcWeekId = Number(qcWeek);
    WeekCategoryService.addCategory(weekCat).then(() => {
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