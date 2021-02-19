//Shows associate name, technical status, note (editable)
import React from 'react';
import 'react-native';
import { View,Text, FlatList } from 'react-native';
import style from '../global_styles';
import { BatchAction } from '../store/actions';
import AssociateDetail from './AssociateDetail';
import AssociateService, { Associate, QCFeedback } from './AssociateService';

interface AssociateProps {
    assoc: Associate;
}
//let com = useSelector((state: BatchAction) => state.batch);


/**
 * Get Associate needs to do some stuff here.
 */
//let qcFeedback = AssociateService.getAssociate(assoc);

let stempassociates = [[new Associate(), new QCFeedback()],[new Associate(), new QCFeedback()],[new Associate(), new QCFeedback()]
,[new Associate(), new QCFeedback()],[new Associate(), new QCFeedback()],[new Associate(), new QCFeedback()]]


function AssociateTableComponent(props: AssociateProps) {
    return (
        <View>
            <Text style = {style.assocheader}>Associates:</Text>
            <FlatList
                data={stempassociates}
                renderItem={({ item }) => (<AssociateDetail  associate={item[0]} qcFeedback={item[1]}></AssociateDetail>)}
                keyExtractor={(item) => item[0].associateId}
            />
        </View>

    );
}

export default AssociateTableComponent;