import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import { Button } from 'native-base';
import SocketIOClient from 'socket.io-client';

export default class DriverDummy extends Component {  //rename ur calss same as ur folder path
  static navigationOptions = {
    title: 'Driver Page',
  };

  constructor(props) {
    super(props);
    this.socket = SocketIOClient('http://192.168.1.108:3000');
    
    this.state = {
      showAlert: true,
      onlineStatus:false,
      id : "Ambilkar",
      requested : false,
      riderId : null,
      rider : null,
      seats : 5
    };

    this.socket.emit('ready', { id : this.state.id , driverId : this.socket.id })
  }

  componentDidMount(){

    this.socket.on('request' , (msg)=>{
      console.log("geting requests");
      this.setState( {rider : msg.id , riderId : msg.riderId , requested : true} )
    })

  }




  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };
 
  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  acceptRequest = () =>{

    let state = this.state;
    let driverId = state.id, id = state.riderId;
    this.socket.emit('sendAcception' , { driverId, id } )

    this.setState({
      showAlert: false
    });

  }

  render() {
    const {showAlert} = this.state;
    return (

      <View style={styles.container}>
 
        {this.state.onlineStatus ? <Text> You are Online</Text>: <Text> You are Online</Text> }


          
      {
        this.state.requested && 

        <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="Booking needed"
        message={ this.state.rider + " wants to book for " + this.state.seats + " seats" }
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText="Reject"
        confirmText="Accept"
        confirmButtonColor="#DD6B55"
        onCancelPressed={() => {
          this.hideAlert();
        }}
        onConfirmPressed={ this.acceptRequest }
      />

      }

      </View>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
    backgroundColor: "#AEDEF4",
  },
  text: {
    color: '#fff',
    fontSize: 15
  }
});
