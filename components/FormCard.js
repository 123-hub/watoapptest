import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import FormikForm from "./FormikForm";

export default function FormCard({ isLoginPage=true }) {
  const navigation = useNavigation();
  

  return (
    <View className="bg-gradient-to-r from-indigo-500 border border-white rounded-2xl ">
      <LinearGradient
        colors={["#5D624E", "#0f0f0f"]}
        className="px-3 py-6 rounded-2xl"
        start={[1, 0]}
        end={[0.7, 0.3]}
      >
    
         <FormikForm isLoginPage={isLoginPage}/>
        {isLoginPage ? (
          <Text className="text-center text-[12px] text-gray-300 mt-4">
            New to our platform?{" "}
            <TouchableWithoutFeedback onPress={()=> navigation.navigate('signup')}>

            <Text className="text-[#D4FB54]">Create an account</Text>
            </TouchableWithoutFeedback>
          </Text>
        ) : (
          <Text className="text-center text-[12px] text-gray-300 mt-4">
            Already have an account?{" "}
            <TouchableWithoutFeedback onPress={()=>navigation.navigate('login')}><Text className="text-[#D4FB54]" >Sign in instead</Text></TouchableWithoutFeedback>
          </Text>
        )}
        <Text className="text-[12px] text-center mt-6 text-gray-300">or</Text>
        <TouchableOpacity className="flex-row justify-center items-center w-full border border-white py-3 mt-6 rounded-md">
          <Image source={require("../assets/google.png")} />
          <Text className="text-[14px] text-center text-white">
            {" "}
            Continue with Google
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
