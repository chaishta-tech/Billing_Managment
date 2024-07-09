import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState,useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Customer_Api } from '../api/authApi';

const Sale = ({ navigation }) => {
  const [customer, setCustomer] = useState([]);
  const [selectedcustomer, setselectedcustomer] = useState('');

  const onPressPlusButton = () => {
    navigation.navigate('Add Invoice');
  };

  useEffect(() => {
    getCustomer();
  }, []);

  const getCustomer = async () => {
    try {
      const response = await Customer_Api();
      console.log(response.data);
      if (response.msg === 'Data loaded successfully.') {
        setCustomer(response.data);
      } else {
        Toast.show({
          text1: 'Failed to login!',
          type: 'error',
        });
      }
    } catch (error) {
      console.log('Login Error:', error);
      Toast.show({
        text1: 'Error',
        type: 'error',
      });
    }
  };

  const handlecustomer = (itemValue, itemIndex) => {
    setselectedcustomer(itemValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
      <Picker
            selectedValue={selectedcustomer}
            style={styles.picker}
            onValueChange={handlecustomer}>
            <Picker.Item label="Select Customer" value="" />
            {customer.map((src, index) => (
              <Picker.Item key={index} label={src.name} value={src.id} />
            ))}
          </Picker>
      </View>
      <View style={styles.plusButtonContainer}>
        <Pressable style={styles.plusButton} onPress={onPressPlusButton}>
          <AntDesign name="plus" size={35} color="#dbdad3" />
        </Pressable>
      </View>
    </View>
  );
};

export default Sale;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#959990',
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 6,
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
  plusButton: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
