import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../../Store/Theme";
import TestImage from "../../assets/images/cardAvatar1.png";
const Container = ({
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
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={TestImage}
          style={{
            width: 78,
            height: 78,
          }}
        />
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.followersText}>{followers} followers</Text>

        <View style={styles.nickNameContainer}>
          <Text style={styles.followersText}>{nickName}</Text>
          <Image
            source={require("../../assets/images/green-star.png")}
            style={{
              width: 10,
              height: 10,
            }}
          />
        </View>
      </View>
      <View style={{}}>
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
  );
};
export default Container;
const styles = StyleSheet.create({
  //  className=" w-24 h-40 bg-[] ml-1 flex items-center py-4 rounded-2xl mr-2"
  container: {
    width: "75%",
    backgroundColor: "#120D16",
    borderRadius: 12,
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,

    padding: 8,
  },
  imageContainer: {
    width: 96,
    height: 140,
    backgroundColor: "#201828",
    marginLeft: 4,
    paddingHorizontal: 14,
    borderRadius: 16,
    marginRight: 8,
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
    width: 127,
    height: 50,
    backgroundColor: "#201828",
    marginHorizontal: 4,
    borderRadius: 6,
    padding: 4,
    marginVertical: 5,
  },
  subCardText: {
    fontSize: 12,
    color: colors.white,
    fontFamily: "Poppins_Light",
    marginVertical: 2,
  },
});
