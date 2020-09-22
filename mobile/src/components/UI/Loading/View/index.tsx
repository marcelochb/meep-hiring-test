import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { Views } from '@src/styles';
import { colors } from '@src/theme';

export const Loading: React.FC = () => {
  return (
    <View style={{ ...Views.containerCenter }} >
      <View >
        <ActivityIndicator color={colors.text} size={"large"} />
      </View>
    </View>
  )
}
