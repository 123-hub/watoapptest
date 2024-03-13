import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Form from '../components/FormCard'

export default function SignupPage() {
  return (
    <View className= "bg-black h-full">
    <StatusBar style='light'/>
    <SafeAreaView>
    <Text className="text-white text-[18px] mt-24 mx-4">Please sign-up for your account</Text>
    <View className="mx-4 mt-6">

    <Form isLoginPage={false}/>
    </View>
    </SafeAreaView>
  </View>
  );
}
