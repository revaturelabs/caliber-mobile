import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Category } from '../categoriesFeature/Category';
import {
	addWeekCategory,
	categoriesMenuOptions,
	getWeekCategories,
} from '../store/actions';
import { WeekCategory } from './WeekCategory';
import { WeekCategoryList } from '../weekCategories/weekCategoryList';
import weekCategoryService from '../weekCategories/WeekCategoryService';
import { ReducerState } from '../store/store';
import categoryService from '../categoriesFeature/CategoryService';
import QcWeek from '../batchWeek/QcWeek';

/**
 * Get all information that weekCategoryList will display then call weekCategoryList
 *
 *
 */
export default function WeekCategoryListContainer() {
  const weekCatSelector = (state: ReducerState) =>
    state.WeekCategoryReducer.weekCategories;
  const weekCategories = useSelector(weekCatSelector);
  const weekIDSelector = (state: ReducerState) => state.weekReducer.selectedWeek;
  const week = useSelector(weekIDSelector);
  // authorizer state
  const currentUser = useSelector((state: ReducerState) => state.userReducer.user);
  const token = currentUser.token;
  const dispatch = useDispatch();

  /**
   * Create a list of categories that are already in this week
   *
   * @return an array of type Category[]
   */
  function createCatList(week:QcWeek) {
    let weekCategoriesAsCategoryTemp: Category[];
    weekCategoryService.getCategory(week.qcWeekId, week.batchId, token).then((results) => {
      if (results == []) {
        return [];
      } else {
        categoryService.getCategories(token).then((allCats: Category[]) => {
          let thisWeekCats: Category[] = []
          allCats.forEach((allCatElement) => {
            results.forEach((catid) => {
              if (allCatElement.categoryid == catid.categoryId) {
                thisWeekCats.push(allCatElement);
              }
            });
            weekCategoriesAsCategoryTemp = thisWeekCats;
            dispatch(getWeekCategories(thisWeekCats));
            return weekCategoriesAsCategoryTemp;
          });
        });
      }
    });
    return [];
  }

  /**
   * Create a list of categories that are active and not already in the week
   *
   * @return an array of type Category[]
   */
  function createActiveList() {
    categoryService.getCategories(token, true).then((results) => {
      let availableCats: Category[] = [];
      if (results != availableCats) {
        results.forEach((element: Category) => {
          if (weekCategories.includes(element) == false) {
            availableCats.push(element);
          }
        });
      }
      dispatch(categoriesMenuOptions(availableCats));
      return availableCats;
    });
    return [];
  }

  /**
   * Add a category to the database and update the store
   *
   * @param {Category} newCat - The category to be added to the week
   * qcWeek is what was passed to weekCategoryList function
   */
  function addCategory(newCat: Category, week:QcWeek) {
    if (newCat.categoryid != -1) {
      let weekCat: WeekCategory = { categoryId: newCat.categoryid, qcWeekId: week.qcWeekId };
      weekCategoryService.addCategory(weekCat, week.batchId, week.qcWeekId, token).then(() => {
        dispatch(addWeekCategory(weekCat));
      });
    }
  }

  let weekCategoriesAsCategory: Category[] = createCatList(week);
  let activeCategoriesList: Category[] = createActiveList();

  return (
    <View>
      <WeekCategoryList week={week} weekCategoriesAsCategory={weekCategoriesAsCategory} addCategory={addCategory} activeCategories={activeCategoriesList} token={token} />
    </View>
  );
}
