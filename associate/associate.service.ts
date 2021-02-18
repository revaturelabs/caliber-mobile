// sends axios calls to the associate lambda via api gateway,
//     to get qc feedback for individual associates
// also sends axios calls to the mock data api, to get associate's name

class AssociateService {
    private URI: string;
    constructor() {
        // URL of the express server
        this.URI = 'PLACEHOLDER URI';
    }

    async getAssociate():Promise<Associate> {
        let x = new Associate();
        return x;
    }
    async replaceAssociate():Promise<Associate> {
        let x = new Associate();
        return x;
    }
    async updateAssociate(updateObj: Object):Promise<Associate> {
        let x = new Associate();
        return x;
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
