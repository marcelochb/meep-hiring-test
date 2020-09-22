import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Views, Texts } from '@src/styles';
import Logo from '@src/assets/Images/Logo.svg';
import { ButtonBase } from '@src/components/UI';
import { fontSize, metrics } from '@src/theme';
import { useOnboardController } from '../Controller';

export const Onboard: React.FC = () => {
  const { handleController } = useOnboardController();
  return (
    <View style={styles.container}>
      <Logo />
      <View style={Views.content}>
        <Text style={styles.textBody}>
          {`Hiring test para a Meep:
  Criação de um app com React-Native(CLI)
    e Typescript baseado em Star Wars
    consumindo a API citada abaixo.
        BASE_API: http://swapi.dev/api/
  TELAS:
    1. SPLASH:
      a. Deve conter uma arte que o tema
        seja Star Wars (livre)
    2. FILMS:
      a. Listagem do endpoint films (consulte
         a api para detalhes).
      b. Em cada item deve-se conter as
        informações básicas do filme (mín 4)
      c. Ao clicar em um filme, deve-se abrir os
        detalhes do mesmo, mostrando também
        os personagens, planetas, naves,
        veículos e espécies e de cada item
        pode-se abrir os detalhes do mesmo.
        `}</Text>
      </View>
      <View style={Views.content}>
        <ButtonBase
          labelOfButtonBase='Vamos lá!'
          onPress={handleController.submitButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Views.container,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: metrics.large
  },
  textBody: {
    ...Texts.body,
    fontSize: fontSize.small
  },
  button: {
    ...Views.content,
  }
})
