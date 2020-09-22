import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { ModelOfSpecies } from '../Models';
import { useSpeciesController } from '../Controller';
import { Loading } from '@src/components/UI';
import { Texts } from '@src/styles';
import { colors, metrics } from '@src/theme';


export const Species: React.FC<ModelOfSpecies> = ({ speciesUrl }) => {
  const { getController } = useSpeciesController(speciesUrl);
  if (getController.loading) return (
    <View style={{ height: 200 }}>

      <Loading />
    </View>
  )
  return (
    <React.Fragment>
      <Text style={styles.title}>Especies</Text>
      <FlatList
        horizontal
        data={getController.species}
        keyExtractor={(item) => Math.random().toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Text style={Texts.subTitle}>Nome</Text>
            <Text style={styles.textSpecieDetail}>{item.name}</Text>
            <Text style={Texts.subTitle}>Designação</Text>
            <Text style={styles.textSpecieDetail}>{item.designation}</Text>
            <Text style={Texts.subTitle}>Classificação</Text>
            <Text style={styles.textSpecieDetail}>{item.classification}</Text>
            <Text style={Texts.subTitle}>Ligua</Text>
            <Text style={styles.textSpecieDetail}>{item.language}</Text>
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
  textSpecieDetail: {
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
