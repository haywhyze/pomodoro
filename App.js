import React, {useState, useEffect} from 'react';
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

let currentTime;

const App = () => {
  const [countDown, setCountDown] = useState(countDown || null);

  const [timer, setTimer] = useState(0);

  // const [currentTime, setCurrentTime] = useState(25 * 60 * 1000);
  const [minutes, setMinutes] = useState(
    (minutes || 25).toLocaleString('en-US', {
      minimumIntegerDigits: 2,
    }),
  );
  const [seconds, setSeconds] = useState(
    (seconds || 0).toLocaleString('en-US', {
      minimumIntegerDigits: 2,
    }),
  );

  function updateTime(num, func) {
    func(
      num.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
      }),
    );
  }

  function startCountdown(time) {
    if (!time) {
      time = timer || 25 * 60 * 1000;
    }
    const countDownTime = new Date().getTime() + time;
    if (countDown) {
      clearInterval(countDown);
    }

    setCountDown(
      setInterval(() => {
        const now = new Date().getTime();

        currentTime = countDownTime - now;

        updateTime(
          Math.floor((currentTime % (1000 * 60 * 60)) / (1000 * 60)),
          setMinutes,
        );
        updateTime(Math.floor((currentTime % (1000 * 60)) / 1000), setSeconds);

        if (currentTime < 0) {
          stopCountdown();
          resetCountdown();
        }
      }, 500),
    );
  }

  function stopCountdown() {
    clearInterval(countDown);
    setCountDown(null);
  }

  function resetCountdown() {
    updateTime(0, setMinutes);
    updateTime(0, setSeconds);
    currentTime = timer * 60 * 1000;
  }

  function reset() {
    stopCountdown();
    resetCountdown();
  }

  function start() {
    if (!countDown) {
      startCountdown(currentTime);
    }
  }

  useEffect(() => {
    currentTime = timer * 60 * 1000;
    if (timer) {
      startCountdown(currentTime);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer]);

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
                <TopBar setTimer={setTimer} start={start} reset={reset} />
              </View>
              <View style={styles.displayContainer}>
                <Text style={styles.display}>
                  <Text>{minutes}</Text>
                  <Text>:</Text>
                  <Text>{seconds}</Text>
                </Text>
              </View>
              <View style={styles.controls}>
                <TouchableOpacity onPress={start}>
                  <Icon name="controller-play" size={48} color="#274fed" />
                </TouchableOpacity>
                <TouchableOpacity onPress={stopCountdown}>
                  <Icon name="controller-stop" size={48} color="#274fed" />
                </TouchableOpacity>
                <TouchableOpacity onPress={reset}>
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
