import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import TopBar from './components/TopBar';
import Icon from 'react-native-vector-icons/Entypo';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Pomodoro Timer</Text>
              <View style={styles.topNav}>
                <TopBar />
              </View>
              <View style={styles.displayContainer}>
                <Text style={styles.display}>00:00</Text>
              </View>
              <View style={styles.controls}>
                <TouchableOpacity>
                  <Icon name="controller-play" size={48} color="#274fed" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon name="controller-stop" size={48} color="#274fed" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon name="cycle" size={48} color="#274fed" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {},
  body: {},
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  topNav: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  displayContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 32,
  },
  display: {
    backgroundColor: '#999',
    fontSize: 72,
    padding: 16,
    paddingTop: 0,
    paddingBottom: 0,
    textAlign: 'center',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default App;
