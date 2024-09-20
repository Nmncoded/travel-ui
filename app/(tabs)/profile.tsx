import { Link } from "expo-router";
import { Text, View , StyleSheet} from "react-native";

export default function Profile() {
  return (
    <View
      style={[styles.container]}
    >
      <Text>Inside tabs Profile</Text>
      {/* <Link href={'/login'} >Go to Login screen</Link>
      <Link href={'/signup'} >Go to signup screen</Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
