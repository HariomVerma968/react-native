import * as React from 'react'
import { FlatList, TouchableOpacity, Text, View, StyleSheet, ImageBackground, Image } from 'react-native'
// import { Image } from 'react-native-elements/dist/image/Image'

import { Color, Fonts, Images, Responsive, Screen, Storage } from '../../Helper'
import { ApiEndPoints, ApiServices } from '../../NetworkCall'

const drawerList = [
  {
    key: Screen.HomeScreen,
    name: 'My Ride',
    img: Images.ride
  },
  {
    key: Screen.HomeScreen,
    name: 'Notification',
    img: Images.notification
  },
  {
    key: Screen.HomeScreen,
    name: 'Favorites',
    img: Images.drhart
  },
  {
    key: Screen.HomeScreen,
    name: 'About',
    img: Images.about
  },
  {
    key: Screen.HomeScreen,
    name: 'Supprt',
    img: Images.support
  },

]
const AppDrawer = ({ ...props }) => {
  const [profiledata, setProfiledata] = React.useState('')

  React.useEffect(() => {
    //  Loader.isLoading(false)
    // const abortController = new AbortController()
    // props.navigation.addListener('focus', () => {
    //   userinfo()
    // })
    // return () => {
    //   abortController.abort()
    // }
  }, [])

  const onPressDrawer = (key) => {
    props.navigation.push(key)
  }

  const renderItem = ({ item }) => {
    return (

      <>
        {/* {
        profiledata.is_provider == 1 ? */}
        {/* <TouchableOpacity style={styles.listContainer} onPress={() => { onPressDrawer(item.key) }}> */}
        <TouchableOpacity style={styles.listContainer} onPress={() => { }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <Image
              resizeMode='contain'
              style={{ width: 40, height: 30, tintColor: '#000' }} source={item.img} />
            <Text style={{ color: '#000' }}>{item.name}</Text>
          </View>
        </TouchableOpacity>
        {/* :
          // listHiden({item})

        item.name != 'All Requests' && item.name != 'My Requests' ?
          <TouchableOpacity style={styles.listContainer} onPress={() => { onPressDrawer(item.key) }}>
            <Text style={styles.textStyle}>{item.name}</Text>
          </TouchableOpacity>
        :
        null
        } */}
      </>

    )
  }

  const logout = () => {
    Storage.logout()
    //  console.log("Session out", stoageout)
    props.navigation.replace('LoginScreen')
  }

  return (
    // <ImageBackground source={Images.flag} >
    <View style={styles.container}>
      <View style={styles.viewline} />
      <View style={styles.profileDetails}>
        <View style={styles.profileNameview}>
          <View style={styles.imagenameView}>
            <View style={styles.imageView}>
              <Image source={Images.profile} style={styles.imageStyle} />
              {/* <Image source={{ uri: profiledata.profile_image }} style={styles.imageStyle} /> */}
            </View>
            <View>
              <Text style={styles.nameTitlestyle}>Kunar</Text>
              <Text style={styles.nameTitlestyle}>Kunar@gmail.com</Text>
            </View>
          </View>
        </View>
        <View style={{}}>
          <FlatList
            data={drawerList}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={(_, index) => `drawer${index}`}
          />
          {/* <TouchableOpacity
            style={styles.listContainer}
            onPress={() => props.navigation.navigate('EnquiryScreen', { userid: profiledata.id })}
          >
            <Text style={styles.textStyle}>Enquiry</Text>
          </TouchableOpacity> */}
          <View style={styles.logout}>
            <TouchableOpacity style={styles.logoutbutn} onPress={() => { }}>
              <Text style={{ color: '#000', fontSize: 20 }}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    // </ImageBackground>
  )
}

export default AppDrawer

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 15,
    backgroundColor: '#fff',
    width: Responsive.widthPx(50),
    borderTopRightRadius: 20,
    borderBottomEndRadius: 20,
    padding: Responsive.widthPx(2)
  },
  listContainer1: {
    backgroundColor: 'red'
  },
  container: {
    height: Responsive.heightPx(110),
    backgroundColor: "#242526",
  },
  profileDetails: {
    marginLeft: Responsive.widthPx(8),
    height: Responsive.widthPx(116)
  },
  viewline: {
    height: Responsive.widthPx(13)
  },
  profileNameview: {
    height: Responsive.widthPx(30),
    // backgroundColor: "#ffff",
    width: Responsive.widthPx(62),
    // borderTopRightRadius: 50,
    // borderBottomEndRadius: 50,
    // padding: Responsive.widthPx(2),
  },
  imageStyle: {
    width: Responsive.widthPx(20),
    height: Responsive.widthPx(20),
    borderRadius: 100
    // backgroundColor: "red"
  },
  imageView: {
    width: Responsive.widthPx(22)
  },
  imagenameView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  nameTitlestyle: {
    color: Color.white,
    fontFamily: Fonts.Poppins_SemiBold,
    fontSize: Responsive.font(4.5),

    width: Responsive.widthPx(40)
  },
  textStyle: {
    fontSize: Responsive.font(5.0),
    color: Color.balckshade2C,
    fontFamily: Fonts.Poppins_Medium
  },
  logout: {
    // backgroundColor: 'red',
    width: Responsive.widthPx(50),
    height: Responsive.heightPx(25),
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  logoutbutn: {
    backgroundColor: '#fff',
    width: Responsive.widthPx(30),
    alignItems: 'center',
    padding: Responsive.widthPx(3),
    borderRadius: Responsive.widthPx(2)
  },

})
