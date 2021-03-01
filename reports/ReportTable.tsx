import React from 'react';
import { View, Text, ScrollView, TouchableOpacity} from 'react-native';
import { Table, TableWrapper, Row, Col, Cols, Cell} from 'react-native-table-component';
import { useDispatch, useSelector } from 'react-redux';
import {getAssociates} from '../store/actions';
import { RootState } from '../store/store';
import AssociateService, { Associate, AssociateWithFeedback, QCFeedback} from '../associate/AssociateService';
import {sortAssociateByLastName} from '../associate/sort';
import style from '../global_styles';

interface ReportProps {
    assoc: Associate[];
}

export function ReportsTable(props: ReportProps) {
    let dispatch = useDispatch();
    let associates = useSelector((state: RootState) => state.batchReducer.associates);
    let batch = useSelector((state: RootState) => state.batchReducer.batch); //batch does not exist on CalState?
    let week = useSelector((state: RootState) => state.weekReducer.selectedWeek);


    let report = [];


    function getQCNotes() {
        let listofassociates: AssociateWithFeedback[] = [];
        props.assoc.forEach(async (asoc) => {
            let qcnotes: QCFeedback = await AssociateService.getAssociate(asoc, batch, week.qcWeekId.toString());
            if (qcnotes) {
                let val = new AssociateWithFeedback();
                val.associate = asoc;
                val.qcFeedback = qcnotes;
                listofassociates.push(val);
            } else {
                let val = new AssociateWithFeedback();
                val.associate = asoc;
                listofassociates.push(val);
            }
        })
        dispatch(getAssociates(listofassociates));
    }

    function createTable() {
        //setSortDirection("LDown");
            let val = [...associates];
            sortAssociateByLastName(val);
            getAssociates(val);

        for (let i = 1; i <= 8; i++) {
            let assocRow = [];

        }
    }
    return (
        <View style={style.associatesViewComponent}>
            <ScrollView horizontal={true}>
                <View>
                    <Table>
                        <Row data={[]}/>
                    </Table>
                    <ScrollView>
                        {
                            //map data from table
                        }
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
}