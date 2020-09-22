import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ModelOfFilmsListCard } from '../Models';
import { Views, Texts } from '@src/styles';
import { metrics, colors } from '@src/theme';
import IconArrowRight from '@src/assets/Icons/IconArrowRight.svg';
import { TouchableRipple } from 'react-native-paper';


export const FilmsListCard: React.FC<ModelOfFilmsListCard> = ({ film, handleButton }) => {
  return (
    <TouchableRipple style={styles.container} onPress={handleButton}>
      <React.Fragment>
        <View style={styles.viewData}>
          <View style={styles.viewDataItem}>
            <Text style={Texts.subTitle}>Titulo</Text>
            <Text style={styles.textData}>{film.title}</Text>
          </View>
          <View style={styles.viewDataItem}>
            <Text style={Texts.subTitle}>Diretor</Text>
            <Text style={styles.textData}>{film.director}</Text>
          </View>
          <View style={styles.viewDataItem}>
            <Text style={Texts.subTitle}>Produtor</Text>
            <Text style={styles.textData}>{film.producer}</Text>
          </View>
          <View style={styles.viewDataItem}>
            <Text style={Texts.subTitle}>Data</Text>
            <Text style={styles.textData}>{film.release_date}</Text>
          </View>
        </View>
        <View style={styles.viewButton}>
          <IconArrowRight />
        </View>
      </React.Fragment>
    </TouchableRipple>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Views.container,
    padding: metrics.base,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.elementsSecundary,
    marginBottom: metrics.base,
    borderRadius: metrics.radiusBase
  },
  viewData: {
    flex: 3,
  },
  viewDataItem: {
    marginBottom: metrics.base
  },
  textData: {
    ...Texts.body,
    flex: 1
  },
  viewButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }

})
