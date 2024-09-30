import {
  Button,
  Dimensions,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
import { defaultStyles } from "@/styles";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useRouter } from "expo-router";
import Animated, { BounceInDown, BounceInLeft, BounceInRight, BounceInUp, FadeIn, FadeInDown, FadeInUp, LightSpeedInRight, SlideInDown } from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

const SignupScreen = () => {
  const { top } = useSafeAreaInsets();
  const router = useRouter();
  const [formData, setFormData] = React.useState({ email: "", password: "" });

  const onLogin = useCallback(() => {
    // console.log('sddadas',formData);
    router.push("/");
  }, [formData]);

  // console.log(formData);

  const onChangeText = (text: string, type: string) => {
    // console.log(text, type);
    setFormData((previousState) => ({ ...previousState, [type]: text }));
  };

  return (
    <Animated.View
      style={[defaultStyles.container, styles.loginContainer]}
      // behavior="padding"
      // keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <Animated.Image
        style={[styles.bgImage]}
        entering={SlideInDown.duration(400)}
        source={require("@/assets/images/login_bg_image.jpg")}
      />

      <Animated.View entering={BounceInUp.duration(2000).springify().delay(800)} >
        <Text style={[styles.header]}  >Signup</Text>
      </Animated.View>

      <Animated.View entering={BounceInLeft.duration(2000).springify().delay(800)} style={[styles.inputContainer]}>
        <TextInput
          style={[styles.inputFieldContainer]}
          autoCorrect={false}
          placeholderTextColor={"#fff"}
          value={formData.email}
          keyboardType="email-address"
          placeholder="Email"
          onChangeText={(text) => onChangeText(text, "email")}
        />
      </Animated.View>
      <Animated.View entering={BounceInRight.duration(2000).springify().delay(800)} style={[styles.inputContainer]}>
        <TextInput
          style={[styles.inputFieldContainer]}
          autoCorrect={false}
          placeholderTextColor={"#fff"}
          value={formData.password}
          placeholder="Password"
          onChangeText={(text) => onChangeText(text, "password")}
          secureTextEntry
        />
      </Animated.View>
      {/* <Button title="Login" onPress={onLogin} /> */}
      <Animated.View entering={BounceInDown.duration(2000).springify().delay(800)} style={{width:"100%"}} >
      <Pressable onPress={onLogin} style={[styles.button,{width: '50%', alignSelf : 'center'}]}  >
        <Animated.Text >Signup</Animated.Text>
      </Pressable>
      </Animated.View>
      <Animated.View style={{flexDirection:'row',alignItems: 'center', justifyContent: 'center', marginTop: 20}} entering={BounceInDown.duration(1500).springify().delay(900)}  >
        <Animated.Text style={{ color: 'white', fontSize: 16}} >Already have an account?</Animated.Text>
        <Pressable onPress={() => router.push("/login")}   >
        <Animated.Text style={{ color: 'blue', fontSize: 16, marginLeft: 5, textDecorationLine: 'underline', fontWeight: 'bold'}} > Login</Animated.Text>
      </Pressable>
      </Animated.View>
    </Animated.View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  header : {
    fontSize: 45,
    fontWeight: 700,
    color: '#fff',
    marginBottom: 15
  },
  loginContainer: {
    // borderColor: "red",
    // borderWidth: 2,
  },
  form: {
    // flex: .5,
    // justifyContent: "center",
    width: "100%",
    borderColor: "red",
    borderWidth: 1,
  },
  inputContainer: {
    backgroundColor: "rgba(0,0,0,0.1)",
    width: "100%",
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: 20,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 2,
  },
  inputFieldContainer: {
    padding: 12,
    margin: 2,
    borderColor: "red",
    color: "#fff",
    fontSize: defaultStyles.text.fontSize,
  },
  button: {
    ...defaultStyles.button,
    backgroundColor: '#f4f4f4'
  },
  bgImage: {
    height: height+50,
    width: width,
    resizeMode: "cover",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
