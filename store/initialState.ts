import { UserInfo, UserInput } from '../user/user';
import { CaliberState } from './store';

//add your initial states here and import it in your reducer
export const initialState: CaliberState = {
	user: new UserInfo(
		'mock1005.employee7c90a542-e70e-4db5-be8b-629e62f851c5@mock.com',
		'uniquestring',
		'ROLE_TRAINER'
	),
	userLogin: new UserInput(),
	batches: [],
};
