import { Text, View, Image, TouchableOpacity, Linking } from "react-native";
import React, { useState, useRef } from "react";
import { Responsive, Images, Screen, Loader, Utility } from "../../Helper";
import styles from "./ProfileSettingsscreenstyle";
import { AppScrollview, AppContainer, AppTextInput } from "../../Component";
import { launchImageLibrary } from "react-native-image-picker";
import ImagePicker from "react-native-image-crop-picker";
import BottomSheet from "react-native-bottomsheet";
import Axios from "axios";
import { ApiEndPoints } from "../../NetworkCall";
import axios from "axios";

interface ProfileSettingsscreenProps {
  navigation?: any;
  text?: any;
}
const loc_global: any = global;

const ProfileSettingsscreen = (props: ProfileSettingsscreenProps) => {
  const { navigation } = props;
  const refRBSheet: any = useRef();
  const [profile, setProfile] = React.useState("");
  const [firstname, setfirstname] = useState("");
  const [imagepath, setIMagespath] = React.useState(null);

  const ImagePathData = imagepath?.path;
  const fileNamePathData = imagepath?.fileName;
  const typePathData = imagepath?.type;
  const uriePathData = imagepath?.uri;

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

  // console.log("showjebksebenbjb", imagepath?.path)

  const UpdateProfile = (imagepath: any) => {
    if (!firstname) {
      return Utility.showDangerToast("Please enter Name");
    }

    // console.log("imagepath>>>3", JSON.stringify(formData));
    // formData.append("profile_image", {
    //     name: fileNamePathData,
    //     type: typePathData,
    //     uri: uriePathData,
    //   });

    const createFormData = (data) => {
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }
      return formData;
    };

    const userData = {
      name: firstname,
      facebook: "https://www.theunpadh.com/",
      google: "https://www.theunpadh.com/",
      twitter: "https://www.theunpadh.com/",
      address: "Address...",
      subjects: "PHP",
      description: "Good! vary",
      profile_image: {
        name: fileNamePathData,
        type: typePathData,
        uri: uriePathData,
      }
    }

    // const formData = new FormData(userData);
    const formData = createFormData(userData);


    console.log("show formadata", JSON.stringify(formData))
    // Axios({
    //   method: "POST",
    //   url: ApiEndPoints.studentupdateprofile,
    //   formData
    // //   data:formData,
    // //   data: {
    // //     name: firstname,
    // //     facebook: "https://www.theunpadh.com/",
    // //     google: "https://www.theunpadh.com/",
    // //     twitter: "https://www.theunpadh.com/",
    // //     address: "Address...",
    // //     subjects: "PHP",
    // //     description: "Good! vary",

    // //   },

    //   headers: {
    //     "Cache-Control": "no-cache, no-store, must-revalidate",
    //     Pragma: "no-cache",
    //     Expires: "0",
    //     Authorization: `Bearer ${loc_global?.userData?.api_token}`,
    //   },
    // })
    axios.post(ApiEndPoints.studentupdateprofile, formData, {
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
        Authorization: `Bearer ${loc_global?.userData?.api_token}`,
      },
    })
      .then((response: any) => {
        // console.log("Dataaaaaa222", response);

        if (response.data.code == 200) {
          setProfile(response.data.result);
          navigation.navigate(Screen.ProfileScreen);
          Utility.showSuccessToast(response.data.msg);
        } else {
          Utility.showDangerToast(response.data.msg);
        }
      })
      .finally(() => {
        Loader.isLoading(false);
      });
  };



  // // This  is UpdateProfile Post API's
  // const UpdateProfile = () => {
  //     if (!firstname) {
  //         return (
  //             Utility.showDangerToast("Please enter Name")
  //         )
  //     }
  //     // navigation.navigate(Screen.HomeScreen)

  //     // const RegisterAPI = () => {
  //     const payload1 = {
  //         name: firstname,
  //         facebook: 'https://www.theunpadh.com/',
  //         google: 'https://www.theunpadh.com/',
  //         twitter: 'https://www.theunpadh.com/',
  //         address: 'Address...',
  //         subjects: 'PHP',
  //         description: 'Good! vary',
  //     }

  //     ApiServices('post', payload1, ApiEndPoints.login)
  //         .then((response: any) => {
  //             Loader.isLoading(false)
  //             console.log('BO/,.///', payload1);
  //             if (response.data.code == 200) {
  //                 console.log('sigrfgbb', response.data.result)
  //                 // navigation.push(Screen.ProfileScreen)
  //             }
  //             else {
  //                 console.log('signd....djbisb', response.data.msg)
  //                 Utility.showDangerToast(response.data.msg)
  //             }

  //         })
  //         .finally(() => {
  //             Loader.isLoading(false)
  //         })

  //     // }

  // }

  return (
    <AppContainer>
      <View style={styles.main_container}>
        <View style={styles.headerstyle}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Image resizeMode="contain" source={Images.filterbackicon} />
          </TouchableOpacity>
          <View style={{ marginTop: Responsive.heightPx(5) }}>
            <Text style={{ color: "#000", fontSize: 18, fontWeight: "800" }}>
              Profile Settings
            </Text>
          </View>
        </View>
        <AppScrollview>
          <View style={styles.secondcontainer}>
            <View style={styles.thirdconatiner}>
              <View
                style={{
                  alignItems: "center",
                  height: Responsive.heightPx(10),
                }}
              >
                {imagepath ? (
                  // <TouchableOpacity
                  //     onPress={() => {
                  //         onPickImage();
                  //     }}
                  // >
                  <Image
                    source={
                      imagepath ? { uri: imagepath?.path } : Images.userprofiile
                    }
                    resizeMode="cover"
                    style={styles.profileimagestyle}
                  />
                ) : // </TouchableOpacity>

                  profile?.profile_image ? (
                    <TouchableOpacity
                    // onPress={() => {
                    //     onPickImage();
                    // }}
                    >
                      <Image
                        source={
                          imagepath
                            ? { uri: `${imagepath}${profile?.profile_image}` }
                            : Images.userprofiile
                        }
                        resizeMode="cover"
                        style={styles.profileimagestyle}
                      />
                    </TouchableOpacity>
                  ) : (
                    // <TouchableOpacity
                    //     onPress={() => {
                    //         onPickImage();
                    //     }}
                    // >
                    <Image
                      source={Images.userprofiile}
                      resizeMode="contain"
                      style={styles.profileimagestyle}
                    />
                  )}
              </View>
              <View style={styles.signoutview}>
                <Text
                  style={{
                    color: "blue",
                    fontSize: 20,
                  }}
                >
                  Change Profile Picture
                </Text>
              </View>

              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL("https://www.theunpadh.com/");
                  }}
                >
                  <Image
                    style={{
                      width: Responsive.widthPx(17),
                      height: Responsive.heightPx(8),
                    }}
                    resizeMode="contain"
                    source={Images.linkedin}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL("https://www.theunpadh.com/");
                  }}
                >
                  <Image
                    style={{
                      width: Responsive.widthPx(13),
                      height: Responsive.heightPx(7),
                    }}
                    resizeMode="contain"
                    source={Images.twitter}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL("https://www.theunpadh.com/");
                  }}
                >
                  <Image
                    style={{
                      width: Responsive.widthPx(18),
                      height: Responsive.heightPx(8),
                    }}
                    resizeMode="contain"
                    source={Images.facebook}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL("https://www.theunpadh.com/");
                  }}
                >
                  <Image
                    style={{
                      width: Responsive.widthPx(15),
                      height: Responsive.heightPx(5),
                    }}
                    resizeMode="contain"
                    source={Images.instagram}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    onPickImage();
                  }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft: 5,
                    }}
                  >
                    <Image
                      style={{
                        width: Responsive.widthPx(5),
                        height: Responsive.heightPx(4),
                      }}
                      resizeMode="contain"
                      source={Images.editicon}
                    />
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.inputtext}>
                <AppTextInput
                  value={firstname}
                  // keyboardType={'email-address'}
                  onChangeText={(firstname: any) => {
                    setfirstname(firstname);
                  }}
                  placeHolder="Enter new username"
                />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate(Screen.Changepassword)}
              >
                <View style={styles.signoutview}>
                  <Text
                    style={{
                      color: "blue",
                      fontSize: 15,
                    }}
                  >
                    Change Password
                  </Text>
                </View>
              </TouchableOpacity>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  width: Responsive.widthPx(90),
                  justifyContent: "space-evenly",
                  marginTop: Responsive.heightPx(16),
                  // backgroundColor: 'red'
                }}
              >
                <TouchableOpacity onPress={() => { }}>
                  <View style={styles.btn1}>
                    <Text
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: 18,
                      }}
                    >
                      Reset
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => UpdateProfile()}>
                  <View style={styles.Applybtn}>
                    <Text style={{ color: "#fff", fontSize: 15 }}>Apply</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </AppScrollview>
      </View>
    </AppContainer>
  );
};

export default ProfileSettingsscreen;
