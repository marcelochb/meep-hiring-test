import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { ModelOfStarShips } from '../Models';
import { useStarShipsController } from '../Controller';
import { Loading } from '@src/components/UI';
import { Texts } from '@src/styles';
import { colors, metrics } from '@src/theme';


export const StarShips: React.FC<ModelOfStarShips> = ({ starShipsUrl }) => {
  const { getController } = useStarShipsController(starShipsUrl);
  if (getController.loading) return (
    <View style={{ height: 200 }}>

      <Loading />
    </View>
  )
  return (
    <React.Fragment>
      <Text style={styles.title}>Naves</Text>
      <FlatList
        horizontal
        data={getController.starShips}
        keyExtractor={(item) => Math.random().toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Text style={Texts.subTitle}>Nome</Text>
            <Text style={styles.textStarShipDetail}>{item.name}</Text>
            <Text style={Texts.subTitle}>Tripulação</Text>
            <Text style={styles.textStarShipDetail}>{item.crew}</Text>
            <Text style={Texts.subTitle}>Modelo</Text>
            <Text style={styles.textStarShipDetail}>{item.model}</Text>
            <Text style={Texts.subTitle}>Passageiros</Text>
            <Text style={styles.textStarShipDetail}>{item.passengers}</Text>
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
  textStarShipDetail: {
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
