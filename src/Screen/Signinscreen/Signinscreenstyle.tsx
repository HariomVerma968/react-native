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
    justifyContent: "space-around",
    fontWeight: 1,
    // backgroundColor:'red'
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
    // backgroundColor: 'red',
    height: Responsive.heightPx(10),
  },
  headerstyle: {
    alignItems: "center",
    width: Responsive.widthPx(100),
    marginTop: Responsive.heightPx(5),
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
    marginTop: Responsive.heightPx(10)
  },
  btnstyle1: {
    marginTop: Responsive.heightPx(3)
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
    backgroundColor: Color.textinputcolor,
    width: Responsive.widthPx(80),
    alignSelf: 'center',
    marginTop: Responsive.heightPx(2),
    height: Responsive.heightPx(5),
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center'
  },
  langlogostyle: {
    marginLeft: Responsive.widthPx(3)
  },
  textlanstyle: {
    color: Color.black,
    marginLeft: Responsive.widthPx(4
    ),
  },
  passstyle: {
    backgroundColor: 'red'
  },



  /////////////////////////////////////////////////////////



  LogoHadderview: {
    alignItems: 'center'
  },


  ForhotText: {
    marginLeft: Responsive.widthPx(5),
    marginTop: 10,

    fontSize: Responsive.font(4.5),
    color: '#47A4EA'
  },
  touchNewuser: {
    alignSelf: 'center',
    marginTop: 10
  },
  text: {
    fontSize: Responsive.font(4.5),
    color: 'red'
  },
  createAccount: {
    color: '#47A4EA',
    fontSize: Responsive.font(4.5),

  },
  bottomView: {
    position: 'absolute',
    bottom: 0
  },
  bottomViewbg: {
    height: Responsive.heightPx(10),
    backgroundColor: '#c6c6c6',
    width: Responsive.widthPx(100)
  },
  bottomTextView: {
    width: Responsive.widthPx(75),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10
  },
  bottomText: { color: '#47A4EA', },
  footerLink: { color: '#47A4EA', textDecorationLine: 'underline', },

  languageView: {
    height: Responsive.heightPx(10),
    width: Responsive.widthPx(90),
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: Responsive.heightPx(5)
  },
  languageText: {
    color: 'gray',

    fontSize: Responsive.font(4.5), marginLeft: 15
  },
  select: {
    fontSize: Responsive.font(5),
    color: 'black',
    alignSelf: 'center',
    marginTop: 10,

  },



  ///////////////////////////////////////



  button: {
    backgroundColor: '#6258e8',
    padding: 10,
    borderRadius: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  // text: {
  //   marginBottom: 100,
  //   fontSize: 18,
  //   color: 'white',
  // },
  languagesList: {
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: Color.themcolor,
    marginTop: 20,
    width: "90%",
    alignSelf: 'center',
    borderRadius: Responsive.widthPx(5),
    elevation: 5
  },

  languageButton: {
    padding: 10,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
  },
  lngName: {
    fontSize: 16,
    color: 'white',
  },

  modalconatiner: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: "center",
    alignItems: 'center',
  },
  modalconatier2: {
    alignSelf: 'center',
    backgroundColor: Color.themcolor,
    width: Responsive.widthPx(85),
    borderRadius: Responsive.widthPx(5),
    height: Responsive.widthPx(70),
    justifyContent: "center",
    alignItems: "center"
  }
});

export default styles;
