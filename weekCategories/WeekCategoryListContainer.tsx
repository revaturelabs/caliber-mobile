import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Category } from '../categoriesFeature/Category';
import { addWeekCategory, getWeekCategories } from '../store/actions';
import { weekCategory } from './weekCategory';
import { WeekCategoryList } from './WeekCategoryList';
import weekCategoryService from '../weekCategories/WeekCategoryService';
import { RootState } from '../store/store';
import categoryService from '../categoriesFeature/CategoryService';
import { getCategories } from '../store/categoriesFeature/CategoryActions';


export default function WeekCategoryListContainer() {
  const weekCatSelector = (state: RootState) => state.WeekCategoryReducer.weekCategories;
  const weekCategories = useSelector(weekCatSelector);
  //categories is from another team so this will be error until the store is done
  const weekIDSelector = (state: RootState) => state.weekReducer.selectedWeek;
  const weekId = useSelector(weekIDSelector);

  const dispatch = useDispatch();


  //get list of all catgories from this week from db
  function createCatList() {
    let weekCategoriesAsCategory: Category[];
    weekCategoryService.getCategory(weekId.qcWeekId).then((results) => {
      categoryService.getCategories().then((allCats: Category[]) => {
        let thisWeekCats: Category[] = []
        allCats.forEach((allCatElement) => {
          results.forEach((catid) => {
            if (allCatElement.categoryid == catid.categoryId) {
              thisWeekCats.push(allCatElement as Category);
            };
          });
          weekCategoriesAsCategory = thisWeekCats;
          dispatch(getWeekCategories(thisWeekCats));
          return (weekCategoriesAsCategory);
        });
      });
    })
    return ([]);
  }


  //create a list of active categories that are not in weekCategories
  function createActiveList() {
    categoryService.getCategories('true').then((results) => {
      let availableCats: Category[] = []
      if (results != availableCats) {
        results.forEach(element => {
          if (weekCategories.includes({ categoryId: element.categoryid, qcWeekId: weekId.qcWeekId }) == false) {
            availableCats.push(element);
          };
        });
      }

      //from other team
      dispatch(getCategories(availableCats));
      return (availableCats);
    });
    return ([]);
  }



  /**
 * Add a category to the database and update the store
 * 
 * @param {Category} newCat - The category to be added to the week
 * qcWeek is what was passed to weekCategoryList function
 */
  function addCategory(newCat: Category) {
    let weekCat: weekCategory = { categoryId: newCat.categoryid, qcWeekId: weekId.qcWeekId };
    weekCategoryService.addCategory(weekCat).then(() => {
      dispatch(addWeekCategory(weekCat));

    });
  };

  let weekCategoriesAsCategory: Category[] = createCatList();
  let activeCategoriesList: Category[] = createActiveList();

  return (
    <View>
      <WeekCategoryList weekId={weekId.qcWeekId} weekCategoriesAsCategory={weekCategoriesAsCategory} addCategory={addCategory} activeCategories={activeCategoriesList} />
    </View>
  )


}