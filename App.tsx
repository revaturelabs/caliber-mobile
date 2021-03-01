import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import store from './store/store';
import RouterComponent from './router/router.component';

export default function App() {
  return (
<<<<<<< HEAD
      <Provider store={store}>
        <View style={styles.container}>
            <Router />
        </View>
      </Provider>
=======
    <Provider store={store}>
      <NavigationContainer>
        <RouterComponent />
      </NavigationContainer>
    </Provider>
>>>>>>> bad97080de8e30c4b5848c558ffffb0255b92b2c
  );
}
