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
import Axios from "axios";
import { useSelector } from 'react-redux';
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
  const data = useSelector(state => state.data.getemailId);

  const { navigation, route } = props;
  const [realId, setrealId] = React.useState(false)
  const [alias, setAlias] = React.useState(false)
  const [btn, setbtn] = React.useState(0)
  const [wishlisthart, setwishlist] = React.useState(false)
  const [selectedView, setSelectedView] = useState(null);
  // const inputText = useSelector(state => state.textInput);
  // ########### API 1 ##############################################
  React.useEffect(() => {
    const backScreen = navigation.addListener("focus", () => {
    });
    return backScreen;
  }, []);




  return (
    <AppContainer>
      <AppScrollview>
        <View style={styles.container}>
          <View style={styles.setupview}>
            <Text style={styles.setuptextstyle}>Set up your profiles</Text>
            <Text style={{ color: "#000", marginTop: Responsive.heightPx(1) }}>{data}</Text>
          </View>

          <View style={styles.descriptionbiew}>
            <Text style={styles.textstyle}>A Rukkor account is associated with two profiles, one which we call Real ID and one which is your Alias. You choose in which settings you wish to expose your true identity and in which you wish to use an alias.</Text>
          </View>
          <TouchableOpacity
            onPress={() => setSelectedView(1)}
          >
            < View style={[
              styles.reslidview,
              selectedView === 1 ? styles.reslidview1 : null,
            ]}>
              <View>
                <Text style={styles.setuptextstyle}>Real ID</Text>
                <Image
                  style={styles.imgstyle}
                  source={Images.realidphoto}
                />
              </View>
              <View style={styles.realidstyle}>
                <Text style={styles.textstyle}>With Real ID you can disclose your personal details like name, phone number, birthday, e-mail and more. Use your Real ID when interacting with trusted family, friends and colleagues.</Text>
                {/* <Text style={{color:'red'}}>Text from Screen A: {inputText}</Text> */}
              </View>
            </View>
          </TouchableOpacity>


          <TouchableOpacity

            onPress={() => setSelectedView(2)}
          >
            <View style={[
              styles.reslidview,
              selectedView === 2 ? styles.reslidview1 : null,
            ]}>
              <View>
                <Text style={styles.setuptextstyle}>Alias</Text>
                <Image
                  style={styles.imgstyle}
                  source={Images.Alis}
                />
              </View>
              <View style={styles.realidstyle}>
                <Text style={styles.textstyle}>Using your Alias you can choose an additional @alias with which you can join Spaces and interact with other users in communities where you’re not comfortable sharing your personal details.</Text>
              </View>
            </View>
            {/* :
            <View style={styles.reslidview1}>
            <View>
              <Text style={styles.setuptextstyle}>Alias</Text>
              <Image
                style={styles.imgstyle}
                source={Images.Alis}
              />
            </View>
            <View style={styles.realidstyle}>
              <Text style={styles.textstyle}>Using your Alias you can choose an additional @alias with which you can join Spaces and interact with other users in communities where you’re not comfortable sharing your personal details.</Text>
            </View>
          </View>
          // null
            } */}

          </TouchableOpacity>


          <View style={{ marginTop: Responsive.heightPx(5) }}>
            <AppButton
              label="Next"
              isImage={true}
              onPress={() => navigation.navigate(Screen.RealDScreen)}
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

















// import React from 'react';
// import { View, Text } from 'react-native';
// import { useSelector } from 'react-redux';


// const SetUpYourProfilesScreen = () => {
//   const inputText = useSelector(state => state.textInput);

//   return (
//     <View>
//       <Text style={{color:'red'}}>Text from Screen A: {inputText}</Text>
//     </View>
//   );
// };

// export default SetUpYourProfilesScreen;
