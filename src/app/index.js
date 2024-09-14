import { View, Text, StyleSheet, SafeAreaView, Button, FlatList } from "react-native";
import { StatusBar  } from "expo-status-bar";
import exercises from "../../assets/data/exercises.json";
import ExerciseListItem from "../../src/components/ExerciseListItem";



export default function App() {

  return (
    <View style={styles.container}>
      <FlatList
      data={exercises}
      contentContainerStyle={{gap: 5}}
      keyExtractor={(item, index) => item.name}
      renderItem={({item}) => <ExerciseListItem item={item} />}   
      />


      <StatusBar style="auto" />
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
    justifyContent: 'center',
    padding: 10,
    },
});

