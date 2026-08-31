import { StyleSheet, Text, View } from "react-native";
import { colors } from "../theme/colors";
import { Macro } from "../types/nutrition";

interface MacroProgressProps {
  macro: Macro;
}

export function MacroProgress({ macro }: MacroProgressProps) {
  const progress = Math.min(macro.current / macro.goal, 1);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>{macro.name}</Text>

        <Text style={styles.value}>
          {macro.current}
          {macro.unit} / {macro.goal}
          {macro.unit}
        </Text>
      </View>

      <View style={styles.track}>
        <View
          style={[
            styles.progress,
            {
              width: `${progress * 100}%`,
            },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },

  name: {
    fontSize: 13,
    color: colors.text,
    fontWeight: "500",
  },

  value: {
    fontSize: 12,
    color: colors.secondaryText,
  },

  track: {
    height: 7,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: colors.progressBackground,
  },

  progress: {
    height: "100%",
    borderRadius: 8,
    backgroundColor: colors.primary,
  },
});
