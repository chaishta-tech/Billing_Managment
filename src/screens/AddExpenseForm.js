import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  PermissionsAndroid,
  Alert,
  Modal,
  Pressable,
  Image,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {TextInput} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Button from '../components/Button';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import {Customers_Api} from '../api/authApi';
import Toast from 'react-native-toast-message';

export default function AddExpenseForm() {
  useEffect(() => {}, []);

  const navigation = useNavigation();

  const [billed, setBilled] = useState('');
  const [name, setName] = useState('');
  const [note, setNote] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [amount, setAmount] = useState('');
  const [customer, setCustomer] = useState([]);
  const [sale, setSale] = useState('');
  const [expenseType, setExpenseType] = useState('');
  const [paymentType, setPaymentType] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
const[selectedcustomer,setselectedcustomer]=useState('')

  useEffect(() => {
    requestCameraPermission();
  }, []);

  useEffect(() => {
    getCustomer();
  }, []);


  const handlecustomer= (itemValue, itemIndex) => {
    setselectedcustomer(itemValue);
};

  const getCustomer=async ()=>{
    try {
      const response = await Customers_Api();
      console.log(response.data);
      if (response.msg === 'Data loaded successfully.') {
setCustomer(response.data)
        navigation.navigate('Bottom');
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
  }

  const Submit = () => {
    // navigation.navigate('All Expenses')
    navigation.goBack();
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const showDatePickerHandler = () => {
    setShowDatePicker(true);
  };

  const handleCloseModalUpdate = () => {
    setModalVisible(false);
  };

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs access to your camera.',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // console.log('Camera permission granted');
        } else {
          console.log('Camera permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const openGallery = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.assets[0].uri;
        setSelectedImage(imageUri);
        handleCloseModalUpdate();
      }
    });
  };

  const openCamera = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.errorCode) {
        console.log('Camera Error Code: ', response.errorCode);
        console.log('Camera Error Message: ', response.errorMessage);
      } else {
        let imageUri = response.assets[0].uri;
        setSelectedImage(imageUri);
        handleCloseModalUpdate();
      }
    });
  };

  const chooseImage = () => {
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={chooseImage} style={styles.imagePicker}>
          {selectedImage ? (
            <Image source={{uri: selectedImage}} style={styles.image} />
          ) : (
            <View style={styles.placeholder}>
              <FontAwesome name="file-picture-o" size={70} color="#37b8af" />
              <Text style={styles.uploadText}>Upload Picture</Text>
            </View>
          )}
        </TouchableOpacity>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={billed}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setBilled(itemValue)}>
            <Picker.Item label="Select Billed / Not Billed" value="" />
            <Picker.Item label="Billed" value="billed" />
            <Picker.Item label="Not Billed" value="not_billed" />
          </Picker>
        </View>

        <TextInput
          style={styles.input}
          label="Enter Name"
          value={name}
          onChangeText={setName}
          mode="outlined"
        />

        <TextInput
          style={styles.input}
          label="Enter Note"
          value={note}
          onChangeText={setNote}
          mode="outlined"
        />

        <Text style={styles.expensesCategory}>Expenses category</Text>

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

        <View style={styles.pickerContainer}>
          <TouchableOpacity
            onPress={showDatePickerHandler}
            style={styles.inputContainer}>
            <TextInput
              value={date.toDateString()}
              editable={false}
              style={styles.dateText}
            />
            <Fontisto name="date" size={30} color="#000" style={styles.icon} />
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              accentColor="red"
              display="default"
              onChange={onChangeDate}
            />
          )}
        </View>

        <TextInput
          style={styles.input}
          label="Enter Expenses Amount"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          mode="outlined"
        />

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedcustomer}
            style={styles.picker}
            onValueChange={handlecustomer}>
            <Picker.Item label="Select Customer" value="" />
            {customer.map((src, index) => (
              <Picker.Item key={index} label={src.name} value={src.name} />
            ))}
          </Picker>
        </View>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={sale}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setSale(itemValue)}>
            <Picker.Item label="Select Sale" value="" />
          </Picker>
        </View>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={expenseType}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setExpenseType(itemValue)}>
            <Picker.Item label="Select Expense Type" value="" />
          </Picker>
        </View>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={paymentType}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setPaymentType(itemValue)}>
            <Picker.Item label="Select Payment Mode" value="" />
          </Picker>
        </View>

        <TextInput
          label="Enter Reference Number"
          mode="outlined"
          style={styles.input}
        />

        <Button title="Submit" onPress={Submit} />

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={handleCloseModalUpdate}>
          <View style={[styles.centeredView, {justifyContent: 'flex-end'}]}>
            <View style={styles.modalView}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <View></View>
                <Text style={styles.modalText}>Choose Photo Type</Text>
                <Pressable onPress={handleCloseModalUpdate}>
                  <MaterialCommunityIcons
                    name="close-circle"
                    size={25}
                    color="#37b8af"
                  />
                </Pressable>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '90%',
                }}>
                <Pressable
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    margin: 10,
                  }}
                  onPress={openGallery}>
                  <MaterialIcons
                    name="photo-library"
                    size={27}
                    color="#37b8af"
                  />
                  <Text
                    style={{fontSize: 16, fontWeight: '700', color: '#666'}}>
                    Select Photo
                  </Text>
                </Pressable>
                <Pressable
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    margin: 10,
                  }}
                  onPress={openCamera}>
                  <MaterialIcons name="add-a-photo" size={27} color="#37b8af" />
                  <Text
                    style={{fontSize: 16, fontWeight: '700', color: '#666'}}>
                    Open Camera
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 6,
  },
  imagePicker: {
    width: '90%',
    height: 200,
    borderWidth: 1.5,
    borderColor: '#37b8af',
    borderStyle: 'dashed',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  placeholder: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#959990',
    borderRadius: 5,
    marginBottom: 10,
    marginHorizontal: 6,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  dateText: {
    fontSize: 18,
    backgroundColor: '#f2f2f2',
  },
  icon: {
    marginLeft: '40%',
    marginTop: '3%',
  },
  input: {
    height: 50,
    marginHorizontal: 6,
    marginBottom: 10,
    color: '#000',
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
    marginHorizontal: 6,
  },
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    alignItems: 'center',
    elevation: 5,
    height: '26%',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 24,
    textAlign: 'center',
    fontWeight: '600',
  },
});
