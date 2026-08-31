import { NutritionDashboardData } from "../types/nutrition";

export const nutritionDashboardData: NutritionDashboardData = {
  summary: {
    caloriesLeft: 1500,
    dailyGoalPercentage: 79,
    macros: [
      {
        name: "Protein",
        current: 80,
        goal: 120,
        unit: "g",
      },
      {
        name: "Carbs",
        current: 200,
        goal: 250,
        unit: "g",
      },
      {
        name: "Fat",
        current: 50,
        goal: 70,
        unit: "g",
      },
    ],
  },

  meals: [
    {
      id: "1",
      title: "Oatmeal with berries",
      ingredients: ["2% Milk", "Almonds"],
      calories: 380,
    },
    {
      id: "2",
      title: "Grilled Chicken Salad",
      ingredients: ["Whole Wheat Bread", "Olive Oil Dressing"],
      calories: 450,
    },
  ],
};
