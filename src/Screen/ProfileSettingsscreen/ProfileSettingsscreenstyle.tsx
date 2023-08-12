import { StyleSheet } from 'react-native';
import { Color, Responsive } from '../../Helper';

const styles = StyleSheet.create({
    main_container: {
        flex: 1,

    },
    headerstyle: {
        // backgroundColor: 'red',
        padding: Responsive.heightPx(3),
        justifyContent: 'space-between',
        // flexDirection: 'row',
        alignItems: "flex-start",
        width: Responsive.widthPx(60),
        marginTop: Responsive.heightPx(5)
    },
    secondcontainer: {
        width: Responsive.widthPx(100),
        justifyContent: 'center',
        alignItems: 'center'
    },
    thirdconatiner: {
        width: Responsive.widthPx(90),
        // backgroundColor: 'red'
    },
    upgrateview: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        marginTop: Responsive.heightPx(3)
    },
    membertext: {
        color: '#808080'
    },
    freetext: {
        color: '#000',
        fontSize: 18,
        marginTop: Responsive.heightPx(2)
    },
    upbtn: {
        color: "#000",
        fontSize: 15,
        fontWeight: '500'
    },
    unpbtnview: {
        backgroundColor: '#EDEEF0',
        padding: Responsive.heightPx(2),
        justifyContent: 'center'
    },
    lineview: {
        borderWidth: 1 / 2,
        borderColor: '#808080',
        marginTop: Responsive.heightPx(3)
    },
    Aboutview: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        // backgroundColor: 'red',
        marginTop: Responsive.heightPx(3)
    },
    aboutext: {
        color: '#000',
        fontSize: 18,
        fontWeight: "500"
    },
    signoutview: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Responsive.heightPx(5)
    },
    profileimagestyle: {
        height: Responsive.widthPx(28),
        width: Responsive.widthPx(28),
        borderRadius: Responsive.widthPx(15),
        borderWidth: 2,
        borderColor: Color.themcolor
    },
    inputtext: {

        marginTop: Responsive.heightPx(2)
    },
    Applybtn: {
        backgroundColor: Color.themcolor,
        padding: Responsive.widthPx(4),
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: Responsive.widthPx(2),
        width: Responsive.widthPx(25)
    }
});

export default styles;
