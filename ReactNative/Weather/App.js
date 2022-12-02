//규칙1 div태그 대신 View를 쓰고 container역할이다.
//규칙2 모든 텍스트는 text component 안에 들어간다.
//규칙3 스타일을 {{}}로 안에 써도 되고 StyleSheet.create를 써서 밖에 빼도 된다.
//StyleSheet.create를 쓰면 자동완성기능이 가능하다.
//statusBar는 ios 혹은 안드로이드 운영체제와 소통해서 상단의 배터리용량 시간을 띄우는 용도이다.
// contatiner view는 default로 flex container여서 display:flex를 해줄 필요없다
// flexdirection 기본값이 column이다.
//레이아웃을 잡을땐 width,height를 쓰지 않고 부모와 자식에 flex를 쓰고 값은 비율로 계산된다.
//ScrollView 는 style이 아닌 contentContainerStyle라는 이름을 써야 스타일이 먹힌다.
// Dimensions로 실행되고 있는 핸드폰 스크린의 너비와 높이를 가져올 수 있다.
// pagingEnabled 스크롤을 페이지로 나눠 어느정도 넘겨야 다음페이지가 나오게한다.
//showsHorizontalScrollIndicator  수평스크롤 숨길수 있는 props
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, Dimensions } from "react-native";

const { width: SCREEN_wIDTH } = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}
      >
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desc}>sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desc}>sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desc}>sunny</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6fadcf",
  },
  city: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 68,
    fontWeight: "500",
  },
  weather: {},
  day: {
    width: SCREEN_wIDTH,
    alignItems: "center",
  },
  temp: {
    marginTop: 50,
    fontSize: 178,
  },
  desc: {
    marginTop: -30,
    fontSize: 60,
  },
});
