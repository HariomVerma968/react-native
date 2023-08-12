import React from "react";
import { Text, StyleSheet, Image, View, TouchableOpacity } from "react-native";
// import { Screen } from 'react-native-screens';
import { Responsive, Images, Color, Fonts, Screen } from "../Helper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

interface AppHeaderProps {
  drawermenu?: boolean;
  title?: string;
  isShowDrawer?: boolean;
  backButton?: any;
  isBackBtn?: boolean;
  isShowBgColor?: boolean;
  onPressRightSecond?: any;
  isRightImage?: any;
  isSignup?: any;
  onPressRightImage?: any;
  headerTitle?: Object;
  navigation?: any;
  onpressclick?: any;
  isMenuIcon?: any;
  customcontainerStyle?: Object;
  onpresslogin?: any;
  onpresssignup?: any;
}

const AppHeader = (props: AppHeaderProps) => {
  const {
    title,
    isBackBtn,
    isRightImage,
    isSignup,
    headerTitle,
    drawermenu,
    navigation,
    onpresssignup,
    customcontainerStyle,
    onpressclick,
    isMenuIcon,
    onpresslogin,
  } = props;

  const onPressDrawer = () => navigation.openDrawer();

  const onPressBack = () => navigation.goBack("");

  return (
    <View style={[styles.constainer, customcontainerStyle]}>
      <View style={styles.leftImg}>
        {isBackBtn && (
          <TouchableOpacity onPress={() => onPressBack()}>
            <Image
              source={Images.filterbackicon}
              style={styles.backButton}
             resizeMode="contain"
            />
          </TouchableOpacity>
        )}
        {isMenuIcon && (
          <TouchableOpacity onPress={onpressclick}>
            <View>
              <Image
                source={Images.drawer}
                style={styles.backButton}
                resizeMode={"contain"}
              />
            </View>
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          // backgroundColor: 'blue',
          alignItems: "center",
          justifyContent: "center",
          width: Responsive.widthPx(45),
        }}
      >
        <Text style={[styles.headerTitle, headerTitle]}>{title}</Text>
      </View>
      <View style={{ flexDirection: "row", width: Responsive.widthPx(50) }}>
        <View style={styles.notification}>
          {isSignup && (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity onPress={onpresssignup}>
                <Text
                  style={{ fontSize: 12, color: "#000", fontWeight: "700" }}
                >
                  Signup /{" "}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onpresslogin}>
                <Text
                  style={{
                    fontSize: 12,
                    marginRight: 5,
                    color: "#000",
                    fontWeight: "700",
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          )}
          {/* {isRightImage && (
            <TouchableOpacity onPress={() => { }}>
              <Image source={Images.flag} style={{
                width: Responsive.widthPx(11),
                height: Responsive.widthPx(20),
                // marginLeft:10,
                borderRadius: Responsive.widthPx(20)
              }} resizeMode={'contain'} />

            </TouchableOpacity>
          )} */}

          {isRightImage && (
            <TouchableOpacity onPress={() => { }}>
              <Image
                source={Images.notification}
                style={{
                  width: Responsive.widthPx(15),
                  height: Responsive.widthPx(9),
                  // marginLeft: 10,
                  borderRadius: 250,
                }}
                resizeMode={"contain"}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default AppHeader;

AppHeader.defaultProps = {
  isBackBtn: true,
  isRightImage: false,
  isSignup: false,
  headerTitle: {},
  drawermenu: false,
  containerStyle: {},
};

const styles = StyleSheet.create({
  constainer: {
    // ...CommonStyles.shadow,
    flexDirection: "row",
    alignItems: "center",
    // paddingTop: 15,
    height: Responsive.widthPx(15),
    backgroundColor: Color.white,
    width: Responsive.widthPx(100),
  },
  backButton: {
    width: Responsive.widthPx(8),
    height: Responsive.widthPx(8),
    // backgroundColor: "red"
  },
  drawermenuButton: {
    width: Responsive.widthPx(7),
    height: Responsive.widthPx(7),
    // backgroundColor:"red"
  },
  cross_button: {
    width: Responsive.widthPx(9),
    height: Responsive.widthPx(9),
  },
  leftImg: {
    alignItems: "flex-start",
    marginLeft: 10,
    width: Responsive.widthPx(1),
    // flexDirection:"row",
    // backgroundColor:"red"
  },
  notification: {
    alignItems: "center",
    width: Responsive.widthPx(50),
    flexDirection: "row",
    // backgroundColor: "blue",
    justifyContent: "flex-end",
  },
  headerTitle: {
    // width: Responsive.widthPx(30),
    fontSize: Responsive.font(4.5),
    color: Color.black,
    // backgroundColor: "red"
  },
});
