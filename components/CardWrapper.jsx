import { StyleSheet, Text, View, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

const CardWrapper = ({
  children,
  colors,
  start,
  end,
  topColor,
  width,
  innerHeight,
  outerHeight,
}) => {
  const styles = {
    container: {
      width: width,
      height: outerHeight,
      backgroundColor: topColor,
      position: "absolute",
      borderRadius: 20,
      top: 2,
      zIndex: 0,
      marginBottom: 10,
    },
    gradientCardStyle: {
      alignItems: "center",
      width: width,
      height: innerHeight,
      borderRadius: 20,
      // margin: 2,
      zIndex: 50,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5, // Equivalent to shadow-slate-950
    },
  };
  return (
    <>
      <Animated.View style={styles.container} />
      <LinearGradient
        colors={colors}
        start={start}
        end={end}
        style={styles.gradientCardStyle}
      >
        {children}
      </LinearGradient>
    </>
  );
};

export default CardWrapper;
