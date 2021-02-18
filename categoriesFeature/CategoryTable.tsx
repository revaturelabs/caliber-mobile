import React from 'react';

interface CategoryTableProp {
    status: string;
}

// will take in status prop
export function CategoryTable({status}: CategoryTableProp) {
    // has toggle instructions

    // has a list of category names (depends on props)
    return(
        <></>
    )

}

// called when a category is pressed and changes the status of the category
export function changeStatus(){
    // calls categoryService.updateCategory with the category id 
    
    // re-render to have the updated categories
    return(
        <></>
    )
} 