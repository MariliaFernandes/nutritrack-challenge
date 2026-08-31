export interface Macro {
  name: "Protein" | "Carbs" | "Fat";
  current: number;
  goal: number;
  unit: "g";
}

export interface Meal {
  id: string;
  title: string;
  ingredients: string[];
  calories: number;
}

export interface NutritionSummaryData {
  caloriesLeft: number;
  dailyGoalPercentage: number;
  macros: Macro[];
}

export interface NutritionDashboardData {
  summary: NutritionSummaryData;
  meals: Meal[];
}
