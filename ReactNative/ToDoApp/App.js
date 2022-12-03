// TouchableOpacity: 누르는 이벤트를 listen할 준비가 된 view, 누를때 투명해지는 애니메이션 효과가 있다.
// TouchableHighlight: 요소를 눌렀을 때 배경색이 바뀐다.
// TouchableWithoutFeedback : 어떤 애니메이션도 없는 Touchable
// onPress : 유저가 Touchable을 눌렀을때 실행되는 이벤트
// Pressable: 새롭고 더 많은 설정이 가능한 Touchable

//TextTnput
// returnKeyType : 엔터키의 타입을 변경할 수 있는 props
// onSubmitEditing : 엔터를 눌렀을 때 일어나는 함수
// onChangeText : 텍스트가 바뀔 때 실행되는 함수
//
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { theme } from "./colors";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
const STORAGE_KEY = "@toDos";
const STORAGE_HederKEY = "@working";

export default function App() {
  const [working, setWorking] = useState(true);
  const [text, setText] = useState("");
  const [editText, setEditText] = useState("");
  const [toDos, setToDos] = useState({});
  useEffect(() => {
    loadWorking();
    loadToDos();
  }, []);
  const travel = async () => {
    setWorking(false);
    await AsyncStorage.setItem("@working", JSON.stringify(false));
  };
  const work = async () => {
    setWorking(true);
    await AsyncStorage.setItem("@working", JSON.stringify(true));
  };
  const onChangeText = (payload) => {
    setText(payload);
  };
  const saveToDos = async (toSave) => {
    // JSON.stringify는 object를 string으로 바꾼다.
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    } catch (e) {
      console.log(e);
    }
  };
  const loadWorking = async () => {
    const h = await AsyncStorage.getItem("@working");
    setWorking(JSON.parse(h));
  };
  const loadToDos = async () => {
    const s = await AsyncStorage.getItem(STORAGE_KEY);
    //JSON.parse는 string을 js object로 만든다.
    setToDos(JSON.parse(s));
  };

  const addToDo = async () => {
    if (text === "") {
      return;
    }
    // 새로운 todos를 만드는 두가지 방법
    // const newToDos = Object.assign({}, toDos, {
    //   [Date.now()]: { text, work: working },
    // });
    const newToDos = {
      ...toDos,
      [Date.now()]: { text, working, completed: false, isEdit: false },
    };
    setToDos(newToDos);
    await saveToDos(newToDos);
    setText("");
  };
  const deletToDo = (key) => {
    Alert.alert("TO DO 삭제", "정말 삭제하시겠습니까?", [
      { text: "취소" },
      {
        text: "예",
        onPress: () => {
          const newToDos = { ...toDos };
          delete newToDos[key];
          setToDos(newToDos);
          saveToDos(newToDos);
        },
      },
    ]);
  };
  const completeToDo = (key) => {
    const newToDos = { ...toDos };
    console.log(newToDos[key]);
    newToDos[key].completed = !newToDos[key].completed;
    setToDos(newToDos);
    saveToDos(newToDos);
  };
  const editToDo = (key) => {
    const newToDos = { ...toDos };
    newToDos[key].isEdit = true;
    setEditText(newToDos[key].text);
    setToDos(newToDos);
    saveToDos(newToDos);
  };
  const editSaveToDo = (key) => {
    const newToDos = { ...toDos };
    console.log(newToDos[key]);
    newToDos[key].text = editText;
    newToDos[key].isEdit = false;
    setToDos(newToDos);
    saveToDos(newToDos);
  };
  const onChangeEditText = (payload) => {
    setEditText(payload);
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => work()}>
          <Text
            style={{ ...styles.btnText, color: working ? "white" : theme.grey }}
          >
            Work
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => travel()}>
          <Text
            style={{
              ...styles.btnText,
              color: !working ? "white" : theme.grey,
            }}
          >
            Travel
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        onSubmitEditing={addToDo}
        onChangeText={onChangeText}
        value={text}
        returnKeyType="done"
        placeholder={working ? "Add a To Do" : "Where do you want to go?"}
        style={styles.input}
      />
      <ScrollView>
        {/* Object.keys(some object)는 key값들만 담긴 배열을 반환함 */}
        {Object.keys(toDos).map((key) =>
          toDos[key].working === working ? (
            <View style={styles.toDo} key={key}>
              {!toDos[key].isEdit ? (
                <Text
                  style={{
                    ...styles.toDoText,
                    textDecorationLine: toDos[key].completed
                      ? "line-through"
                      : "none",
                  }}
                >
                  {toDos[key].text}
                </Text>
              ) : (
                <TextInput
                  onSubmitEditing={() => editSaveToDo(key)}
                  onChangeText={onChangeEditText}
                  value={editText}
                  returnKeyType="done"
                  style={styles.editInput}
                />
              )}
              <View style={styles.icons}>
                {!toDos[key].isEdit && (
                  <TouchableOpacity onPress={() => editToDo(key)}>
                    <FontAwesome5 name="edit" size={40} color={theme.grey} />
                  </TouchableOpacity>
                )}
                <TouchableOpacity
                  style={{ marginLeft: 25 }}
                  onPress={() => completeToDo(key)}
                >
                  {!toDos[key].completed ? (
                    <Fontisto
                      name="checkbox-passive"
                      size={40}
                      color={theme.grey}
                    />
                  ) : (
                    <Fontisto
                      name="checkbox-active"
                      size={40}
                      color={theme.grey}
                    />
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ marginLeft: 25 }}
                  onPress={() => deletToDo(key)}
                >
                  <Fontisto name="trash" size={40} color={theme.grey} />
                </TouchableOpacity>
              </View>
            </View>
          ) : null
        )}
      </ScrollView>
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
  input: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 20,
    fontSize: 18,
  },
  editInput: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    borderRadius: 30,
    width: 180,
    height: 45,
    fontSize: 16,
  },
  toDo: {
    backgroundColor: theme.toDoBg,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  toDoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  icons: {
    flexDirection: "row",
  },
});
