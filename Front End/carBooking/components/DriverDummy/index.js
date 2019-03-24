import React, { Component } from 'react';
import { View, Text ,StyleSheet,Image} from 'react-native';
import { Container, Header, Button, Icon, Fab } from 'native-base';
import AwesomeAlert from 'react-native-awesome-alerts';
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

  goOnline = () =>{

    
    if ( this.state.onlineStatus ){
      this.socket.emit('goOffline');
    }else{
      this.socket.emit('ready', { id : this.state.id , driverId : this.socket.id })
    }

    this.setState({ onlineStatus: !this.state.onlineStatus })
    
    

  }

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

      <View style={{ flex: 1,alignItems:'center',flexDirection:'row' }}>
      <View style={{ flex: 1,alignItems:'center',flexDirection:'column' }}>
      {this.state.onlineStatus ? <Image style={{width:210, height: 200}} source={require('./img1.jpeg')} />: <Image style={{width: 220, height: 220}} source={require('./img2.jpeg')} />}
        <View  >
        {this.state.onlineStatus ? <Text style={{ fontWeight:'900',fontSize:50,color:'#840a0a',paddingRight:17}}>  Online</Text>: <Text style={{ fontWeight:'900',fontSize:50,color:'#840a0a',paddingRight:1}}>Offline</Text> }
        </View>
      </View>


        
        <Fab
        active={this.state.active}
        direction="up"
        containerStyle={{ }}
        style={{ backgroundColor: '#5067FF' }}
        position="bottomRight" 
         onPress={ this.goOnline }
        >
        <Icon type="FontAwesome" name="toggle-on"  />
      </Fab>

          
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
