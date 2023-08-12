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
import { useSelector } from 'react-redux';
// import selectInputValue from "../../Store/reduserslice"

const { width, height } = Dimensions.get('window');
interface HomeScreenProps {
  navigation?: any;
  text?: any;
}
const loc_global: any = global;
var countyId = "";
var stateId = "";
var cityId = "";

const Signupscreen = (props: HomeScreenProps) => {
  // const counter = useSelector((state: any) => state.input);
  // const inputValues = useSelector(counter);
  // const inputValues = useSelector(selectInputValue);
// console.log(",,,..././.",inputValues)
  const { navigation } = props;

  const { t, i18n } = useTranslation();

  const refRBSheet: any = useRef();
  const refRBSheet1: any = useRef();
  const countryRBSheet: any = useRef();
  const [roll, setroll] = React.useState("");
  const [city, setcity] = React.useState("");
  const [cityid, setcityid] = React.useState("");
  const [country, setcountry] = React.useState("");
  const [countryid, setcountryid] = React.useState("");
  const [stateid, setstateid] = React.useState("");
  const [countrylist, setcountrylist] = React.useState([]);

  const [citylist, setcitylist] = React.useState([]);
  const [text, setText] = React.useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [password, setpassword] = useState("");
  const [mobilenumber, setmobilenumber] = useState("");
  const [email, setemail] = useState("");
  const [devicetype, setdevicetype] = useState("");
  const [confirmPass, setconfirmPass] = useState("");
  const [eyshow, setEyeshow] = useState(true);
  const [eyshow1, setEyeshow1] = useState(true);
  const [getdevicesId, setgetdevicesId] = useState("");
  const [DevicesToken, setDevicesToken] = useState("");
  const [platform, setPlatform] = useState("");
  const [androidVersion, setandroidVersion] = useState("");
  const [deviceName, setdeviceName] = useState("");
  const [devicesType, setdevicesType] = useState("");
  useEffect(() => {
    setemail(''),
      setpassword(''),
      setconfirmPass('')
    const requestPermission = async () => {
      try {
        await messaging().requestPermission();
        const token = await messaging().getToken();
        setDevicesToken(token)
        console.log('Device Token (APNs):', token);
      } catch (error) {
        console.log('Permission denied or error:', error);
      }
    };

    requestPermission();

    console.log("fkjgbnkfn.///", platform, androidVersion, deviceName)
    getDeviceID();
    deviceToken();
    if (Platform.OS === 'ios') {
      // Code for iOS
      setPlatform('ios')
      console.log('Running on iOS');
    } else if (Platform.OS === 'android') {
      // Code for Android
      setPlatform('android')
      console.log('Running on Android');
    } else {
      // Code for other platforms (if applicable)
      console.log('Running on a platform other than iOS or Android');
    }
    setgetdevicesId(DeviceInfo.getUniqueIdSync())
    console.log("D...///", DeviceInfo.getDeviceToken())
    setdeviceName(DeviceInfo.getDeviceNameSync())
    setandroidVersion(DeviceInfo.getSystemVersion())

    const isTablet = Math.min(width, height) >= 600;

    if (isTablet) {
      setdevicesType("Tablet")
      console.log('Device type: Tablet');
    } else {
      setdevicesType("Phone")
      console.log('Device type: Phone');
    }


  }, []);







  const deviceToken = () => {
    let devivetokean = DeviceInfo.getDeviceNameSync();
    console.log("djn././..", devivetokean);
  };

  const getDeviceID = async () => {
    let uniqueId = DeviceInfo.getDeviceToken();
    console.log("sdbvkbsd....", uniqueId);
    // AsyncStorage.setItem('deviceId', uniqueId);
    // setDeviceId(uniqueId)
  };


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
    // Define your password validation criteria using regular expressions
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
        // "Password must contain at least one number, one special character, one lowercase, and one uppercase letter"
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
    navigation.navigate(Screen.SetUpYourProfilesScreen);
    console.log("inside the api", roll);
    const payload1 = {
      primary_email: email,
      os_platform: platform,
      os_platform_version: androidVersion,
      user_agent: 'user1',
      device_name: deviceName,
      type: devicesType,
      password: password,
      device_id: getdevicesId,
      device_token: DevicesToken
    };
    ApiServices("post", payload1, ApiEndPoints.register)
      .then((response: any) => {
        Loader.isLoading(false);
        console.log("B,.///", payload1);
        if (response.data.status === 1) {
          console.log("sign4.dkfjbkj", response.data.info);
          navigation.navigate(Screen.SetUpYourProfilesScreen);
          const user_tokan = response.data.info;
          loc_global.userData = user_tokan;
          Utility.showSuccessToast("Register Successfully");
          Storage.setUserData(user_tokan);
        } else {
          console.log("sigkdfbkv....", response.data.msg);
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
            style={{
              width: Responsive.widthPx(100),
              height: Responsive.heightPx(5),
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={{ color: Color.black, fontSize: 20, }}>
              Create new account
            </Text>
          </View>

          <View style={styles.text_Inpute_conatainer}>
            <View style={styles.emailstyle}>
              <Text
                style={{ color: "#000", marginTop: Responsive.heightPx(1) }}
              >
                {/* {t('Let_us_know_how_you_satisfied_with_us')} */}
                E-mail*
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
                placeHolder={t('Please enter your email')}
              />
            </View>
            <View style={styles.emailstyle}>
              <Text
                style={{ color: "#000", marginTop: Responsive.heightPx(1) }}
              >
                Password *
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
                placeHolder="Password"
              />
            </View>
            <View style={styles.emailstyle}>
              <Text
                style={{ color: "#000", marginTop: Responsive.heightPx(1) }}
              >
                Confirm Password *
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
                placeHolder="Confirm Password"
              />
            </View>
          </View>


          <View style={{ marginTop: Responsive.heightPx(5) }}>
            <AppButton
              label="Next"
              isImage={true}
              // onPress={() => RegisterPress()}
              onPress={() => navigation.navigate(Screen.SetUpYourProfilesScreen)}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate(Screen.Signinscreen)}
            style={{ marginTop: Responsive.heightPx(5) }}>
            <View
              style={{
                width: Responsive.widthPx(100),
                // marginTop: Responsive.heightPx(2),
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={{ color: Color.themcolor, fontSize: 20, }}>
                Cancel account creation
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
