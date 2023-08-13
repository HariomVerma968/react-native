import { useRef, useEffect } from "react";
import {
  Text, View,
  Image, TouchableOpacity, FlatList
} from "react-native";
import React, { useState } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import {
  Responsive,
  Images,
  Color,
  Screen,
  Loader, Utility
} from "../../Helper";
import styles from "./RealDScreenstyle";
import {
  AppScrollview,
  AppContainer,
  AppTextInput,
  AppButton
} from "../../Component";
import { ApiEndPoints, ApiServices } from "../../NetworkCall";
import { launchImageLibrary } from "react-native-image-picker";
import ImagePicker from "react-native-image-crop-picker";
import BottomSheet from "react-native-bottomsheet";
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
interface RealDScreenProps {
  navigation?: any;
  text?: any;
}

const loc_global: any = global;
const RealDScreen = (props: RealDScreenProps) => {
  const UserEmail = useSelector(state => state.data.getemailId);
  const Email_Id = UserEmail.email
  const { t, i18n } = useTranslation();
  const IdType = useSelector(state => state.data.getemailId);
  const profileType = IdType.realId

  const langType = useSelector(state => state.data.getemailId);
  const ChoseLangType = langType.ChoseLang


  const { navigation } = props;
  const refRBSheet: any = useRef();
  const [imagepath, setIMagespath] = React.useState(null);
  const [roll, setroll] = React.useState("##");
  const [mobilenum, setmobilenum] = useState("");
  const [LastName, setLastName] = useState("");
  const [Firstname, setFirstname] = useState("");
  const [Username, setUsername] = useState("");
  const [getCountry, setgetCountry] = useState();



  useEffect(() => {
    getCountryApi()
  }, []);

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









  const getCountryApi = () => {
    Loader.isLoading(true);
    ApiServices("get", false, ApiEndPoints.get_country)
      .then((response: any) => {

        if (response.data.status === 1) {
          const getcounty = response?.data?.info
          const setarr = []
          getcounty.map((item) => {
            setarr.push(item.callingCodes[0])
            setgetCountry(setarr);
          })
        } else {
          Utility.showDangerToast(response.data.msg);
        }
      })
      .finally(() => {
        Loader.isLoading(false);
      });
  };



  const YourOwnComponent = () =>
    <View style={{ backgroundColor: "#fff" }}>
      <FlatList
        data={getCountry}
        renderItem={({ item, }) => (
          <TouchableOpacity
            onPress={() => refRBSheet.current.close(setroll(item))}
            // onPress={() => refRBSheet.current.close(setState(item.state_name), stateId = item.id)}

            style={{ width: Responsive.widthPx(100), height: Responsive.heightPx(15), justifyContent: 'center', alignItems: 'center' }}
          >
            <View style={{
              backgroundColor: Color.themcolor,
              width: Responsive.widthPx(90),
              justifyContent: 'center',
              alignItems: 'center',
              height: Responsive.heightPx(10),
              borderWidth: 2,
              borderColor: Color.themcolor,
              marginTop: Responsive.heightPx(3),
              borderRadius: Responsive.widthPx(3)
            }}>
              <Text style={{ color: '#fff', fontSize: 20, marginHorizontal: 12, marginVertical: 5 }}>{item}</Text>
            </View>
          </TouchableOpacity>
        )}
        numColumns={1}
      />
    </View>;


  // This  is RealIdPress Post API's
  const RealIdPress = () => {
    if (!Username) {
      Utility.showDangerToast("Please enter your Username");
      return false;
    }

    if (!Firstname) {
      Utility.showDangerToast("Please enter your First name");
      return false;
    }
    if (!LastName) {
      Utility.showDangerToast("Please enter your Last name");
      return false;
    }

    if (!mobilenum) {
      return Utility.showDangerToast("Please enter your Number");
    }


    const payload1 = {
      username: Username,
      first_name: Firstname,
      last_name: LastName,
      mobile_country: roll,
      profile: profileType,
      language: ChoseLangType,

    };

    ApiServices("post", payload1, ApiEndPoints.updateprofile)
      .then((response: any) => {
        Loader.isLoading(false);
        if (response.data.status === 1) {
          Utility.showSuccessToast("User details updated");
          navigation.navigate(Screen.CareToShareScreen);
        } else {
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
          <View style={{ marginTop: Responsive.heightPx(8) }}>
            <Text style={styles.textstyle}>{t('Real ID')}</Text>
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

              <Text style={{ color: "#000", marginTop: Responsive.heightPx(1) }}>{t('E-mail')}</Text>
            </View>
            <View style={styles.langstyle}>
              <Image
                style={styles.langlogostyle}
                resizeMode="contain" source={Images.email} />
              <Text style={styles.textlanstyle}>{Email_Id}</Text>
            </View>
            <View style={styles.emailstyle}>
              <Text
                style={{ color: "#000", marginTop: Responsive.heightPx(2) }}
              >
                {t('Username*')}
              </Text>
            </View>
            <View style={styles.emailtextstyle}>
              <AppTextInput
                AtIcon={true}
                value={Username}
                // keyboardType={"email-address"}
                onChangeText={(Username: any) => {
                  setUsername(Username);
                }}
                placeHolder={t('Enter your Username')}
              // placeHolder={t('Enter your e-mail')}
              />
            </View>
            <View style={styles.emailstyle}>
              <Text
                style={{ color: "#000", marginTop: Responsive.heightPx(2) }}
              >
                {t('First name*')}
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

                placeHolder={t('Enter your First name')}
              // placeHolder={t('Enter your e-mail')}
              />
            </View>

            <View style={styles.emailstyle}>
              <Text
                style={{ color: "#000", marginTop: Responsive.heightPx(2) }}
              >
                {t('Last name*')}
              </Text>
            </View>
            <View style={styles.emailtextstyle}>
              <AppTextInput
                lableImage={true}
                value={LastName}
                // keyboardType={"email-address"}
                onChangeText={(LastName: any) => {
                  setLastName(LastName);
                }}
                placeHolder={t('Enter your Last name')}
              // placeHolder={t('Enter your e-mail')}
              />
            </View>
            <View style={styles.countryview}>
              <TouchableOpacity
                onPress={() => { refRBSheet.current.open() }}
              >
                <View>
                  <View style={{ width: Responsive.widthPx(15), }}>
                    <Text
                      style={{ color: "#000", marginTop: Responsive.heightPx(2) }}
                    >
                      {t('Country')}
                    </Text>
                  </View>
                  <View style={styles.countrystyleview}>
                    <Image
                      resizeMode="contain"
                      source={Images.langIcon} />
                    <Text style={{ color: "#000" }}>+{roll}</Text>
                    <Image resizeMode="contain" source={Images.downarrow} />
                  </View>
                </View>
              </TouchableOpacity>
              <RBSheet
                ref={refRBSheet}
                height={300}
                openDuration={250}
                customStyles={{
                  container: {
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: Color.black,
                    borderTopLeftRadius: 10
                  }
                }}
              >
                <YourOwnComponent />
              </RBSheet>
              <View style={{ width: Responsive.widthPx(55) }}>
                <View >
                  <Text
                    style={{ color: "#000", marginTop: Responsive.heightPx(2) }}
                  >
                    {t('Mobile*')}
                  </Text>
                </View>
                <View style={styles.mobview}>
                  <AppTextInput
                    maxLength={10}
                    mpobicon={true}
                    value={mobilenum}
                    keyboardType='numeric'
                    onChangeText={(mobilenum: any) => {
                      setmobilenum(mobilenum);
                    }}
                    placeHolder={'XXX-XX XX XXX'}
                    inputContainer={{ width: Responsive.widthPx(55) }}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={{ marginTop: Responsive.heightPx(5) }}>
            <AppButton
              label={t('Save and continue')}
              isImage={true}
              onPress={() => RealIdPress()}
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

export default RealDScreen;
