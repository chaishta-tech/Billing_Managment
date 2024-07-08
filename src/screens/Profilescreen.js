import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Button from '../components/Button';

const Profilescreen = ({ navigation }) => {
  const [fullname, setFullname] = useState('');
  const [mail, setMail] = useState('');
  const [mobilenumber, setMobilenumber] = useState('');
  const [address, setAddress] = useState('');

  const Submit = () => {
    console.log("Full Name:", fullname);
    console.log("Email:", mail);
    console.log("Mobile Number:", mobilenumber);
    console.log("Address:", address);
    navigation.navigate('Setting')
  };


  return (
    <View style={styles.container}>
      <View style={styles.bottom}>

        <View style={{padding:10}}>

      
        <View>
          <Text>Full Name</Text>
          <View>
            <View style={{ position: 'absolute', top: 25, left: 6, zIndex: 1 }}>
              <MaterialIcons name="person" size={25} color="#625bc5" />
            </View>
            <TextInput
              label="Full Name"
              value={fullname}
              onChangeText={text => setFullname(text)}
              style={[styles.textinput, { paddingLeft: 20 }]}
              mode="outlined"
            />
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text>Email</Text>
          <View>
            <View style={{ position: 'absolute', top: 25, left: 6, zIndex: 1 }}>
              <MaterialIcons name="email" size={25} color="#625bc5" />
            </View>
            <TextInput
              label="Email"
              value={mail}
              onChangeText={text => setMail(text)}
              style={[styles.textinput, { paddingLeft: 20 }]}
              mode="outlined"
            />
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text>Mobile Number</Text>
          <View>
            <View style={{ position: 'absolute', top: 25, left: 6, zIndex: 1 }}>
              <MaterialIcons name="phone" size={25} color="#625bc5" />
            </View>
            <TextInput
              label="Mobile Number"
              value={mobilenumber}
              onChangeText={text => setMobilenumber(text)}
              style={[styles.textinput, { paddingLeft: 20 }]}
              mode="outlined"
              maxLength={10}
              keyboardType='numeric'
            />
          </View>
        </View>

        <View style={{ marginTop: 10, marginBottom: 20 }}>
          <Text>Address</Text>
          <View>
            <View style={{ position: 'absolute', top: 25, left: 6, zIndex: 1 }}>
              <MaterialIcons name="person" size={25} color="#625bc5" />
            </View>
            <TextInput
              label="Address"
              value={address}
              onChangeText={text => setAddress(text)}
              style={[styles.textinput, { paddingLeft: 20 }]}
              mode="outlined"
            />
          </View>
        </View>
        <Button title="Submit"  onPress={Submit}/>
        </View>
      </View>
    </View>
  );
};

export default Profilescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bottom: {
    margin: 10,
    backgroundColor:'#e6e8eb',
    height:'96%',
    borderRadius:5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textinput: {
    height: 50,
    width: '100%',
  },
});
