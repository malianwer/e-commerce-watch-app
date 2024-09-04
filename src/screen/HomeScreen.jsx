/* eslint-disable react-native/no-inline-styles */
import {FlatList, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {fontSize, iconSize, spacing} from '../constants/dimensions';
import {colors} from '../constants/colors';
import {fontFamily} from '../constants/fonts';
import Category from '../components/Category';
import ProductCard from '../components/ProductCard';

import {smartWatch} from '../data/smartwatch';
import {headphones} from '../data/headphones';

const HomeScreen = () => {
  const [data, setData] = useState(smartWatch);

  const [selectedCategory, setSelectedCategory] = useState('Smart Watch');

  const filterByBrand = (products, brand) => {
    return products.filter(
      product => product.brand.toLowerCase() === brand.toLowerCase(),
    );
  };
  const appleWatches = filterByBrand(smartWatch, 'Apple');
  const samsungWatches = filterByBrand(smartWatch, 'Samsung');
  const xiaomiWatches = filterByBrand(smartWatch, 'Xiaomi');
  const huaweiWatches = filterByBrand(smartWatch, 'Huawei');

  console.log(samsungWatches);

  const handleUpdateCategory = newCategory => {
    if (newCategory === 'Smart Watch') {
      setData(smartWatch);
    } else if (newCategory === 'Headphones') {
      setData(headphones);
    } else if (newCategory === 'Apple') {
      setData(appleWatches);
    } else if (newCategory === 'Samsung') {
      setData(samsungWatches);
    } else if (newCategory === 'Xiaomi') {
      setData(xiaomiWatches);
    } else if (newCategory === 'Huawei') {
      setData(huaweiWatches);
    }

    setSelectedCategory(newCategory);
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <Text style={styles.headline}>Find your suitable watch now.</Text>
            {/* search input */}
            <View style={styles.mainInputContainer}>
              {/* input container */}
              <View style={styles.inputWrapper}>
                {/* icon */}
                <Image
                  source={require('../assets/search.png')}
                  style={styles.logo}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Search Product"
                  placeholderTextColor={colors.placeholderText}
                />
              </View>
              {/* category container */}
              <View style={styles.categoryContainer}>
                <Image
                  source={require('../assets/category.png')}
                  style={styles.logo}
                />
              </View>
            </View>
            <Category
              selectedCategory={selectedCategory}
              handleUpdateCategory={handleUpdateCategory}
            />
          </>
        }
        data={data}
        renderItem={({item, index}) => <ProductCard item={item} />}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        contentContainerStyle={{
          padding: spacing.md,
          paddingBottom: 500,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  headline: {
    fontSize: fontSize.xxl,
    color: colors.black,
    fontFamily: fontFamily.Bold,
  },
  mainInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.xl,
  },
  inputWrapper: {
    flex: 1,
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.placeholderText,
    borderRadius: 44,
    paddingHorizontal: spacing.md,
  },
  logo: {
    height: iconSize.md,
    width: iconSize.md,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: spacing.md,
    fontSize: fontSize.md,
    fontFamily: fontFamily.Medium,
  },
  categoryContainer: {
    paddingHorizontal: spacing.sm,
  },
});
