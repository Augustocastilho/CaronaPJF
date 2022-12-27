import { SafeAreaView, StyleSheet } from 'react-native';
import Routes from './src/routes/Routes';
import { LoggedOut } from './src/screens/LoggedOut';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
