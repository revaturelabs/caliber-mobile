// sends axios calls to the associate lambda via api gateway,
//     to get qc feedback for individual associates
// also sends axios calls to the mock data api, to get associate's name

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