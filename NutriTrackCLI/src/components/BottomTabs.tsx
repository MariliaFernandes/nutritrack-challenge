import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

export type TabName = 'TODAY' | 'HISTORY' | 'FOODS' | 'SETTINGS';

interface BottomTabsProps {
  activeTab: TabName;
  onTabPress: (tab: TabName) => void;
}

const tabs: TabName[] = ['TODAY', 'HISTORY', 'FOODS', 'SETTINGS'];

export function BottomTabs({ activeTab, onTabPress }: BottomTabsProps) {
  return (
    <View style={styles.container}>
      {tabs.map(tab => {
        const active = activeTab === tab;

        return (
          <Pressable
            key={tab}
            style={({ pressed }) => [styles.tab, pressed && styles.pressed]}
            onPress={() => onTabPress(tab)}
          >
            <Text style={[styles.label, active && styles.activeLabel]}>
              {tab}
            </Text>

            {active && <View style={styles.activeIndicator} />}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 54,
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },

  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  pressed: {
    opacity: 0.6,
  },

  label: {
    fontSize: 10,
    color: '#9AA19C',
    fontWeight: '500',
  },

  activeLabel: {
    color: colors.primaryDark,
    fontWeight: '700',
  },

  activeIndicator: {
    position: 'absolute',
    bottom: 0,
    width: 48,
    height: 2,
    backgroundColor: colors.primary,
  },
});
