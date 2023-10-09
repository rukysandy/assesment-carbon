import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  trendingBlessing: [
    {
      id: "0",
      avatar: require("../../assets/images/trendingAvatar.png"),
      name: "@chuks",
      purpose: "Car move",
      received_Amount: "N1,000,000",
      promised_Amount: "1000",
      followers: "5M",
      nickName: "Champion",
    },
    {
      id: "1",
      avatar: require("../../assets/images/meaasageAvatar2.png"),
      name: "@flygirl",
      purpose: "Switz Adventure",
      received_Amount: "N5,000,000",
      promised_Amount: "2000",
      followers: "5M",
      nickName: "Idan",
    },
    {
      id: "2",
      avatar: require("../../assets/images/messageAvatar.png"),
      name: "@chuks",
      purpose: "December Flex",
      received_Amount: "N7,000,000",
      promised_Amount: "1000",
      followers: "5M",
      nickName: "Sugarmummy",
    },
  ],
  recentBlessing: [
    {
      avatar: require("../../assets/images/messageAvatar.png"),
      name: "Blessings don drop!",
      promise: "@davido sent you N50,000",
      status: "Fulfilled",
      time: "2 mins ago",
      statusColor: "#00C159",
    },
    {
      avatar: require("../../assets/images/messageAvator1.png"),
      name: "Blessings don drop!",
      promise: "@davido sent you N50,000",
      status: "pending",
      time: "2 mins ago",
      statusColor: "#FFD100",
    },
    {
      avatar: require("../../assets/images/meaasageAvatar2.png"),
      name: "Blessings don drop!",
      promise: "@davido sent you N50,000",
      status: "Fulfilled",
      time: "2 mins ago",
      statusColor: "#00C159",
    },
    {
      avatar: require("../../assets/images/messageAvatar3.png"),
      name: "Blessings don drop!",
      promise: "@davido sent you N50,000",
      status: "Fulfilled",
      time: "2 mins ago",
      statusColor: "#00C159",
    },
  ],
};
export const trendingSlice = createSlice({
  name: "trending",
  initialState,
  reducers: {},
});
export const {} = trendingSlice.actions;

export default trendingSlice.reducer;
