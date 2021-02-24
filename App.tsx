import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import RouterComponent from './router/router.component';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<RouterComponent />
			</NavigationContainer>
		</Provider>
	);
}
