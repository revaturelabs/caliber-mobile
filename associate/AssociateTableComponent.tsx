//Shows associate name, technical status, note (editable)
import React from 'react';
import 'react-native';
import { View, Text, FlatList } from 'react-native';
import style from '../global_styles';
import { BatchAction } from '../store/actions';
import AssociateDetail from './AssociateDetail';
import AssociateService, { Associate, AssociateWithFeedback, QCFeedback } from './AssociateService';

interface AssociateProps {
    assoc: Associate;
}
//let com = useSelector((state: BatchAction) => state.batch);


/**
 * Get Associate needs to do some stuff here.
 */
//let qcFeedback = AssociateService.getAssociate(assoc);
let assoc1 = new AssociateWithFeedback();
assoc1.associate.firstName = "Tyler"
let assoc2 = new AssociateWithFeedback();
assoc2.associate.firstName = "Kathryn"




function AssociateTableComponent(props: AssociateProps) {
    let tempAssociates = [assoc1, assoc2, new AssociateWithFeedback(), new AssociateWithFeedback()];

    //TODO: Finish this sorting algorithm.
    // tempAssociates = tempAssociates.sort((a, b) => {
    //     let firstcheck = (a.associate.firstName.charCodeAt(0)) - (b.associate.firstName.charCodeAt(0));
    //     if(firstcheck == 0) {
    //         if(a.associate.firstName.length > b.associate.firstName.length) {
    //             for (let i = 0; i < b.associate.firstName.length; i++) {
    //                 let check = (a.associate.firstName.charCodeAt(i)) - (b.associate.firstName.charCodeAt(i));
    //                 if (check === 0) {
    //                     return 
    //                 }
    //             }
    //         }
    //     else {
    //         return (b.associate.lastName.length)
    //     }
    //     console.log((a.associate.firstName).charCodeAt(0))
    //     return (a.associate.firstName.charCodeAt(0)) - (b.associate.firstName.charCodeAt(0))
    // });
    console.log(JSON.stringify(tempAssociates));
    return (
        <View>
            <Text style={style.assocheader}>Associates:</Text>
            <FlatList
                data={tempAssociates}
                renderItem={({ item }) => (<AssociateDetail associate={item.associate} qcFeedback={item.qcFeedback}></AssociateDetail>)}
                keyExtractor={(item) => item.associate.associateId}
            />
        </View>

    );
}

export default AssociateTableComponent;