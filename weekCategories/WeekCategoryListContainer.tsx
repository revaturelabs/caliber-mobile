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


interface weekProp {
    weekId: number
}



export default function WeekCategoryListContainer(qcWeek: weekProp) {
    const weekCatSelector = (state: RootState) => state.WeekCategoryReducer.weekCategories;
    const weekCategories = useSelector(weekCatSelector);
    //categories is from another team so this will be error until the store is done
    const activeCatSelector = (state: RootState) => state.categoryReducer.categories;
    const activeCategories = useSelector(activeCatSelector);
    const dispatch = useDispatch();


    //get list of all catgories from this week from db
    let weekCategoriesAsCategory: Category[] = [{ categoryid: 1, skill: 'Test1', active: true }, { categoryid: 2, skill: 'Test2', active: true }, { categoryid: 3, skill: 'Test3', active: true }]
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
        let weekCat: weekCategory = { categoryId: newCat.categoryid, qcWeekId: qcWeek.weekId };
        weekCategoryService.addCategory(weekCat).then(() => {
            dispatch(addWeekCategory(weekCat));

        });
    };

    return (
        <View>
            <WeekCategoryList weekId={qcWeek.weekId} weekCategoriesAsCategory={weekCategoriesAsCategory} addCategory={addCategory} activeCategories={activeCategories} />
        </View>
    )


}