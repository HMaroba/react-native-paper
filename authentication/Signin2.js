import {
  View,
  TextInput,
  Text,
  Alert,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { styles } from "../styles/styles";
import CustomButtom from "../shared/Button";
import CustomOutlineButtom from "../shared/outlineButton";
import RBSheet from "react-native-raw-bottom-sheet";

export default function SignIn2({ navigation }) {
  const handleClick = () => {
    try {
      Alert.alert("Confirm Delete", "Are you sure you want to delete");
      navigation.push("Create Account");
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogin = () => {
    try {
      Alert.alert("Confirm Delete", "Are you sure you want to delete");
      navigation.push('Admin Menu');
    } catch (error) {
      console.log(error);
    }
  };

  const handleReset = () => {
    try {
      navigation.push("Reset Password");
    } catch (error) {
      console.log(error);
    }
  };
  const image = {
    uri: "https://t3.ftcdn.net/jpg/03/55/60/70/360_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg",
  };

  const image2 = {
    uri: "https://as1.ftcdn.net/v2/jpg/03/55/60/36/1000_F_355603615_RIj4qlSqmD47AOiWLbBU1qg58WN4raS9.jpg",
  };

  const image3 = {
     uri : "https://t4.ftcdn.net/jpg/03/57/34/39/240_F_357343965_u58BFcRrziBVMqgt6liwPHJKcIjHsPnc.jpg",
  };

  return (
    <View style={styles.container3}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Image
          source={{
            uri: "https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png",
          }}
          style={{ width: 200, height: 80, marginBottom: 20 }}
        />
        <TextInput
          placeholder="Email Address"
          style={styles.inputSignin}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Password"
          style={styles.inputSignin}
          secureTextEntry
        />

        <CustomButtom text="Login" onPress={handleLogin} />
        <TouchableOpacity onPress={handleReset}>
          <Text
            style={{
              marginTop: 10,
              fontSize: 16,
              marginLeft: 170,
              color: "#0D3AA9",
            }}
          >
            Forgot Password
          </Text>
        </TouchableOpacity>
        <CustomOutlineButtom text="Register" onPress={handleClick} />
        <CustomOutlineButtom text="Open Model" onPress={() => this.RBSheet.open()}/>

        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={300}
          openDuration={250}
          customStyles={{
            container: {
              justifyContent: "center",
              alignItems: "center"
            }
          }}
        >
          <Text>Good Morning</Text>
        </RBSheet>
      </ImageBackground>
    </View>
  );
}
