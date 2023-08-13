import React from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Color, Fonts, Images, Responsive } from "../Helper";

interface AppTextInputProps {
  placeHolder?: string;
  placeholderTextColor?: string;
  value?: any;
  autoCapitalize?: any;
  textColor?: any;
  onChangeText?: any;
  onSubmitEditing?: any;
  keyboardType?: any;
  secureTextEntry?: any;
  returnKeyType?: any;
  autoFocus?: any;
  reference?: any;
  containerStyle?: any;
  containerStyle1?: any;
  inputContainer?: any;
  editable?: any;
  textStyle?: any;
  maxLength?: any;
  ismaxLength?: any;
  // multiline?: boolean;
  onImageChange?: any;
  onFocus?: any;
  onPressIn?: any;
  isShowIcon?: any;
  onClickShow?: any;
  onKeyPress?: any;
  lableImage?: any;
  lockImage?: any;
  emailimg?: any;
  workIcon?: any;
  mpobicon?: any;
  rollIcon?: any;
  AtIcon?: any;
  caremob?: any;
  leftImage?: any;
}

const AppTextInput = (props: AppTextInputProps) => {
  const {
    placeHolder,
    placeholderTextColor,
    value,
    autoCapitalize,
    textColor,
    onChangeText,
    onSubmitEditing,
    keyboardType,
    secureTextEntry,
    returnKeyType,
    autoFocus,
    containerStyle,
    containerStyle1,
    inputContainer,
    editable,
    textStyle,
    maxLength,
    ismaxLength,
    // multiline,
    onFocus,
    onPressIn,
    isShowIcon,
    onClickShow,
    onKeyPress,
    lableImage,
    lockImage,
    mpobicon,
    emailimg,
    rollIcon,
    AtIcon,
    caremob,
    workIcon,
  } = props;

  return (
    <View style={containerStyle ? containerStyle1 : null}>
      <TouchableOpacity disabled={editable} onPress={onFocus}>
        <View style={[styles.container, inputContainer]}>
          {lableImage ? (
            <View style={styles.lableImagestyle}>
              <Image
                style={styles.imagestyle}
                source={Images.userLoginIcon}
                resizeMode="contain"
              />
            </View>
          ) : null}
          {lockImage ? (
            <View style={styles.lableImagestyle}>
              <Image
                style={styles.imagestyle}
                source={Images.RLockIcon}
                resizeMode="contain"
              />
            </View>
          ) : null}
          {emailimg ? (
            <View style={styles.lableImagestyle}>
              <Image
                style={styles.imagestyle}
                source={Images.email}
                resizeMode="contain"
              />
            </View>
          ) : null}
          {mpobicon ? (
            <View style={styles.lableImagestyle}>
              <Image
                style={styles.imagestyle}
                source={Images.mpobicon}
                resizeMode="contain"
              />
            </View>
          ) : null}
          {workIcon ? (
            <View style={styles.lableImagestyle}>
              <Image
                style={styles.imagestyle}
                source={Images.workIcon}
                resizeMode="contain"
              />
            </View>
          ) : null}
          {rollIcon ? (
            <View style={styles.lableImagestyle}>
              <Image
                style={styles.imagestyle}
                source={Images.rollIcon}
                resizeMode="contain"
              />
            </View>
          ) : null}
          {AtIcon ? (
            <View style={styles.lableImagestyle}>
              <Image
                style={styles.imagestyle}
                source={Images.AtIcon}
                resizeMode="contain"
              />
            </View>
          ) : null}
          {caremob ? (
            <View style={styles.lableImagestyle}>
              <Image
                style={styles.imagestyle}
                source={Images.caremob}
                resizeMode="contain"
              />
            </View>
          ) : null}
          <TextInput
            maxLength={!ismaxLength ? maxLength : null}
            value={value}
            onChangeText={onChangeText}
            autoCapitalize={autoCapitalize}
            placeholder={placeHolder}
            // multiline={multiline}
            {...(keyboardType !== null && { keyboardType })}
            placeholderTextColor={placeholderTextColor}
            underlineColorAndroid="transparent"
            secureTextEntry={secureTextEntry}
            returnKeyType={returnKeyType}
            allowFontScaling={false}
            style={[styles.input, textStyle, { color: textColor }]}
            onSubmitEditing={onSubmitEditing}
            editable={editable}
            autoFocus={autoFocus}
            blurOnSubmit={false}
            onPressIn={() => onPressIn()}
            onKeyPress={onKeyPress}

          />
          {isShowIcon && (
            <TouchableOpacity
              style={styles.touchstyle}
              onPress={() => onClickShow()}
            >
              {secureTextEntry ? (
                <Image
                  style={styles.imagestyle}
                  source={Images.passwordshow}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  style={styles.imagestyle}
                  source={Images.show_eyes}
                  resizeMode="contain"
                />
              )}
            </TouchableOpacity>
          )}
          {/* {leftImage && (
            <TouchableOpacity style={styles.touchstyle} onPress={() => onClickShow()}>

              <Image style={[styles.imagestyle]} source={Images.next} resizeMode="contain" />
            </TouchableOpacity>
          )} */}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AppTextInput;
AppTextInput.defaultProps = {
  leftImage: false,
  isShowIcon: false,
  containerStyle: {},
  containerStyle1: {},
  inputContainer: {},
  textStyle: {},
  placeHolder: "",
  placeholderTextColor: "#999999",
  value: "",
  textColor: Color.black,
  secureTextEntry: false,
  autoFocus: false,
  editable: true,
  ismaxLength: false,
  keyboardType: null,
  // multiline: false,
  returnKeyType: "next",
  autoCapitalize: "none",
  onChangeText: () => { },
  onSubmitEditing: () => { },
  onPressSelect: () => { },
  onPressIn: () => { },
  maxLength: 100,
  onClickShow: () => { },
};

const styles = StyleSheet.create({
  container: {
    width: Responsive.widthPx(80),
    height: Responsive.widthPx(13),
    borderRadius: 5,
    flexDirection: "row",
    borderWidth: 1,
    // borderColor: Color.text_input_borderColor,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    borderTopColor: Color.white,
    borderLeftColor: Color.white,
    borderRightColor: Color.white,
    borderBottomColor: Color.white,
    backgroundColor: "#F4F4F4",
    marginTop: Responsive.heightPx(1)
  },
  container1: {
    width: Responsive.widthPx(70),
    height: Responsive.widthPx(13),
    borderRadius: 5,
    flexDirection: "row",
    borderWidth: 1,
    // borderColor: Color.text_input_borderColor,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    borderTopColor: Color.white,
    borderLeftColor: Color.white,
    borderRightColor: Color.white,
    borderBottomColor: Color.white,
    backgroundColor: "",
    marginTop: Responsive.heightPx(1)
  },
  input: {
    flex: 1,
    fontSize: Responsive.font(4),
    color: Color.black,
    // fontFamily: Fonts.Poppins_Regular,
    height: Responsive.widthPx(15),
    justifyContent: "center",
    width: "80%",
    paddingLeft: 15,
  },
  imagestyle: {
    width: Responsive.widthPx(4),
    height: Responsive.widthPx(4),
    alignContent: "flex-end",
    // backgroundColor:'gray'
  },
  touchstyle: {
    // flex: 1,
    paddingRight: 10,
    alignItems: "flex-end",
    // backgroundColor:'red',
    width: Responsive.widthPx(8)
  },
  lableImagestyle: {
    paddingLeft: 10,
  },
});
