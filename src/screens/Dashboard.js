import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity,Image } from 'react-native';

const salesData = [
  {
    id: 'INV_13',
    gstType: 'Inner GST',
    billedStatus: 'Billed',
    dueDate: '2024-06-18',
    status: 'pending'
  },
  {
    id: 'INV_12',
    gstType: 'Outer GST',
    billedStatus: 'Not Billed',
    dueDate: '2024-06-18',
    status: 'pending'
  }
];

const App = () => {
  const renderItem = ({ item }) => (
    <View style={styles.invoiceItem}>
      <Text style={styles.invoiceText}>Invoice: {item.id}</Text>
      <Text style={styles.invoiceText}>GST Type: {item.gstType}</Text>
      <Text style={styles.invoiceText}>Billed Status: {item.billedStatus}</Text>
      <Text style={styles.invoiceText}>Due Date: {item.dueDate}</Text>
      <Text style={styles.status}>{item.status}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/Images/blacklogo.png')}/>
      </View>
      <View style={styles.summary}>
        <TouchableOpacity style={styles.summaryBox}>
          <Text>Add Sale</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.summaryBox}>
          <Text>Add Expense</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.summaryDetails}>
        <View style={styles.detailBox}>
          <Text>Total Customer</Text>
          <Text>1</Text>
        </View>
        <View style={styles.detailBox}>
          <Text>Total Vendor</Text>
          <Text>3</Text>
        </View>
        <View style={styles.detailBox}>
          <Text>Total Sale</Text>
          <Text>5500.00</Text>
        </View>
        <View style={styles.detailBox}>
          <Text>Total Expense</Text>
          <Text>2000.00</Text>
        </View>
      </View>
      <Text style={styles.sectionTitle}>Sale</Text>
      <FlatList
        data={salesData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  summaryBox: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 8,
  },
  summaryDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  detailBox: {
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  invoiceItem: {
    backgroundColor: '#e0e0e0',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  invoiceText: {
    fontSize: 14,
  },
  status: {
    color: 'orange',
    fontWeight: 'bold',
    marginTop: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
});

export default App;
