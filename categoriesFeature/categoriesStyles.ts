import {StyleSheet} from 'react-native';

const catStyle = StyleSheet.create({
    blueBtn: {
        backgroundColor: '#72A4C2',
        margin: 2
    },
    btnText: {
        color: '#FFFFFF',
        fontSize: 20,
        padding: 5,
        paddingLeft: 15,
        paddingRight: 15,
        alignSelf: 'center'
    },
    addBtn: {
        borderColor:'#F26925',
        borderWidth: 0,
        width:65,
        height:65,
        borderRadius:50,
        backgroundColor: '#F26925',
        alignSelf: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0

        
    },
    offText: {
        color: '#B9B9BA',
    },
    text: {
        color:'#000',
        fontSize: 20,
        justifyContent: 'center',
        marginTop: 7,
        marginLeft: 15
    },
    plusSign: {
        color: 'white',
        fontWeight: '500',
        fontSize: 50,
        marginTop:'-21%',
        textAlign: 'center'
    }
})

export default catStyle;