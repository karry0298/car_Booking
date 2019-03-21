import React, { Component } from 'react';
import { View, Text,StyleSheet,Linking } from 'react-native';
import {Container, Content, Button, Item, Label, Input, Form,Icon, Header} from "native-base";
import ListItem from './Listitem.js';
import Dialog, { DialogTitle,DialogContent,DialogFooter,DialogButton,SlideAnimation} from 'react-native-popup-dialog';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default class studentNavigation extends Component {


  constructor(props) {
    super(props);
    this.state = {
      tumtum:false,
      rickshaw:false
    };
  }

  handle(){
    let appName = 'whatsapp';
    let url = 'http://m.p-y.tm';
    Linking.openURL(url).catch(err => {
    if (err.code === 'EUNSPECIFIED') {

        if (Platform.OS === 'android') {

            Linking.openURL(
                url
                );
            }
    } 
    else {
        console.log("Impossible")
    }
    });
}


  render() {
    console.disableYellowBox = true;
    return (
      <View style={{flex:1 , backgroundColor:'#BA68C8'}}>

        <View style={{flex:1 , backgroundColor:'#BA68C8'}} >
          <ListItem/>
        </View> 


        <View style={{flexDirection:'row', justifyContent:'center'}}>
        
          <View style={{flex:0.5}}>
            <Button info style={{textAlign:'center',justifyContent:'center', alignSelf: 'stretch', backgroundColor:"#0051a3"}}
                    onPress={() => this.setState({tumtum:true})}>
                <Text style={{color:'white'}} >Book TumTum</Text>
            </Button>
          </View>

          <View style={{flex:0.5}}>
            <Button info style={{textAlign:'center',justifyContent:'center', alignSelf: 'stretch', backgroundColor:"#0051a3"}}
                    onPress={() => this.setState({rickshaw:true})}>
                <Text style={{color:'white'}}>Book Rickshaw</Text>
            </Button>
          </View>

        </View>

{/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}

<Dialog
            onDismiss={() => {this.setState({tumtum:false})}}
            width={0.75}
            visible={this.state.tumtum}
            rounded
            actionsBordered
            onTouchOutside  ={()=>{this.setState({tumtum:false})}}>
            <View style={{height:"58%",flexDirection:"column",justifyContent: "space-between",alignItems: "center", }} >
                <View style ={styles.DialogBContainer}>
                
                    <View style={[styles.CircleShapeView]}>
                    <FontAwesome5 name={"bell"} brand style={{paddingLeft:5 , fontSize: 80, color:'black'}} /> 

                    </View>
                </View>
                <View>
                    <Text style={[styles.status]} > Status</Text>
                </View>
                
                <View >
                    <Text style={{fontSize:22,fontWeight:'bold',color:'#000',marginTop:4}} >Finding Tum Tum..... </Text>
                </View>

                <View style={{margin:10,marginTop:55}}>
                    <Button style={{paddingRight:22,backgroundColor:"#f1813b"}} rounded onPress={() => this.handle()}>
                        <Text style={{paddingLeft:23,fontSize:20 , textAlign:'center'}} > Book And Pay </Text>
                    </Button>
                </View>

            </View>
        </Dialog>

{/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}

        <Dialog
            onDismiss={() => {this.setState({rickshaw:false})}}
            width={0.75}
            visible={this.state.rickshaw}
            rounded
            actionsBordered
            onTouchOutside  ={()=>{this.setState({rickshaw:false})}}>
            <View style={{height:"58%",flexDirection:"column",justifyContent: "space-between",alignItems: "center", }} >
                <View style ={styles.DialogBContainer}>
                
                    <View style={[styles.CircleShapeView]}>
                    <FontAwesome5 name={"bell"} brand style={{paddingLeft:5 , fontSize: 80, color:'black'}} /> 

                    </View>
                </View>
                <View>
                    <Text style={[styles.status]} > Status</Text>
                </View>
                
                <View >
                    <Text style={{fontSize:22,fontWeight:'bold',color:'#000',marginTop:4}} >Finding Rickshaw..... </Text>
                </View>

                <View style={{margin:10,marginTop:55}}>
                    <Button style={{paddingRight:22,backgroundColor:"#f1813b"}} rounded onPress={() => this.handle()}>
                        <Text style={{paddingLeft:23,fontSize:20 , textAlign:'center'}} > Book And Pay </Text>
                    </Button>
                </View>

            </View>
        </Dialog>



      </View>
    );
  }
}


const styles = StyleSheet.create({
  DialogBContainer:{
      
    backgroundColor:"#e0dcdb",    //grey
    width:"100%",
        justifyContent: 'center',
        alignItems:'center'
      },
  CircleShapeView: {
    marginTop:10,
    marginBottom:10,
  elevation:10,
  justifyContent:'center',
  alignItems:'center',
  width: 150,
  height: 150,
  borderRadius: 150/2,
  borderStyle:'solid',
  borderWidth:10,
  borderColor:'#ea5e33',
  backgroundColor: '#fff',
  paddingBottom: 20,
  },
  status:{fontSize:22,
  fontWeight:'bold',
  alignItems:'center' ,
  marginTop:10}
  

})

