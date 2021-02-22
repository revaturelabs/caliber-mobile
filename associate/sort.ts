import { AssociateWithFeedback } from "./AssociateService";

export function sortAssociateByFirstName(associates: AssociateWithFeedback[]) {
    associates.sort((a, b) => {
        if (a.associate.firstName.length >= b.associate.firstName.length) {
            for (let i = 0; i < b.associate.firstName.length; i++) {
                let check = (a.associate.firstName.charCodeAt(i)) - (b.associate.firstName.charCodeAt(i));
                if (check != 0) {
                    return check;
                }
            }
        } else {
            for (let i = 0; i < a.associate.firstName.length; i++) {
                let check = (a.associate.firstName.charCodeAt(i)) - (b.associate.firstName.charCodeAt(i));
                if (check != 0) {
                    return check;
                }
            }
        }
    });
}

export function sortAssociateByLastName(associates: AssociateWithFeedback[]) {
    associates.sort((a, b) => {
        if (a.associate.lastName.length >= b.associate.lastName.length) {
            for (let i = 0; i < b.associate.lastName.length; i++) {
                let check = (a.associate.lastName.charCodeAt(i)) - (b.associate.lastName.charCodeAt(i));
                if (check != 0) {
                    return check;
                }
            }
        } else {
            for (let i = 0; i < a.associate.lastName.length; i++) {
                let check = (a.associate.lastName.charCodeAt(i)) - (b.associate.lastName.charCodeAt(i));
                if (check != 0) {
                    return check;
                }
            }
        }
    });
}

export function randomizeAssociates(associates:AssociateWithFeedback[]) {
    let randomArray = [];
    for(let x  = associates.length-1; x >= 0;x--) {
        let index = Math.floor(Math.random() * x);
        randomArray.push(associates[index]);

        associates = associates.splice(index, 1);
    }
    associates = [...randomArray];
    return randomArray;
}