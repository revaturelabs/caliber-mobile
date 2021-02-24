export class UserInput {
    email: string = '';
    password: string = '';
}

export class UserInfo {
    email: string = '';
    uid: string = '';
    role: string = '';
}

export class Roles {
    ROLE_TRAINER: boolean = false;
    ROLE_QC: boolean = false;
    ROLE_VP: boolean = false;
}