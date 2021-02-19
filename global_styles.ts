import { OpaqueColorValue, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { create, PREDEF_RES } from 'react-native-pixel-perfect'


// Importing using require because there is no @types
const designResolution = {
    width: 360,
    height: 640
} // what we're designing for
const perfectSize = create(designResolution);   

const style= StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
    notesCard: {
        backgroundColor:"white",
        justifyContent:"center",
        textAlign:"center",
        borderStyle:"solid",
        borderWidth: perfectSize(2),
        borderColor:"black",
        position:"relative",
        width:perfectSize(345),
        marginLeft:"auto",
        marginRight:"auto"
    },
    noteName: {
        borderStyle:"dashed",
        borderColor:"black",
        top:perfectSize(10),
        justifyContent:"center",
        textAlign:"center",
        position:"relative",
        width: perfectSize(300),
        height: perfectSize(30),
        fontSize:perfectSize(18),
        color:"black",
        left:perfectSize(5),    

    },
    techstatus: {
        position:"relative",
        top:perfectSize(-20),
        right:perfectSize(-120),
    },
    button: {
        marginLeft:"auto",
        marginRight:"auto",
        marginBottom:perfectSize(5),
        width:perfectSize(290),
        borderColor:"#F26925",
        borderWidth:perfectSize(2),
        borderRadius:perfectSize(5),
    },
    assocheader: {
        fontSize: perfectSize(24),
        textAlign:"center",
        fontWeight:"bold",
        color:"#F26925",
    }
});
export default style;
