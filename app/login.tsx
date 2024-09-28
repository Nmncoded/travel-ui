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

const { width, height } = Dimensions.get("window");

const LoginScreen = () => {
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
    <View
      style={[defaultStyles.container, styles.loginContainer]}
      // behavior="padding"
      // keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <Image
        style={[styles.bgImage]}
        source={require("@/assets/images/login_bg_image.jpg")}
      />

      <View style={[styles.inputContainer]}>
        <TextInput
          style={[styles.inputFieldContainer]}
          autoCorrect={false}
          placeholderTextColor={"#fff"}
          value={formData.email}
          keyboardType="email-address"
          placeholder="Email"
          onChangeText={(text) => onChangeText(text, "email")}
        />
      </View>
      <View style={[styles.inputContainer]}>
        <TextInput
          style={[styles.inputFieldContainer]}
          autoCorrect={false}
          placeholderTextColor={"#fff"}
          value={formData.password}
          placeholder="Password"
          onChangeText={(text) => onChangeText(text, "password")}
          secureTextEntry
        />
      </View>
      {/* <Button title="Login" onPress={onLogin} /> */}
      <Pressable onPress={onLogin} style={[styles.button,{width: '50%', alignSelf : 'center'}]}  >
        <Text>Login</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
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
