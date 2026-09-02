import Ionicons from '@react-native-vector-icons/ionicons';
import { useState } from 'react';

import {
  Alert,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { AddMealButton } from '../components/AddMealButton';
import { BottomTabs, TabName } from '../components/BottomTabs';
import { MealCard } from '../components/MealCard';
import { NutritionSummary } from '../components/NutritionSummary';
import { nutritionDashboardData } from '../data/mockData';
import { colors } from '../theme/colors';

export function DashboardScreen() {
  const { summary } = nutritionDashboardData;

  // =========================================
  // ESTADOS
  // =========================================

  const [activeTab, setActiveTab] = useState<TabName>('TODAY');

  const [meals, setMeals] = useState(nutritionDashboardData.meals);

  const [modalVisible, setModalVisible] = useState(false);

  const [mealName, setMealName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [calories, setCalories] = useState('');

  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  // =========================================
  // ABRIR FORMULÁRIO
  // =========================================

  function openMealModal() {
    setMealName('');
    setIngredients('');
    setCalories('');
    setModalVisible(true);
  }

  // =========================================
  // ADICIONAR REFEIÇÃO
  // =========================================

  function handleAddMeal() {
    if (!mealName.trim()) {
      Alert.alert('Missing information', 'Enter the meal name.');
      return;
    }

    if (!calories.trim()) {
      Alert.alert('Missing information', 'Enter the calories.');
      return;
    }

    const caloriesNumber = Number(calories);

    if (Number.isNaN(caloriesNumber) || caloriesNumber <= 0) {
      Alert.alert('Invalid calories', 'Enter a valid calorie value.');
      return;
    }

    const ingredientsList = ingredients
      .split(',')
      .map(item => item.trim())
      .filter(item => item.length > 0);

    const newMeal = {
      id: Date.now().toString(),
      title: mealName.trim(),
      ingredients:
        ingredientsList.length > 0 ? ingredientsList : ['No ingredients added'],
      calories: caloriesNumber,
    };

    setMeals(currentMeals => [...currentMeals, newMeal]);

    setModalVisible(false);

    setMealName('');
    setIngredients('');
    setCalories('');

    setActiveTab('TODAY');

    Alert.alert('Success', `${newMeal.title} was added successfully!`);
  }

  // =========================================
  // TODAY
  // =========================================

  function renderToday() {
    return (
      <>
        <View style={styles.mealsSection}>
          <Text style={styles.sectionTitle}>MEALS</Text>

          {meals.map(meal => (
            <MealCard key={meal.id} meal={meal} />
          ))}

          <AddMealButton onPress={openMealModal} />
        </View>

        <View style={styles.logFoodContainer}>
          <Pressable
            style={({ pressed }) => [
              styles.logFoodButton,
              pressed && styles.buttonPressed,
            ]}
            onPress={openMealModal}
          >
            <Text style={styles.logFoodText}>LOG FOOD</Text>
          </Pressable>
        </View>
      </>
    );
  }

  // =========================================
  // HISTORY
  // =========================================

  function renderHistory() {
    return (
      <View style={styles.page}>
        <View style={styles.pageHeader}>
          <Ionicons name="time-outline" size={24} color={colors.primary} />

          <Text style={styles.pageTitle}>Meal History</Text>
        </View>

        <Text style={styles.pageDescription}>
          Your logged meals appear here.
        </Text>

        {meals.length === 0 ? (
          <Text style={styles.emptyText}>No meals logged yet.</Text>
        ) : (
          meals.map(meal => (
            <View key={meal.id} style={styles.historyCard}>
              <View style={styles.historyInformation}>
                <Text style={styles.historyTitle}>{meal.title}</Text>

                <Text style={styles.historyIngredients}>
                  {meal.ingredients.join(', ')}
                </Text>
              </View>

              <Text style={styles.historyCalories}>{meal.calories} kcal</Text>
            </View>
          ))
        )}
      </View>
    );
  }

  // =========================================
  // FOODS
  // =========================================

  function renderFoods() {
    const foods = Array.from(
      new Set(meals.flatMap(meal => [meal.title, ...meal.ingredients])),
    );

    return (
      <View style={styles.page}>
        <View style={styles.pageHeader}>
          <Ionicons
            name="restaurant-outline"
            size={24}
            color={colors.primary}
          />

          <Text style={styles.pageTitle}>Foods</Text>
        </View>

        <Text style={styles.pageDescription}>
          Foods available in your nutrition diary.
        </Text>

        {foods.map((food, index) => (
          <View key={`${food}-${index}`} style={styles.foodCard}>
            <View style={styles.foodIcon}>
              <Ionicons name="leaf-outline" size={18} color={colors.primary} />
            </View>

            <Text style={styles.foodName}>{food}</Text>
          </View>
        ))}

        <Pressable
          style={({ pressed }) => [
            styles.addFoodButton,
            pressed && styles.buttonPressed,
          ]}
          onPress={openMealModal}
        >
          <Ionicons name="add" size={20} color={colors.white} />

          <Text style={styles.addFoodText}>ADD FOOD</Text>
        </Pressable>
      </View>
    );
  }

  // =========================================
  // SETTINGS
  // =========================================

  function renderSettings() {
    return (
      <View style={styles.page}>
        <View style={styles.pageHeader}>
          <Ionicons name="settings-outline" size={24} color={colors.primary} />

          <Text style={styles.pageTitle}>Settings</Text>
        </View>

        <Text style={styles.pageDescription}>
          Customize your NutriTrack experience.
        </Text>

        <View style={styles.settingCard}>
          <View style={styles.settingInformation}>
            <Text style={styles.settingTitle}>Notifications</Text>

            <Text style={styles.settingDescription}>
              Receive meal reminders
            </Text>
          </View>

          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            trackColor={{
              true: colors.primary,
            }}
          />
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.settingCard,
            pressed && styles.buttonPressed,
          ]}
          onPress={() =>
            Alert.alert(
              'Daily Goal',
              'Your nutrition goal is currently active.',
            )
          }
        >
          <View style={styles.settingInformation}>
            <Text style={styles.settingTitle}>Daily nutrition goal</Text>

            <Text style={styles.settingDescription}>
              View your current nutrition goal
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={20}
            color={colors.secondaryText}
          />
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.settingCard,
            pressed && styles.buttonPressed,
          ]}
          onPress={() =>
            Alert.alert('NutriTrack', 'Nutrition tracking application.')
          }
        >
          <View style={styles.settingInformation}>
            <Text style={styles.settingTitle}>About NutriTrack</Text>

            <Text style={styles.settingDescription}>
              Application information
            </Text>
          </View>

          <Ionicons
            name="information-circle-outline"
            size={22}
            color={colors.primary}
          />
        </Pressable>
      </View>
    );
  }

  // =========================================
  // CONTEÚDO POR ABA
  // =========================================

  function renderContent() {
    switch (activeTab) {
      case 'HISTORY':
        return renderHistory();

      case 'FOODS':
        return renderFoods();

      case 'SETTINGS':
        return renderSettings();

      default:
        return renderToday();
    }
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* =========================================
              TOPO
          ========================================= */}

          <View style={styles.topSection}>
            <View style={styles.header}>
              <Text style={styles.logoText}>NutriTrack</Text>

              <Ionicons
                name="leaf"
                size={22}
                color={colors.primary}
                style={styles.leaf}
              />
            </View>

            {/* Resumo aparece somente no Today */}

            {activeTab === 'TODAY' && (
              <NutritionSummary
                caloriesLeft={summary.caloriesLeft}
                dailyGoalPercentage={summary.dailyGoalPercentage}
                macros={summary.macros}
              />
            )}
          </View>

          {/* =========================================
              MENU
          ========================================= */}

          <BottomTabs activeTab={activeTab} onTabPress={setActiveTab} />

          {/* =========================================
              CONTEÚDO
          ========================================= */}

          {renderContent()}
        </ScrollView>

        {/* =========================================
            MODAL PARA ADICIONAR REFEIÇÃO
        ========================================= */}

        <Modal
          visible={modalVisible}
          transparent
          animationType="slide"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Log Food</Text>

                <Pressable
                  style={styles.closeButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Ionicons name="close" size={24} color={colors.text} />
                </Pressable>
              </View>

              <Text style={styles.inputLabel}>Meal name</Text>

              <TextInput
                style={styles.input}
                placeholder="Example: Chicken Salad"
                placeholderTextColor="#9AA19C"
                value={mealName}
                onChangeText={setMealName}
              />

              <Text style={styles.inputLabel}>Ingredients</Text>

              <TextInput
                style={styles.input}
                placeholder="Chicken, lettuce, tomato"
                placeholderTextColor="#9AA19C"
                value={ingredients}
                onChangeText={setIngredients}
              />

              <Text style={styles.inputHelp}>
                Separate ingredients with commas.
              </Text>

              <Text style={styles.inputLabel}>Calories</Text>

              <TextInput
                style={styles.input}
                placeholder="450"
                placeholderTextColor="#9AA19C"
                keyboardType="numeric"
                value={calories}
                onChangeText={setCalories}
              />

              <Pressable
                style={({ pressed }) => [
                  styles.saveButton,
                  pressed && styles.buttonPressed,
                ]}
                onPress={handleAddMeal}
              >
                <Text style={styles.saveButtonText}>SAVE MEAL</Text>
              </Pressable>

              <Pressable
                style={({ pressed }) => [
                  styles.cancelButton,
                  pressed && styles.buttonPressed,
                ]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>CANCEL</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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

  // =========================================
  // HEADER
  // =========================================

  topSection: {
    backgroundColor: '#EDF8F0',
  },

  header: {
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  logoText: {
    fontSize: 23,
    fontWeight: '700',
    color: '#202124',
  },

  leaf: {
    marginLeft: 4,
  },

  // =========================================
  // TODAY
  // =========================================

  mealsSection: {
    paddingHorizontal: 18,
    paddingTop: 16,
  },

  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 10,
  },

  logFoodContainer: {
    alignItems: 'center',
    paddingTop: 3,
    paddingBottom: 10,
  },

  logFoodButton: {
    minWidth: 110,
    height: 40,
    paddingHorizontal: 18,
    borderRadius: 20,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logFoodText: {
    color: colors.white,
    fontSize: 11,
    fontWeight: '700',
  },

  buttonPressed: {
    opacity: 0.7,
  },

  // =========================================
  // OUTRAS TELAS
  // =========================================

  page: {
    paddingHorizontal: 18,
    paddingTop: 22,
    paddingBottom: 30,
  },

  pageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },

  pageTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginLeft: 8,
  },

  pageDescription: {
    fontSize: 12,
    color: colors.secondaryText,
    marginBottom: 20,
  },

  emptyText: {
    textAlign: 'center',
    color: colors.secondaryText,
    marginTop: 30,
  },

  // =========================================
  // HISTORY
  // =========================================

  historyCard: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  historyInformation: {
    flex: 1,
  },

  historyTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },

  historyIngredients: {
    fontSize: 11,
    color: colors.secondaryText,
  },

  historyCalories: {
    marginLeft: 10,
    fontSize: 12,
    fontWeight: '600',
    color: colors.primaryDark,
  },

  // =========================================
  // FOODS
  // =========================================

  foodCard: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 13,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },

  foodIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#EDF8F0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  foodName: {
    fontSize: 13,
    color: colors.text,
    fontWeight: '500',
  },

  addFoodButton: {
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },

  addFoodText: {
    marginLeft: 5,
    color: colors.white,
    fontSize: 12,
    fontWeight: '700',
  },

  // =========================================
  // SETTINGS
  // =========================================

  settingCard: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    minHeight: 68,
    paddingHorizontal: 14,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  settingInformation: {
    flex: 1,
  },

  settingTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
  },

  settingDescription: {
    fontSize: 11,
    color: colors.secondaryText,
    marginTop: 3,
  },

  // =========================================
  // MODAL
  // =========================================

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'flex-end',
  },

  modalContainer: {
    backgroundColor: colors.background,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 30,
  },

  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },

  modalTitle: {
    fontSize: 21,
    fontWeight: '700',
    color: colors.text,
  },

  closeButton: {
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 6,
  },

  input: {
    height: 46,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    borderRadius: 10,
    paddingHorizontal: 12,
    color: colors.text,
    marginBottom: 14,
  },

  inputHelp: {
    fontSize: 10,
    color: colors.secondaryText,
    marginTop: -9,
    marginBottom: 14,
  },

  saveButton: {
    height: 46,
    borderRadius: 23,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },

  saveButtonText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '700',
  },

  cancelButton: {
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },

  cancelButtonText: {
    color: colors.secondaryText,
    fontSize: 12,
    fontWeight: '600',
  },
});
