import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Category } from '../categoriesFeature/Category';
import { addWeekCategory, getWeekCategories } from '../store/actions';
import { weekCategory } from './WeekCategory';
import { WeekCategoryList } from '../weekCategories/WeekCategoryList';
import weekCategoryService from '../weekCategories/WeekCategoryService';
import { RootState } from '../store/store';
import categoryService from '../categoriesFeature/CategoryService';
import { getCategories } from '../store/categoriesFeature/CategoryActions';

/**
 * Get all information that weekCategoryList will display then call weekCategoryList
 * 
 * 
 */
export default function WeekCategoryListContainer() {
  const weekCatSelector = (state: RootState) => state.WeekCategoryReducer.weekCategories;
  const weekCategories = useSelector(weekCatSelector);
  const weekIDSelector = (state: RootState) => state.weekReducer.selectedWeek;
  const weekId = useSelector(weekIDSelector);

  const dispatch = useDispatch();


  /**
 * Create a list of categories that are already in this week
 * 
 * @return an array of type Category[]
 */
  function createCatList() {
    let weekCategoriesAsCategoryTemp: Category[];
    weekCategoryService.getCategory(weekId.qcWeekId).then((results) => {
      categoryService.getCategories().then((allCats: Category[]) => {
        let thisWeekCats: Category[] = []
        allCats.forEach((allCatElement) => {
          results.forEach((catid) => {
            if (allCatElement.categoryid == catid.categoryId) {
              thisWeekCats.push(allCatElement);
            }
          });
          weekCategoriesAsCategoryTemp = thisWeekCats;
          dispatch(getWeekCategories(thisWeekCats));
          return (weekCategoriesAsCategoryTemp);
        });
      });
    })
    return ([]);
  }


/**
 * Create a list of categories that are active and not already in the week
 * 
 * @return an array of type Category[]
 */
  function createActiveList() {
    categoryService.getCategories('true').then((results) => {
      let availableCats: Category[] = []
      if (results != availableCats) {
        results.forEach(element => {
          if (weekCategories.includes({ categoryId: element.categoryid, qcWeekId: weekId.qcWeekId }) == false) {
            availableCats.push(element);
          }
        });
      }
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
    if (newCat.categoryid != -1) {
      let weekCat: weekCategory = { categoryId: newCat.categoryid, qcWeekId: weekId.qcWeekId };
      weekCategoryService.addCategory(weekCat).then(() => {
        dispatch(addWeekCategory(weekCat));

      });
    }

  }

  let weekCategoriesAsCategory: Category[] = createCatList();
  let activeCategoriesList: Category[] = createActiveList();

  return (
    <View>
      <WeekCategoryList weekId={weekId.qcWeekId} weekCategoriesAsCategory={weekCategoriesAsCategory} addCategory={addCategory} activeCategories={activeCategoriesList} />
    </View>
  )


}