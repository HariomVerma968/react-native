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
  Modal,
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

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styles from "./CareToShareScreenstyle";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Dropdown } from "react-native-element-dropdown";
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
import { ScrollView } from "react-native-gesture-handler";

interface CareToShareScreenProps {
  navigation?: any;
  text?: any;
}
const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];
const loc_global: any = global;
const CareToShareScreen = (props: CareToShareScreenProps) => {
  const { navigation } = props;
  const refRBSheet: any = useRef();
  const [language, setLanguage] = React.useState('')
  const [imagepath, setIMagespath] = React.useState(null);
  const [roll, setroll] = React.useState("Country");
  const [mobilenum, setmobilenum] = useState("");
  const [LastName, setLastName] = useState("");
  const [Firstname, setFirstname] = useState("");
  const [Username, setUsername] = useState("");
  const [deviceid, setdeviceid] = useState("");
  const [eyshow, setEyeshow] = useState(true);
  const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
  const [statelist, setstatelist] = React.useState([

    { name: 'teacher' },
    { name: 'student' },
  ]);


  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleYearSelect = (year) => {
    setSelectedYear(year);
  };

  // useEffect(() => {
  //   getDeviceID();
  //   deviceToken();
  // });

  
  const [modalVisible, setModalVisible] = useState(false);
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, index) => currentYear - index);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
const renderItem=({item})=>{
  return(
    <TouchableOpacity onPress={()=>{setModalVisible(false)}}>
    <View style={{height:Responsive.heightPx(2)}}>
      <Text style={{color:"black"}}>{item}</Text>
    </View>
    </TouchableOpacity>
  )
}

  const YearPicker = ({ selectedYear, onSelect }) => {

    const handleYearSelect = (year) => {
      onSelect(year);
      toggleModal();
    };


    return (
      <View>
        <TouchableOpacity onPress={() => toggleModal()}>
          <Text style={{ color: 'red' }}>{selectedYear}</Text>
        </TouchableOpacity>

        <Modal
          // style={{ width: Responsive.widthPx(100),justifyContent: 'center', alignItems: 'center' }}
          visible={modalVisible} transparent animationType="slide">
          <View style={{
            // alignItems: "center",
            // justifyContent: "center",
            alignSelf: 'center',
            backgroundColor: "red",
            width: Responsive.widthPx(90),
            borderRadius: Responsive.widthPx(5),
            height: Responsive.heightPx(50),
            marginTop: Responsive.heightPx(20)
          }}>
            {/* {years.map((year) => (
              <ScrollView
                contentContainerStyle={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  // marginVertical: Responsive.heightPx(2),
                  width: Responsive.widthPx(80),
                  // height: Responsive.heightPx(50)
                }}
              >
                <View>
                  <TouchableOpacity
                    style={{ backgroundColor: 'blue', width: Responsive.widthPx(30) }}
                    key={year} onPress={() => handleYearSelect(year)}>
                    <Text style={{ color: '#000', }}>{year}</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            ))} */}
            <View style={{}}>
              <FlatList 
              data={years}
              renderItem={renderItem}
              />
            </View>
            <TouchableOpacity onPress={() => toggleModal()}>
              <Text style={{ color: '#fff' }}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }

  const YourOwnComponent = () =>
    <View style={{ backgroundColor: "#fff" }}>
      <FlatList
        data={statelist}
        renderItem={({ item, }) => (
          <TouchableOpacity
            onPress={() => refRBSheet.current.close(setroll(item.name), console.log("sdjcvh", item.name))}
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
              <Text style={{ color: '#fff', fontSize: 20, marginHorizontal: 12, marginVertical: 5 }}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        numColumns={1}
      />
    </View>;


  // This  is Registration Post API's
  const RegisterPress = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

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
    // navigation.navigate(Screen.HomeScreen)

    // const RegisterAPI = () => {
    // const payload1 = {
    //   username: email,
    //   password: password,
    //   device_type: "android",
    //   // role: 'student',
    //   device_id: "",
    //   notification_id: "",
    //   latitude: "",
    //   longitude: "",
    // };

    // ApiServices("post", payload1, ApiEndPoints.login)
    //   .then((response: any) => {
    //     Loader.isLoading(false);
    //     console.log("BO/,.///", payload1);
    //     if (response.data.code == 200) {
    //       console.log("sigrollere..", response.data.result.role);
    //       const user_tokan = response?.data?.result;
    //       console.log("user_tokan..", user_tokan);
    //       loc_global.userData = user_tokan;
    //       Utility.showSuccessToast("Login Successfully");
    //       Storage.setUserData(user_tokan);
    //       navigation.navigate(Screen.HomeScreen);
    //       // const roll = response.data.result.role
    //       // setrooll(roll)
    //       // AsyncStorage.setItem("key", roll)
    //       storeData(response.data.result.role);
    //     } else {
    //       console.log("signd....djbisb", response.data.msg);
    //       Utility.showDangerToast(response.data.msg);
    //     }
    //   })
    //   .finally(() => {
    //     Loader.isLoading(false);
    //   });

    // }
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
      <AppScrollview>
        <View style={styles.headerstyle}>
          <View style={{ width: Responsive.widthPx(20), }}>
            <Image
              resizeMode="contain" source={Images.Backicon} />
          </View>
          <View style={{ width: Responsive.widthPx(50), alignItems: 'center' }}>
            <Text style={styles.textstyle}>Care to share?</Text>
          </View>
        </View>

        <View style={styles.discrptionview}>
          <Text style={{ color: "#000" }}>Care to share some more about yourself? This information will be available in your Real ID profile. It will be shared with other users should you choose to show them your Real ID.</Text>
        </View>
        <View style={styles.main_container}>
          <View style={styles.text_Inpute_conatainer}>
            <View style={styles.emailstyle}>
              <Text
                style={{ color: "#000", marginTop: Responsive.heightPx(2) }}
              >
                Where do you work?
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
                placeHolder={'Stark Industries'}
              // placeHolder={t('Enter your e-mail')}
              />
            </View>
            <View style={styles.emailstyle}>
              <Text
                style={{ color: "#000", marginTop: Responsive.heightPx(2) }}
              >
                What’s your title/role?
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
                placeHolder={'Chief Executive Officer'}
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
                      source={Images.langIcon} />
                    <Text style={{ color: "#000" }}>{roll}</Text>
                    <Image source={Images.downarrow} />
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
            </View>
          </View>

          {/* <TouchableOpacity onPress={()=>toggleModal()}>
              <Text style={{ color: 'red' }}>{selectedYear}</Text>
            </TouchableOpacity> */}

          <YearPicker selectedYear={selectedYear} onSelect={handleYearSelect} />
          <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          // search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          
        />
          <View style={{ marginTop: Responsive.heightPx(5) }}>
            <AppButton
              label="Save and continue"
              isImage={true}
              onPress={() => RegisterPress()}
            />
          </View>

          <View style={styles.footerstyle}>
            <Image
              style={styles.logoview}
              resizeMode="contain" source={Images.RukkorLogo} />
          </View>

        </View>
        {/* <Modal 
        style={{height:Responsive.heightPx(50)}}
        visible={modalVisible} transparent animationType="slide">
          <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffff' }}>
            {years.map((year) => (
              <TouchableOpacity key={year} onPress={() => handleYearSelect(year)}>
                <Text style={{ color: 'red' }}>{year}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={() => toggleModal()}>
              <Text style={{ color: 'red' }}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal> */}

      </AppScrollview>
    </AppContainer>
  );
};

export default CareToShareScreen;
