import { StyleSheet, Text, View, ScrollView } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   backgroundColor: '#fff',
  },
  title: {
    color: "white",
    fontSize: 20,
    marginTop: 20,
  },
  ingredStyle: {
    marginTop: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    height:100
  },
  stepsStyle: {
    fontSize: 16,
    padding: 7,
  },
});

export default function Steps({ title, steps, list }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View
        style={
          list ? [styles.ingredStyle,{height:200}] : styles.ingredStyle
        }
      >
        <ScrollView>
          {steps.map((val, index) => {
            if (list) {
              return (
                <Text style={styles.stepsStyle} key={index}>
                  {index + 1}: {val}
                </Text>
              );
            } else {
              return <Text style={styles.IngredStyle} key={index}>{val}</Text>;
            }
          })}
        </ScrollView>
      </View>
    </View>
  );
}
