import { StyleSheet, View, Image } from "react-native";
import React from "react";

const LogoHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/Logo.png")}
        style={styles.imageStyle}
      />
    </View>
  );
};

export default LogoHeader;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  imageStyle: { width: 32, height: 32 },
});
