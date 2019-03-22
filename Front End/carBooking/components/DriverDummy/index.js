import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import { Button } from 'native-base';
export default class DriverDummy extends Component {  //rename ur calss same as ur folder path
  static navigationOptions = {
    title: 'Driver Page',
  };

  constructor(props) {
    super(props);
    this.state = {
      showAlert: true,
      onlineStatus:false,
    };
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

  render() {
    const {showAlert} = this.state;
    return (

      <View style={styles.container}>
 
        {this.state.onlineStatus ? <Text> You are Online</Text>: <Text> You are Online</Text> }


          
 
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Booking needed"
          message=" Booking needed at 100"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="Yes, select"
          confirmButtonColor="#DD6B55"
          onCancelPressed={() => {
            this.hideAlert();
          }}
          onConfirmPressed={() => {
            this.hideAlert();
          }}
        />
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
