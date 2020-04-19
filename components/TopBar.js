import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Button from 'react-native-button';

const NavBarEdit = () => {
  const [activeButton, setActiveButton] = useState({
    pomodoro: true,
    short: false,
    long: false,
  });
  return (
    <View style={styles.container}>
      <Button
        onPress={() =>
          setActiveButton({
            pomodoro: true,
            short: false,
            long: false,
          })
        }
        style={StyleSheet.flatten([
          styles.tab,
          activeButton.pomodoro && styles.active,
        ])}
        containerStyle={StyleSheet.flatten([
          styles.tabContainer,
          activeButton.pomodoro && styles.activeContainer,
        ])}>
        Pomodoro
      </Button>
      <Button
        onPress={() =>
          setActiveButton({
            pomodoro: false,
            short: true,
            long: false,
          })
        }
        style={StyleSheet.flatten([
          styles.tab,
          activeButton.short && styles.active,
        ])}
        containerStyle={StyleSheet.flatten([
          styles.tabContainer,
          activeButton.short && styles.activeContainer,
        ])}>
        Short Break
      </Button>
      <Button
        onPress={() =>
          setActiveButton({
            pomodoro: false,
            short: false,
            long: true,
          })
        }
        style={StyleSheet.flatten([
          styles.tab,
          activeButton.long && styles.active,
        ])}
        containerStyle={StyleSheet.flatten([
          styles.tabContainer,
          activeButton.long && styles.activeContainer,
        ])}>
        Long Break
      </Button>
    </View>
  );
};

export default NavBarEdit;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: '#eaeefd',
    borderRadius: 8,
    flexDirection: 'row',
  },
  tab: {
    borderRadius: 5,
    fontSize: 14,
    color: '#777',
  },
  tabContainer: {
    marginTop: 8,
    marginBottom: 8,
    paddingTop: 2,
    paddingBottom: 2,
    width: '33.3%',
    borderRightWidth: 1,
    borderRightColor: '#eaeefd',
    backgroundColor: '#fff',
  },
  active: {
    color: 'white',
  },
  activeContainer: {
    marginTop: 0,
    marginBottom: 0,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
    backgroundColor: '#274fed',
  },
});
