//Shows associate name, technical status, note (editable)
import React from 'react';
import 'react-native';
import { View, Text, FlatList, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import style from '../global_styles';
import { BatchAction, getAssociates } from '../store/actions';
import AssociateDetail from './AssociateDetail';
import AssociateService, { Associate, AssociateWithFeedback, QCFeedback } from './AssociateService';
import { randomizeAssociates } from './sort';

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
    let dispatch = useDispatch();
    
    return (
        <View>
            <Button onPress={() => {
                randomizeAssociates(tempAssociates);
                dispatch(getAssociates(tempAssociates));
                console.log("Rerender should happen here");
            }
            } title='Randomize List' buttonStyle={style.button}></Button>
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