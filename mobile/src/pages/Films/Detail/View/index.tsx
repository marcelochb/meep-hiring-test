import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useFilmsDetailController } from '../Controller';
import { Views, Texts } from '@src/styles';
import { Loading } from '@src/components/UI';
import { metrics, fontSize } from '@src/theme';
import { Characters } from './Characters/View';
import { Planets } from './Planets/View';
import { Species } from './Species/View';
import { StarShips } from './StarShips/View';
import { Vehicles } from './Vehicles/View';

export const FilmsDetail: React.FC = () => {
  const { getController } = useFilmsDetailController();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.viewFilmDetail}>

        <View style={styles.viewDataItem}>
          <Text style={Texts.subTitle}>Titulo</Text>
          <Text style={styles.textData}>{getController.film.title}</Text>
        </View>
        <View style={styles.viewDataItem}>
          <Text style={Texts.subTitle}>Diretor</Text>
          <Text style={styles.textData}>{getController.film.director}</Text>
        </View>
        <View style={styles.viewDataItem}>
          <Text style={Texts.subTitle}>Produtor</Text>
          <Text style={styles.textData}>{getController.film.producer}</Text>
        </View>
        <View style={styles.viewDataItem}>
          <Text style={Texts.subTitle}>Data</Text>
          <Text style={styles.textData}>{getController.film.release_date}</Text>
        </View>
        <View style={styles.viewDataItem}>
          <Text style={Texts.subTitle}>Descrição</Text>
          <Text style={styles.filmDescription}>{getController.film.opening_crawl}</Text>
        </View>
      </View>
      <Characters charactersUrl={getController.film.characters} />
      <Planets planetsUrl={getController.film.planets} />
      <Species speciesUrl={getController.film.species} />
      <StarShips starShipsUrl={getController.film.starships} />
      <Vehicles vehiclesUrl={getController.film.vehicles} />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    ...Views.container,
  },
  viewFilmDetail: {
    ...Views.content,
    alignSelf: 'center',
    // backgroundColor: '#f00'
  },
  viewDataItem: {
    marginBottom: metrics.base,
    // flex: 1
  },
  textData: {
    ...Texts.body,
    // flex: 1
  },
  filmDescription: {
    ...Texts.body,
    fontSize: fontSize.smallest,
    width: '100%'
  }

})
