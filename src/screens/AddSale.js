import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {TextInput} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Button from '../components/Button';
import { NavigationContainer } from '@react-navigation/native';


export default function AddSale({navigation}) {
  const [billed, setBilled] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [salesDate, setSalesDate] = useState(new Date());
  const [dueDate, setDueDate] = useState(new Date());
  const [customer, setCustomer] = useState('');
  const [sale, setSale] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [showSalesDatePicker, setShowSalesDatePicker] = useState(false);
  const [showDueDatePicker, setShowDueDatePicker] = useState(false);

  const onChangeSalesDate = (event, selectedDate) => {
    const currentDate = selectedDate || salesDate;
    setShowSalesDatePicker(false);
    setSalesDate(currentDate);
  };

  const onChangeDueDate = (event, selectedDate) => {
    const currentDate = selectedDate || dueDate;
    setShowDueDatePicker(false);
    setDueDate(currentDate);
  };

  const showSalesDatePickerHandler = () => {
    setShowSalesDatePicker(true);
  };

  const showDueDatePickerHandler = () => {
    setShowDueDatePicker(true);
  };
  const formatDate = (date) => {
    return date.toLocaleDateString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  };
  const Submit = () =>{
    navigation.navigate('All Sales')
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.pickerContainer}>
          <Picker
            selectedValue={customer}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setCustomer(itemValue)}>
            <Picker.Item label="Select Customer" value="" />
          </Picker>
        </View>

        <View style={styles.dateContainer}>
          <TouchableOpacity
            onPress={showSalesDatePickerHandler}
            style={styles.datePicker}>
            <TextInput
              label='Select Sales Date'
              value={formatDate(salesDate)}
              editable={false}
              style={styles.dateText}
            />
            <Fontisto name="date" size={20} color="#000" style={styles.icon} />
          </TouchableOpacity>
          {showSalesDatePicker && (
            <DateTimePicker
              value={salesDate}
              mode="date"
              display="default"
              onChange={onChangeSalesDate}
            />
          )}

          <TouchableOpacity
            onPress={showDueDatePickerHandler}
            style={styles.datePicker}>
            <TextInput
              label="Select Due Date"
              value={formatDate(dueDate)}
              editable={false}
              style={styles.dateText}
            />
            <Fontisto name="date" size={20} color="#000" style={styles.icon} />
          </TouchableOpacity>
          {showDueDatePicker && (
            <DateTimePicker
              value={dueDate}
              mode="date"
              display="default"
              onChange={onChangeDueDate}
            />
          )}
        </View>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={subCategory}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setSubCategory(itemValue)}>
            <Picker.Item label="Select TCS" value="" />
          </Picker>
        </View>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={sale}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setSale(itemValue)}>
            <Picker.Item label="Select GST Type" value="" />
          </Picker>
        </View>

        <View style={styles.itemContainer}>
          <Text style={{fontSize: 16, fontWeight: '500'}}> Items </Text>
          <TouchableOpacity style={{width: 50,height: 24, backgroundColor: '#385dab', alignItems: 'center', justifyContent: 'center', borderRadius: 10,}}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>Add</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={category}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}>
            <Picker.Item label="Select Category" value="" />
          </Picker>
        </View>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={subCategory}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setSubCategory(itemValue)}>
            <Picker.Item label="Select Sub Category" value="" />
          </Picker>
        </View>
        <TextInput
          style={styles.input}
          label="Enter Description"
          value={name}
          onChangeText={setName}
          mode="outlined"
        />
        <TextInput
          style={styles.input}
          label="Enter Quantity"
          value={quantity}
          onChangeText={setQuantity}
          mode="outlined"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          label="Enter Price"
          value={price}
          onChangeText={setPrice}
          mode="outlined"
          keyboardType="numeric"
        />

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={customer}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setCustomer(itemValue)}>
            <Picker.Item label="Select GST" value="" />
          </Picker>
        </View>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={sale}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setSale(itemValue)}>
            <Picker.Item label="Select GST Type" value="" />
          </Picker>
        </View>

        <TextInput
          label="Enter Customer Per Qty"
          mode="outlined"
          style={styles.input}
        />

        <Button title="Submit" onPress={Submit} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#959990',
    borderRadius: 5,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  datePicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#959990',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  dateText: {
    fontSize: 16,
    backgroundColor: '#fff',
  },
  icon: {
    marginLeft: 10,
  },
  input: {
    height: 50,
    marginBottom: 10,
  },
  picker: {
    height: 50,
  },
  expensesCategory: {
    fontSize: 16,
    fontWeight: '500',
    paddingVertical: 10,
    backgroundColor: '#aac6f2',
    paddingLeft: 15,
    borderRadius: 5,
    marginBottom: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#aac6f2',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  addButton: {},
  addButtonContainer: {
    width: 30,
    height: 40,
    bottom: 10,
  },
});
