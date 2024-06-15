import { useCallback, useState } from 'react'
import { StyleSheet, View } from 'react-native';

import Home from './.expo/src/screens/Home';
import Header from './.expo/src/components/Header';
import {colors} from './.expo/src/global/colors'

import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import ItemListMarcas from './.expo/src/screens/itemListMarcas';

export default function App() {
// ------- Carga de Fuentes ------ 
const [fontsLoaded, fontError] = useFonts({
  'Nunito': require('./assets/fonts/NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf'),
  // 'Roboto': require('assets/fonts/Roboto-Regular.ttf'),
  // 'Rubik': require('assets/fonts/Rubik-VariableFont_wght.ttf')
});

const onLayoutRootView = useCallback(async () => {
  if (fontsLoaded || fontError) {
    await SplashScreen.hideAsync();
  }
}, [fontsLoaded, fontError]);

const [marcaSelected, setMarcaSelected] = useState ("");

  return (
    <View style={styles.container}>
      <Header title="Titulo" />
      {/* Mostrar Home o Categoria seleccionada */}
      {!marcaSelected ? (
        <Home setMarcaSelected={setMarcaSelected} />
      ) : (
        <ItemListMarcas setMarcaSelected={setMarcaSelected} marcaSelected={marcaSelected} />
      )}
          
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightblue,
    alignItems: 'center',
    paddingTop: 60,
  },
});
