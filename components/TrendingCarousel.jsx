import React, { useRef, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Animated,
} from "react-native";
// import Animated from "react-native-reanimated";
import { trendingBlessing } from "../DataStore";
import CarouselCard from "./CarouselCard";
import { width, colors } from "../Store/Theme";
import { useSelector } from "react-redux";

const cardWidth = width * 0.9;
const slideInterval = 3000;

const TrendingCarousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(0);
  const data = useSelector((state) => state.trending.trendingBlessing);
  useEffect(() => {
    const timer = setInterval(() => {
      const nextPage = currentPage === data.length - 1 ? 0 : currentPage + 1;

      scrollToPage(nextPage);

      setCurrentPage(nextPage);
    }, slideInterval);

    return () => clearInterval(timer);
  }, [currentPage]);

  const renderPagination = () => {
    return data?.map((_, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => scrollToPage(index)}
        style={{
          width: 8,
          height: 8,
          borderRadius: 5,
          backgroundColor: currentPage === index ? "#4C0596" : "gray",
          margin: 5,
        }}
      />
    ));
  };

  const scrollToPage = (pageIndex) => {
    flatListRef.current.scrollToIndex({ index: pageIndex });

    setCurrentPage(pageIndex);
  };

  return (
    <>
      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        pagingEnabled
        keyExtractor={(_, index) => index.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        renderItem={({ item }) => {
          return (
            <Animated.View style={styles.renderitemsContainer}>
              <CarouselCard {...item} />
            </Animated.View>
          );
        }}
      />
      <View style={styles.paginationView}>{renderPagination()}</View>
    </>
  );
};

export default TrendingCarousel;

const styles = StyleSheet.create({
  renderitemsContainer: {
    width: cardWidth,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 10,
    marginHorizontal: 15,
  },
  paginationView: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
});
