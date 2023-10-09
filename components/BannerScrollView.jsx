import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Animated,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

import { width, colors } from "../Store/Theme";
import CardWrapper from "../components/CardWrapper";

const cardWidth = width * 0.9;
const totalCards = 3;

const BannerScrollView = () => {
  const scrollViewRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const scrollToPage = (page) => {
    if (scrollViewRef.current) {
      const xOffset = page * cardWidth;
      scrollViewRef.current.scrollTo({ x: xOffset, animated: true });
      setCurrentPage(page);
    }
  };

  const handleScroll = (event) => {
    const xOffset = event.nativeEvent.contentOffset.x;
    const page = Math.round(xOffset / cardWidth);
    if (page !== currentPage) {
      setCurrentPage(page);
    }
  };

  const renderPagination = () => {
    const paginationButtons = [];
    for (let i = 0; i < totalCards; i++) {
      const isCurrent = currentPage === i;
      paginationButtons.push(
        <TouchableOpacity
          key={i}
          onPress={() => scrollToPage(i)}
          style={{
            width: 9,
            height: 9,
            borderRadius: 5,
            backgroundColor: isCurrent ? "#4C0596" : "gray",
            margin: 5,
          }}
        />
      );
    }
    return paginationButtons;
  };
  return (
    <View
      style={{
        width: cardWidth,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 35,
        marginTop: 10,
        marginHorizontal: 15,
      }}
    >
      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          //   justifyContent: "center",
          width: width * 3,
          height: 230,
        }}
        // contentContainerStyle={{
        //   alignItems: "center",
        //   width: width * 3,
        //   height: 230,
        // }}
        onScroll={handleScroll} // Add this event handler
        scrollEventThrottle={16} // Adjust as needed
      >
        <View
          style={{
            width: cardWidth,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardWrapper
            colors={["rgb(133, 71, 237)", "rgb(225, 185, 172)"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 1, y: 1.5 }}
            topColor={"#D7B0FF"}
            width={"95%"}
            outerHeight={198}
            innerHeight={191}
          >
            <View className={` w-full items-center p-5`}>
              <Text style={styles.balanceText}>Total Wallet Balance</Text>

              <View style={styles.balanceView}>
                <Text style={styles.amountText}>N50,000</Text>
                <Image
                  source={require("../assets/images/eyeclosed.png")}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              </View>
              <View style={styles.withdrawBalnceCard}>
                <Text style={styles.withdrawBalnceText}>Withdrew Balance</Text>
              </View>
            </View>
          </CardWrapper>
        </View>

        <View
          style={{
            width: cardWidth,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardWrapper
            colors={["rgb(176, 197, 208)", "rgb(133, 71, 237)"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 1, y: 0.7 }}
            topColor={"#D7B0FF"}
            width={"95%"}
            outerHeight={198}
            innerHeight={191}
          >
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
              }}
            >
              <View>
                <Text
                  style={{
                    marginTop: 15,
                    color: colors.white,
                    fontSize: 14,
                    fontFamily: "Poppins_Light",
                  }}
                >
                  Promises from Others
                </Text>
                <Image
                  source={require("../assets/images/promiseCardIcon.png")}
                  style={{
                    marginTop: 10,
                    width: 120,
                    height: 120,
                  }}
                />
              </View>
              <View style={styles.divider} />
              <View style={{ marginTop: 15 }}>
                <View
                  style={[
                    styles.promiseInnerBox,
                    { backgroundColor: "rgba(242, 230, 255, 0.27);" },
                  ]}
                >
                  <Text style={styles.promiseInnerTextHeader}>
                    Recieved Promises
                  </Text>
                  <Text style={styles.promiseInnerText}>1,120</Text>
                </View>
                <View
                  style={[
                    styles.promiseInnerBox,
                    { backgroundColor: "rgba(242, 230, 255, 0.27);" },
                  ]}
                >
                  <Text style={styles.promiseInnerTextHeader}>Blessing</Text>
                  <Text style={styles.promiseInnerText}> 1000</Text>
                </View>
              </View>
            </View>
          </CardWrapper>
        </View>

        <View
          style={{
            width: cardWidth,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardWrapper
            colors={["rgb(103, 142, 216)", "rgb(112, 84, 232)"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            topColor={"#D7B0FF"}
            width={"95%"}
            outerHeight={198}
            innerHeight={191}
          >
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
              }}
            >
              <View style={{ paddingLeft: 10 }}>
                <Text
                  style={{
                    marginTop: 20,
                    color: colors.white,
                    fontSize: 14,
                    fontFamily: "Poppins_Light",
                  }}
                >
                  Promises from Others
                </Text>
                <Image
                  source={require("../assets/images/otherPromise2.png")}
                  style={{
                    marginTop: 5,
                    width: 110,
                    height: 110,
                  }}
                />
              </View>
              <View style={styles.divider} />
              <View style={{ marginTop: 15 }}>
                <View
                  style={[
                    styles.promiseInnerBox,
                    { backgroundColor: "rgba(242, 230, 255, 0.27);" },
                  ]}
                >
                  <Text style={styles.promiseInnerTextHeader}>
                    Promises Made
                  </Text>
                  <Text style={styles.promiseInnerText}>100</Text>
                </View>
                <View
                  style={[
                    styles.promiseInnerBox,
                    { backgroundColor: "rgba(242, 230, 255, 0.27);" },
                  ]}
                >
                  <Text style={styles.promiseInnerTextHeader}>Give Aways</Text>
                  <Text style={styles.promiseInnerText}> 4</Text>
                </View>
              </View>
            </View>
          </CardWrapper>
        </View>
      </ScrollView>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        {renderPagination()}
      </View>
    </View>
  );
};

export default BannerScrollView;

const styles = StyleSheet.create({
  container: {
    width: "83.33%",
    height: 48,
    backgroundColor: "#D7B0FF",
    position: "absolute",
    borderRadius: 20,
    top: 2,
    zIndex: 0,
    marginBottom: 10,
  },
  balanceView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  balanceText: {
    marginTop: 10,
    color: colors.white,
    fontSize: 12,
    fontFamily: "Poppins_Light",
  },
  amountText: {
    color: colors.white,
    fontSize: 36,
    fontFamily: "Poppins_Bold",
  },
  totalView: {},
  withdrawBalnceCard: {
    // className=" h-[48px] w-[146px] bg-textPrmary mt-3 rounded-3xl items-center justify-center"
    height: 48,
    width: 195,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 22,
  },
  withdrawBalnceText: {
    marginTop: 10,
    color: colors.textBlack,
    fontSize: 14,
    fontFamily: "Poppins_Medium",
    marginBottom: 6,
  },
  promiseInnerBox: {
    marginVertical: 5,
    width: 131,
    height: 70,

    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 6,
  },
  promiseInnerTextHeader: {
    color: colors.white,
    fontSize: 12,
    fontFamily: "Poppins_Light",
  },
  promiseInnerText: {
    color: colors.white,
    fontSize: 24,
    fontFamily: "Poppins_Bold",
  },
  divider: {
    backgroundColor: "#FFF",
    width: 1,
    height: "90%",
    marginRight: 10,
    marginTop: 15,
  },
});
