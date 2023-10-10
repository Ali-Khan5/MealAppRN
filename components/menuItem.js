import { StyleSheet, Text, View, Pressable, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    //   flex: 1,
    //   backgroundColor: '#fff',

    height: 140,
    width: 140,
    margin: 10,

    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, heigh: 2 },
    shadowRadius: 8,
    elevation: 5,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  menuLabel: {
    fontWeight: "bold",
    fontSize: 18,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  pressable: {
    flex: 1,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 9,
    elevation: 9,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
});

export default function MenuItem({ name, color, onPress }) {
  return (
    <View style={styles.container}>
      <Pressable
        //important note, Pressable needs flex 1 to work and its child needs flex 1 to take all the available space
        style={({ pressed }) => [
          styles.pressable,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[{ backgroundColor: color }, styles.button]}>
          <Text style={styles.menuLabel}>{name}</Text>
        </View>
      </Pressable>
    </View>
  );
}
