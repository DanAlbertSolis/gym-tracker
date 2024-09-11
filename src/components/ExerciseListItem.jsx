import { View, Text, StyleSheet, } from "react-native";


function ExerciseListItem({item}){
    return(
      <View style={styles.exerciseContainer}>
        <Text style={styles.exerciseName}>{item.name}</Text>
        <Text style={styles.exerciseSubtitle}>
          {item.muscle.toUpperCase()} | {item.equipment.toUpperCase()}
        </Text>
      </View>
    );
  }

  export default ExerciseListItem;

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