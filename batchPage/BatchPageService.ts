import axios from "axios";



class BatchPageService {

    private URI: string;
    constructor() {
        // URL of the express server
        this.URI = 'https://aosczl5fvf.execute-api.us-west-2.amazonaws.com/default';
    }

    async getAssociates(batchID:string):Promise<[]> {
        batchID ="TR-1004";
        return axios.get(this.URI+"/batch/"+batchID,{withCredentials: true}).then(result => result.data).catch((err) => {console.error(err)});
    }
}

export default new BatchPageService()