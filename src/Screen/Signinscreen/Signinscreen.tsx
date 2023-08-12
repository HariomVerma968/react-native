import { useRef, useEffect } from "react";
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
  Dimensions,
  Button
} from "react-native";
import React, { Component, useState } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
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
import messaging from '@react-native-firebase/messaging';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useSelector, useDispatch } from 'react-redux';
import styles from "./Signinscreenstyle";
import {
  AppHeader,
  AppScrollview,
  AppContainer,
  AppTextInput,
  AppButton,
} from "../../Component";
import { ApiEndPoints, ApiServices } from "../../NetworkCall";
import DeviceInfo from "react-native-device-info";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from 'react-i18next';
import RadioForm from 'react-native-simple-radio-button';




import { setData } from '../../Store/actions/commonActions';
import { setData2 } from '../../Store/actions/commonActions';
import { getemailId } from '../../Store/actions/commonActions';


interface SigninscreenProps {
  navigation?: any;
  text?: any;
  initialParams?: any;
  route?: any;
}
const { width, height } = Dimensions.get('window');
const loc_global: any = global;
const Signinscreen = (props: SigninscreenProps) => {





  const { navigation, route } = props;

  const { t, i18n } = route?.params;

  const refRBSheet: any = useRef();
  const [language, setLanguage] = React.useState('')
  const [getdevicesId, setgetdevicesId] = useState("");
  const [DevicesToken, setDevicesToken] = useState("");
  const [platform, setPlatform] = useState("");
  const [androidVersion, setandroidVersion] = useState("");
  const [deviceName, setdeviceName] = useState("");
  const [devicesType, setdevicesType] = useState("");
  const [LanguageJson, setLanguageJson] = React.useState([
    { label: 'English', value: 'English' },
    { label: 'Hindi', value: 'Hindi' },
    { label: 'Urdu', value: 'Urdu' },
  ])
  const [roll, setroll] = React.useState("English");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [deviceid, setdeviceid] = useState("");
  const [eyshow, setEyeshow] = useState(true);
  const passwordfunction = () => {
    if (eyshow == true) {
      setEyeshow(false);
    } else {
      setEyeshow(true);
    }
  };
  useEffect(() => {
    setemail(''),
      setpassword('')
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



  const dispatch = useDispatch();
  const data = useSelector(state => state.data.value);
  const data1 = useSelector(state => state.data.getemailId);


  const updateData = () => {
    dispatch(setData('New Value from Component A'));
  };
  const getEmailData = () => {
    dispatch(getemailId(email));
  };
  const updateData2 = () => {
    dispatch(setData2('Atul'));
  };




  // const changeLanguage = (value: any) => {
  //   console.log("jdhvj./...", value)
  //   i18n
  //     .changeLanguage(value)
  //     .then(() => setLanguage(value))
  //     .catch(err => console.log(err))
  // };


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
    // navigation.navigate(Screen.HomeScreen)

    // const RegisterAPI = () => {
    const payload1 = {

      primary_email: email,
      os_platform: platform,
      os_platform_version: androidVersion,
      user_agent: "1",
      device_name: deviceName,
      type: devicesType,
      password: password,
      device_id: getdevicesId,
      language: "english"

    };

    ApiServices("post", payload1, ApiEndPoints.login)
      .then((response: any) => {
        Loader.isLoading(false);
        if (response.data.status === 1) {
          const user_tokan = response?.data?.jwt_token;
          console.log("user_tokan..", user_tokan)
          loc_global.userData = user_tokan;
          Utility.showSuccessToast("Login Successfully");
          getEmailData()
          navigation.navigate(Screen.SetUpYourProfilesScreen);
        } else {
          Utility.showDangerToast(response.data.message);
        }
      })
      .finally(() => {
        Loader.isLoading(false);
      });
  };

  const deviceToken = () => {
    let devivetokean = DeviceInfo.getDeviceToken();
    console.log("djnfkvb...", devivetokean);
  };

  const getDeviceID = async () => {
    let uniqueId = DeviceInfo.getDeviceToken();
    console.log("sdbvkbsd....", uniqueId);
  };

  return (
    <AppContainer>
      <View style={styles.headerstyle}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Image resizeMode="contain" source={Images.RukkorLogo} />
        </TouchableOpacity>
      </View>
      <AppScrollview>
        <View style={styles.main_container}>
          <View style={styles.text_Inpute_conatainer}>
            <Text style={{ color: 'red' }}>Data in Component A: {data1}</Text>
            <Button title="getEmailData" onPress={getEmailData} />
            <Button title="Update Data" onPress={updateData2} />
            <View style={styles.emailstyle}>
              <Text
                style={{ color: "#000", marginTop: Responsive.heightPx(1) }}
              >
                {/* {t('Let_us_know_how_you_satisfied_with_us')} */}
                E-mail
              </Text>
            </View>

            <View style={styles.emailtextstyle}>
              <AppTextInput
                lableImage={true}
                value={email}
                keyboardType={"email-address"}
                onChangeText={(email: any) => {
                  setemail(email);
                }}
                placeHolder={t('Enter your e-mail')}
              />
            </View>
            <View style={styles.Passwordstyle}>
              <Text
                style={{ color: "#000", marginTop: Responsive.heightPx(1) }}
              >
                Password
              </Text>
              <TouchableOpacity>
                <Text
                  style={{ color: Color.themcolor, marginTop: Responsive.heightPx(1) }}
                >
                  Forgot password?
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.emailimgstyle}>
              <AppTextInput
                value={password}
                lockImage={true}
                onChangeText={(password: any) => {
                  setpassword(password);
                }}
                onClickShow={() => {
                  passwordfunction();
                }}
                // containerStyle={styles.passstyle}
                secureTextEntry={eyshow}
                isShowIcon={true}
                placeHolder="Enter your password"
              />
            </View>
          </View>

          <View style={styles.emailstyle}>
            <Text
              style={{ color: "#000", marginTop: Responsive.heightPx(1) }}
            >
              language
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              refRBSheet.current.open();
            }}
          >
            <View style={styles.langstyle}>
              <Image
                style={styles.langlogostyle}
                resizeMode="contain" source={Images.langIcon} />
              <Text style={styles.textlanstyle}>{roll}</Text>
            </View>
          </TouchableOpacity>
          {/* <Text  style={{ color: 'red' }}>

          {t('Hey Yo Im at home')}
          </Text> */}
          {/* <TouchableOpacity onPress={() => i18n.changeLanguage('de')}>
            <Text style={{ color: 'red' }}>
              chnage lange
            </Text>
          </TouchableOpacity> */}
          {/* <RBSheet
            ref={refRBSheet}
            height={300}
            openDuration={250}
            customStyles={{
              container: {
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: Color.black,
                borderTopLeftRadius: 10,
              },
            }}
          >
            <YourOwnComponent />
          </RBSheet> */}

          <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            height={Responsive.heightPx(50)}
            closeOnPressMask={true}
            animationType='fade'

            customStyles={{
              draggableIcon: {
                backgroundColor: "#47A4EA"
              },
              container: {
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }
            }}>

            {/* <Text style={{ color: 'red' }}>{language ? language : "Please selct language"}</Text> */}
            <View style={{ marginHorizontal: 10, padding: 10 }}>
              <RadioForm
                radio_props={LanguageJson}
                initial={0}
                buttonSize={12}
                labelStyle={{
                  fontSize: Responsive.font(5),
                  marginBottom: 15,
                  fontFamily: Fonts.Metropolis_Regular, top: 2
                }}
                selectedLabelColor={'#47A4EA'}
                onPress={(value: any) => {

                  refRBSheet.current.close()
                }}
              />
            </View>

          </RBSheet>
          <View style={styles.btnstyle}>
            <AppButton
              label="Log in"
              // containerStyle={styles.bookmow}
              onPress={() => RegisterPress()}
            />
          </View>
          <View style={styles.btnstyle1}>
            <AppButton
              labelStyle={styles.textcolor}
              label="Create new account"
              containerStyle={styles.signupbtn}
              onPress={() => navigation.navigate(Screen.Signupscreen)}
            />
          </View>
        </View>
      </AppScrollview>
    </AppContainer>
  );
};

export default Signinscreen;
