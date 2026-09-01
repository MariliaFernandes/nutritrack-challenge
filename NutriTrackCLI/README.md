# 🥗 NutriTrack Challenge — React Native CLI

A React Native implementation of a nutrition dashboard developed as part of a technical challenge.

The application presents a daily nutrition overview, including calorie progress, macronutrient tracking, meal information, and bottom navigation.

## 📱 Preview

### Original reference

<img width="1168" height="892" alt="NutriTrack dashboard reference" src="https://github.com/user-attachments/assets/3b198a6c-3570-4768-92c9-a429b0055b34" />

### React Native CLI implementation

<img width="384" height="860" alt="NutriTrack React Native CLI implementation" src="https://github.com/user-attachments/assets/e0518566-9836-4d77-a7d5-76dc09997a6c" />

The dashboard was recreated using React Native CLI and TypeScript, with reusable components, TypeScript interfaces, mock data, progress indicators, and the requested UI layout.

---

## 🚀 Technologies

* ⚛️ React Native
* 📱 React Native CLI
* 🔷 TypeScript
* 🛡️ React Native Safe Area Context
* ⭐ React Native Vector Icons

---

## ✨ Features

* Daily nutrition summary
* Calorie progress indicator
* Macronutrient progress tracking
* Protein progress bar
* Carbohydrates progress bar
* Fat progress bar
* Meal list populated with mock data
* Add Meal component
* Log Food button
* Bottom navigation interface
* Responsive mobile layout

---

## 🏗️ Project Structure

The application is organized using reusable components and TypeScript interfaces to keep the code maintainable and easy to extend.

```text
NutriTrackCLI/
├── android/
├── ios/
├── src/
│   ├── components/
│   │   ├── AddMealButton.tsx
│   │   ├── BottomTabs.tsx
│   │   ├── MacroProgress.tsx
│   │   ├── MealCard.tsx
│   │   └── NutritionSummary.tsx
│   ├── data/
│   │   └── mockData.ts
│   ├── screens/
│   │   └── DashboardScreen.tsx
│   ├── theme/
│   │   └── colors.ts
│   └── types/
│       └── nutrition.ts
├── App.tsx
├── package.json
└── tsconfig.json
```

### Architecture

The implementation follows a component-based architecture with a clear separation between:

* UI components
* Screen-level components
* Mock data
* TypeScript interfaces
* Theme and styling

This structure makes the application easier to maintain and extend.

---

## 💻 Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Android Studio
* Android SDK
* Android Emulator or a physical Android device

For React Native CLI environment setup, follow the official React Native documentation.

### Installation

Clone the repository:

```bash
git clone https://github.com/MariliaFernandes/nutritrack-challenge.git
```

Navigate to the React Native CLI project:

```bash
cd nutritrack-challenge/NutriTrackCLI
```

Install dependencies:

```bash
npm install
```

### Running the application

Start Metro:

```bash
npm start
```

In another terminal, run the Android application:

```bash
npm run android
```

The application can also be launched directly from Android Studio using the included native Android project.

---

## 🧪 Validation

The project was validated using TypeScript:

```bash
npx tsc --noEmit
```

TypeScript compilation completed successfully.

The Android application was also built and installed successfully on an Android emulator.

---

## 🎯 Challenge Requirements

This implementation addresses the requested challenge requirements:

* React Native implementation
* React Native CLI
* TypeScript
* Nutrition dashboard interface
* Mock data for meals and nutrition information
* Progress indicators
* Clean component architecture
* TypeScript interfaces
* Accurate implementation of the provided UI layout

---

## 🧠 Development Approach

The implementation focused on creating a clean, reusable, and maintainable React Native interface while accurately reproducing the provided dashboard design.

The project emphasizes:

* Clear component organization
* Reusable UI elements
* TypeScript type safety
* Separation of mock data from UI components
* Readable and maintainable code
* Accurate visual implementation
* Native React Native CLI project structure

---

## 👩‍💻 Author

**Marília Fernandes**

Junior React Native Developer

---

Thank you for taking the time to review this project! 🚀
