import React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import {colors} from '../constants/colors';

const Screen = ({style, children}) => {
  return (
    <SafeAreaView>
      <View style={{...styles.container, ...style}}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    height: '100%',
    paddingBottom: 10,
  },
});

export default Screen;
