import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";

export default function GetStartedPage({ navigation }) {
  const [fontLoaded] = useFonts({
    serif: require("../assets/font/PTSerif-Bold.ttf"),
  });

  if (!fontLoaded) {
    return <Text>Loading Font...</Text>;
  }
  return (
    <View className="bg-black h-full">
      <StatusBar style="light" />
      <Image source={require("../assets/Sparkles.png")} className="z-2" />
      <Image
        source={require("../assets/godRays.png")}
        className="absolute mx-6"
      />
      <SafeAreaView>
        <View className="mx-4 -mt-40">
          <Text className="text-[49px] text-white  font-extrabold">wato</Text>
          <Text
            className="text-[28px] text-white leading-10 pt-5"
            style={{ fontFamily: "serif" }}
          >{`Zero Cost \nWhatsApp Messaging \nplatform`}</Text>

          <TouchableOpacity
            className="w-full border border-gray-400 rounded-lg shadow-inner shadow-slate-500  mt-20  "
            onPress={() => navigation.navigate("signup")}
          >
            <LinearGradient className="rounded-lg py-3" colors={["#141517","#2E2F30"]} start={[1,1]} end={[0,0]}>
             
              <Text className="text-white text-xl text-center font-semibold">
                Get Started
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <View className=" relative flex-row justify-center items-center mt-4">
            <Text className="text-gray-400 text-[12px]">
              Already have an account?
            </Text>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("login")}
            >
              <Text className="text-[#D4FB54] text-[12px]">
                {" "}
                Sign in instead
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
