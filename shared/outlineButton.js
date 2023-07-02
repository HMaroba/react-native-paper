import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";

export default function CustomOutlineButtom({ text, onPress }) {
  return (
    <View>
      <TouchableOpacity>
        <View style={styles.btnOutline}>
          <Text onPress={onPress} style={styles.btnTextOutline}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
