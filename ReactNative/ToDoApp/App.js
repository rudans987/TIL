// TouchableOpacity: 누르는 이벤트를 listen할 준비가 된 view, 누를때 투명해지는 애니메이션 효과가 있다.
// TouchableHighlight: 요소를 눌렀을 때 배경색이 바뀐다.
// TouchableWithoutFeedback : 어떤 애니메이션도 없는 Touchable
// onPress : 유저가 Touchable을 눌렀을때 실행되는 이벤트
// Pressable: 새롭고 더 많은 설정이 가능한 Touchable
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import { theme } from "./colors";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.btnText}>Work</Text>
        </TouchableOpacity>
        <TouchableHighlight
          underlayColor="#DDD"
          onPress={() => console.log("")}
        >
          <Text style={styles.btnText}>Travel</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100,
  },
  btnText: {
    fontSize: 38,
    fontWeight: "600",
    color: "white",
  },
});