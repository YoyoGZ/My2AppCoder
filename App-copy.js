import { StyleSheet, SafeAreaView, StatusBar, Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font'

import Home from './.expo/src/screens/Home';
import Header from './.expo/src/components/Header';
import {colors} from './.expo/src/global/colors'
import ItemListMarcas from './.expo/src/screens/ItemListMarcas';
import ItemDetail from './.expo/src/screens/ItemDetail';



const Stack = createNativeStackNavigator();

export default function App() {

// ------- Carga de Fuentes ------ 
const [fontsLoaded, fontError] = useFonts({
  'Nunito': require('./assets/fonts/NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf')
});

if (!fontsLoaded && !fontError) {
  return null;
}

  return (
    <SafeAreaView style={styles.container}>
       <NavigationContainer>
          <Stack.Navigator initialRouteName="Home"
            screenOptions={ ({route})=> ({
              header: () => {
                return (
                  <Header style={styles.head}
                    title={
                      route.name === 'Home' 
                      ? "Marcas Disponibles"
                      : route.name === "ItemListMarcas"
                      ? route.params.vehiculo
                      : "Detalle del Vehículo"
                    }
                  />
                )
              }
            })}
          >
            <Stack.Screen name= "Home" component={Home}/>
            <Stack.Screen name= "ItemListMarcas" component={ItemListMarcas}/>
            <Stack.Screen name= "ItemDetail" component={ItemDetail}/>
          </Stack.Navigator>
       </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.lightblue,
    alignItems: 'center',
    paddingTop:60
  },
  head:{
    fontSize: 6,
    color: colors.black,
    fontWeight: 600,

  },
});
