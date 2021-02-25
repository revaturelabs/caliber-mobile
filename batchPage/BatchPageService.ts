import axios from "axios";



class BatchPageService {

    private URI: string;
    constructor() {
        // URL of the express server
        this.URI = 'PLACEHOLDER FOR API URI';
    }


    async getAssociates(batchID:string):Promise<[]> {
        return axios.get(this.URI+"/batch/"+batchID+"/associates").then(result => result.data).catch((err) => {console.error(err)});
    }
}

export default new BatchPageService()