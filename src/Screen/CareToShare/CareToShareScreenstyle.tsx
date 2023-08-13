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
    // backgroundColor: 'red',
    height: Responsive.heightPx(10),
  },
  headerstyle: {
    alignItems: "center",
    width: Responsive.widthPx(80),
    // backgroundColor: 'red',
    height: Responsive.heightPx(10),
    justifyContent: 'center',
    flexDirection: 'row'
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
    // marginLeft: Responsive.widthPx(3),
    tintColor: Color.white
  },
  textlanstyle: {
    color: Color.white,
    marginLeft: Responsive.widthPx(4
    ),
  },
  countryview: {
    // width: Responsive.widthPx(27),
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
    width: Responsive.widthPx(20),
    height: Responsive.widthPx(10),
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "space-around",
    // alignContent: "center",
    backgroundColor: Color.textinputcolor,
    marginTop: Responsive.heightPx(1),
    flexDirection: 'row',
    // padding: Responsive.heightPx(2),
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
  setproflieview: { width: Responsive.widthPx(27), height: Responsive.heightPx(12), borderRadius: Responsive.widthPx(15) },
  discrptionview: {
    alignSelf: 'center',
    width: Responsive.widthPx(80),
    justifyContent: 'center',
    alignItems: 'center'
  },
  scrollContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: '5%',
    width: '80%',
    height: '50%',
  },
  yearItem: {
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  closeButton: {
    alignSelf: 'center',
    marginTop: 20,
  },

  dropdown: {
    height: 50,
    // borderColor: '#fff',
    // borderWidth: 0.5,
    // borderRadius: 8,
    paddingHorizontal: 8,
    width: Responsive.widthPx(25),
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color: 'red'
  },
  placeholderStyle: {
    fontSize: 12,
    color: '#fff',
    textAlign: "center"
  },
  selectedTextStyle: {
    fontSize: 13,
    color: '#fff',
    width: Responsive.widthPx(60)
  },
  iconStyle: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: "#000"
  },

  itemTextStyle: {
    color: '#000'
  },
  dropdown1: {
    height: 50,
    borderColor: '#000',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: Responsive.widthPx(60),
  },
  doenimg: {
    marginRight: 10
  },
  dropdownpicker: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: Responsive.widthPx(80),
  },

  openButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  monthButton: {
    paddingVertical: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'gray',
    marginVertical: 5,
  },
  selectedMonthButton: {
    borderColor: 'green',
  },
  monthText: {
    fontSize: 16,
    color: 'red'
  },
  pickselectview: {
    width: Responsive.widthPx(25),
    height: Responsive.heightPx(5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.textinputcolor,
    flexDirection: "row",
    borderRadius: Responsive.widthPx(2),
    marginTop: Responsive.heightPx(1)
  },
  textyear: {
    color: '#000'
  },
  pickertouch: {
    width: Responsive.widthPx(19),
    height: Responsive.heightPx(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  yearmontview: {
    flexDirection: 'row',
    justifyContent: "space-between",
    width: Responsive.widthPx(80),
    marginTop: Responsive.heightPx(1)
  },
  modalstyle: {
    justifyContent: 'center',
    alignItems: "center",
    borderWidth: 1,
    width: Responsive.widthPx(70),
    marginTop: Responsive.heightPx(1),
    alignSelf: "center",
    marginBottom: Responsive.heightPx(2),
    borderColor: "#fff",
    borderRadius: Responsive.widthPx(5)
  },
  modaltext: {
    color: '#fff',
    padding: 10,
    fontSize: 15
  },
  modalconatiner: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: "center",
    alignItems: 'center',
  },
  modalconatier2: {
    alignSelf: 'center',
    backgroundColor: Color.themcolor,
    width: Responsive.widthPx(85),
    borderRadius: Responsive.widthPx(5),
    height: Responsive.widthPx(95),
    // marginTop: 100
  }
});

export default styles;
