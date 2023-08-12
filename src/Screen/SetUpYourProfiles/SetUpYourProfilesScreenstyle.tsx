import { StyleSheet } from 'react-native';
import { Color, Fonts, Responsive } from '../../Helper';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  setupview: {
    // backgroundColor: "red",
    alignSelf: "center",
    marginTop: Responsive.heightPx(5)
  },
  setuptextstyle: {
    color: Color.black,
    fontSize: 20
  },
  textstyle: {
    color: Color.black,
  },
  descriptionbiew: {
    marginTop: Responsive.heightPx(5),
    padding: Responsive.widthPx(2)
  },
  reslidview: {
    backgroundColor: Color.textinputcolor,
    width: Responsive.widthPx(90),
    marginTop: Responsive.heightPx(3),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: Responsive.heightPx(2),
    borderRadius: Responsive.widthPx(2)
  },
  reslidview1: {
    backgroundColor: Color.textinputcolor,
    width: Responsive.widthPx(90),
    marginTop: Responsive.heightPx(3),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: Responsive.heightPx(2),
    borderRadius: Responsive.widthPx(2),
    borderColor:'red',
    borderWidth:1
  },

  imgstyle: {
    marginTop: Responsive.heightPx(2)
  },
  realidstyle: {
    // backgroundColor: 'red',
    width: Responsive.widthPx(60)
  },
  headerstyle: {
    padding: Responsive.heightPx(3),
    justifyContent: 'space-between',
    // flexDirection: 'row',
    alignItems: "center",
    width: Responsive.widthPx(100),
    // marginTop: Responsive.heightPx(5)
},
view: {
  flex: 1,
  paddingVertical: 10,
  alignItems: 'center',
  borderWidth: 2,
  borderRadius: 5,
  borderColor: 'gray', // Default border color
},
selectedView: {
  borderColor: 'green', // Border color for selected view
},

});
export default styles;