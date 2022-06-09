import React, { useCallback } from 'react';
import { Switch, Text, View } from 'react-native';
import {
  mockTheme,
  useAppThemeFromContext,
} from '../../../../../../util/theme';
import { createStyles } from './styles';
import { colors as importedColors } from '../../../../../../styles/common';

interface SecurityOptionsToggleProps {
  title: string;
  description?: string;
  value: boolean;
  onOptionUpdated: (enabled: boolean) => void;
  testId: string;
}

const SecurityOptionToggle = ({
  title,
  description,
  value,
  testId,
  onOptionUpdated,
}: SecurityOptionsToggleProps) => {
  const { colors } = useAppThemeFromContext() || mockTheme;
  const styles = createStyles(colors);

  const handleOnValueChange = useCallback(
    (newValue: boolean) => {
      onOptionUpdated(newValue);
    },
    [onOptionUpdated],
  );
  return (
    <View style={styles.setting} testID={testId}>
      <Text style={styles.title}>{title}</Text>
      {description ? <Text style={styles.desc}>{description}</Text> : null}
      <View style={styles.switchElement}>
        <Switch
          value={value}
          onValueChange={(newValue: boolean) => handleOnValueChange(newValue)}
          trackColor={{
            true: colors.primary.default,
            false: colors.border.muted,
          }}
          thumbColor={importedColors.white}
          style={styles.switch}
          ios_backgroundColor={colors.border.muted}
        />
      </View>
    </View>
  );
};

export default React.memo(SecurityOptionToggle);
