/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {colors} from '../../../constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

const OnBoardingItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {item.icon === 'verified' ? (
          <MaterialIcons name={item.icon} color={colors.black} size={100} />
        ) : item.icon === 'watch' ? (
          <Feather name={item.icon} color={colors.black} size={100} />
        ) : item.icon === 'stopwatch' ? (
          <Entypo name={item.icon} color={colors.black} size={100} />
        ) : null}
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 10,
    color: colors.black,
    textAlign: 'center',
  },
  description: {
    fontWeight: '300',
    color: '#62656b',
    textAlign: 'center',
    paddingHorizontal: 30,
    maxWidth: 350, // Adjust this for text padding
  },
});

export default OnBoardingItem;
