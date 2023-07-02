import { View, TextInput, Alert, Image } from "react-native";
import { styles } from "../shared/styles";
import CustomOutlineButtom from "../shared/outlineButton";

export default function createAccount() {
  const handleClick = () => {
    try {
      Alert.alert("Confirm Delete", "Are you sure you want to delete");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container2}>
              <Image
        source={{
          uri: "https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png",
        }}
        style={{ width: 200, height: 80, marginBottom: 20 }}
      />
      <TextInput placeholder="Full Names" style={styles.input2} />
      <TextInput placeholder="Phone Number" style={styles.input2} />
      <TextInput placeholder="Email Address" style={styles.input2} />
      <TextInput placeholder="Password" style={styles.input2} />

      <CustomOutlineButtom text="Register" onPress={handleClick} />
    </View>
  );
}