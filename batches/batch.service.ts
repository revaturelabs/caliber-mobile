import axios from 'axios';

import Batch from './batch';

class BatchService {
    private URI: string;
    constructor() {
        this.URI = process.env.REACT_APP_SERVER_URI + '';
    }

    getBatchesByTrainerEmail(): Promise<Batch[]> {
        return axios.get(this.URI + '/batch')
            .then(result => result.data)
            .catch((error) => {
                console.error(error);
            });
    }
}

const batchService = new BatchService();
export default batchService;