import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialBasicFooter from "../components/MaterialBasicFooter";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <Text style={styles.myProfile}>My Profile</Text>
          <View style={styles.imageRow}>
            <Image
              source={require("../assets/images/cat.jpg")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <View style={styles.helloColumn}>
              <Text style={styles.hello}>Hello</Text>
              <Text style={styles.mestanMestanov}>Mestan Mestanov</Text>
            </View>
            <MaterialCommunityIconsIcon
              name="circle-edit-outline"
              style={styles.icon7}
            ></MaterialCommunityIconsIcon>
          </View>
        </View>
        <View style={styles.rect2}>
          <View style={styles.rect3Row}>
            <View style={styles.rect3}>
              <SimpleLineIconsIcon
                name="power"
                style={styles.icon}
              ></SimpleLineIconsIcon>
            </View>
            <View style={styles.rect4}>
              <FeatherIcon name="unlock" style={styles.icon2}></FeatherIcon>
            </View>
            <View style={styles.rect5}>
              <SimpleLineIconsIcon
                name="key"
                style={styles.icon3}
              ></SimpleLineIconsIcon>
            </View>
          </View>
          <View style={styles.offEnergyRow}>
            <Text style={styles.offEnergy}>Off energy</Text>
            <Text style={styles.leftHome}>Left home</Text>
            <Text style={styles.comeHome}>Come home</Text>
          </View>
        </View>
      </View>
      <View style={styles.rect8}>
        <View style={styles.myHomeRow}>
          <Text style={styles.myHome}>My Home</Text>
          <IoniconsIcon
            name="ios-arrow-forward"
            style={styles.icon4}
          ></IoniconsIcon>
        </View>
      </View>
      <View style={styles.rect9}>
        <View style={styles.myOrdersRow}>
          <Text style={styles.myOrders}>My Orders</Text>
          <IoniconsIcon
            name="ios-arrow-forward"
            style={styles.icon5}
          ></IoniconsIcon>
        </View>
      </View>
      <View style={styles.rect10}>
        <View style={styles.changePassword2Row}>
          <Text style={styles.changePassword2}>Change Password</Text>
          <IoniconsIcon
            name="ios-arrow-forward"
            style={styles.icon6}
          ></IoniconsIcon>
        </View>
      </View>
      <MaterialBasicFooter
        style={styles.materialBasicFooter}
      ></MaterialBasicFooter>
      <View style={styles.rect11}>
        <View style={styles.support3Row}>
          <Text style={styles.support3}>Support</Text>
          <IoniconsIcon
            name="ios-arrow-forward"
            style={styles.icon8}
          ></IoniconsIcon>
        </View>
      </View>
      <View style={styles.rect12}>
        <View style={styles.signOutRow}>
          <Text style={styles.signOut}>Sign Out</Text>
          <IoniconsIcon
            name="ios-arrow-forward"
            style={styles.icon9}
          ></IoniconsIcon>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(215,215,215,1)"
  },
  rect: {
    top: 0,
    left: 0,
    width: 376,
    height: 248,
    position: "absolute",
    backgroundColor: "rgba(19,51,101,1)"
  },
  myProfile: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 19,
    marginTop: 57,
    marginLeft: 18
  },
  image: {
    width: 62,
    height: 62,
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 74
  },
  hello: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 15
  },
  mestanMestanov: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 10,
    marginLeft: 1
  },
  helloColumn: {
    width: 145,
    marginLeft: 16,
    marginTop: 6,
    marginBottom: 6
  },
  icon7: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    height: 35,
    width: 33,
    marginLeft: 83,
    marginTop: 3
  },
  imageRow: {
    height: 62,
    flexDirection: "row",
    marginTop: 19,
    marginLeft: 15,
    marginRight: 22
  },
  rect2: {
    top: 207,
    left: 0,
    width: 376,
    height: 173,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 55,
    borderWidth: 0,
    borderColor: "#000000",
    borderBottomLeftRadius: 0,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0
  },
  rect3: {
    width: 60,
    height: 60,
    backgroundColor: "rgba(255,4,4,1)",
    borderRadius: 11
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 29,
    height: 33,
    width: 29,
    marginTop: 13,
    marginLeft: 16
  },
  rect4: {
    width: 60,
    height: 60,
    backgroundColor: "rgba(243,243,243,1)",
    borderRadius: 9,
    borderWidth: 1,
    borderColor: "#000000",
    marginLeft: 70
  },
  icon2: {
    color: "rgba(229,13,13,1)",
    fontSize: 36,
    height: 36,
    width: 36,
    marginTop: 9,
    marginLeft: 13
  },
  rect5: {
    width: 60,
    height: 60,
    backgroundColor: "rgba(243,243,243,1)",
    borderRadius: 9,
    borderWidth: 1,
    borderColor: "#000000",
    marginLeft: 63
  },
  icon3: {
    color: "rgba(229,13,13,1)",
    fontSize: 36,
    height: 40,
    width: 36,
    marginTop: 9,
    marginLeft: 12
  },
  rect3Row: {
    height: 60,
    flexDirection: "row",
    marginTop: 41,
    marginLeft: 32,
    marginRight: 31
  },
  offEnergy: {
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  leftHome: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 66
  },
  comeHome: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 54
  },
  offEnergyRow: {
    height: 17,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 30,
    marginRight: 23
  },
  rectStack: {
    width: 376,
    height: 380,
    marginLeft: -1
  },
  rect8: {
    width: 376,
    height: 55,
    backgroundColor: "rgba(255,255,255,1)",
    borderBottomLeftRadius: 0,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: -1
  },
  myHome: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20
  },
  icon4: {
    color: "rgba(128,128,128,1)",
    fontSize: 33,
    height: 36,
    width: 12,
    marginLeft: 240,
    marginTop: 1
  },
  myHomeRow: {
    height: 37,
    flexDirection: "row",
    flex: 1,
    marginRight: 23,
    marginLeft: 15,
    marginTop: 15
  },
  rect9: {
    width: 376,
    height: 55,
    backgroundColor: "rgba(255,255,255,1)",
    borderBottomLeftRadius: 0,
    flexDirection: "row",
    marginTop: 2
  },
  myOrders: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20
  },
  icon5: {
    color: "rgba(128,128,128,1)",
    fontSize: 33,
    height: 36,
    width: 12,
    marginLeft: 235
  },
  myOrdersRow: {
    height: 36,
    flexDirection: "row",
    flex: 1,
    marginRight: 24,
    marginLeft: 14,
    marginTop: 14
  },
  rect10: {
    width: 376,
    height: 55,
    backgroundColor: "rgba(255,255,255,1)",
    borderBottomLeftRadius: 0,
    flexDirection: "row",
    marginTop: 2
  },
  changePassword2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginTop: 2
  },
  icon6: {
    color: "rgba(128,128,128,1)",
    fontSize: 33,
    height: 36,
    width: 12,
    marginLeft: 165
  },
  changePassword2Row: {
    height: 36,
    flexDirection: "row",
    flex: 1,
    marginRight: 24,
    marginLeft: 14,
    marginTop: 12
  },
  materialBasicFooter: {
    height: 56,
    width: 375,
    marginTop: 158,
    marginLeft: -1
  },
  rect11: {
    width: 376,
    height: 55,
    backgroundColor: "rgba(255,255,255,1)",
    borderBottomLeftRadius: 0,
    flexDirection: "row",
    marginTop: -209
  },
  support3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginTop: 6
  },
  icon8: {
    color: "rgba(128,128,128,1)",
    fontSize: 33,
    height: 36,
    width: 12,
    marginLeft: 255
  },
  support3Row: {
    height: 36,
    flexDirection: "row",
    flex: 1,
    marginRight: 24,
    marginLeft: 14,
    marginTop: 9
  },
  rect12: {
    width: 376,
    height: 55,
    backgroundColor: "rgba(255,255,255,1)",
    borderBottomLeftRadius: 0,
    flexDirection: "row",
    marginTop: 2
  },
  signOut: {
    fontFamily: "roboto-regular",
    color: "rgba(255,11,11,1)",
    fontSize: 20,
    marginTop: 6
  },
  icon9: {
    color: "rgba(128,128,128,1)",
    fontSize: 33,
    height: 36,
    width: 12,
    marginLeft: 251
  },
  signOutRow: {
    height: 36,
    flexDirection: "row",
    flex: 1,
    marginRight: 24,
    marginLeft: 14,
    marginTop: 8
  }
});

export default Untitled;
