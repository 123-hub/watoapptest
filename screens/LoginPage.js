import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import FormCard from '../components/FormCard'

export default function LoginPage() {
  return (
    <View className= "bg-black h-full">
      <StatusBar style='light'/>
      <SafeAreaView>
      <Text className="text-white text-[18px] mt-24 mx-4">Please sign-in to your account</Text>
      <View className="mx-4 mt-6">

      <FormCard isLoginPage={true}/>
      </View>
      </SafeAreaView>
    </View>
  )
}