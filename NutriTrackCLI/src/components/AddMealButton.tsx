import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../theme/colors";

interface AddMealButtonProps {
  onPress?: () => void;
}

export function AddMealButton({ onPress }: AddMealButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <View style={styles.icon}>
        <Text style={styles.plus}>+</Text>
      </View>

      <Text style={styles.label}>Add Meal</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 66,
    borderRadius: 10,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },

  pressed: {
    opacity: 0.7,
  },

  icon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 3,
  },

  plus: {
    fontSize: 25,
    lineHeight: 28,
    color: colors.white,
    fontWeight: "300",
  },

  label: {
    fontSize: 11,
    color: colors.secondaryText,
  },
});
