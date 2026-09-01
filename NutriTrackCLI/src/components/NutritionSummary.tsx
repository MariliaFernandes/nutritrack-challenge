import { StyleSheet, Text, View } from "react-native";
import { colors } from "../theme/colors";
import { Macro } from "../types/nutrition";
import { MacroProgress } from "./MacroProgress";

interface NutritionSummaryProps {
  caloriesLeft: number;
  dailyGoalPercentage: number;
  macros: Macro[];
}

export function NutritionSummary({
  caloriesLeft,
  dailyGoalPercentage,
  macros,
}: NutritionSummaryProps) {
  return (
    <View style={styles.container}>
      <View style={styles.caloriesContainer}>
        <Text style={styles.goalText}>
          {dailyGoalPercentage}% of daily goal
        </Text>

        <View style={styles.circle}>
          <Text style={styles.calories}>{caloriesLeft}</Text>
          <Text style={styles.unit}>kcal left</Text>
        </View>
      </View>

      <View style={styles.macrosContainer}>
        {macros.map((macro) => (
          <MacroProgress key={macro.name} macro={macro} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
    backgroundColor: "#EDF8F0",
  },

  caloriesContainer: {
    width: "43%",
    alignItems: "center",
  },

  goalText: {
    fontSize: 11,
    color: colors.secondaryText,
    marginBottom: 8,
  },

  circle: {
    width: 105,
    height: 105,
    borderRadius: 53,
    borderWidth: 8,
    borderColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.surface,
  },

  calories: {
    fontSize: 23,
    fontWeight: "700",
    color: colors.text,
  },

  unit: {
    marginTop: 2,
    fontSize: 11,
    color: colors.secondaryText,
  },

  macrosContainer: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 10,
  },
});
