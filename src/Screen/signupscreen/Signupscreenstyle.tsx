import { StyleSheet } from 'react-native';
import { Color, Responsive } from '../../Helper';

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
    input_name: {
        height: Responsive.heightPx(7),
        width: '70%',
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 15,
        borderColor: 'gray',
    },
    img_Top_container: {
        height: Responsive.heightPx(25),
        justifyContent: 'center',
        alignItems: 'center',
        width: Responsive.widthPx(100),
    },
    text_Inpute_conatainer: {
        marginTop: Responsive.heightPx(5),
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'red'
    },
    emailstyle: {
        width: Responsive.widthPx(80),
        alignSelf: 'center'
    },

    Text_Input_box1: {
        backgroundColor: 'white',
        width: Responsive.widthPx(80),
        borderRadius: 15,
        fontSize: 13,
        // height: Responsive.heightPx(5)
    },
    Login_btn_container: {
        height: Responsive.heightPx(30),
        alignItems: 'center',
    },
    Login_btn: {
        backgroundColor: '#000',
        borderRadius: Responsive.widthPx(2),
        width: Responsive.widthPx(70),
        padding: Responsive.widthPx(2),
    },
    login_btn_text: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
    },
    Terms_Condition: {
        marginTop: 7,
        // padding:10,
        color: '#000',
        alignItems: "center",
    },
    inputtext: {
        marginTop: Responsive.heightPx(1)
    },
    taxexinputstyle: {
        // backgroundColor: 'red',
        height: Responsive.heightPx(10)
    },
    pickerviewstyls: {
        // borderWidth:1,
        borderColor: 'black',
        width: Responsive.widthPx(62),
        // height: Responsive.widthPx(15),
        justifyContent: 'center',
        borderLeftColor: Color.white,
        alignItems: "center",
        //    marginTop:Responsive.heightPx(3),
        borderRightColor: Color.white,

    },
    input: {
        // height: Responsive.heightPx(8),
        // color: Color.black,
        // fontWeight: '600',
        // fontSize: 15,
        height: 100, width: 100
    },
    headerstyle: {
        padding: Responsive.heightPx(3),
        justifyContent: 'space-between',
    //    backgroundColor:'red',
        alignItems: "center",
        width: Responsive.widthPx(100),
        // marginTop: Responsive.heightPx(5)
    },
    SingUpImageCommanStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        // backgroundColor: 'yellow',
        // height: Responsive.heightPx(10),
        width: Responsive.widthPx(80),
        alignSelf: 'center',
        // marginTop:Responsive.heightPx(2)
    },
    commanImageStyles: {
        right: Responsive.widthPx(8),
        height: Responsive.heightPx(15),
        width: Responsive.widthPx(23),
    },
    ImageChildViewStyle: {
        height: Responsive.heightPx(8),
        width: Responsive.widthPx(10),
        // backgroundColor: 'red',
    },
    crestetexxt: {
        width: Responsive.widthPx(100),
        height: Responsive.heightPx(5),
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
    }
});

export default styles;
