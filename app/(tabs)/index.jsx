import { StyleSheet } from "react-native";
import { ScrollView, SafeAreaView, Image } from "react-native";
import { useSelector } from "react-redux";
import BannerScrollView from "../../components/BannerScrollView";
import LogoHeader from "../../components/LogoHeader";
import RecentBlessing from "../../components/RecentBlessing";

import { Text, View } from "../../components/Themed";

import { colors } from "../../Store/Theme";
import TrendingCarousel from "../../components/TrendingCarousel";

export default function Home() {
  const data = useSelector((state) => state.trending.recentBlessing);
  console.log("recent------->", data);
  return (
    <SafeAreaView style={styles.container}>
      <LogoHeader />
      <Image />
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
        }}
      >
        <BannerScrollView />
        <View style={styles.requesCarrd}>
          <Text style={styles.cardText}>Wetin you want?</Text>
        </View>
        <View style={[styles.titleContainer, { paddingHorizontal: 30 }]}>
          <Text style={styles.titleText}>Trending Blessing</Text>
        </View>

        <TrendingCarousel />

        <View style={{ marginBottom: 20, backgroundColor: "#040008" }}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Recent Blessing</Text>
          </View>
          {data?.map((item, id) => (
            <RecentBlessing
              key={id}
              name={item.name}
              avatar={item.avatar}
              status={item.status}
              promise={item.promise}
              time={item.time}
              statusColor={item.statusColor}
            />
          ))}
        </View>
        <View style={{ height: 100, width: 69, backgroundColor: "#040008" }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#040008",
    minHeight: "100%",
    minWidth: "100%",
    padding: 20,
    marginBottom: 20,
  },
  titleText: {
    fontSize: 12,
    color: colors.white,
    fontFamily: "Poppins_Regular",
  },
  titleContainer: {
    backgroundColor: "#040008",
    width: "100%",
  },
  cardText: {
    fontFamily: "Poppins_Medium",
    fontSize: 16,
    color: colors.white,
  },
  requesCarrd: {
    width: "85%",
    height: 56,
    borderRadius: 48,
    backgroundColor: "#7F00FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 15,
  },
});
