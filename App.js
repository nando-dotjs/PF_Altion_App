import React from 'react';
import { StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';
import * as SplashScreen from 'expo-splash-screen';

// Prevent native splash screen from autohiding before App component declaration
SplashScreen.preventAutoHideAsync()
  .then(result => console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`))
  .catch(console.warn); // it's good to explicitly catch and inspect any error

export default function App() {

  setTimeout(async () => {
    await SplashScreen.hideAsync();
  }, 3000);

  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://unidosporlaclasificacion.onrender.com/' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
