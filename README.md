# 🥗 NutriTrack Challenge

A React Native implementation of a nutrition dashboard developed as part of a technical challenge.

The application presents a daily nutrition overview, including calorie progress, macronutrient tracking, meal information, and navigation elements.

## 📱 Preview

### Original reference

<img width="1168" height="892" alt="NutriTrack dashboard reference" src="https://github.com/user-attachments/assets/3b198a6c-3570-4768-92c9-a429b0055b34" />

### React Native CLI implementation

<img width="384" height="860" alt="NutriTrack React Native CLI implementation" src="https://github.com/user-attachments/assets/e0518566-9836-4d77-a7d5-76dc09997a6c" />

The dashboard was recreated using React Native CLI and TypeScript, with reusable components, TypeScript interfaces, mock data, progress indicators, and the requested UI layout.

---

## 🚀 Technologies

This project was built using:

* ⚛️ React Native
* 🔷 TypeScript
* 📱 React Native CLI
* 🧭 React Native Safe Area Context
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

Key concepts used in the project include:

* Component-based architecture
* TypeScript interfaces
* Mock data
* Reusable UI components
* React Native styling
* Native Android and iOS project structure

---

## 💻 Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Android Studio and Android SDK for Android development
* React Native CLI development environment

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

### Running on Android

Make sure an Android emulator or physical Android device is available, then run:

```bash
npm run android
```

The application can also be started with:

```bash
npm start
```

and then launched on the connected Android device.

---

## 🎯 Challenge Requirements

This project was developed based on the requirements provided for the technical challenge:

* React Native implementation
* TypeScript usage
* Nutrition dashboard interface
* Mock data for meals and nutrition information
* Progress indicators
* Clean component architecture
* Accurate implementation of the provided UI layout

---

## 🧪 Validation

The project was validated using:

```bash
npx tsc --noEmit
```

The TypeScript compilation completed successfully.

The Android application was also built and installed successfully on an Android emulator.

---

## 🧠 Development Approach

The implementation focused on creating a clean, reusable, and maintainable React Native interface while accurately reproducing the provided dashboard design.

The project emphasizes:

* Clear component organization
* Reusable UI elements
* TypeScript type safety
* Mock data separation
* Readable and maintainable code
* Accurate visual implementation
* Native React Native CLI setup

---

## 👩‍💻 Author

**Marília Fernandes**

Junior React Native Developer

---

Thank you for taking the time to review this project! 🚀
