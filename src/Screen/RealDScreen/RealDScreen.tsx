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
import styles from "./RealDScreenstyle";
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

interface RealDScreenProps {
  navigation?: any;
  text?: any;
}

const loc_global: any = global;
const RealDScreen = (props: RealDScreenProps) => {




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
  const [statelist, setstatelist] = React.useState([

    { name: '91' },
    { name: '94' },
  ]);


  useEffect(() => {
    console.log("loc_global?.userData?...///", loc_global?.userData)
    getCountryApi()
  }, []);
console.log("zdgcvj,../roll",roll)

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






 


  const getCountryApi = () => {
    Loader.isLoading(true);
    ApiServices("get", false, ApiEndPoints.get_country)
      .then((response: any) => {

        if (response.data.status === 1) {
          const getcounty = response?.data?.info
          console.log("./....k././", getcounty);
          const  setarr=[]
          getcounty.map((item) => {
            console.log("kjfskdkfjbk", item.callingCodes[0])
            setarr.push(item.callingCodes[0])
            setgetCountry(setarr);
          })
          console.log("hgdvchg,..//setarr",setarr)
          Utility.showSuccessToast(response?.data?.message);
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
          onPress={() => refRBSheet.current.close(setroll(item), console.log("s.,,.//",item))}
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









  // const getCountryApi = () => {
  //   Loader.isLoading(true);
  //   Axios({
  //     method: "GET",
  //     url: ApiEndPoints.get_country,
  //     headers: {
  //       "Cache-Control": "no-cache, no-store, must-revalidate",
  //       Pragma: "no-cache",
  //       Expires: "0",
  //       Authorization: `Bearer ${loc_global?.userData}`,
  //     },
  //   })
  //     .then((response: any) => {
  //       console.log("./..././.cou.///",response);
  //       if (response.data.status === 1) {
  //         console.log("./..undarResponmse..//..",response);
  //         setgetCountry(response?.data?.info);
  //         Utility.showSuccessToast(response?.data?.message);
  //       } else {
  //         console.log("./..xmfbnkvb",response);
  //         Utility.showDangerToast(response?.data?.message);
  //       }
  //     }).catch((error: any) => console.log("kjsdbvkb",error))
  //     .finally(() => {
  //       console.log("kxbjfkvbdfkv..")
  //       Loader.isLoading(false);
  //     });
  // };








  // This  is Registration Post API's
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
      // alias: 'mahajan',
      //alias_picture:alies_pic_abc105
      //user_picture:user_picture
      // alias_name: 'laves',
      first_name: Firstname,
      last_name: LastName,
      //phone_country:+91
      //phone:9574198852
      mobile_country: roll,
      //mobile:9915642879
      //primary_email:abc12345678@yopmail.com
      //status:online
      //organization:mm
      profile: 'real_id',
      // work_place: 'Dignizant Tech',
      // work_role: 'Backend dev',
      // dob: '208588',
      language: 'english',

    };

    ApiServices("post", payload1, ApiEndPoints.updateprofile)
      .then((response: any) => {
        Loader.isLoading(false);
        console.log("djbkbv/...", payload1);
        console.log("BReaalId,..//.//..", response);
        if (response.data.status === 1) {
          console.log("silkmd.///", response);
          Utility.showSuccessToast("User details updated");
          navigation.navigate(Screen.CareToShareScreen);
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
          <View style={{ marginTop: Responsive.heightPx(8) }}>
            <Text style={styles.textstyle}>Real ID</Text>
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

              <Text style={{ color: "#000", marginTop: Responsive.heightPx(1) }}>E-mail</Text>
            </View>
            <View style={styles.langstyle}>
              <Image
                style={styles.langlogostyle}
                resizeMode="contain" source={Images.email} />
              <Text style={styles.textlanstyle}>tony@stark-industries.com</Text>
            </View>
            <View style={styles.emailstyle}>
              <Text
                style={{ color: "#000", marginTop: Responsive.heightPx(2) }}
              >
                Username*
              </Text>
            </View>
            <View style={styles.emailtextstyle}>
              <AppTextInput
                lableImage={true}
                value={Username}
                // keyboardType={"email-address"}
                onChangeText={(Username: any) => {
                  setUsername(Username);
                }}
                placeHolder={'Enter your Username'}
              // placeHolder={t('Enter your e-mail')}
              />
            </View>
            <View style={styles.emailstyle}>
              <Text
                style={{ color: "#000", marginTop: Responsive.heightPx(2) }}
              >
                First name*
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
                placeHolder={'Enter your First name'}
              // placeHolder={t('Enter your e-mail')}
              />
            </View>

            <View style={styles.emailstyle}>
              <Text
                style={{ color: "#000", marginTop: Responsive.heightPx(2) }}
              >
                Last name*
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
                placeHolder={'Enter your Last name'}
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
                      Country
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
                    Mobile*
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
              label="Save and continue"
              isImage={true}
              // onPress={() => navigation.navigate(Screen.CareToShareScreen)}
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
