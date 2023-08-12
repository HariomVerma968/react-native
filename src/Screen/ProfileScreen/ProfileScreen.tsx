//import liraries
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Linking,
} from "react-native";
import { Images, Loader, Responsive, Screen, Utility } from "../../Helper";
import { launchImageLibrary } from "react-native-image-picker";
import ImagePicker from "react-native-image-crop-picker";
import BottomSheet from "react-native-bottomsheet";
import Axios from "axios";
import { ApiEndPoints, ApiServices } from "../../NetworkCall";
import { useSelector } from "react-redux";
import { log } from "console";
const data1 = [
  { image: Images.profileimg3 },
  { image: Images.profileimg2 },
  { image: Images.profileimg },
];
const data2 = [
  {
    image: Images.searchimgs,
    title: "Adobe illustrator for all beginner artist",
    nameSubject: "Samule Doe",
  },
  {
    image: Images.searchimgs,
    title: "Adobe illustrator for all beginner artist",
    nameSubject: "Samule Doe",
  },
  {
    image: Images.searchimgs,
    title: "Adobe illustrator for all beginner artist",
    nameSubject: "Samule Doe",
  },
];
const data3 = [
  {
    image: Images.searchimgs,
    name: "Sammuel Jonass",
    email: "@Samule Doe",
  },
  {
    image: Images.searchimgs,
    name: "Mohammad Salah",
    email: "@Samule Doe",
  },
  {
    image: Images.searchimgs,
    name: "Arafat Jamil",
    email: "@Samule Doe",
  },
  {
    image: Images.searchimgs,
    name: "Sammuel Jonass",
    email: "@Samule Doe",
  },
  {
    image: Images.searchimgs,
    name: "Mohammad Salah",
    email: "@Samule Doe",
  },
  {
    image: Images.searchimgs,
    name: "Arafat Jamil",
    email: "@Samule Doe",
  },
];

