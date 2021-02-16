import React from 'react';
import 'react-native';
import 'jest-enzyme';
import '@testing-library/jest-dom';
import axios from 'axios';
import Enzyme, { shallow } from 'enzyme';

import BatchesComponent from '../../batches/batches.component';

describe('BatchesComponent Test(s)', () => {
	let trainerEmail: string =
		'mock1027.employee74df14df-5842-4811-a57c-be9836537a40@mock.com';
	let gatewayURI: string = '';

	test('the component did mount', () => {
		expect(shallow(<BatchesComponent />)).toMatchSnapshot();
	});
	test('GET Batches from API Gateway', async () => {
		//test goes here

		let returnValues;
		let obj = { data: [] };

		axios.get = jest.fn().mockResolvedValue(obj);

		// or you could use the following depending on your use case:
		// axios.get.mockImplementation(() => Promise.resolve(resp))
		// we want to test the api gateway that calls the lambda. the lambda will create multiple axios requests. we are mocking the front end request to the api gateway.

		await getBatches(trainerEmail).then((data: any) => (returnValues = data));
		//we will make one axios request in the front end to the API Gateway
		expect(axios.get).toHaveBeenCalledTimes(1);
		expect(returnValues).toBe(obj.data);
		expect(axios.get).toHaveBeenCalledWith(
			`${gatewayURI}/batches?trainerEmail=${trainerEmail}`
		);
	});
});
