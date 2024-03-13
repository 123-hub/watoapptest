import {
  View,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Formik } from "formik";
import Checkbox from "expo-checkbox";
import * as Yup from "yup";

export default function FormikForm({ isLoginPage }) {
  const [isShowPassword, setShowPassword] = React.useState(false);
  const [checkbox, setCheckbox] = React.useState(false);

  const validation = Yup.object().shape({
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        name: "",
        checkbox: false,
      }}
      validationSchema={validation}
      onSubmit={(values) => console.log(values)}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View>
          {isLoginPage ? (
            <TextInput
              className="border py-4 px-4 rounded-xl border-white text-white"
              onChangeText={handleChange("name")}
              value={values.name}
              placeholder="Name"
              placeholderTextColor={"gray"}
            />
          ) : null}
          {errors.name && touched.name ? (
            <Text className="text-red-500 pl-4 pt-2">{errors.name}</Text>
          ) : null}
          <TextInput
            className="border py-4 px-4 rounded-xl border-white mt-4 text-white "
            onChangeText={handleChange("email")}
            value={values.email}
            placeholder="Email"
            placeholderTextColor={"gray"}
          />
          {errors.email && touched.email ? (
            <Text className="text-red-500 pl-4 pt-2">{errors.email}</Text>
          ) : null}

          <View className="flex-row px-4 justify-center items-center border  border-white rounded-xl mt-4">
            <TextInput
              className="py-4 rounded-lg  flex-1 text-white"
              onChangeText={handleChange("password")}
              value={values.password}
              placeholder="Password"
              placeholderTextColor={"gray"}
              secureTextEntry={!isShowPassword}
            />
            <TouchableWithoutFeedback
              onPress={() => {
                setShowPassword(!isShowPassword);
              }}
            >
              <Image
                source={require("../assets/eye-line.png")}
                className="z-2  my-4 px-2"
              />
            </TouchableWithoutFeedback>
          </View>

          {errors.password && touched.password ? (
            <Text className="text-red-500 pl-4 pt-2">{errors.password}</Text>
          ) : null}
          {isLoginPage ? (
            <TouchableWithoutFeedback>
              <Text className="text-[#D4FB54] text-right text-[12px] my-4 font-semibold">
                Forget Password?
              </Text>
            </TouchableWithoutFeedback>
          ) : (
            <View className="flex-row justify-start items-center mt-4 mb-10">
              <Checkbox
                className=""
                value={checkbox}
                isChecked={!checkbox}
                onValueChange={() => setCheckbox(!checkbox)}
                name="checkbox"
                color={checkbox ? "#D4FB54" : undefined}
              />
              <Text className="text-[12px] text-white">
                {"  "}I agree{" "}
                <Text className="text-[#D4FB54]">
                  to privacy policy & terms
                </Text>
              </Text>
            </View>
          )}
          <TouchableOpacity
            className="w-full border py-3 bg-[#D4FB54] rounded-md"
            onPress={handleSubmit}
            title="Submit"
          >
            <Text className="text-center text-[14px] font-semibold">
              {isLoginPage ? "Login" : "Sign Up"}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
}
