import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useFilmsListController } from '../Controller';
import { Views, Texts } from '@src/styles';
import { Loading } from '@src/components/UI';
import { FilmsListCard } from './Card/View';

export const FilmsList: React.FC = () => {
  const { getController, handleController } = useFilmsListController();
  if (getController.loading) return (
    <Loading />
  )
  return (
    <View style={styles.container}>
      <FlatList
        style={Views.content}
        showsVerticalScrollIndicator={false}
        data={getController.films}
        keyExtractor={(item) => item.episode_id.toString()}
        renderItem={({ item }) => (
          <FilmsListCard film={item} handleButton={() => handleController.navigateToFilmsDetail(item)} />
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Views.container,
    alignItems: 'center'
  }
})
