// import React, { useEffect, useState } from "react";
// import { View, StyleSheet } from "react-native";
// import { Loader, Storage } from "../Helper";
// import Routes from "./Routes";
// import FlashMessage from "react-native-flash-message";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";

// const loc_global: any = global;

// const RootComponent = (props: any) => {
//   const { navigation, route } = props;

//   const {t, i18n} = props?.screenProps; 

//   const [isLogin, setIsLogin] = useState(false);
//   const [isLoader, setLoader] = useState(true);
//   // const { commonActions } = props;

//   useEffect(() => {
//     checkSession();
//   }, []);

//   const checkSession = async () => {
//     setLoader(true);
//     Loader.isLoading(true);
//     Storage.getUserData()
//       .then((response) => {
//         console.log("root component££££", response);
//         if (response) {
//           // commonActions.updateIsLogin(true);
//           // commonActions.MAHESH("yadav");

//           // loc_global.userData = response
//           setIsLogin(true);
//         } else {
//           setIsLogin(false);
//         }
//       })
//       .finally(() => {
//         setLoader(false);
//         Loader.isLoading(false);
//       });
//   };

//   return (
//     <View style={styles.container}>
//       {!isLoader && <Routes isLogin={isLogin} />}
//       {/* <Routes /> */}
//       <FlashMessage position="top" />
//     </View>
//   );
// };

// // function mapDispatchToProps(dispatch: any) {
// //   return {
// //     commonActions: bindActionCreators(Const.commonActions, dispatch),
// //   };
// // }
// // export default connect(null, mapDispatchToProps)(RootComponent);

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //   },
// // });

// export default RootComponent

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   }
// })






















import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import {  Loader, Storage } from "../Helper";
import Routes from "./Routes";
import FlashMessage from "react-native-flash-message";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const loc_global: any = global;

const RootComponent = (props: any) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoader, setLoader] = useState(true);
  const { commonActions } = props;

  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    setLoader(true);
    Loader.isLoading(true);
    Storage.getUserData()
      .then((response) => {
        console.log("root component££££", response);
        if (response) {
          // commonActions.updateIsLogin(true);
          // commonActions.MAHESH("yadav");

          // loc_global.userData = response
          setIsLogin(true);
        } else {
          setIsLogin(false);
        }
      })
      .finally(() => {
        setLoader(false);
        Loader.isLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      {!isLoader && <Routes isLogin={isLogin} />}
      <FlashMessage position="top" />
    </View>
  );
};

// function mapDispatchToProps(dispatch: any) {
//   return {
//     commonActions: bindActionCreators(Const.commonActions, dispatch),
//   };
// }
// export default connect(null, mapDispatchToProps)(RootComponent);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

export default RootComponent

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
