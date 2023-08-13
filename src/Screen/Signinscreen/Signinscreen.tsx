import { useRef, useEffect } from "react";
import {
  Text, View,
  Image, TouchableOpacity,
  Platform, FlatList,
  Dimensions, Modal
} from "react-native";
import React, { useState } from "react";
import {
  Responsive,
  Images,
  Color,
  Screen,
  Loader, Utility
} from "../../Helper";
import messaging from '@react-native-firebase/messaging';
import { useSelector, useDispatch } from 'react-redux';
import styles from "./Signinscreenstyle";
import {
  AppScrollview,
  AppContainer,
  AppTextInput,
  AppButton
} from "../../Component";
import { ApiEndPoints, ApiServices } from "../../NetworkCall";
import DeviceInfo from "react-native-device-info";
import i18next, { languageResources } from '../../../services/i18next';
import { useTranslation } from 'react-i18next';
import languagesList from '../../../services/languagesList.json';

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

  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  const changeLng = lng => {
    i18next.changeLanguage(lng);
    setVisible(false);
  };


  const refRBSheet: any = useRef();
  const [ChoseLang, setChoseLang] = React.useState('English')
  const [getdevicesId, setgetdevicesId] = useState("");
  const [DevicesToken, setDevicesToken] = useState("");
  const [platform, setPlatform] = useState("");
  const [androidVersion, setandroidVersion] = useState("");
  const [deviceName, setdeviceName] = useState("");
  const [devicesType, setdevicesType] = useState("");

  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [deviceid, setdeviceid] = useState("");
  const [eyshow, setEyeshow] = useState(true);

  const dispatch = useDispatch();
  const getEmailData = () => {
    dispatch(getemailId({ email, platform, androidVersion, deviceName, devicesType, getdevicesId, DevicesToken, ChoseLang }));
  };
  const UserEmail = useSelector(state => state.data.getemailId);
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
    } else if (Platform.OS === 'android') {
      // Code for Android
      setPlatform('android')
    } else {
      // Code for other platforms (if applicable)
    }
    setgetdevicesId(DeviceInfo.getUniqueIdSync())
    setdeviceName(DeviceInfo.getDeviceNameSync())
    setandroidVersion(DeviceInfo.getSystemVersion())

    const isTablet = Math.min(width, height) >= 600;

    if (isTablet) {
      setdevicesType("Tablet")
    } else {
      setdevicesType("Phone")
    }


  }, []);









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
  const LoginPress = () => {
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

    const payload1 = {

      primary_email: email,
      os_platform: platform,
      os_platform_version: androidVersion,
      user_agent: "1",
      device_name: deviceName,
      type: devicesType,
      password: password,
      device_id: getdevicesId,
      language: ChoseLang

    };
    ApiServices("post", payload1, ApiEndPoints.login)
      .then((response: any) => {
        Loader.isLoading(false);
        if (response.data.status === 1) {
          const user_tokan = response?.data?.jwt_token;
          loc_global.userData = user_tokan;
          Utility.showSuccessToast("Login Successfully");
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
  };

  const getDeviceID = async () => {
    let uniqueId = DeviceInfo.getDeviceToken();
  };

  return (
    <AppContainer>
      <View style={styles.headerstyle}>
        {/* <TouchableOpacity onPress={() => navigation.pop()}> */}
        <Image resizeMode="contain" source={Images.RukkorLogo} />
        {/* </TouchableOpacity> */}
      </View>
      <AppScrollview>
        <View style={styles.main_container}>
          <View style={styles.text_Inpute_conatainer}>
            <View style={styles.emailstyle}>
              <Text
                style={{ color: "#000", marginTop: Responsive.heightPx(1) }}
              >
                {t('Email')}
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
              <Text style={{ color: "#000", marginTop: Responsive.heightPx(1) }}>
                {t('Password')}
              </Text>
              <TouchableOpacity>
                <Text
                  style={{ color: Color.themcolor, marginTop: Responsive.heightPx(1) }}
                >
                  {t('Forgot password?')}

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

                placeHolder={t('Enter your password')}

              />
            </View>
          </View>

          <View style={styles.emailstyle}>
            <Text
              style={{ color: "#000", marginTop: Responsive.heightPx(1) }}
            >
              {t('language')}

            </Text>
          </View>

          <Modal
            transparent={true}
            visible={visible} onRequestClose={() => setVisible(false)}>
            {/* <View style={styles.languagesList}> */}
            <View style={styles.modalconatiner}>
              <View style={styles.modalconatier2}>
                <View>
                  <FlatList
                    data={Object.keys(languageResources)}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={styles.languageButton}
                        onPress={() => { changeLng(item), setChoseLang(languagesList[item].nativeName) }}>
                        <Text style={styles.lngName}>
                          {languagesList[item].nativeName}
                        </Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </View>
            </View>
          </Modal>
          <TouchableOpacity onPress={() => setVisible(true)}>
            <View style={styles.langstyle}>
              <Image
                style={styles.langlogostyle}
                resizeMode="contain" source={Images.langIcon} />
              <Text style={styles.textlanstyle}>{ChoseLang}</Text>
            </View>
          </TouchableOpacity>


          <View style={styles.btnstyle}>
            <AppButton
              label={t('Log in')}
              // containerStyle={styles.bookmow}
              onPress={() => { LoginPress(), getEmailData() }}
            />
          </View>
          <View style={styles.btnstyle1}>
            <AppButton
              labelStyle={styles.textcolor}
              label={t('Create new account')}

              containerStyle={styles.signupbtn}
              onPress={() => { navigation.navigate(Screen.Signupscreen), getEmailData() }}
            />
          </View>
        </View>
      </AppScrollview>
    </AppContainer>
  );
};

export default Signinscreen;
