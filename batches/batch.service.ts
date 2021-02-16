import axios from 'axios';

import Batch from './batch';

class BatchService {
    private URI: string;
    constructor() {
        this.URI = /*process.env.CALIBER_URI*/'https://aosczl5fvf.execute-api.us-west-2.amazonaws.com/default' + '/batches';
    }

    getBatchesByTrainerEmail(): Promise<Batch[]> {
        console.log('Batch Service: getBatchesByTrainerEmail');
        return axios.get(this.URI, {params: {trainerEmail: 'mock1027.employee74df14df-5842-4811-a57c-be9836537a40@mock.com'}})
            .then(result => result.data)
            .catch((error) => {
                console.error(error);
            });
    }
}

const batchService = new BatchService();
export default batchService;