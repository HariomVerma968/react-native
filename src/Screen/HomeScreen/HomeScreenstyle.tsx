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
  categortabyview: {
    backgroundColor: '#EDEEF0',
    padding: Responsive.widthPx(4),
    borderRadius: Responsive.widthPx(10),
  },
  categoryholeview: {
    width: Responsive.widthPx(90),
    marginTop: Responsive.heightPx(2),
    // backgroundColor:'gray',
    justifyContent: "space-between",
    flexDirection: 'row',
    alignItems: "center"
  },
  Modal_conenair: {
    flex: 1,
    backgroundColor: 'red',
    // marginTop: Responsive.heightPx(50),
    justifyContent: 'center',
    // bottom: Responsive.heightPx(50),
    width: Responsive.widthPx(80),
    alignItems: "flex-end",
    marginLeft: Responsive.widthPx(20)

  },
  seeallstyle: { fontSize: 15, color: Color.themcolor },
  popularview: {
    width: Responsive.widthPx(88),
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  hotallistview: {
    width: Responsive.widthPx(100),
    alignItems: "center",
    justifyContent: "center",
    marginTop: Responsive.heightPx(3),
    height: Responsive.heightPx(35),
    // backgroundColor: 'red'
  },
  hotallistview1: {
    width: Responsive.widthPx(100),
    alignItems: "center",
    justifyContent: "center",
    marginTop: Responsive.heightPx(3),
    height: Responsive.heightPx(22),
    // backgroundColor: 'red'
  },
  backgrounBtn: {
    backgroundColor: Color.orange,
    width: Responsive.widthPx(20),
    marginLeft: Responsive.widthPx(1),
    marginTop: Responsive.heightPx(1),
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2
  },
  starimgstyle: {
    marginLeft: 5
  },
  freetryalbiew: {
    backgroundColor: Color.themcolor,
    width: Responsive.widthPx(85),
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

});
export default styles;