import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import ManageCategories from '../manageCategories';

export type StackParam = {
    ManageCategories: undefined;
};

const Stack = createStackNavigator<StackParam>();

function CategoryRouter(){
    //const active = useSelector((state: AppState) => state.active);
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='ManageCategories'
                component={ManageCategories}
                //initialParams={active}
            />
        </Stack.Navigator>
    )
}

export default CategoryRouter;