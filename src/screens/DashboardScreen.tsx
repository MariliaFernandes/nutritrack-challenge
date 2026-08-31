import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AddMealButton } from "../components/AddMealButton";
import { BottomTabs } from "../components/BottomTabs";
import { MealCard } from "../components/MealCard";
import { NutritionSummary } from "../components/NutritionSummary";
import { nutritionDashboardData } from "../data/mockData";
import { colors } from "../theme/colors";

export function DashboardScreen() {
  const { summary, meals } = nutritionDashboardData;

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* =========================================
              TOPO + RESUMO NUTRICIONAL
          ========================================= */}

          <View style={styles.topSection}>
            {/* Logo */}

            <View style={styles.header}>
              <Text style={styles.logoText}>NutriTrack</Text>

              <Ionicons
                name="leaf"
                size={22}
                color={colors.primary}
                style={styles.leaf}
              />
            </View>

            {/* Calorias + Macros */}

            <NutritionSummary
              caloriesLeft={summary.caloriesLeft}
              dailyGoalPercentage={summary.dailyGoalPercentage}
              macros={summary.macros}
            />
          </View>

          {/* =========================================
              MENU DE NAVEGAÇÃO
          ========================================= */}

          <BottomTabs />

          {/* =========================================
              REFEIÇÕES
          ========================================= */}

          <View style={styles.mealsSection}>
            <Text style={styles.sectionTitle}>MEALS</Text>

            {meals.map((meal) => (
              <MealCard key={meal.id} meal={meal} />
            ))}

            <AddMealButton />
          </View>

          {/* =========================================
              BOTÃO LOG FOOD
          ========================================= */}

          <View style={styles.logFoodContainer}>
            <View style={styles.logFoodButton}>
              <Text style={styles.logFoodText}>LOG FOOD</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  /* =========================================
     TELA
  ========================================= */

  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },

  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  scrollContent: {
    paddingBottom: 18,
  },

  /* =========================================
     TOPO VERDE
  ========================================= */

  topSection: {
    backgroundColor: "#EDF8F0",
  },

  /* =========================================
     LOGO
  ========================================= */

  header: {
    height: 65,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  logoText: {
    fontSize: 23,
    fontWeight: "700",
    color: "#202124",
  },

  leaf: {
    marginLeft: 4,
  },

  /* =========================================
     MEALS
  ========================================= */

  mealsSection: {
    paddingHorizontal: 18,
    paddingTop: 16,
  },

  sectionTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 10,
  },

  /* =========================================
     LOG FOOD
  ========================================= */

  logFoodContainer: {
    alignItems: "center",
    paddingTop: 3,
    paddingBottom: 10,
  },

  logFoodButton: {
    width: 100,
    height: 38,
    borderRadius: 20,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },

  logFoodText: {
    color: colors.white,
    fontSize: 11,
    fontWeight: "700",
  },
});
