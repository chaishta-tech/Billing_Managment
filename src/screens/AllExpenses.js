import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, FlatList } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AllExpenses = ({ navigation }) => {

  const data = [
    {
      id: '1',
      date: '2024-07-05',
      time: '10:00 AM',
      name: 'Water Bill',
      category: 'Travel',
      subCategory: 'Cab',
      vendor: 'Vendor 1',
      expensesType: 'Vendor',
      note: 'anything',
      buildStatus: 'Billed',
      amount: '1500',
    },

  ];

  const onPressPlusButton = () => {
    navigation.navigate('Add Expenses');
  };

  const Card = () => {
    return (
      <View style={styles.card}>
        <View style={styles.leftContent}>
          <View style={styles.datetime}>
            <Text>2024-07-05 18:28:00</Text>
            <Text style={styles.cash}>Cash</Text>
          </View>
          <View style={styles.details}>
            <View style={styles.icon}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.detailText}>Name:</Text>
                <Text style={styles.text1}> Water Bill</Text>
              </View>
              <View style={{ backgroundColor: '#fff', borderRadius: 50, alignItems: 'center', padding: 3 }}>
                <MaterialCommunityIcons name="playlist-edit" size={26} color="black" />
              </View>

            </View>

            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.detailText}>Category:</Text>
              <Text style={styles.text1}> Travel</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.detailText}>Vendor Name:</Text>
              <Text style={styles.text1}> Vendor 1</Text>
            </View>

            <View style={styles.icon}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.detailText}>Note:</Text>
                <Text style={styles.text1}> anything</Text>
              </View>
              <View style={styles.rps}>
                <Text style={styles.text}>1500</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Card item={item} />}
        />
      </View>

      <View style={styles.plusButtonContainer}>
        <Pressable style={styles.plusButton} onPress={onPressPlusButton}>
          <AntDesign name="plus" size={35} color="#dbdad3" />
        </Pressable>
      </View>
    </View>
  );
};

export default AllExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  plusButtonContainer: {
    position: 'absolute',
    backgroundColor: '#385dab',
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    alignSelf: 'flex-end',
    bottom: 20,
    right: 20,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 20,
    margin: 10,
    marginHorizontal: 6,
    backgroundColor: '#d1dbeb',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  leftContent: {
    flex: 1,
  },
  datetime: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width:'200%',
    alignItems: 'center'
  },
  cash: {
    color: '#625bc5',
    fontSize: 17,
    fontWeight: '800'
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: '200%',
    alignItems: 'center'
  },
  plusButton: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailText: {
    marginBottom: 10,
  },
  text1: {
    fontSize: 14,
    fontWeight: '700',
    color: 'black'
  },
  rps: {
    backgroundColor: '#385dab',
    padding: 5,
    borderRadius: 5
  },
  text: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700'
  }
});
