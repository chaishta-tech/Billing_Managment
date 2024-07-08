import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import AntDesign from 'react-native-vector-icons/AntDesign';



const Sale = ({navigation}) => {
  const [customer, setCustomer] = useState('');


  
    const onPressPlusButton = () => {
      navigation.navigate('Add Invoice');

    };
  return (
    <View style={styles.container}>
    <View style={styles.pickerContainer}>
      <Picker
        selectedValue={customer}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setCustomer(itemValue)}>
        <Picker.Item label="Select Customer" value="" />
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
  container:{
    flex:1
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