const loc_global: any = global;
interface ProfileScreenProps {
  navigation?: any;
  text?: any;
}
const imgpath = ApiEndPoints.imagepath;
// create a component
const ProfileScreen = (props: ProfileScreenProps) => {
  const { navigation } = props;
  const [selectedTab, setSelectedTab] = useState("tab1");
  const [profile, setProfile] = React.useState("");
  const [imagepath, setIMagespath] = React.useState(null);
  const userDetails = useSelector((state) => state);
  console.log(userDetails, "opopo");

  React.useEffect(() => {
    Profile();
    const backScreen = navigation.addListener("focus", () => {
      Profile();
    });
    return backScreen;
  }, []);

  function handleTabPress(tabName) {
    setSelectedTab(tabName);
  }
  const renderTabOne = ({ item }) => {
    return (
      <>
        <View style={{ marginTop: 10 }}>
          <View style={{ width: Responsive.widthPx(1.5), marginTop: 10 }} />
          <Image
            source={item.image}
            style={{
              width: Responsive.widthPx(45),
              height: Responsive.heightPx(20),
              borderRadius: 8,
            }}
            resizeMode="cover"
          />
        </View>
      </>
    );
  };
  const renderTabtwo = ({ item }) => {
    return (
      <View
        style={{
          alignSelf: "center",
          width: Responsive.widthPx(90),
          flexDirection: "row",
          marginTop: Responsive.heightPx(4),
          height: Responsive.heightPx(15),
          borderRadius: 10,
        }}
      >
        <Image
          source={Images.searchimgs}
          style={{
            width: Responsive.widthPx(25),
            height: Responsive.heightPx(14),
            borderRadius: 5,
          }}
          resizeMode="cover"
        />
        <View
          style={{
            flexDirection: "column",
            width: Responsive.widthPx(60),
            marginLeft: Responsive.widthPx(3),
          }}
        >
          <Text
            style={{
              fontSize: Responsive.font(5),
              fontWeight: "500",
              color: "#282F3E",
            }}
            numberOfLines={2}
          >
            {item.title}
          </Text>
          <Text
            style={{
              fontSize: Responsive.font(3),
              fontWeight: "400",
              color: "#282F3E",
              marginTop: Responsive.heightPx(1),
            }}
          >
            {item.nameSubject}
          </Text>
          <View
            style={{
              justifyContent: "space-around",
              flexDirection: "row",
              alignSelf: "flex-start",
              marginTop: Responsive.heightPx(1),
            }}
          >
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={Images.usericondetails}
                style={{
                  width: Responsive.widthPx(5),
                  height: Responsive.heightPx(2.5),
                }}
                resizeMode="cover"
              />
              <Text
                style={{
                  fontSize: Responsive.font(3),
                  fontWeight: "300",
                  color: "#282F3E",
                  marginLeft: Responsive.widthPx(3),
                }}
              >
                4k student
              </Text>
            </View>

            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                marginLeft: Responsive.widthPx(5),
                alignItems: "center",
              }}
            >
              <Image
                source={Images.star}
                style={{
                  width: Responsive.widthPx(5),
                  height: Responsive.heightPx(2.5),
                }}
                resizeMode="cover"
              />
              <Text
                style={{
                  fontSize: Responsive.font(3),
                  fontWeight: "300",
                  color: "#282F3E",
                  marginLeft: Responsive.widthPx(3),
                }}
              >
                4.7
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  const renderTabThree = ({ item }) => {
    return (
      <View
        style={{
          width: Responsive.widthPx(95),
          alignSelf: "center",
          marginTop: Responsive.heightPx(1),
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={Images.searchimgs}
            style={{
              width: Responsive.widthPx(17),
              height: Responsive.heightPx(8),
              borderRadius: Responsive.widthPx(15),
            }}
            resizeMode="cover"
          />
          <View style={{ marginLeft: Responsive.widthPx(4) }}>
            <Text
              style={{
                fontSize: Responsive.font(5),
                fontWeight: "500",
                color: "#282F3E",
              }}
              numberOfLines={2}
            >
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: Responsive.font(3),
                fontWeight: "400",
                color: "#282F3E",
                marginTop: Responsive.heightPx(1),
              }}
            >
              {item.email}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 20,
              height: 10,
            },
            shadowOpacity: 0.41,
            shadowRadius: 50,
            elevation: 5,
            width: Responsive.widthPx(18),
            backgroundColor: "#EDEEF0",
            borderRadius: 4,
            marginRight: Responsive.widthPx(3),
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Text
            style={{
              fontSize: Responsive.font(4),
              fontWeight: "500",
              color: "black",
              textAlign: "center",
            }}
          >
            Follow
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  // console.log("userjjkkkllklkkl", loc_global?.userData?.api_token)

  const Profile = () => {
    Loader.isLoading(true);
    Axios({
      method: "GET",
      url: ApiEndPoints.studentprofile,
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
        Authorization: `Bearer ${loc_global?.userData?.api_token}`,
      },
    })
      .then((response: any) => {
        if (response.data.code == 200) {
          console.log("./...///...", response.data.result);
          setProfile(response.data.result);
          Utility.showSuccessToast(response.data.msg);
        } else {
          Utility.showDangerToast(response.data.msg);
        }
      })
      .finally(() => {
        Loader.isLoading(false);
      });
  };

  // console.log("ddddddddd",profile.image_path);

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
            console.log("show path only>>>>>>>", imagepath.path);
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
                console.log(imagedata);
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

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#3AA9AB",
          width: Responsive.widthPx(100),
          height: Responsive.heightPx(20),
        }}
      >
        <View
          style={{
            height: Responsive.heightPx(10),
            justifyContent: "flex-end",
            alignItems: "flex-end",
            width: Responsive.widthPx(95),
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.push(Screen.ProfileSettingsscreen)}
          >
            <Image resizeMode="contain" source={Images.Settings} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: Responsive.widthPx(100),
            alignItems: "center",
            height: Responsive.heightPx(20),
          }}
        >
          {/* {imagepath ? (
                        <TouchableOpacity
                            onPress={() => {
                                onPickImage();
                            }}
                        >
                            <Image
                                source={
                                    imagepath ? { uri: imagepath?.path } : Images.userprofiile
                                }
                                resizeMode="cover"
                                style={styles.profileimagestyle}
                            />
                        </TouchableOpacity>

                    ) : profile?.profile_image ? (
                        <TouchableOpacity
                            onPress={() => {
                                onPickImage();
                            }}
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
                        <TouchableOpacity
                            onPress={() => {
                                onPickImage();
                            }}
                        >
                            <Image
                                source={Images.userprofiile}
                                resizeMode="contain"
                                style={styles.profileimagestyle}
                        </TouchableOpacity>

                    )} */}

          {/* { console.log("imgpath....",imgpath)} */}
          <Image
            // source={ Images.userprofiile}
            // source={ Images.userprofiile}
            // source={ {uri: profile.image_path}}
            source={
              profile.image_path
                ? { uri: profile.image_path }
                : Images.userprofiile
            }
            resizeMode="contain"
            style={styles.profileimagestyle}
          />
        </View>
      </View>
      <View style={{ marginTop: Responsive.heightPx(7), alignItems: "center" }}>
        <View style={{ alignSelf: "center" }}>
          <Text
            style={{
              color: "#000000",
              textAlign: "center",
              fontSize: Responsive.font(5),
              fontWeight: "500",
            }}
          >
            {profile.name}
          </Text>
          <Text
            style={{
              color: "#000000",
              textAlign: "center",
              fontSize: Responsive.font(5),
              fontWeight: "500",
            }}
          >
            {profile.email}
          </Text>
          <Text
            style={{
              color: "#000000",
              textAlign: "center",
              fontSize: Responsive.font(4),
              fontWeight: "400",
              marginTop: Responsive.heightPx(1.5),
              width: Responsive.widthPx(70),
            }}
          >
            Just a simple guy who loves do something new and fun! 😜
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://www.theunpadh.com/");
            }}
          >
            <Image
              source={Images.linkedin}
              style={styles.socialicon}
              resizeMode="center"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://www.theunpadh.com/");
            }}
          >
            <Image
              source={Images.twitter}
              style={{
                width: Responsive.widthPx(12),
                height: Responsive.heightPx(8),
                marginLeft: Responsive.widthPx(2),
              }}
              resizeMode="center"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://www.theunpadh.com/");
            }}
          >
            <Image
              source={Images.facebook}
              style={{
                width: Responsive.widthPx(15),
                height: Responsive.heightPx(8),
                marginLeft: Responsive.widthPx(3),
              }}
              resizeMode="center"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://www.theunpadh.com/");
            }}
          >
            <Image
              source={Images.instagram}
              style={{
                width: Responsive.widthPx(8),
                height: Responsive.heightPx(8),
                marginLeft: Responsive.widthPx(3),
              }}
              resizeMode="center"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: Responsive.widthPx(100),
          height: Responsive.heightPx(10),
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => handleTabPress("tab1")}>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: Responsive.font(5),
                fontWeight: "400",
                color: "#404653",
              }}
            >
              03
            </Text>
            <Text
              style={{
                fontSize: Responsive.font(5),
                fontWeight: "400",
                color: "#404653",
              }}
            >
              Projects
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabPress("tab2")}>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: Responsive.font(5),
                fontWeight: "400",
                color: "#404653",
              }}
            >
              03
            </Text>
            <Text
              style={{
                fontSize: Responsive.font(5),
                fontWeight: "400",
                color: "#404653",
              }}
            >
              Courses
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabPress("tab3")}>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: Responsive.font(5),
                fontWeight: "400",
                color: "#404653",
              }}
            >
              03
            </Text>
            <Text
              style={{
                fontSize: Responsive.font(5),
                fontWeight: "400",
                color: "#404653",
              }}
            >
              Following
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {selectedTab === "tab1" && (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <View
            style={{
              width: Responsive.widthPx(90),
              justifyContent: "center",
              marginLeft: Responsive.widthPx(5),
            }}
          >
            <View style={{ borderWidth: 1, width: Responsive.widthPx(25) }} />
          </View>
          <FlatList
            data={data1}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            columnWrapperStyle={styles.columnWraper}
            renderItem={renderTabOne}
            // ListEmptyComponent={_listEmptyComponent()}
            contentContainerStyle={styles.containerstyles}
          />
        </View>
      )}
      {selectedTab === "tab2" && (
        <View
          style={{
            flex: 1,
            marginTop: Responsive.heightPx(1.2),
            marginBottom: Responsive.heightPx(1),
          }}
        >
          <View
            style={{
              width: Responsive.widthPx(100),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ borderWidth: 1, width: Responsive.widthPx(25) }} />
          </View>
          <FlatList
            data={data2}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={renderTabtwo}
          />
        </View>
      )}
      {selectedTab === "tab3" && (
        <View
          style={{
            flex: 1,
            marginTop: Responsive.heightPx(1.2),
            marginBottom: Responsive.heightPx(1),
          }}
        >
          <View
            style={{
              width: Responsive.widthPx(95),
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <View style={{ borderWidth: 1, width: Responsive.widthPx(25) }} />
          </View>
          <FlatList
            data={data3}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={renderTabThree}
          />
        </View>
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  columnWraper: {
    marginBottom: 10,
  },
  containerstyles: {
    alignSelf: "center",
  },
  socialicon: {
    width: Responsive.widthPx(15),
    height: Responsive.heightPx(8),
  },
  profileimagestyle: {
    height: Responsive.widthPx(28),
    width: Responsive.widthPx(28),
    borderRadius: Responsive.widthPx(15),
  },
  profileNameView: {
    height: Responsive.widthPx(25),
    //  backgroundColor: "red",
    width: Responsive.widthPx(90),
    margin: 6,
    alignItems: "center",
    // flexDirection: "row"
  },
});

//make this component available to the app
export default ProfileScreen;
