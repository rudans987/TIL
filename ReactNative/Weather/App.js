//규칙1 div태그 대신 View를 쓰고 container역할이다.
//규칙2 모든 텍스트는 text component 안에 들어간다.
//규칙3 스타일을 {{}}로 안에 써도 되고 StyleSheet.create를 써서 밖에 빼도 된다.
// StyleSheet.create를 쓰면 자동완성기능이 가능하다.
// statusBar는 ios 혹은 안드로이드 운영체제와 소통해서 상단의 배터리용량 시간을 띄우는 용도이다.
// view는 default로 flex container여서 display:flex를 해줄 필요없다
// flexdirection 기본값이 column이다.
//레이아웃을 잡을땐 width,height를 쓰지 않고 부모와 자식에 flex를 쓰고 값은 비율로 계산된다.
// Dimensions로 실행되고 있는 핸드폰 스크린의 너비와 높이를 가져올 수 있는 api

// ScrollView props
// horizontal : 스크롤을 수평으로 바꾸는 props
// pagingEnabled : 스크롤을 페이지로 나눠 어느정도 넘겨야 다음페이지가 나오게하는 props
// showsHorizontalScrollIndicator : 수평스크롤 숨길수 있는 props
//ScrollView에 스타일 주는 법 : style이 아닌 contentContainerStyle라는 이름을 써야한다.

//reverseGeocodeAsync :  위도와 경도를 주면 주소를 반환한다.
import { Fontisto } from "@expo/vector-icons";
import * as Location from "expo-location";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";

const { width: SCREEN_wIDTH } = Dimensions.get("window");
const API_KEY = "784ab24ff2ed5d94d4288abed9e25d13";

const icons = {
  Clouds: "cloudy",
  Clear: "day-sunny",
  Atmosphere: "cloudy-gusts",
  Snow: "snow",
  Rain: "rains",
  Drizzle: "rain",
  Thunerstorm: "lightning",
};
export default function App() {
  const [city, setCity] = useState("Loading...");
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);
  const ask = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    setCity(location[0].city);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`
    );
    const json = await response.json();
    setDays(json.daily);
  };
  useEffect(() => {
    ask();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}
      >
        {days.length === 0 ? (
          <View style={{ ...styles.day, alignItems: "center" }}>
            <ActivityIndicator
              color="white"
              size="large"
              style={{ marginTop: 10 }}
            />
          </View>
        ) : (
          days.map((day, index) => (
            <View key={index} style={styles.day}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "80%",
                }}
              >
                <Text style={styles.temp}>
                  {parseFloat(day.temp.day).toFixed(1)}
                </Text>
                <Fontisto
                  name={icons[day.weather[0].main]}
                  size={68}
                  color="white"
                />
              </View>
              <Text style={styles.desc}>{day.weather[0].main}</Text>
              <Text style={styles.tinyText}>{day.weather[0].description}</Text>
            </View>
          ))
        )}
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
    marginTop: 50,
  },
  cityName: {
    fontSize: 58,
    fontWeight: "500",
  },
  weather: {},
  day: {
    width: SCREEN_wIDTH,
    alignItems: "center",
  },
  temp: {
    marginTop: 50,
    fontSize: 108,
  },
  desc: {
    marginTop: -30,
    fontSize: 60,
  },
  tinyText: {
    fontSize: 30,
  },
});
