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
import styles from "./HomeScreenstyle";
import { AppScrollview, AppContainer } from "../../Component";
import { FlatList } from "react-native-gesture-handler";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Modal } from "react-native";
import Video from "react-native-video";
import MediaControls, { PLAYER_STATES } from "react-native-media-controls";
import { ApiEndPoints, ApiServices } from "../../NetworkCall";
import Axios from "axios";
interface HomeScreenProps {
  dummyname: any;
  navigation?: any;
  route?: any;
  text?: any;
  commonActions?: any;
}
const imgpath = ApiEndPoints.imagepath;
const loc_global: any = global;

const HomeScreen = (props: HomeScreenProps) => {
  // console.log("QQQQQQQQQQQ",props);

  const { navigation, route } = props;
  const [isPlaying, setIsPlaying] = useState(false);
  const [socialname, setsocialname] = React.useState(
    route?.params?.socialusername
  );
  const [popularacedmicprogram, setpopularacedmicprogram] = useState([]);
  const [CoursescategoryData, setCoursescategoryData] = useState([]);
  const [TeacherData, setTeacherData] = useState([]);
  const [visibleItems, setVisibleItems] = useState(5);
  const [profile, setProfile] = React.useState("");
  // console.log("$$$$$$$$###########33355599ttt",(CoursesData))

  // ########### API 1 ##############################################
  React.useEffect(() => {
    homecatdata();
    Profile();
    const backScreen = navigation.addListener("focus", () => {
      Profile();
      homecatdata();
    });
    return backScreen;
  }, []);

  //////////////////////////////////////////////////////////////////////

  const homecatdata = () => {
    Loader.isLoading(true);
    console.log("url found data", ApiEndPoints.HomeScreenData);
    // console.log(".....Url data.>>>", ApiEndPoints.language_list)
    ApiServices("get", false, ApiEndPoints.HomeScreenData)
      .then((response: any) => {
        // console.log(
        //   "TTT88886666",
        //   JSON.stringify(response.data.result.program_categories)
        // );
        if (response.statusCode == 200) {
          console.log("lfnvln", response.data.result.academic_program);
          setCoursescategoryData(response.data.result.academic_program);
          setpopularacedmicprogram(response.data.result.all_courses);
          setTeacherData(response.data.result.teachers);
          // console.log(
          //   "ppppppp22ddd",
          //   JSON.stringify(response.data.result)
          // );
        } else {
          // console.log("j,k,....", response)
        }
      })
      .finally(() => {
        Loader.isLoading(false);
      });
  };

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

  // #########################################################
  const videoRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [watchpreviousclass, setwatchpreviousclass] = React.useState([
    {
      text: "Best Sell",
      text2: "Take care your home plants! ",
      text3: "Sarrah Maningger",
      img: Images.home3,
    },
    {
      text: "NEW",
      text2: "Grow your creative business with Insta!",
      text3: "Samantha Rossye",
      img: Images.home4,
    },
    {
      text: "Best Sell",
      text2: "Take care your home plants! ",
      text3: "Sarrah Maningger",
      img: Images.home3,
    },
    {
      text: "NEW",
      text2: "Grow your creative business with Insta!",
      text3: "Samantha Rossye",
      img: Images.home4,
    },
  ]);

  const [expertteachers, setexpertteachers] = React.useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);
  const [PopularAcadmic, setPopularAcadmic] = React.useState([
    {
      text: "HOT",
      text2: "HTML, CSS for noob and nerds!",
      text3: "Sayef Mamud, PixelCo",
      img: Images.home1,
    },
    {
      text: "NEW",
      text2: "Modern interior desgn for beginner! ",
      text3: "Sayef Mamud, PixelCo",
      img: Images.home2,
    },
    {
      text: "HOT",
      text2: "HTML, CSS for noob and nerds!",
      text3: "Sayef Mamud, PixelCo",
      img: Images.home1,
    },
    {
      text: "NEW",
      text2: "Modern interior desgn for beginner! ",
      text3: "Sayef Mamud, PixelCo",
      img: Images.home2,
    },
  ]);
  const [watchinhcategory, setwatchinhcategory] = React.useState([
    {
      text: "HOT",
      text2: "HTML, CSS for noob and nerds!",
      text3: "Sayef Mamud, PixelCo",
      img: Images.home1,
    },
    {
      text: "NEW",
      text2: "Modern interior desgn for beginner! ",
      text3: "Sayef Mamud, PixelCo",
      img: Images.home2,
    },
    {
      text: "HOT",
      text2: "HTML, CSS for noob and nerds!",
      text3: "Sayef Mamud, PixelCo",
      img: Images.home1,
    },
    {
      text: "NEW",
      text2: "Modern interior desgn for beginner! ",
      text3: "Sayef Mamud, PixelCo",
      img: Images.home2,
    },
    {
      text: "HOT",
      text2: "HTML, CSS for noob and nerds!",
      text3: "Sayef Mamud, PixelCo",
      img: Images.home1,
    },
    {
      text: "NEW",
      text2: "Modern interior desgn for beginner! ",
      text3: "Sayef Mamud, PixelCo",
      img: Images.home2,
    },
    {
      text: "HOT",
      text2: "HTML, CSS for noob and nerds!",
      text3: "Sayef Mamud, PixelCo",
      img: Images.home1,
    },
    {
      text: "NEW",
      text2: "Modern interior desgn for beginner! ",
      text3: "Sayef Mamud, PixelCo",
      img: Images.home2,
    },
  ]);
  const [teacher, setteacher] = React.useState([
    {
      text2: "Sayef Mahmud",
      text3: "Programmer",
      img: Images.boyhome,
    },
    {
      text2: "Sarrah Morry",
      text3: "Creative artist",
      img: Images.girlhome,
    },
    {
      text2: "Sayef Mahmud",
      text3: "Programmer",
      img: Images.boyhome,
    },
    {
      text2: "Sarrah Morry",
      text3: "Creative artist",
      img: Images.girlhome,
    },
    {
      text2: "Sayef Mahmud",
      text3: "Programmer",
      img: Images.boyhome,
    },
    {
      text2: "Sarrah Morry",
      text3: "Creative artist",
      img: Images.girlhome,
    },
  ]);

  const expertteachersrenderItem = ({ item, index }) => {
    return (
      <View
        style={{
          marginLeft: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: Responsive.widthPx(25),
            height: Responsive.heightPx(12),
            borderRadius: Responsive.widthPx(25),
          }}
        >
          <Image
            source={{ uri: `${imgpath}${item.image}` }}
            style={{
              height: Responsive.widthPx(25),
              width: Responsive.widthPx(25),
              borderRadius: Responsive.widthPx(2),
            }}
          />
        </View>
        <View style={{ marginTop: Responsive.heightPx(2.5) }}>
          <Text style={{ color: "#000" }}>{item.name}</Text>
        </View>
      </View>
    );
  };
  const watchpreviousclassrenderItem = ({ item, index }) => (
    <View style={{ marginLeft: 10, justifyContent: "center" }}>
      <View>
        <ImageBackground
          imageStyle={{ borderRadius: 2 }}
          resizeMode="contain"
          style={{
            height: Responsive.heightPx(20),
            width: Responsive.widthPx(50),
          }}
          source={item.img}
        >
          <View style={styles.backgrounBtn}>
            <Text
              style={{
                fontSize: 12,
                width: Responsive.widthPx(30),
                textAlign: "center",
                padding: 3,
              }}
            >
              {item.text}
            </Text>
          </View>
          <View
            style={{
              height: Responsive.heightPx(15),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image resizeMode="contain" source={Images.playbtn} />
          </View>
        </ImageBackground>
        <View style={{ marginTop: 8, width: Responsive.widthPx(50) }}>
          <Text style={{ color: "#000", fontSize: 15, fontWeight: "500" }}>
            {item.text2}
          </Text>
        </View>
        <View style={{ width: Responsive.widthPx(50) }}>
          <Text style={{ color: "#000", fontSize: 10 }}>{item.text3}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View>
            <Text style={{ color: "#000" }}>4.0</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              resizeMode="contain"
              style={styles.starimgstyle}
              source={Images.star}
            />
            <Image
              style={styles.starimgstyle}
              resizeMode="contain"
              source={Images.star}
            />
            <Image
              style={styles.starimgstyle}
              resizeMode="contain"
              source={Images.star}
            />
            <Image
              resizeMode="contain"
              style={styles.starimgstyle}
              source={Images.star}
            />
            <Image
              resizeMode="contain"
              style={styles.starimgstyle}
              source={Images.star}
            />
            <Image
              resizeMode="contain"
              style={styles.starimgstyle}
              source={Images.star}
            />
          </View>
        </View>
      </View>
    </View>
  );

  const PopularAcadmicrenderItem = ({ item, index }) => (
    <View
      style={{
        marginLeft: 10,
        alignItems: "center",
        backgroundColor: "#fff",
        height: Responsive.heightPx(20),
        width: Responsive.widthPx(35),
        marginRight: 20,
        shadowColor: "#000",
        borderRadius: 15,
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 5,
      }}
    >
      <View style={{ marginTop: Responsive.heightPx(2) }}>
        <Image source={Images.popularacedmic} />
      </View>
      <View
        style={{
          marginTop: Responsive.heightPx(2),
          width: Responsive.widthPx(30),
          padding: 3,
        }}
      >
        <Text numberOfLines={2} style={{ color: "#000", fontSize: 10 }}>
          {item.course_title}
        </Text>
      </View>
      <View
        style={{
          width: Responsive.widthPx(30),
          padding: 3,
          flexDirection: "row",
        }}
      >
        <Text style={{ color: "#000", fontSize: 10 }}>Join Now</Text>
        <Image
          resizeMode="contain"
          style={{
            width: Responsive.widthPx(15),
            height: Responsive.heightPx(2),
          }}
          source={Images.rightarrow}
        />
      </View>
    </View>
  );
  const watchinhrenderItem = ({ item, index }) => (
    <View style={{ marginLeft: 10, justifyContent: "center" }}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate(Screen.Videoscreen)}
        >
          <ImageBackground
            imageStyle={{ borderRadius: 2 }}
            resizeMode="contain"
            style={{
              height: Responsive.heightPx(20),
              width: Responsive.widthPx(50),
            }}
            source={item.img}
          >
            <View style={styles.backgrounBtn}>
              <Text>{item.text}</Text>
            </View>
            <View
              style={{
                height: Responsive.heightPx(15),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image resizeMode="contain" source={Images.playbtn} />
            </View>
          </ImageBackground>
        </TouchableOpacity>

        {/* <Video
          ref={videoRef}
          source={{ uri: videoUrl }}
          Control
          // paused={!isPlaying}
          resizeMode="cover"
          style={{ width: '100%', height: 200 }}
        /> */}

        {/* 
        <Video
          onEnd={onEnd}
          onLoad={onLoad}
          onLoadStart={onLoadStart}
          onProgress={onProgress}
          paused={paused}
          ref={videoPlayer}
          resizeMode={screenType}
          onFullScreen={isFullScreen}
          source={{
            uri:
              'https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4',
          }}
          // style={styles.mediaPlayer}
          style={{ width: '100%', height: 100 }}
          volume={10}
        />
        <MediaControls
          duration={duration}
          isLoading={isLoading}
          mainColor="#333"
          onFullScreen={onFullScreen}
          onPaused={onPaused}
          onReplay={onReplay}
          onSeek={onSeek}
          onSeeking={onSeeking}
          playerState={playerState}
          progress={currentTime}
          toolbar={renderToolbar()}
        /> */}

        <View style={{ marginTop: 8, width: Responsive.widthPx(50) }}>
          <Text style={{ color: "#000", fontSize: 15, fontWeight: "500" }}>
            {item.text2}
          </Text>
        </View>
        {/* <View style={{ height: Responsive.heightPx(15), justifyContent: 'center', alignItems: 'center' }}>
          <Image
            resizeMode='contain'
            source={Images.playbtn}
          />
        </View> */}
        <View style={{ width: Responsive.widthPx(50) }}>
          <Text style={{ color: "#000", fontSize: 10 }}>{item.text3}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View>
            <Text style={{ color: "#000" }}>4.0</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              resizeMode="contain"
              style={styles.starimgstyle}
              source={Images.star}
            />
            <Image
              style={styles.starimgstyle}
              resizeMode="contain"
              source={Images.star}
            />
            <Image
              style={styles.starimgstyle}
              resizeMode="contain"
              source={Images.star}
            />
            <Image
              resizeMode="contain"
              style={styles.starimgstyle}
              source={Images.star}
            />
            <Image
              resizeMode="contain"
              style={styles.starimgstyle}
              source={Images.star}
            />
            <Image
              resizeMode="contain"
              style={styles.starimgstyle}
              source={Images.star}
            />
          </View>
        </View>
      </View>
    </View>
  );

  const teacherrenderItem = ({ item, index }) => (
    <View
      style={{
        marginLeft: 10,
        justifyContent: "center",
        height: Responsive.heightPx(25),
      }}
    >
      <View>
        <View style={{ height: Responsive.heightPx(20) }}>
          <Image
            resizeMode="stretch"
            style={{
              height: Responsive.heightPx(12),
              width: Responsive.widthPx(50),
              marginTop: Responsive.heightPx(8),
              borderRadius: 5,
            }}
            source={Images.techetbackground}
          />
          <View
            style={{
              height: Responsive.heightPx(33),
              position: "absolute",
              // width: Responsive.widthPx(79),
              alignItems: "flex-end",
              marginBottom: 25,
              justifyContent: "flex-start",
            }}
          >
            <Image
              style={{
                height: Responsive.heightPx(20),
                width: Responsive.widthPx(50),
              }}
              resizeMode="contain"
              source={item.img}
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 8,
            width: Responsive.widthPx(50),
            marginLeft: 10,
          }}
        >
          <Text style={{ color: "#000", fontSize: 15, fontWeight: "500" }}>
            {item.text2}
          </Text>
        </View>
        <View style={{ width: Responsive.widthPx(50), marginLeft: 10 }}>
          <Text style={{ color: "#000", fontSize: 10 }}>{item.text3}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {/* 
          <View>
            <Text style={{ color: '#000' }}>4.0</Text>
          </View> */}
          {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              resizeMode='contain'
              style={styles.starimgstyle}
              source={Images.star} />
            <Image
              style={styles.starimgstyle}
              resizeMode='contain'
              source={Images.star} />
            <Image
              style={styles.starimgstyle}

              resizeMode='contain'
              source={Images.star} />
            <Image
              resizeMode='contain'
              style={styles.starimgstyle}

              source={Images.star} />
            <Image
              resizeMode='contain'
              style={styles.starimgstyle}

              source={Images.star} />
            <Image
              resizeMode='contain'
              style={styles.starimgstyle}

              source={Images.star} />
          </View> */}
        </View>
      </View>
    </View>
  );

  const loadMoreItems = () => {
    setVisibleItems(watchinhcategory.length);
  };

  return (
    <AppContainer>
      <AppScrollview>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: Responsive.widthPx(90),
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <View>
              {/* <Text style={{ color: "#000", fontSize: 15, fontWeight: "500" }}>
                {socialname}
              </Text> */}
              <Text style={{ color: "#000", fontSize: 15, fontWeight: "500" }}>
                Hello {profile.name}
              </Text>
              <Text style={{ color: "#000" }}>
                What do you wanna learn today?
              </Text>
            </View>
            <TouchableOpacity>
              <View>
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
                  style={{ borderRadius: 20 }}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: Responsive.widthPx(90),
              height: Responsive.heightPx(6),
              backgroundColor: "#ffffff",
              alignSelf: "center",
              borderRadius: 10,
              flexDirection: "row",
              shadowColor: "#000",
              shadowOffset: {
                width: 20,
                height: 10,
              },
              shadowOpacity: 0.41,
              shadowRadius: 50,
              elevation: 5,
              marginTop: Responsive.heightPx(3),
            }}
          >
            <View
              style={{
                width: Responsive.widthPx(28),
                height: Responsive.heightPx(6),
                backgroundColor: Color.themcolor,
                alignItems: "center",
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  color: "#ffffff",
                  fontSize: 13,
                  marginLeft: Responsive.widthPx(1.5),
                }}
              >
                All Category
              </Text>
              <Image
                resizeMode="contain"
                style={styles.starimgstyle}
                source={Images.downarror}
              />
            </View>
            <View
              style={{
                width: Responsive.widthPx(60),
                height: Responsive.heightPx(6),
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <TextInput
                placeholder="Search basic maths, science.."
                cursorColor={Colors.themcolor}
                placeholderTextColor={"#000"}
                style={{
                  width: Responsive.widthPx(50),
                  color: "#000",
                  fontSize: Responsive.font(3.5),
                }}
              />
              <Image
                resizeMode="contain"
                style={{
                  width: Responsive.widthPx(5),
                  height: Responsive.heightPx(5),
                  marginTop: Responsive.heightPx(0.5),
                }}
                source={Images.Searchgreen}
              />
            </View>
          </View>

          {/* <View style={{ backgroundColor: '#FFF1F3', marginTop: Responsive.heightPx(5), alignItems: "center", width: Responsive.widthPx(90), borderRadius: 5, flexDirection: 'row', justifyContent: 'space-around' }}>
            <Text style={{ color: "#000" }}>Graphic illustration</Text>
            <TextInput
              placeholder='Graphic illustration'
              cursorColor={Color.themcolor}
              placeholderTextColor={'#000'}
              style={{ width: Responsive.widthPx(80), padding: Responsive.heightPx(1), color: "#000" }}
            />
            <View>
              <Image
                resizeMode='contain'
                style={{ width: 20, height: 20, marginRight: 10 }}
                source={Images.searchblack} />
            </View>
          </View> */}

          <View style={{ marginTop: Responsive.heightPx(3) }}>
            <Image resizeMode={"contain"} source={Images.courseimg} />
          </View>

          <View style={styles.popularview}>
            <View style={{ width: Responsive.widthPx(50) }}>
              <Text style={{ fontSize: 20, color: "#000" }}>All Courses</Text>
            </View>
            <TouchableOpacity>
              <View
                style={{
                  height: Responsive.heightPx(4),
                  justifyContent: "flex-end",
                }}
              >
                <Text style={styles.seeallstyle}>see more</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* ******************** map *************************************************      */}
          {/* {
       CoursesData.map((user)=>{
         return(
          <View style={{flexDirection:'row',justifyContent:"space-evenly"}}> 
           <View style={[styles.categortabyview,{margin:10}]}>
            <TouchableOpacity >
             <Text style={{flexDirection:'row',justifyContent:'space-evenly'}}>{user.name}</Text>
            </TouchableOpacity>
             
          </View>
          </View>
         )
       })
     } */}

          <FlatList
            horizontal={true}
            data={CoursescategoryData}
            showsHorizontalScrollIndicator={false}
            renderItem={(value) => {
              return (
                <View
                  style={[
                    styles.categortabyview,
                    { margin: Responsive.widthPx(1) },
                  ]}
                >
                  <Text
                    style={{ color: "black", fontSize: Responsive.font(4) }}
                  >
                    {value.item.name}
                  </Text>
                </View>
              );
            }}
          />

          <View style={styles.popularview}>
            <View style={{ width: Responsive.widthPx(50) }}>
              <Text style={{ fontSize: 20, color: "#000" }}>
                Popular Acadmic Program
              </Text>
            </View>
            <TouchableOpacity>
              <View
                style={{
                  height: Responsive.heightPx(4),
                  justifyContent: "flex-end",
                }}
              >
                <Text style={styles.seeallstyle}>see more</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.hotallistview1}>
            <View>
              <FlatList
                horizontal
                data={popularacedmicprogram}
                renderItem={PopularAcadmicrenderItem}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>

          <View style={styles.popularview}>
            <View style={{ width: Responsive.widthPx(50) }}>
              <Text style={{ fontSize: 20, color: "#000" }}>
                Recommended for you
              </Text>
            </View>
            <TouchableOpacity>
              <View
                style={{
                  height: Responsive.heightPx(4),
                  justifyContent: "flex-end",
                }}
              >
                {visibleItems < watchinhcategory.length && (
                  <TouchableOpacity onPress={loadMoreItems}>
                    <Text style={styles.seeallstyle}>see more</Text>
                  </TouchableOpacity>
                )}
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: Responsive.widthPx(100),
              alignItems: "center",
              justifyContent: "center",
              marginTop: Responsive.heightPx(3),
              height: Responsive.heightPx(35),
              // flexDirection:'row'
            }}
          >
            <View>
              <FlatList
                horizontal
                data={watchinhcategory.slice(0, visibleItems)}
                renderItem={watchinhrenderItem}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>

          <View style={styles.freetryalbiew}>
            <View
              style={{
                width: Responsive.widthPx(45),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "#fff",
                  fontWeight: "500",
                  marginTop: Responsive.heightPx(3),
                }}
              >
                Best Government Exam Preparation Online test series
              </Text>
              <View
                style={{
                  borderWidth: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  width: Responsive.widthPx(25),
                  marginTop: 10,
                  padding: 10,
                  borderRadius: 10,
                  borderColor: "#fff",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#fff",
                    fontWeight: "500",
                  }}
                >
                  Join Now
                </Text>
              </View>
            </View>
            <View>
              <Image
                resizeMode="contain"
                style={{ width: Responsive.widthPx(40) }}
                source={Images.Hometemplent}
              />
            </View>
          </View>
          <View style={styles.popularview}>
            <View style={{ width: Responsive.widthPx(50) }}>
              <Text style={{ fontSize: 20, color: "#000" }}>
                Continue to watch previous class
              </Text>
            </View>
            <TouchableOpacity>
              <View
                style={{
                  height: Responsive.heightPx(4),
                  justifyContent: "flex-end",
                }}
              >
                <Text style={styles.seeallstyle}>see more</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.hotallistview}>
            <View>
              <FlatList
                horizontal
                data={watchpreviousclass}
                renderItem={watchpreviousclassrenderItem}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>
          <View style={styles.popularview}>
            <View style={{ width: Responsive.widthPx(50) }}>
              <Text style={{ fontSize: 20, color: "#000" }}>
                What others are watching in apps
              </Text>
            </View>
            <TouchableOpacity>
              <View
                style={{
                  height: Responsive.heightPx(4),
                  justifyContent: "flex-end",
                }}
              >
                <Text style={styles.seeallstyle}>see more</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.hotallistview}>
            <View>
              <FlatList
                horizontal
                data={watchpreviousclass}
                renderItem={watchpreviousclassrenderItem}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>

          <View style={styles.popularview}>
            <View style={{}}>
              <Text style={{ fontSize: 20, color: "#000" }}>
                Our Expert Teachers
              </Text>
            </View>
            <TouchableOpacity>
              <View
                style={{
                  height: Responsive.heightPx(4),
                  justifyContent: "flex-end",
                }}
              >
                <Text style={styles.seeallstyle}>see more</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.hotallistview1}>
            <View>
              <FlatList
                horizontal
                data={TeacherData}
                renderItem={expertteachersrenderItem}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>
        </View>

        <Modal
          animationIn="slideInLeft"
          animationOut="slideOutRight"
          animationInTiming={500000}
          animationOutTiming={7500}
          visible={modalVisible}
          transparent={true}
          animationType="fade"
          // useNativeDriver={true}
        >
          <View style={styles.Modal_conenair}>
            {/* <View style={styles.Modal_Top_heading_cont}> */}
            {/* <View style={{ width: Responsive.widthPx(100), alignItems: "center", justifyContent: "center" }}> */}
            {/* 
                                <View style={styles.hotallistview}>
                                    <View >
                                        <FlatList
                                            // horizontal
                                            data={radio}
                                            renderItem={triplistItem}
                                            keyExtractor={item => item.id}
                                        />
                                    </View>
                                </View> */}
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "red",
                // width: Responsive.widthPx(90),
                borderRadius: Responsive.widthPx(5),
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginVertical: Responsive.heightPx(2),
                  width: Responsive.widthPx(80),
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{
                    width: Responsive.widthPx(10),
                    height: Responsive.heightPx(5),
                  }}
                  source={Images.Searchgreen}
                />
                <TouchableOpacity onPress={() => {}}>
                  <View style={styles.btn1}>
                    <Text style={{ color: "#000", textAlign: "center" }}>
                      Your booking accepted successfully you can make payment
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <View style={styles.btn}>
                    <Text style={{ color: "#000", fontSize: 20 }}>OK</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </AppScrollview>
    </AppContainer>
  );
};

export default HomeScreen;
