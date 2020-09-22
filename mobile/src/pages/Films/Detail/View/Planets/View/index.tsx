import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { ModelOfPlanets } from '../Models';
import { useCharactersController } from '../Controller';
import { Loading } from '@src/components/UI';
import { Texts } from '@src/styles';
import { colors, metrics } from '@src/theme';


export const Planets: React.FC<ModelOfPlanets> = ({ planetsUrl }) => {
  const { getController } = useCharactersController(planetsUrl);
  if (getController.loading) return (
    <View style={{ height: 200 }}>

      <Loading />
    </View>
  )
  return (
    <React.Fragment>
      <Text style={styles.title}>Planetas</Text>
      <FlatList
        horizontal
        data={getController.planets}
        keyExtractor={(item) => Math.random().toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Text style={Texts.subTitle}>Nome</Text>
            <Text style={styles.textPlanetDetail}>{item.name}</Text>
            <Text style={Texts.subTitle}>Gravidade</Text>
            <Text style={styles.textPlanetDetail}>{item.gravity}</Text>
            <Text style={Texts.subTitle}>Diametro</Text>
            <Text style={styles.textPlanetDetail}>{item.diameter} meters</Text>
            <Text style={Texts.subTitle}>Clima</Text>
            <Text style={styles.textPlanetDetail}>{item.climate}</Text>
          </View>
        )}
      />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.elementsSecundary,
    borderRadius: metrics.radiusBase,
    padding: metrics.base,
    marginRight: metrics.base,
    marginBottom: metrics.large
  },
  textPlanetDetail: {
    ...Texts.body,
    marginBottom: metrics.base
  },
  title: {
    ...Texts.title,
    color: colors.textHighlight,
    alignSelf: 'center',
    marginBottom: metrics.small
  }
})
