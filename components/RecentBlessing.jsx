import React from "react";
import { width, colors } from "../Store/Theme";

import { View, Text, Image, StyleSheet } from "react-native";

export const RecentBlessing = ({
  avatar,
  name,
  promise,
  status,
  time,
  statusColor,
}) => {
  return (
    <View style={styles.container}>
      <Image source={avatar} style={styles.imageStyle} />
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.promiseText}>{promise}</Text>
      </View>
      <View style={styles.statusContainer}>
        <Text style={[styles.statusText, { color: statusColor }]}>
          {status}
        </Text>
        <Text style={styles.timeText}>{time}</Text>
      </View>
    </View>
  );
};

export default RecentBlessing;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "#120D16",
    borderRadius: 12,
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  nameContainer: {},
  nameText: {
    fontSize: 10,
    color: colors.white,
    fontFamily: "Poppins_Light",
  },
  promiseText: {
    fontSize: 11,
    color: colors.white,
    fontFamily: "Poppins_Medium",
  },
  statusContainer: {
    marginLeft: 15,
  },
  statusText: {
    fontSize: 11,
    fontFamily: "Poppins_Light",
  },
  timeText: {
    fontFamily: "Poppins_Light",
    fontSize: 12,
    color: colors.white,
  },
  imageStyle: {
    width: 45,
    height: 45,
    marginRight: 10,
  },
});
