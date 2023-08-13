import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useRef, useState } from "react";
import {
  Responsive,
  Images,
  Color,
  Screen,
  Loader,
  Utility,
} from "../../Helper";
import styles from "./SetUpYourProfilesScreenstyle";
import { AppScrollview, AppContainer, AppButton } from "../../Component";
import { ApiEndPoints, ApiServices } from "../../NetworkCall";
import i18next, { languageResources } from '../../../services/i18next';
import { useTranslation } from 'react-i18next';
import languagesList from '../../../services/languagesList.json';
import { useSelector, useDispatch } from 'react-redux';
import { getemailId } from '../../Store/actions/commonActions';
interface SetUpYourProfilesScreenProps {
  dummyname: any;
  navigation?: any;
  route?: any;
  text?: any;
  commonActions?: any;
}
const imgpath = ApiEndPoints.imagepath;
const loc_global: any = global;

const SetUpYourProfilesScreen = (props: SetUpYourProfilesScreenProps) => {
  const { navigation, route } = props;
  const [realId, setrealId] = React.useState(false)
  const [aliasId, setaliasId] = React.useState("")
  const [selectedView, setSelectedView] = useState(null);
  const dispatch = useDispatch();
  const getEmailData = () => {
    dispatch(getemailId({ aliasId, realId }));
  };

  const UserEmail = useSelector(state => state.data.getemailId);
  const Email_Id = UserEmail.email
console.log("svdj,./..",Email_Id)

  // ########### API 1 ##############################################
  React.useEffect(() => {
    const backScreen = navigation.addListener("focus", () => {
    });
    return backScreen;
  }, []);

  const { t, i18n } = useTranslation();


  return (
    <AppContainer>
      <AppScrollview>
        <View style={styles.container}>
          <View style={styles.setupview}>
            <Text style={styles.setuptextstyle}>{t('Set up your profiles')}</Text>
          </View>

          <View style={styles.descriptionbiew}>
            <Text style={styles.textstyle}>{t('Rukkor description')}</Text>
          </View>
          <TouchableOpacity
            onPress={() => { setSelectedView(1), setrealId("real_id") }}
          >
            < View style={[
              styles.reslidview,
              selectedView === 1 ? styles.reslidview1 : null,
            ]}>
              <View>
                <Text style={styles.setuptextstyle}>{t('Real ID')}</Text>
                <Image
                  style={styles.imgstyle}
                  source={Images.realidphoto}
                />
              </View>
              <View style={styles.realidstyle}>
                <Text style={styles.textstyle}>{t('Real diescrpion')}</Text>
                {/* <Text style={{color:'red'}}>Text from Screen A: {inputText}</Text> */}
              </View>
            </View>
          </TouchableOpacity>


          <TouchableOpacity

            onPress={() => { setSelectedView(2), setaliasId("alias") }}
          >
            <View style={[
              styles.reslidview,
              selectedView === 2 ? styles.reslidview1 : null,
            ]}>
              <View>
                <Text style={styles.setuptextstyle}>{t('Alias')}</Text>
                <Image
                  style={styles.imgstyle}
                  source={Images.Alis}
                />
              </View>
              <View style={styles.realidstyle}>
                <Text style={styles.textstyle}>{t('Alias Descrption')}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={{ marginTop: Responsive.heightPx(5) }}>
            <AppButton
              label={t('Next')}
              isImage={true}
              onPress={() => { selectedView === 1 ? navigation.navigate(Screen.RealDScreen) : navigation.navigate(Screen.AliseScreen), getEmailData() }}
            />
          </View>

          <View style={styles.headerstyle}>
            <Image
              style={{ width: Responsive.widthPx(20), height: Responsive.heightPx(8), marginTop: Responsive.heightPx(3) }}
              resizeMode="contain" source={Images.RukkorLogo} />
          </View>

        </View>
      </AppScrollview >
    </AppContainer >
  );
};

export default SetUpYourProfilesScreen;
