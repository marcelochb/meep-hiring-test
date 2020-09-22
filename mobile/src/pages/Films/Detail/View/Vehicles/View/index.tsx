import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { ModelOfVehicles } from '../Models';
import { useVehiclesController } from '../Controller';
import { Loading } from '@src/components/UI';
import { Texts } from '@src/styles';
import { colors, metrics } from '@src/theme';


export const Vehicles: React.FC<ModelOfVehicles> = ({ vehiclesUrl }) => {
  const { getController } = useVehiclesController(vehiclesUrl);
  if (getController.loading) return (
    <View style={{ height: 200 }}>

      <Loading />
    </View>
  )
  return (
    <React.Fragment>
      <Text style={styles.title}>Veiculos</Text>
      <FlatList
        horizontal
        data={getController.vehicles}
        keyExtractor={(item) => Math.random().toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Text style={Texts.subTitle}>Nome</Text>
            <Text style={styles.textVehicleDetail}>{item.name}</Text>
            <Text style={Texts.subTitle}>Tripulação</Text>
            <Text style={styles.textVehicleDetail}>{item.crew}</Text>
            <Text style={Texts.subTitle}>Modelo</Text>
            <Text style={styles.textVehicleDetail}>{item.model}</Text>
            <Text style={Texts.subTitle}>Classe</Text>
            <Text style={styles.textVehicleDetail}>{item.vehicle_class}</Text>
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
  textVehicleDetail: {
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
