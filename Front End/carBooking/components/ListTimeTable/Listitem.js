import React,{Component} from "react";
import { AppRegistry, Image, StatusBar,Text } from "react-native";
import { Button,Container,List,Content,Icon,Thumbnail, View} from "native-base";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const routes = [
                {title:"prof",name:"Profile", icon:"user"},
                {title:"rout" , name:"Help Section" , icon:"question-circle"},
                {title:"filter",name:"Filter", icon:"filter"},
                {title:"feedback",name:"Feedback", icon:"comments"},
                {title:"chat",name:"Chatroom", icon:"comment-dots"},
                {title:"prof",name:"Profile", icon:"user"},
                {title:"rout" , name:"Help Section" , icon:"question-circle"},
                {title:"filter",name:"Filter", icon:"filter"},
                {title:"feedback",name:"Feedback", icon:"comments"},
                {title:"chat",name:"Chatroom", icon:"comment-dots"}];

export default class ListItem extends Component {
  render() {
    
    return (    
      

    <Container style={{backgroundColor:'#e8f5fc'}}>
        <Content>  
    
        <List 
            dataArray={routes}
            renderRow={data => {
              return (

                <View style={{flex:1,}}>
                  
                  <View style={{flexDirection:'row' ,marginTop:7 , marginBottom: 7}}>
                    <View style={{flex:0.85}}>
                      <Text blurRadius={1} style={{color:'black' , fontSize:23, paddingLeft:20 ,paddingRight:5}}>07:40 PM  COLLEGE</Text>
                      <Text blurRadius={1} style={{color:'grey' , fontSize:12, paddingLeft:20 ,paddingRight:5}}>Superfast Spl. Sunday General</Text>
                      <Text blurRadius={1} style={{color:'grey' , fontSize:12, paddingLeft:20 ,paddingRight:5}}>STATION - COLLEGE</Text>
                    </View>
                    
                    <View style={{flex:0.15 ,borderRightWidth:10 , borderRightColor: "red" , justifyContent:'center' , alignItems: 'center', }}>
                      <Text blurRadius={1} style={{color:'black' , fontSize:12,paddingRight:5}}>35 min</Text>
                      <FontAwesome5 name={"star"} style={{fontSize:25}} />
                    </View>
                  </View>

                  <View
                    style={{
                      alignSelf:'center',
                      borderBottomColor: 'black',
                      borderBottomWidth: 1,
                      paddingLeft:20,
                      width:370
                    }}
                  />
            
                </View>  
              );
            }}
          />
        </Content>
      </Container>


      
    );
  }
}