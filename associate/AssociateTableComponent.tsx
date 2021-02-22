//Shows associate name, technical status, note (editable)
import React, { useEffect } from 'react';
import 'react-native';
import { View,Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import style from '../global_styles';
import { BatchAction, forceRerender, getAssociates } from '../store/actions';
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
let assoc3 = new AssociateWithFeedback();
assoc3.associate.firstName = "Silly"
let assoc4 = new AssociateWithFeedback();
assoc4.associate.firstName = "Mary"





function AssociateTableComponent(props: AssociateProps) {
    let tempAssociates = [assoc1, assoc2, assoc3, assoc4];
    let dispatch = useDispatch();
    let associates = useSelector((state: AssociateState) => state.associates);
    let rerender = useSelector((state: RerenderState) => state.rerender);
    associates = [...tempAssociates];


    useEffect(() => {
    }, []);

    return (
        <View>
            <Button onPress={async () => {
                await shuffle(associates);
                console.log(associates);
                setTimeout(() => {
                    dispatch(getAssociates(associates));
                    dispatch(forceRerender(rerender+1));
                }, 500);
            }
            } title='Randomize List' buttonStyle={style.button}></Button>
            <Text style={style.assocheader}>Associates:</Text>
            <FlatList
                data={associates}
                renderItem={({ item }) => (<AssociateDetail associate={item.associate} qcFeedback={item.qcFeedback}></AssociateDetail>)}
                keyExtractor={(item) => item.associate.firstName}
            />
        </View>

    );
}

export default AssociateTableComponent;