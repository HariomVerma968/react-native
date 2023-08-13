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
import Axios from "axios";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styles from "./AliseScreenstyle";
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
import { launchImageLibrary } from "react-native-image-picker";
import ImagePicker from "react-native-image-crop-picker";
import BottomSheet from "react-native-bottomsheet";
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
interface AliseScreenProps {
  navigation?: any;
  text?: any;
}

const loc_global: any = global;
const AliseScreen = (props: AliseScreenProps) => {
  const { t, i18n } = useTranslation();
  const { navigation } = props;
  const refRBSheet: any = useRef();
  const [language, setLanguage] = React.useState('')
  const [imagepath, setIMagespath] = React.useState(null);
  const [roll, setroll] = React.useState("##");
  const [mobilenum, setmobilenum] = useState("");
  const [LastName, setLastName] = useState("");
  const [Firstname, setFirstname] = useState("");
  const [Username, setUsername] = useState("");
  const [getCountry, setgetCountry] = useState();
  const IdType = useSelector(state => state.data.getemailId);
  const profileType = IdType.aliasId

  const langType = useSelector(state => state.data.getemailId);
  const ChoseLangType = langType.ChoseLang

  useEffect(() => {
    console.log("loc_g...////", ChoseLangType, profileType)

  }, []);
  console.log("zdgcvj,../roll", roll)

  const onPickImage = () => {
    BottomSheet.showBottomSheetWithOptions(
      {
        options: ["Open Camera", "Select Gallery", "Cancel"],
        cancelButtonIndex: 3,
      },
      (value) => {
        if (value === 0) {
          ImagePicker.openCamera({
            mediaType: "photo",
            width: 300,
            height: 400,
            cropping: true,
            // showCropFrame: true
          }).then((imagepath) => {
            setIMagespath(imagepath);
            console.log("show path kjbkbk>>>", imagepath.path);
            // myAsyncPDFFunction(image.path)
          });
        } else if (value === 1) {
          launchImageLibrary(
            {
              mediaType: "photo",
              includeBase64: false,
            },
            (response) => {
              if (response) {
                const imagedata = response.assets[0];
                console.log("imagedata.....", imagedata.uri);
                setIMagespath({
                  path: imagedata.uri,
                  ...imagedata,
                });

                //  Imageuploade(imagedata)
                return;
              }
              if (response.didCancel) {
              } else {
                const imagedata = response.assets[0];
                setIMagespath({
                  path: imagedata.uri,
                  ...imagedata,
                });
              }
            }
          );
        }
      }
    );
  };

  // This  is alias Post API's
  const aliasPress = () => {
    if (!Username) {
      Utility.showDangerToast("Please enter your alias name");
      return false;
    }
    if (!Firstname) {
      return Utility.showDangerToast("Please enter your Display name");
    }
    const payload1 = {
      username: Username,
      alias: Username,
      alias_name: Firstname,
      profile: profileType,
      language: ChoseLangType,

    };

    ApiServices("post", payload1, ApiEndPoints.updateprofile)
      .then((response: any) => {
        Loader.isLoading(false);
        console.log("djbkbv/...", payload1);
        console.log("BReaalId,..//.//..", response);
        if (response.data.status === 1) {
          console.log("silkmd.///", response);
          Utility.showSuccessToast("User details updated");
          navigation.navigate(Screen.Signinscreen);
        } else {
          console.log("sjhdvjhsd..", response.data.message);
          Utility.showDangerToast(response.data.message);
        }
      })
      .finally(() => {
        Loader.isLoading(false);
      });

  };


  return (
    <AppContainer>
      <AppScrollview>
        <View style={styles.headerstyle}>
          <View style={{
            marginTop: Responsive.heightPx(9), alignItems: "center",
            width: Responsive.widthPx(100),
            flexDirection: 'row',
            height: Responsive.heightPx(15),
            justifyContent: 'center'
          }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={{ width: Responsive.widthPx(38), }}>
                <Image
                  resizeMode="contain" source={Images.Backicon} />
              </View>
            </TouchableOpacity>
            <View style={{ width: Responsive.widthPx(53), alignItems: 'flex-start', }}>
              <Text style={styles.textstyle}>Alias</Text>
            </View>
          </View>

          <View style={styles.profileview}>
            {imagepath ?
              <Image source={imagepath ? { uri: imagepath?.path } : Images.userprofileIcon} style={styles.setproflieview} />
              :
              <Image
                source={
                  Images.userprofileIcon
                }
                resizeMode="cover"
              />
            }
            <TouchableOpacity
              onPress={() => {
                onPickImage();
              }}
              style={styles.uplodview}
            >
              <View >
                <Image resizeMode="contain" source={Images.uploadicon} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.main_container}>
          <View style={styles.text_Inpute_conatainer}>
            <View style={styles.emailstyle}>
              <Text
                style={{ color: "#000", marginTop: Responsive.heightPx(2) }}
              >
                {t('Alias')}
              </Text>
            </View>
            <View style={styles.emailtextstyle}>
              <AppTextInput
                AtIcon={true}
                value={Username}
                onChangeText={(Username: any) => {
                  setUsername(Username);
                }}
                placeHolder={t('Enter your alias')}

              />
            </View>
            <View style={styles.emailstyle}>
              <Text
                style={{ color: "#000", marginTop: Responsive.heightPx(2) }}
              >
                {t('Display Name')}
              </Text>
            </View>
            <View style={styles.emailtextstyle}>
              <AppTextInput
                lableImage={true}
                value={Firstname}
                // keyboardType={"email-address"}
                onChangeText={(Firstname: any) => {
                  setFirstname(Firstname);
                }}
                placeHolder={t('Enter your Display name')}
              // placeHolder={t('Enter your e-mail')}
              />
            </View>
          </View>
          <View style={{ marginTop: Responsive.heightPx(5) }}>
            <AppButton
              label={t('Save and continue')}
              isImage={true}
              onPress={() => aliasPress()}
            />
          </View>

          <View style={styles.footerstyle}>
            <Image
              style={styles.logoview}
              resizeMode="contain" source={Images.RukkorLogo} />
          </View>

        </View>
      </AppScrollview>
    </AppContainer>
  );
};

export default AliseScreen;
