import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { Colors } from './Colors';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#DCDCDC"
    },
    container2: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    subContainer:{
        marginTop:15,
        marginHorizontal:15
    },
    subContainer2:{
        marginTop:5,
        marginHorizontal:15
    },
    modalView: {
        margin: 10,
        width: width - 60,
        backgroundColor: "white",
        borderRadius: 10,
        paddingVertical: 35,
        paddingHorizontal: 20,
        alignItems: "flex-start",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    inRowCenter: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
    },
    inRowSpaceBetween:{
        flexDirection:'row',marginVertical:10,justifyContent:'space-between',marginHorizontal:15
    },
    subtitle: {
        fontSize: 14,
        color: Colors.black_color,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 18,
        color: Colors.black_color,
        fontWeight: 'bold'
    },
    line:{
        borderWidth: 0.5,
        borderColor:Colors.gray_color,marginTop:20
    }
});