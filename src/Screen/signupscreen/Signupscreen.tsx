import { useRef } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Platform,
  Alert,
  FlatList,
  Dimensions
} from "react-native";
import React, { Component, useState } from "react";
import { SvgIcon } from "../../Component/SvgIcons";
import {
  Responsive,
  Images,
  Color,
  Screen,
  Loader,
  Fonts,
  Utility,
  Storage,
} from "../../Helper";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styles from "./Signupscreenstyle";
import {
  AppHeader,
  AppScrollview,
  AppContainer,
  AppTextInput,
  AppButton,
} from "../../Component";
// import DeviceInfo from 'react-native-device-info';
import RBSheet from "react-native-raw-bottom-sheet";
import axios from "axios";
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ApiEndPoints, ApiServices } from "../../NetworkCall";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import DeviceInfo, { getDeviceToken } from "react-native-device-info";
import messaging from '@react-native-firebase/messaging';
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { getemailId } from '../../Store/actions/commonActions';
const { width, height } = Dimensions.get('window');
interface HomeScreenProps {
  navigation?: any;
  text?: any;
}

const loc_global: any = global;
const Signupscreen = (props: HomeScreenProps) => {
  const { navigation } = props;
  const { t, i18n } = useTranslation();
  const getalldata = useSelector(state => state.data.getemailId);
  const device_Name = getalldata.deviceName
  const platform = getalldata.platform
  const android_Version = getalldata.androidVersion
  const devices_Type = getalldata.devicesType
  const Devices_Token = getalldata.DevicesToken
  const getdevices_Id = getalldata.getdevicesId

  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [confirmPass, setconfirmPass] = useState("");
  const [eyshow, setEyeshow] = useState(true);
  const [eyshow1, setEyeshow1] = useState(true);

  const dispatch = useDispatch();
  const getEmailData = () => {
    dispatch(getemailId(email));
  };


  const UserEmail = useSelector(state => state.data.getemailId);
  const data = UserEmail.email

  useEffect(() => {
    setemail(''),
      setpassword(''),
      setconfirmPass('')

  }, []);

  const passwordfunction = () => {
    if (eyshow == true) {
      setEyeshow(false);
    } else {
      setEyeshow(true);
    }
  };
  const passwordfunction1 = () => {
    if (eyshow1 == true) {
      setEyeshow1(false);
    } else {
      setEyeshow1(true);
    }
  };

  const isPasswordValid = (password) => {
    const passwordRegex =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  const validate_email = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (text == "") {
      setemail(text);
    } else if (reg.test(text) === false) {
      setemail(text);
      return false;
    } else {
      setemail(text);
      return true;
    }
  };

  // This  is Registration Post API's
  const RegisterPress = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (!email) {
      Utility.showDangerToast("Please enter your email");
      return false;
    } else if (!validate_email(email)) {
      Utility.showDangerToast("Please enter valid email");
      return false;
    }
    if (!password) {
      return Utility.showDangerToast("Please enter your password");
    }
    else if (password.length < 8) {
      Utility.showDangerToast("password Must be 8 Character");
      return;
    }
    if (!isPasswordValid(password)) {
      Utility.showDangerToast(
        "Pick a strong password, requirements are at least one of each, minimum 10 characters, Uppercase letter ( A-Z ),Lowercase letter ( a-z ), Number ( 0-9 ),Symbol ( !@#$%^&* )"
      );
      return;
    }
    if (!confirmPass) {
      return Utility.showDangerToast("Please enter Confirm password");
    }
    if (password != confirmPass) {
      Utility.showDangerToast(" Confirm password does not match");
      return;
    }
    const payload1 = {
      primary_email: email,
      os_platform: platform,
      os_platform_version: android_Version,
      user_agent: 'user1',
      device_name: device_Name,
      type: devices_Type,
      password: password,
      device_id: getdevices_Id,
      device_token: Devices_Token
    };
    ApiServices("post", payload1, ApiEndPoints.register)
      .then((response: any) => {
        Loader.isLoading(false);
        console.log("UserEmail,......", payload1);
        if (response.data.status === 1) {
          console.log("sign4.dkfjbkj...", response.data.info);
          navigation.navigate(Screen.SetUpYourProfilesScreen);
          const user_tokan = response.data.info;
          loc_global.userData = user_tokan;
          Utility.showSuccessToast("Register Successfully");
          Storage.setUserData(user_tokan);
        } else {
          console.log("sigkdfb//", response.data.msg);
          Utility.showDangerToast(response.data.msg);
        }
      })
      .finally(() => {
        Loader.isLoading(false);
      });


  };

  return (
    <AppContainer>
      <View style={styles.headerstyle}>
      </View>
      <AppScrollview>
        <View style={styles.main_container}>
          <View
            style={styles.crestetexxt}
          >
            <Text style={{ color: Color.black, fontSize: 20, }}>
              {t('Create new account')}
            </Text>
          </View>

          <View style={styles.text_Inpute_conatainer}>
            <View style={styles.emailstyle}>
              <Text
                style={{ color: "#000", marginTop: Responsive.heightPx(1) }}
              >
                {t('Email')}
              </Text>
            </View>
            <View >
              <AppTextInput
                value={email}
                keyboardType={"email-address"}
                onChangeText={(email: any) => {
                  setemail(email);
                }}
                emailimg={true}
                placeHolder={t('Enter your e-mail')}
              />
            </View>
            <View style={styles.emailstyle}>
              <Text
                style={{ color: "#000", marginTop: Responsive.heightPx(1) }}
              >
                {t('Password')}
              </Text>
            </View>
            <View>
              <AppTextInput
                value={password}
                // maxLength={10}
                onChangeText={(password: any) => {
                  setpassword(password);
                }}
                lockImage={true}
                onClickShow={() => {
                  passwordfunction();
                }}
                secureTextEntry={eyshow}
                isShowIcon={true}
                placeHolder={t('Password')}
              />
            </View>
            <View style={styles.emailstyle}>
              <Text
                style={{ color: "#000", marginTop: Responsive.heightPx(1) }}
              >
                {t('Confirm Password *')}
              </Text>
            </View>
            <View  >
              <AppTextInput
                value={confirmPass}
                lockImage={true}
                onChangeText={(confirmPass: any) => {
                  setconfirmPass(confirmPass);
                }}
                onClickShow={() => {
                  passwordfunction1();
                }}
                secureTextEntry={eyshow1}
                isShowIcon={true}
                placeHolder={t('Confirm Password *')}
              />
            </View>
          </View>


          <View style={{ marginTop: Responsive.heightPx(15) }}>
            <AppButton
              label={t('Next')}
              isImage={true}
              onPress={() => { RegisterPress(), getEmailData() }}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate(Screen.Signinscreen)}
            style={{ marginTop: Responsive.heightPx(3) }}>
            <View
              style={{
                width: Responsive.widthPx(100),
                // marginTop: Responsive.heightPx(2),
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={{ color: Color.themcolor, fontSize: 20, }}>
                {t('Cancel account creation')}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.headerstyle}>
            <Image
              style={{ width: Responsive.widthPx(20), height: Responsive.heightPx(8), marginTop: Responsive.heightPx(3) }}
              resizeMode="contain" source={Images.RukkorLogo} />
          </View>

        </View>
      </AppScrollview>
    </AppContainer>
  );
};

export default Signupscreen;
