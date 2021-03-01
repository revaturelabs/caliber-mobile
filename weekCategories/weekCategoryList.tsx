import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { weekCategory } from '../weekCategories/weekCategory';
import {
  MenuProvider,
  Menu,
  MenuTrigger,
  MenuOptions,
  MenuOption,
} from 'react-native-popup-menu';
import weekCategoryService from './WeekCategoryService';
import { useDispatch, useSelector } from 'react-redux';
import WeekCategoryComponent from './WeekCategoryComponent';
import { addWeekCategory, getWeekCategories } from '../store/actions';
import categoryService from '../categoriesFeature/CategoryService';
import { RootState, WeekCategoryState } from '../store/store';
import { Category } from '../categoriesFeature/Category';
import { getCategories } from '../store/categoriesFeature/CategoryActions';

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
  const weekCatSelector = (state: RootState) => state.WeekCategoryReducer.weekCategories;
  const weekCategories = useSelector(weekCatSelector);
  //categories is from another team so this will be error until the store is done
  const activeCatSelector = (state:RootState) => state.categoryReducer.categories;
  const activeCategories = useSelector(activeCatSelector);
  const dispatch = useDispatch();

  //get list of all catgories from this week from db
  let weekCategoriesAsCategory: Category[] = []
  weekCategoryService.getCategory(qcWeek.weekId).then((results) => {
    categoryService.getCategories().then((allCats:Category[])=>{
      let thisWeekCats: Category[] = []
      allCats.forEach((allCatElement) => {
        
        results.forEach((catid) => {
          if (allCatElement.categoryid == catid.categoryId) {
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
      if (weekCategories.includes({categoryId: element.categoryid, qcWeekId:Number(qcWeek)}) == false){
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
function addCategory(newCat: Category) {
  let weekCat: weekCategory = {categoryId: newCat.categoryid, qcWeekId: qcWeek.weekId};
  weekCategoryService.addCategory(weekCat).then(() => {
    dispatch(addWeekCategory(weekCat));
    
  });
};




return (
  <View style={styles.allContainer}>
    <Text>Categories: </Text>
    {/* This is the categories we already have */}
    <View style ={styles.container}>
    <FlatList
      data={weekCategories}
      horizontal={true}
      keyExtractor={(item, index) => index.toString()} 
      renderItem={({ item }) => (<WeekCategoryComponent data={item}></WeekCategoryComponent>)}
    />
    </View>
    {/* This is our button that creates a pop-up menu of categories we can add */}
    <View style={styles.menuContainer}>
      
    <MenuProvider style={styles.menu}>
        {/* what happens when an item in menu is clicked (on top of the menu closing) */}
        <Menu onSelect={value => { addCategory(value) }}>
          {/* what must be clicked for menu to appear */}
          <MenuTrigger text='+' />
          {/* items in the menu */}
          <MenuOptions>
            <FlatList
              data={activeCategories}
              keyExtractor={(item, index) => index.toString()} 
              renderItem={({ item }) => (
                <MenuOption value={Number(item.categoryid)} text={String(item.skill)} />
              )}
              style={{ height:100}}
            />
          </MenuOptions>
        </Menu>
      </MenuProvider>
      </View>
  </View>

)

}





const styles = StyleSheet.create({
  allContainer:{
    flexDirection: 'row',
  },
  container: {
    flexDirection: 'row',
    maxWidth:'50%',
    height:'50%'
  },
  menu: {
    flexDirection: 'row',
    height:100,
    marginLeft:10,
    

  },
  menuContainer:{
    width:'10%',
    height:100,
    alignContent:'flex-start',
  }

})