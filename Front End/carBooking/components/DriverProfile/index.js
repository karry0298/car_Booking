import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking
} from 'react-native';

import call from 'react-native-phone-call'

export default class Profile extends Component {


  static navigationOptions = {
    title: 'Driver Profile',
  };

    constructor(props) {

        super(props);
        console.log("[DRIVER INFO: ] ", )

        this.state = {
          driver : this.props.navigation.getParam('driver')
        }
        
    }

    handleCall = () =>{
      var num = this.state.driver.contactNo;
      console.log("before con", num)
      const contact = {
        number: num.toString(), // String value with the number to call
        prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call 
      }
      call(contact).catch(console.error)
    }

    handlePay = () =>{
      let url = 'http://m.p-y.tm';
      Linking.openURL(url).catch(err => {
      if (err.code === 'EUNSPECIFIED') {
  
          if (Platform.OS === 'android') {
              Linking.openURL(url);
              }
      } 
      else {
          console.log("Impossible")
      }
      });
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: this.state.driver.photoUrl}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{ this.state.driver.driverId }</Text>
              <Text style={styles.info}>Car No: { this.state.driver.carNumber }</Text>
              
              <TouchableOpacity style={styles.buttonContainer} onPress={this.handleCall} >
                <Text>Call the Driver</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer} onPress={this.handlePay}>
                <Text>Pay the Driver</Text> 
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});
 