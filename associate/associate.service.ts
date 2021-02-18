// sends axios calls to the associate lambda via api gateway,
//     to get qc feedback for individual associates
// also sends axios calls to the mock data api, to get associate's name

import axios from "axios";

class AssociateService {
    private URI: string;
    constructor() {
        // URL of the express server
        this.URI = 'PLACEHOLDER FOR API URI';
    }

    async getAssociate(a:Associate,batch:string,week:string):Promise<Associate> {
        return axios.get(this.URI+'/'+batch+'/'+week+'/'+a.associateId).then(result => result.data).catch((err) => {console.error(err)});
    }
    async replaceAssociate(a:Associate,batch:string,week:string):Promise<Associate> {
        return axios.put(this.URI+'/'+batch+'/'+week+'/'+a.associateId).then(result => result.data).catch((err) => {console.error(err)});
    }
    async updateAssociate(a:Associate,batch:string,week:string,qcNote:string):Promise<Associate> {
        return axios.patch(this.URI+'/'+batch+'/'+week+'/'+a.associateId+'/'+qcNote).then(result => result.data).catch((err) => {console.error(err)});
    }
}
export default new AssociateService();

export class QCFeedback {
    batchId: string = '';
    weekId: number = 0;
    associateId: string = '';
    qcNote: string = '';
    qcTechnicalStatus: number = 0;
}

export class Associate {
    associateId: string = '';
    firstName: string = '';
    lastName: string = '';
}
