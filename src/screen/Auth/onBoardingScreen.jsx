/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AppIntroSlider from 'react-native-app-intro-slider';
import {colors} from '../../constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import {fontFamily} from '../../constants/fonts';
import Screen from '../../components/Screen';

const slides = [
  {
    key: 1,
    title: 'Verified',
    text: 'All watches listed here are verified. You can easily verify them',
    icon: <MaterialIcons name={'verified'} color={colors.black} size={200} />,
  },
  {
    key: 2,
    title: 'Smart Watch',
    text: 'People who are looking for a smart watch can easily find them here.',
    icon: <Feather name={'watch'} color={colors.black} size={200} />,
  },
  {
    key: 3,
    title: 'Recommended',
    text: 'Watches that are recommended to you are listed here. You can easily buy them.',
    icon: <Entypo name={'stopwatch'} color={colors.black} size={200} />,
  },
];

const onBoardingScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({item}) => (
    <View style={styles.slide}>
      <Text style={styles.title}>{item.title}</Text>
      <View>
        <Text>{item.icon}</Text>
      </View>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  const renderNextButton = () => (
    <View style={styles.buttonCircle}>
      <AntDesign name="right" color="rgba(255, 255, 255, .9)" size={24} />
    </View>
  );

  const renderDoneButton = () => (
    <View style={styles.buttonCircle}>
      <AntDesign name="check" color="rgba(255, 255, 255, .9)" size={24} />
    </View>
  );

  const handleDone = () => {
    navigation.navigate('LOGIN');
  };

  return (
    <Screen>
      <Text style={styles.logo}>Smart Watch</Text>
      <Text style={styles.subHeading}>Let's build a smart Pakistan</Text>
      <AppIntroSlider
        data={slides}
        renderItem={renderItem}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        onDone={handleDone}
      />

      <View style={styles.footerContainer}>
        <Text style={styles.accountText}>Don’t have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SIGNUP')}>
          <Text style={styles.signupText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

export default onBoardingScreen;

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 24,
    color: colors.black,
    fontFamily: fontFamily.Bold,
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: colors.gray,
    textAlign: 'center',
    marginTop: 10,
    fontFamily: fontFamily.Regular,
    paddingHorizontal: 40,
  },
  logo: {
    alignSelf: 'center',
    marginTop: '8%',
    fontFamily: fontFamily.SemiBold,
    fontSize: 30,
    color: colors.black,
  },
  subHeading: {
    alignSelf: 'center',
    marginTop: '2%',
    fontFamily: fontFamily.SemiBold,
    fontSize: 20,
    color: colors.gray,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    gap: 5,
  },
  accountText: {
    color: colors.primary,
    fontFamily: fontFamily.Regular,
  },
  signupText: {
    color: colors.primary,
    fontFamily: fontFamily.Bold,
  },
});
