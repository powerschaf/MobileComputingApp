import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button, Alert, Platform, Dimensions} from 'react-native';


export default function App() {
  console.log(Dimensions.get('screen'));
  const handlePress = () => alert('Bestellung abgeschlossen');
  const handleFinishedOrder = () => console.log("finished Bestellung");

  return(
  
  <View style={styles.ShopGridContainer}>
    <View style={styles.CardItems}>
      <View style={styles.ShopCardStyle}>
          <Text style={styles.textStyle}>Kissen</Text>
          <Image style={styles.tinyLogo} source={require('./assets/Kissen.jpg')}/>
          <TouchableOpacity style={styles.ButtonStyle}>
            <Button 
            title="Choose" 
            color='darkorange' 
            onPress={() => Alert.alert('Information', 'Ihre Bestellung wurde Abgeschlossen', [
              {text: "Okay" , onPress: handleFinishedOrder}
            ])}></Button>
          </TouchableOpacity>
        </View>
        <View style={styles.ShopCardStyle}>
          <Text style={styles.textStyle}>Kette</Text>
          <Image style={styles.tinyLogo} source={require('./assets/Kette.jpg')}/>
          <TouchableOpacity style={styles.ButtonStyle}>
            <Button title="Choose" color='darkorange' onPress={handlePress}></Button>
            </TouchableOpacity>
        </View>
        <View style={styles.ShopCardStyle}>
          <Text style={styles.textStyle}>Pflanze</Text>
          <Image style={styles.tinyLogo} source={require('./assets/Pflanze.jpg')}/>
          <TouchableOpacity style={styles.ButtonStyle}>
            <Button title="Choose" color='darkorange' onPress={handlePress}></Button>
            </TouchableOpacity>
        </View>
        <View style={styles.ShopCardStyle}>
          <Text style={styles.textStyle}>Teddy</Text>
          <Image style={styles.tinyLogo} source={require('./assets/Teddy.jpg')}/>
          <TouchableOpacity style={styles.ButtonStyle}>
            <Button title="Choose" color='darkorange' onPress={handlePress}></Button>
            </TouchableOpacity>
        </View>
      



      </View>
    </View>
  );
}


const styles = StyleSheet.create({

  ShopGridContainer: {
    //flex:1,
  },

  CardItems: {
    marginTop: Platform.OS === 'android' ? 20 : 0,
    flexDirection:'row',
    flexWrap:'wrap',
  },
    

  ShopCardStyle: {
    width: 165,
    height: 230,
    marginLeft:10,
    marginTop:25,
    backgroundColor:"white",
    borderRadius:15,
    elevation:10,
    padding:5
  },

  textStyle: {
    marginBottom:5,
    color:'#808080',
    fontSize: 20,
    alignSelf:'center'
  },

  ButtonStyle: {
    color: 'darkorange',
    width: 139,
    alignSelf:'center',
  },

  tinyLogo: {
    borderWidth: 1,
    borderColor: '#F44336',
    width: 140,
    height: 140,
    alignSelf:'center',
  },

});
