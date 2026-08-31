import { StyleSheet, Text, View } from "react-native";
import { colors } from "../theme/colors";
import { Meal } from "../types/nutrition";

interface MealCardProps {
  meal: Meal;
}

export function MealCard({ meal }: MealCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.title}>{meal.title}</Text>

        {meal.ingredients.map((ingredient) => (
          <Text key={ingredient} style={styles.ingredient}>
            {ingredient}
          </Text>
        ))}
      </View>

      <Text style={styles.calories}>{meal.calories} kcal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 82,
    backgroundColor: colors.surface,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 13,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  content: {
    flex: 1,
    paddingRight: 10,
  },

  title: {
    fontSize: 13,
    fontWeight: "500",
    color: colors.text,
    marginBottom: 3,
  },

  ingredient: {
    fontSize: 11,
    color: colors.secondaryText,
    lineHeight: 16,
  },

  calories: {
    fontSize: 12,
    color: colors.text,
    fontWeight: "500",
  },
});
