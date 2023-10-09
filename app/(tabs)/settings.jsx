import { StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#040008",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
