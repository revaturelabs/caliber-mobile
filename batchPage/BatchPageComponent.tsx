import { View } from "react-native";
import AddNoteComponent from "../batchWeek/AddNoteComponent";
import AddWeek from "../batchWeek/AddWeek/addWeek.component";
import WeekSelectionComponent from "../batchWeek/WeekSelectionComponent";

function BatchPageComponent(props: Batch) {
    return (
        <View>
            <WeekSelectionComponent/>
            <AddWeek/>
            <AddNoteComponent/>
            {/**Needs Overall Technical status component Here */}
            
        </View>

    )
}