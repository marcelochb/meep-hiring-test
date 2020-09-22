import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { Provider, Portal, Dialog } from 'react-native-paper';
import { ModelOfLoadingButton } from '../Models';
import { colors } from '@src/theme';



export const LoadingButton: React.FC<ModelOfLoadingButton> = (props) => {
  const { loading = false } = props;
  return (
    <Provider>
      <Portal theme={{ colors: { backdrop: 'transparent' } }}>
        <Dialog style={styles.modal} visible={loading}>
          <ActivityIndicator color="#fff" size="large" />
        </Dialog>
      </Portal>
    </Provider>
  );
}

const styles = StyleSheet.create({
  modal: {
    height: 150,
    width: 150,
    paddingHorizontal: 20,
    alignSelf: 'center',
    borderRadius: 16,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
