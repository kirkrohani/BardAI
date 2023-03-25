import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.headerTextStyle}>Bard AI</Text>
      </View>
      <View style={styles.questionContainer}>
        <Text style={styles.normalTextStyle}>Enter prompt here: </Text>
      </View>
      <View style={styles.responseContainer}>
        <Text style={styles.normalTextStyle}>AI response here: </Text>
      </View>
      <View style={styles.footerContainer} />
    </SafeAreaView>
    <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  headerTextStyle: {
    color: 'black',
    fontSize: 20,
    textAlign: 'left',
  },
 normalTextStyle: {
    color: 'black',
    fontSize: 15,
    textAlign: 'left',
    padding: 10
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'maroon',
  },
  topContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: '5%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  questionContainer: {
    backgroundColor: 'lightgreen',
    width: '100%',
    height: '10%',
    justifyContent: 'center',

  },
  responseContainer: {
    backgroundColor: 'lightblue',
    width: '100%',
    height: '80%'
  },
  footerContainer: {
    backgroundColor: 'darkgreen',
    width: '100%',
    height: '5%'
  },
});
