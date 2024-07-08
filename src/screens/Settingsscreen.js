import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Image, Modal ,Pressable} from 'react-native';
import Button from '../components/Button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { profileapi ,changepasswordapi} from '../Service/Apis';
// import { Colors } from '../Comman/Styles';
// import Header from '../Component/Header';

const Settingsscreen = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);
  const [passwordmodal, setpasswordmodal] = useState(false);
const [password,setpassword]=useState();
const[data,setdata]=useState('');


  const handleLogout = () => {
    setShowModal(true);
  };

  const handlepassword = () => {
    setpasswordmodal(true);
  };



  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCloseModalpassword=()=>{
    setpasswordmodal(false)
  }

  const Profile=()=>{
    navigation.navigate('My Profile'); 
  }

  return (
    <View style={styles.container}>      
      <Pressable style={styles.profileContainer}  onPress={Profile} >

        <View style={styles.imagecontent}>
        <Image
          style={styles.profileImage} source={require('../assets/Images/baki.jpg')}/>
        <View style={styles.profileInfo}>
          <Text style={styles.infoText}>Gaurav Semwal</Text>
          <Text style={styles.infoText}>9090909090</Text>
          <Text style={styles.infoText}>gaurav@clikzopinnovations.com</Text>
        </View>
        </View>
      </Pressable>

      <View style={styles.bottomcontainer}>

        <Pressable style={styles.bottom} onPress={Profile}>
          <View style={styles.textrow}>
            <Ionicons name="person" size={24} color="#385dab" />
            <Text style={styles.text}>My Profile</Text>
          </View>
          <Ionicons name="arrow-forward" size={24} color="#385dab" />
        </Pressable>

        <View style={styles.horizontalLine}></View>

        <Pressable style={styles.bottom} onPress={() => handlepassword()}>
          <View style={styles.textrow}>
            <Ionicons name="lock-closed" size={24} color="#385dab" />
            <Text style={styles.text}>Change Password</Text>
          </View>
          <Ionicons name="arrow-forward" size={24} color="#385dab" />
        </Pressable>

        <View style={styles.horizontalLine}></View>

        <Pressable onPress={() => handleLogout()} style={styles.bottom}>
          <View style={styles.textrow}>
            <AntDesign name="logout" size={24} color="#385dab" />
            <Text style={styles.text}>Logout</Text>
          </View>
          <Ionicons name="arrow-forward" size={24} color="#385dab" />
        </Pressable>

      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => handleCloseModal()}
      >
        <View style={[styles.centeredView,{ justifyContent: 'center',padding:10}]}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure you want to logout?</Text>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <Pressable style={{width:'40%'}} onPress={() => handleCloseModal()} >
              <Button text="Cancel" />
                </Pressable>
                <Pressable style={{width:'40%'}} onPress={() => handleConfirmLogout()} >
              <Button text="Logout" />
                </Pressable>
            </View>
          </View>
        </View>
      </Modal>


      <Modal
        animationType="slide"
        transparent={true}
        visible={passwordmodal}
        onRequestClose={() => handleCloseModalpassword()}
      >
        <View style={[styles.centeredView,{ justifyContent: 'flex-end'}]}>
          <View style={styles.modalView1}>
            <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
              <View></View>
            <Text style={styles.modalText}>Change Password</Text>
            <Pressable onPress={() => handleCloseModalpassword()} >
            <MaterialCommunityIcons name="close-circle" size={25} color="#625bc5" />
            </Pressable>
            </View>
          
            <View style={{ flexDirection: 'column',width:'90%' ,justifyContent:'space-between'}}>
            <View>
            <View style={{ position: 'absolute', top: 15, left: 6, zIndex: 1 }}>
              <MaterialCommunityIcons name="lock" size={25} color="#625bc5" />
            </View>
            <TextInput
              placeholder="Enter Your Password"
              value={password}
              mode="outlined"
              onChangeText={setpassword}
              style={[styles.textinput, { paddingLeft: 20 }]}
            />
          </View>
                <Pressable onPress={() => handleConfirmLogout()} style={{marginTop:15}}>
              <Button text="Submit" />
                </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default Settingsscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileContainer: {
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imagecontent:{
    flexDirection: 'row',
    alignItems: 'center',
    padding:10,
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#385dab',
  },
  profileInfo: {
    marginLeft: 15,
  },
  infoText: {
    fontSize: 14,
    color: '#385dab',
    marginBottom: 8,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
  },
  textrow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    color: '#385dab',
    marginLeft: 10,
  },
  bottomcontainer: {
    margin: 10,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 4,
  },
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
    height:'25%'
  },
  modalView1: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
    height:'34%'
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
});
