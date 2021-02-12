// sends axios calls to the associate lambda, to get qc feedback for individual associates

export class qcFeedback {
    batchId: string = '';
    weekId: number = 0;
    associateId: string = '';
    qcNote: string = '';
    qcTechnicalStatus: number = 0;
}