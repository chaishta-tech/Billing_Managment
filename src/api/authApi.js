import AsyncStorage from '@react-native-async-storage/async-storage';

const base_url = "https://project-evaluation.clikzopdevp.com/api/";

export const isValidToken = async () => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    if (!token) {
      console.log('Token not found');
      return false; 
    }
    console.log('Token found:', token);

    return true; 
  } catch (error) {
    console.error('Token validation error:', error);
    return false;
  }
};


export const Customers_Api = async () => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    console.log('Token:', token);

    if (!token) {
      throw new Error('Token not found');
    }

    const myHeaders = new Headers();
    myHeaders.append("token", token);


    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow"
    };

    const response = await fetch(`${base_url}get-customers`, requestOptions);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Network response was not ok: ${response.statusText} - ${errorText}`);
    }

    const result = await response.json();
    return result;

  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};



export const Login_Api  = async (username, password) => {
  try {
    const myHeaders = new Headers();
    // myHeaders.append("Cookie", "PHPSESSID=4rhec3uir32urn2farjjklv3in");

    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formData,
      redirect: "follow"
    };

    const response = await fetch(`${base_url}login`, requestOptions);
    console.log(response);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json(); 
    console.log('Login Result:', result);

    if (result && result.data && result.data.token) {
        await AsyncStorage.setItem('authToken', result.data.token);
      } else {
        throw new Error('Invalid token received from server');
      }

    return result;
  } catch (error) {
    console.error('Login Error:', error);
    throw error; 
  }
};

