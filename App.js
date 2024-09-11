import { View, Text, StyleSheet, SafeAreaView, Button } from "react-native";
import { StatusBar  } from "expo-status-bar";
import exercises from "./assets/data/exercises.json";

export default function App() {
  const exercise = exercises[0];

  return (
    <View style={styles.container}>
    <View style={styles.exerciseContainer}>
     <Text style={styles.exerciseName}>{exercise.name}</Text>
     <Text style={styles.exerciseSubtitle}>
      {exercise.muscle.toUpperCase()} | {exercise.equipment.toUpperCase()}
      </Text>
     </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
    justifyContent: 'center',
    padding: 20,
    },
    exerciseContainer:{
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      gap: 5,
    },
  exerciseName: {
    fontSize: 20,
    fontWeight: '500',
 
  },
  exerciseSubtitle: {
    color: 'dimgray',
  },
});

