import { StyleSheet } from "react-native";
import { Color, Responsive } from "../../Helper";

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  input_name: {
    height: Responsive.heightPx(7),
    width: "70%",
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 15,
    borderColor: "gray",
  },
  img_Top_container: {
    height: Responsive.heightPx(25),
    justifyContent: "center",
    alignItems: "center",
    width: Responsive.widthPx(100),
  },
  text_Inpute_conatainer: {
    marginTop: Responsive.heightPx(5),
    alignItems: "center",
  },
  Text_Input_box1: {
    backgroundColor: "white",
    width: Responsive.widthPx(80),
    borderRadius: 15,
    fontSize: 13,
    // height: Responsive.heightPx(5)
  },
  Login_btn_container: {
    height: Responsive.heightPx(30),
    alignItems: "center",
  },
  Login_btn: {
    backgroundColor: "#000",
    borderRadius: Responsive.widthPx(2),
    width: Responsive.widthPx(70),
    padding: Responsive.widthPx(2),
  },
  login_btn_text: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
  },
  Terms_Condition: {
    marginTop: 7,
    // padding:10,
    color: "#000",
    alignItems: "center",
  },
  inputtext: {
    marginTop: Responsive.heightPx(2),
  },
  emailtextstyle: {
    // backgroundColor: "red",
  },
  textinputstyle: {
    height: Responsive.heightPx(10),
  },
  headerstyle: {
    alignItems: "center",
    width: Responsive.widthPx(100),
    height: Responsive.heightPx(15),
    justifyContent: 'center',
    marginTop: Responsive.heightPx(1)
  },
  textstyle: {
    color: '#000',
    fontSize: Responsive.heightPx(3)
  },
  footerstyle: {
    alignItems: "center",
    width: Responsive.widthPx(100),
  },
  emailstyle: {
    width: Responsive.widthPx(80),
    alignSelf: 'center'
  },
  emailimgstyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  Passwordstyle: {
    width: Responsive.widthPx(80),
    alignItems: 'center',
    justifyContent: "space-between",
    flexDirection: 'row',
    marginTop: Responsive.heightPx(2)
  },
  btnstyle: {
    marginTop: Responsive.heightPx(5)
  },
  signupbtn: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: Color.themcolor,
    borderRadius: Responsive.widthPx(2)
  },
  textcolor: {
    color: Color.themcolor
  },
  langstyle: {
    backgroundColor: '#999999',
    width: Responsive.widthPx(80),
    alignSelf: 'center',
    marginTop: Responsive.heightPx(2),
    height: Responsive.heightPx(5),
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center'
  },
  langlogostyle: {
    marginLeft: Responsive.widthPx(3),
    tintColor: Color.white
  },
  textlanstyle: {
    color: Color.white,
    marginLeft: Responsive.widthPx(4
    ),
  },
  countryview: {
    width: Responsive.widthPx(80),
    flexDirection: 'row',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: "space-between"
  },
  mobview: {
    width: Responsive.widthPx(70),
    alignItems: 'flex-start'
  },
  countrystyleview: {
    width: Responsive.widthPx(24),
    height: Responsive.widthPx(13),
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "space-around",
    // alignContent: "center",
    backgroundColor: Color.textinputcolor,
    marginTop: Responsive.heightPx(1),
    flexDirection: 'row',
    padding: Responsive.heightPx(1),
  },
  profileview: {
    backgroundColor: Color.textinputcolor,
    marginTop: Responsive.heightPx(3),
    height: Responsive.heightPx(13),
    justifyContent: 'center',
    alignItems: 'center',
    width: Responsive.widthPx(28),
    borderRadius: Responsive.heightPx(8)
  },
  logoview: {
    width: Responsive.widthPx(20),
    height: Responsive.heightPx(8),
    marginTop: Responsive.heightPx(3)
  },
  uplodview: { position: 'absolute', height: Responsive.heightPx(12), width: Responsive.widthPx(22), justifyContent: 'flex-end', alignItems: 'flex-end' },
  setproflieview: { width: Responsive.widthPx(27), height: Responsive.heightPx(12), borderRadius: Responsive.widthPx(15) }

});

export default styles;
