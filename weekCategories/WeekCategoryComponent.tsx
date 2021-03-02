import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteWeekCategory } from '../store/actions';
import { weekCategory } from './weekCategory';
import WeekCategoryService from './WeekCategoryService';

interface catProp {
  weekID: number,
  skill: string,
  catID: number
}

export default function CategoryButton(props: catProp) {
  var [categoryContext, setCategoryContext] = useState(props.skill);
  const dispatch = useDispatch();
  const weekCat: weekCategory = { qcWeekId: props.weekID, categoryId: props.catID }
  return (
    <View style={[styles.screenContainer]}>
      <Text style={styles.myFontColor}>{categoryContext + "  "}
        <TouchableOpacity testID='button' onPress={() => {
          WeekCategoryService.deleteCategory(String(props.catID)).then(() => {
            dispatch(deleteWeekCategory(weekCat));
          })
        }}>
          <Text style={styles.innerContainer}> x </Text></TouchableOpacity></Text>
    </View>
  );
}

var styles = StyleSheet.create({

  screenContainer: {
    backgroundColor: 'grey',
    opacity: .5,
    borderRadius: 8,
    paddingLeft: 5,
    margin: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30
  },
  innerContainer: {
    backgroundColor: 'lightgrey',
    opacity: 1,
    paddingBottom: 1,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 8,
    color: 'red',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  containerwidth: {
    width: '100%',
  },
  myFontColor: {
    color: 'blue',

  }



});

