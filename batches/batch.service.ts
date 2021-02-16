import axios from 'axios';

import Batch from './batch';

class BatchService {
    private URI: string;
    constructor() {
        this.URI = process.env.CALIBER_URI + 'batches';
    }

    getBatchesByTrainerEmail(): Promise<Batch[]> {
        return axios.get(this.URI)
            .then(result => result.data)
            .catch((error) => {
                console.error(error);
            });
    }
}

const batchService = new BatchService();
export default batchService;