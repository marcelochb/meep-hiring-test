import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { ModelOfCharacters } from '../Models';
import { useCharactersController } from '../Controller';
import { Loading } from '@src/components/UI';
import { Texts } from '@src/styles';
import { colors, metrics } from '@src/theme';


export const Characters: React.FC<ModelOfCharacters> = ({ charactersUrl }) => {
  const { getController } = useCharactersController(charactersUrl);
  if (getController.loading) return (
    <View style={{ height: 200 }}>

      <Loading />
    </View>)
  return (
    <React.Fragment>
      <Text style={styles.title}>Personagens</Text>
      <FlatList
        horizontal
        data={getController.characters}
        keyExtractor={(item) => Math.random().toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Text style={Texts.subTitle}>Nome</Text>
            <Text style={styles.textCharacterDetail}>{item.name}</Text>
            <Text style={Texts.subTitle}>Ano do nascimento</Text>
            <Text style={styles.textCharacterDetail}>{item.birth_year}</Text>
            <Text style={Texts.subTitle}>Gênero</Text>
            <Text style={styles.textCharacterDetail}>{item.gender}</Text>
            <Text style={Texts.subTitle}>Altura</Text>
            <Text style={styles.textCharacterDetail}>{item.height} cm</Text>
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
  textCharacterDetail: {
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
