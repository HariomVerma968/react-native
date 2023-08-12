import React, { useEffect, useState } from 'react'
import { TouchableOpacity, Text, View, StyleSheet, SafeAreaView, KeyboardAvoidingView, Image } from 'react-native'
import _ from 'lodash'
import { Color, Fonts, Images, Responsive, Screen } from '../../Helper'
// import AppShadow from'''
import { SvgIcon } from '../../Component/SvgIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'

// var store = AsyncStorage.getItem("key");



const AppBottomTab = ({ props }) => {
  const { navigation } = props
  const [store, setStore] = useState()
  useEffect(() => {
    storege()
  }, [])

  const storege = async () => {
    const usertype = await AsyncStorage.getItem("key")
    console.log("AsyncStorage.fgnfgn,,..", usertype)
    setStore(usertype)
  }
  const tabArray = [

    {
      key: Screen.HomeScreen,
      name: 'Home',
      icon: Images.inactiveHome,
      active_icon: Images.activehome,
      color: Color.blackshade22
    },
    {
      key: Screen.Mylearning,
      name: 'My learning',
      icon: Images.learning,
      active_icon: Images.activelearning,
      color: Color.blackshade22
    },
    {
      key: Screen.SearchScreen,
      name: 'Search',
      icon: Images.searchblack,
      active_icon: Images.activesearch,
      color: Color.blackshade22
    },
    {
      key: Screen.Wishlist,
      name: 'Wishlist',
      icon: Images.heart,
      active_icon: Images.activehart,
      color: Color.blackshade22
    },

    {
      key: store == "teacher" ? Screen.TeacherProfile : Screen.ProfileScreen,
      name: 'Account',
      icon: Images.inactiveuser,
      active_icon: Images.activeusericon,
      color: Color.pinkshade5
    }
  ]



  console.log("AsyncStorage.,./,/.", store)
  const onPressDrawer = (key) => {
    props?.navigation?.jumpTo(key)
  }


  return (
    // <AppShadow container={styles.shadow}>

    <View style={styles.container}>
      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', }}>
          {_.map(tabArray, (item, index) => {
            const isFocused = props.state.index === index
            return (
              <>
                <KeyboardAvoidingView
                  keyboardVerticalOffset={50}
                  enabled
                  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                  style={{ flexGrow: 1 }}
                >
                  <TouchableOpacity style={styles.container1} onPress={() => { onPressDrawer(item.key), console.log("item.key..", item.key) }} key={`tab-${index}`} >
                    <View style={styles.imageView}>
                      {item.name == 'Search' ?
                        <View style={{
                          position: 'relative',
                          flexDirection: 'column',
                          alignItems: 'center',
                          left: 0,
                          right: 10,
                          bottom: 35,
                          backgroundColor: '#B8B8D2',
                          width: Responsive.widthPx(17),
                          borderRadius: Responsive.widthPx(15),
                          height: Responsive.heightPx(8),
                          justifyContent: 'center'
                        }}>
                          <Image
                            source={isFocused ? item.active_icon : item.icon}
                            style={styles.personImage}
                            resizeMode="contain"
                          />
                        </View>
                        :
                        <Image
                          source={isFocused ? item.active_icon : item.icon}
                          style={styles.personImage}
                          resizeMode="contain"
                        />
                      }
                    </View>
                    <View style={{ marginTop: Responsive.heightPx(1) }} />
                    {item.name == 'New Event' ?
                      <Text style={[styles.chatTextone, { color: isFocused ? Color.themcolor : "black" }]}>{item.name} </Text>
                      :
                      <Text style={[styles.chatText, { color: isFocused ? Color.themcolor : "black" }]}>{item.name}</Text>
                    }
                  </TouchableOpacity>
                </KeyboardAvoidingView>
              </>
            )
          })}
        </View>
      </View>
      <SafeAreaView style={styles.backgroundColor} />
    </View>


  )
}

export default AppBottomTab

const styles = StyleSheet.create({
  shadow: {
    shadowOpacity: 0.05
  },
  backgroundColor: {
    backgroundColor: Color.white
  },
  container: {
    backgroundColor: Color.white,
    height: Responsive.heightPx(8),
    shadowColor: "#000",
    shadowOffset: {
      width: 20,
      height: 10,
    },
    shadowOpacity: 0.41,
    shadowRadius: 50,
    elevation: 5,
  },
  container1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
  },
  chatText: {
    fontSize: Responsive.font(3.2),
    fontFamily: Fonts.Rubik_Regular,
    padding: 2,
    color: "#000000",
    marginTop: 2,
  },
  chatTextone: {
    fontSize: Responsive.font(3.2),
    fontFamily: Fonts.Rubik_Regular,
    color: Color.blackshade22,
    // marginTop: 2
    bottom: 10
  },
  imageView: {
    height: Responsive.widthPx(10),
    alignItems: 'center',
    paddingTop: 12,
  },
  personImage: {
    width: Responsive.widthPx(6),
    height: Responsive.heightPx(6)
  }
})

