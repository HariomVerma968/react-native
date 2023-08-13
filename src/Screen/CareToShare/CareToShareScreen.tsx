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
import { useSelector, useDispatch } from 'react-redux';
import { getemailId } from '../../Store/actions/commonActions';
import { useTranslation } from 'react-i18next';
interface CareToShareScreenProps {
  navigation?: any;
  text?: any;
}

const loc_global: any = global;
const CareToShareScreen = (props) => {
  const { t, i18n } = useTranslation();
  const { navigation } = props;
  const refRBSheet: any = useRef();
  const [language, setLanguage] = React.useState('')
  const [imagepath, setIMagespath] = React.useState(null);
  const [roll, setroll] = React.useState("");
  const [mobilenum, setmobilenum] = useState("");
  const [LastName, setLastName] = useState("");
  const [Firstname, setFirstname] = useState("");
  const [workdo, setworkdo] = useState("");
  const [deviceid, setdeviceid] = useState("");
  const [eyshow, setEyeshow] = useState(true);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [month, setmonth] = useState("02");
  const [days, setDays] = useState([]);

  const ChosesLang = useSelector(state => state.data.getemailId);
  const langue = ChosesLang.ChoseLang
  console.log("k....//.../", langue)

  const IdType = useSelector(state => state.data.getemailId);
  const profileType = IdType.aliasId

  useEffect(() => {
    const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    const daysArray = Array.from({ length: daysInMonth }, (_, index) => index + 1);
    setDays(daysArray);
  }, [selectedYear, selectedMonth]);


  const [modalVisible, setModalVisible] = useState(false);
  const [year, setYear] = useState("1999");
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, index) => currentYear - index);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };


  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleYearSelect = (year) => {
    setSelectedYear(year);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.modalstyle}
      onPress={() => { handleYearSelect(item), setYear(item), setModalVisible(false) }}>
      <Text style={styles.modaltext}>{item}</Text>
    </TouchableOpacity>
  );


  const months = [
    '01', '02', '03', '04', '05', '06',
    '07', '08', '09', '10', '11', '12'
  ];

  const [monthmodalVisible, setmonthmodalVisible] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const monthtoggleModal = () => {
    setmonthmodalVisible(!monthmodalVisible);
  };

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
    monthtoggleModal();
  };

  const monthsrenderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.modalstyle}
      onPress={() => { handleMonthSelect(item), setmonth(item), setmonthmodalVisible(false) }}>
      <Text style={styles.modaltext}>{item}</Text>
    </TouchableOpacity>
  );


  const [DatemodalVisible, setDatemodalVisible] = useState(false);
  const [selectedDate, setselectedDate] = useState(null);
  const [pickDate, setpickDate] = useState("15");
  const datetoggleModal = () => {
    setDatemodalVisible(!DatemodalVisible);
  };

  const handleDaySelect = (day: any) => {
    setselectedDate(new Date(selectedYear, selectedMonth, day));
    datetoggleModal();
  };

  const daterenderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.modalstyle}
      onPress={() => { handleDaySelect(item), setDatemodalVisible(false), setpickDate(item) }}>
      <Text style={styles.modaltext}>{item}</Text>
    </TouchableOpacity>
  );

  // This  is CreToSahare Post API's
  const CreToSahare = () => {
    if (!workdo) {
      Utility.showDangerToast("Please enter your work_place");
      return false;
    }
    if (!roll) {
      return Utility.showDangerToast("Please enter your roll");
    }


    const payload1 = {
      profile: profileType,
      work_place: workdo,
      work_role: roll,
      dob: year + month + pickDate,
      language: langue,
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
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={{ width: Responsive.widthPx(20), }}>
              <Image
                resizeMode="contain" source={Images.Backicon} />
            </View>
          </TouchableOpacity>
          <View style={{ width: Responsive.widthPx(50), alignItems: 'center' }}>
            <Text style={styles.textstyle}>{t('Care to share?')}</Text>
          </View>
        </View>

        <View style={styles.discrptionview}>
          <Text style={{ color: "#000" }}>{t('Care to sharedescription')}</Text>
        </View>
        <View style={styles.main_container}>
          <View style={styles.text_Inpute_conatainer}>
            <View style={styles.emailstyle}>
              <Text
                style={{ color: "#000", marginTop: Responsive.heightPx(2) }}
              >
                {t('Where do you work?')}
              </Text>
            </View>
            <View style={styles.emailtextstyle}>
              <AppTextInput
                caremob={true}
                value={workdo}
                // keyboardType={"email-address"}
                onChangeText={(workdo: any) => {
                  setworkdo(workdo);
                }}
                placeHolder={t('work place')}
              // placeHolder={t('Enter your e-mail')}
              />
            </View>
            <View style={styles.emailstyle}>
              <Text
                style={{ color: "#000", marginTop: Responsive.heightPx(2) }}
              >
                {t('What’s your title/role?')}
              </Text>
            </View>
            <View style={styles.emailtextstyle}>
              <AppTextInput
                rollIcon={true}
                value={roll}
                // keyboardType={"email-address"}
                onChangeText={(roll: any) => {
                  setroll(roll);
                }}

                placeHolder={t('Enter Your role')}
              // placeHolder={t('Enter your e-mail')}
              />
            </View>
            <View style={styles.emailstyle}>
              <Text
                style={{ color: "#000", marginTop: Responsive.heightPx(2) }}
              >
                {t('When’s your birthday?')}
              </Text>
            </View>
            <View style={styles.yearmontview}>
              <View style={{}}>
                <Text style={styles.textyear}>{t('Year')}</Text>
                <View style={styles.pickselectview}>
                  <TouchableOpacity
                    style={styles.pickertouch}
                    onPress={() => toggleModal()}>
                    <Text style={styles.textyear}>{year}</Text>
                  </TouchableOpacity>
                  <Image
                    source={Images.downarrow}
                  />
                </View>
              </View>

              <View style={{}}>
                <Text style={styles.textyear}>{t('Month')}</Text>
                <View style={styles.pickselectview}>
                  <TouchableOpacity
                    style={styles.pickertouch}
                    onPress={() => monthtoggleModal()}>
                    <Text style={styles.textyear}>{month}</Text>
                  </TouchableOpacity>
                  <Image
                    source={Images.downarrow}
                  />
                </View>
              </View>
              <View style={{}}>
                <Text style={styles.textyear}>{t('Day')}</Text>
                <View style={styles.pickselectview}>
                  <TouchableOpacity
                    style={styles.pickertouch}
                    onPress={() => datetoggleModal()}>
                    <Text style={styles.textyear}>{pickDate}</Text>
                  </TouchableOpacity>
                  <Image
                    source={Images.downarrow}
                  />
                </View>
              </View>
            </View>
            <Modal
              visible={modalVisible}
              transparent={true}
              animationType="slide"
              onRequestClose={() => toggleModal()}>
              <View style={styles.modalconatiner}>
                <View style={styles.modalconatier2}>
                  <View>
                    <FlatList
                      data={years}
                      renderItem={renderItem}
                      keyExtractor={(item) => item.toString()}
                    />
                  </View>
                </View>
              </View>
            </Modal>



            <Modal
              visible={monthmodalVisible}
              transparent
              animationType="slide"
              onRequestClose={() => monthtoggleModal()}>
              <View style={styles.modalconatiner}>
                <View style={styles.modalconatier2}>
                  <FlatList
                    data={months}
                    renderItem={monthsrenderItem}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </View>
              </View>
            </Modal>





            <Modal
              visible={DatemodalVisible}
              transparent
              animationType="slide"
              onRequestClose={() => datetoggleModal()}>
              <View style={styles.modalconatiner}>
                <View style={styles.modalconatier2}>
                  <FlatList
                    data={days}
                    renderItem={daterenderItem}
                    keyExtractor={(item) => item.toString()}
                  />
                </View>
              </View>
            </Modal>



            {/* ///////////////////////////////////////////////////////////////////////////////// */}


          </View>
          <View style={{ marginTop: Responsive.heightPx(5) }}>
            <AppButton
              label={t('Save and continue')}
              isImage={true}
              onPress={() => CreToSahare()}
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

export default CareToShareScreen;
