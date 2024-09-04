/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Animated,
  TouchableOpacity,
  Text,
} from 'react-native';

import OnBoardingItem from './OnBoardingItem';
import slides from './slides';
import Paginator from './Paginator';
import {fontFamily} from '../../../constants/fonts';
import {colors} from '../../../constants/colors';
import Button from '../../../components/Button';
import Screen from '../../../components/Screen';
import {useNavigation} from '@react-navigation/native';

function OnBoardingScreen() {
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const navigation = useNavigation();

  const [currentIndex, setCurrentIndex] = useState(0);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  return (
    <Screen>
      <Text style={styles.logo}>Smart Watch</Text>
      <Text style={styles.subHeading}>Let's build a smart Pakistan</Text>
      <View style={styles.container}>
        <FlatList
          data={slides}
          renderItem={({item}) => <OnBoardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
          snapToAlignment="center"
        />
        <Paginator data={slides} scrollX={scrollX} />
      </View>
      <Button title="Login" onPress={() => navigation.navigate('LOGIN')} />

      <View style={styles.footerContainer}>
        <Text style={styles.accountText}>Don’t have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SIGNUP')}>
          <Text style={styles.signupText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {width: '80%', alignSelf: 'center', marginVertical: '7%'},

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

export default OnBoardingScreen;
