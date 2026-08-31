import { StyleSheet, Text, View } from "react-native";
import { colors } from "../theme/colors";

const tabs = ["TODAY", "HISTORY", "FOODS", "SETTINGS"];

export function BottomTabs() {
  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => (
        <View key={tab} style={styles.tab}>
          <Text style={[styles.label, index === 0 && styles.activeLabel]}>
            {tab}
          </Text>

          {index === 0 && <View style={styles.activeIndicator} />}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 54,
    flexDirection: "row",
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },

  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  label: {
    fontSize: 10,
    color: "#9AA19C",
    fontWeight: "500",
  },

  activeLabel: {
    color: colors.primaryDark,
  },

  activeIndicator: {
    position: "absolute",
    bottom: 0,
    width: 48,
    height: 2,
    backgroundColor: colors.primary,
  },
});
