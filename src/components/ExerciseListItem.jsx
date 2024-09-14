import { View, Text, StyleSheet, } from "react-native";


function ExerciseListItem({item}){
    return(
      <View style={styles.exerciseContainer}>
        <Text style={styles.exerciseName}>{item.name}</Text>
        <Text style={styles.exerciseSubtitle}>
          <Text style={styles.subvalue}>{item.muscle}</Text> | <Text style={styles.subvalue}>{item.equipment}</Text>
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

        //shadow
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      },
    exerciseName: {
      fontSize: 20,
      fontWeight: '500',
  
    },
    exerciseSubtitle: {
      color: 'dimgray',
    },

    subvalue: {
      textTransform: 'capitalize',
    }
  });

