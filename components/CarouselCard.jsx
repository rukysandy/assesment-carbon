import { View, Text, Image, StyleSheet, Animated } from "react-native";
import React from "react";
import { colors } from "../Store/Theme";

import CardWrapper from "./CardWrapper";
const CarouselCard = ({
  avatar,
  name,
  nickName,
  followers,
  purpose,
  received_Amount,
  promised_Amount,
}) => {
  // console.log("followers------------>", followers);
  return (
    // <CardWrapper
    //   colors={["rgba(18, 13, 22, 1)"]}
    //   start={{ x: 0, y: 0 }}
    //   end={{ x: 0, y: 0 }}
    //   topColor={"#120D16"}
    //   width={"98%"}
    //   outerHeight={191}
    //   innerHeight={191}
    // >

    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={avatar}
          style={{
            width: 78,
            height: 78,
            borderRadius: 40,
          }}
        />
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.followersText}>{followers} followers</Text>

        <View style={styles.nickNameContainer}>
          <Text style={styles.followersText}>{nickName}</Text>

          <Image
            source={require("../assets/images/green-star.png")}
            style={{
              width: 10,
              height: 10,
              borderRadius: 10,
            }}
          />
        </View>
      </View>

      <View
        style={{
          width: 197,
        }}
      >
        <Text style={styles.purposeText}>{purpose}</Text>
        <View style={styles.subCardStyle}>
          <Text style={styles.subCardText}>Amount Received</Text>
          <Text style={styles.purposeText}>{received_Amount}</Text>
        </View>
        <View style={styles.subCardStyle}>
          <Text style={styles.subCardText}>Received Promise</Text>
          <Text style={styles.purposeText}>{promised_Amount}</Text>
        </View>
      </View>
    </View>

    // </CardWrapper>
  );
};
export default CarouselCard;
const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    height: 191,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#120D16",
    alignItems: "center",

    borderRadius: 15,
  },
  imageContainer: {
    width: 106,
    height: 156,
    backgroundColor: "#201828",
    alignItems: "center",
    justifyContent: "center",
    // marginLeft: 4,
    // paddingHorizontal: 14,
    borderRadius: 16,
    // marginRight: 8,
  },
  nameText: {
    fontFamily: "Poppins_SemiBold",
    fontSize: 12,
    color: colors.white,
  },
  followersText: {
    fontSize: 9,
    color: colors.white,
    fontFamily: "Poppins_Light",
    marginVertical: 2,
  },
  nickNameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  purposeText: {
    fontSize: 14,
    color: colors.white,
    marginBottom: 4,
    fontFamily: "Poppins_SemiBold",
  },
  subCardStyle: {
    width: 197,
    height: 61,
    backgroundColor: "#201828",
    marginHorizontal: 4,
    borderRadius: 6,
    padding: 6,
    marginVertical: 5,
  },
  subCardText: {
    fontSize: 12,
    color: colors.white,
    fontFamily: "Poppins_Light",
    marginVertical: 2,
  },
});
