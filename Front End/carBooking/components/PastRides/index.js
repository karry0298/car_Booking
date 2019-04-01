import React, { Component } from 'react'
import { Text, View,ScrollView } from 'react-native'
import {Container, Content, Button, Item, Label, Input, Form,Radio, Icon,Card,CardItem} from "native-base";
import { Rating} from 'react-native-elements';


export default class PastRides extends Component {
  static navigationOptions = {
    title: 'Past Rides',
  };

  render() {
    return (
      <View>
        <ScrollView>
          <Card style={{width:"93%" , alignSelf:'center'}}>
                        
              <View style={{flexDirection:"row",justifyContent: "space-between",alignItems: "center"}}>
                  <Text style={{marginLeft:10,fontSize:23}} >Date:18/7/2019</Text>
                  <Text style={{marginRight:10,fontSize:18}}>Mumbai</Text> 
              </View>
          
              <View style={{flexDirection:"row",justifyContent: "space-between",alignItems: "center",marginTop:10}}>
                  <Text style={{marginLeft:10,fontSize:15}} >Driver : Sam</Text>
                  <Text style={{marginRight:10,fontSize:15}}>Price: 250</Text> 
              </View>

              <View style={{flexDirection:"row",justifyContent: "space-between",alignItems: "center",marginTop:10}}>
                <Rating
                    imageSize={30}
                    readonly
                    startingValue={"5"}
                    style={{marginLeft:10}}
                    />
              </View>

              <View style={{marginTop:5, borderBottomColor: '#e5e5e5',borderBottomWidth: 0.8,}} />

              
            <CardItem footer bordered>
                <Text>Virar to Viva </Text>
            </CardItem>

          </Card>

          <Card style={{width:"93%" , alignSelf:'center'}}>
                        
              <View style={{flexDirection:"row",justifyContent: "space-between",alignItems: "center"}}>
                  <Text style={{marginLeft:10,fontSize:23}} >Date:18/10/2019</Text>
                  <Text style={{marginRight:10,fontSize:18}}>Mumbai</Text> 
              </View>
          
              <View style={{flexDirection:"row",justifyContent: "space-between",alignItems: "center",marginTop:10}}>
                  <Text style={{marginLeft:10,fontSize:15}} >Driver : Mr. Sharma</Text>
                  <Text style={{marginRight:10,fontSize:15}}>Price: 100</Text> 
              </View>

              <View style={{flexDirection:"row",justifyContent: "space-between",alignItems: "center",marginTop:10}}>
                <Rating
                    imageSize={30}
                    readonly
                    startingValue={"3"}
                    style={{marginLeft:10}}
                    />
              </View>

              <View style={{marginTop:5, borderBottomColor: '#e5e5e5',borderBottomWidth: 0.8,}} />

              
            <CardItem footer bordered>
                <Text>Viva to Virar </Text>
            </CardItem>

          </Card>

          <Card style={{width:"93%" , alignSelf:'center'}}>
                        
              <View style={{flexDirection:"row",justifyContent: "space-between",alignItems: "center"}}>
                  <Text style={{marginLeft:10,fontSize:23}} >Date:8/10/2019</Text>
                  <Text style={{marginRight:10,fontSize:18}}>Mumbai</Text> 
              </View>
          
              <View style={{flexDirection:"row",justifyContent: "space-between",alignItems: "center",marginTop:10}}>
                  <Text style={{marginLeft:10,fontSize:15}} >Driver : Mr. Sharma</Text>
                  <Text style={{marginRight:10,fontSize:15}}>Price: 50</Text> 
              </View>

              <View style={{flexDirection:"row",justifyContent: "space-between",alignItems: "center",marginTop:10}}>
                <Rating
                    imageSize={30}
                    readonly
                    startingValue={"1"}
                    style={{marginLeft:10}}
                    />
              </View>

              <View style={{marginTop:5, borderBottomColor: '#e5e5e5',borderBottomWidth: 0.8,}} />

              
            <CardItem footer bordered>
                <Text>Virar to Viva </Text>
            </CardItem>

          </Card>

          <Card style={{width:"93%" , alignSelf:'center'}}>
                        
              <View style={{flexDirection:"row",justifyContent: "space-between",alignItems: "center"}}>
                  <Text style={{marginLeft:10,fontSize:23}} >Date:1/12/2010</Text>
                  <Text style={{marginRight:10,fontSize:18}}>Mumbai</Text> 
              </View>
          
              <View style={{flexDirection:"row",justifyContent: "space-between",alignItems: "center",marginTop:10}}>
                  <Text style={{marginLeft:10,fontSize:15}} >Driver : Mr. Hari Om</Text>
                  <Text style={{marginRight:10,fontSize:15}}>Price: 80</Text> 
              </View>

              <View style={{flexDirection:"row",justifyContent: "space-between",alignItems: "center",marginTop:10}}>
                <Rating
                    imageSize={30}
                    readonly
                    startingValue={"4"}
                    style={{marginLeft:10}}
                    />
              </View>

              <View style={{marginTop:5, borderBottomColor: '#e5e5e5',borderBottomWidth: 0.8,}} />

              
            <CardItem footer bordered>
                <Text>Viva to Virar </Text>
            </CardItem>

          </Card>

          <Card style={{width:"93%" , alignSelf:'center'}}>
                        
              <View style={{flexDirection:"row",justifyContent: "space-between",alignItems: "center"}}>
                  <Text style={{marginLeft:10,fontSize:23}} >Date:11/12/2018</Text>
                  <Text style={{marginRight:10,fontSize:18}}>Mumbai</Text> 
              </View>
          
              <View style={{flexDirection:"row",justifyContent: "space-between",alignItems: "center",marginTop:10}}>
                  <Text style={{marginLeft:10,fontSize:15}} >Driver : Sabmit Singh</Text>
                  <Text style={{marginRight:10,fontSize:15}}>Price: 25</Text> 
              </View>

              <View style={{flexDirection:"row",justifyContent: "space-between",alignItems: "center",marginTop:10}}>
                <Rating
                    imageSize={30}
                    readonly
                    startingValue={"4"}
                    style={{marginLeft:10}}
                    />
              </View>

              <View style={{marginTop:5, borderBottomColor: '#e5e5e5',borderBottomWidth: 0.8,}} />

              
            <CardItem footer bordered>
                <Text>Virar to Viva </Text>
            </CardItem>

          </Card>

          <Card style={{width:"93%" , alignSelf:'center'}}>
                        
              <View style={{flexDirection:"row",justifyContent: "space-between",alignItems: "center"}}>
                  <Text style={{marginLeft:10,fontSize:23}} >Date:11/12/2019</Text>
                  <Text style={{marginRight:10,fontSize:18}}>Mumbai</Text> 
              </View>
          
              <View style={{flexDirection:"row",justifyContent: "space-between",alignItems: "center",marginTop:10}}>
                  <Text style={{marginLeft:10,fontSize:15}} >Driver : Manhor</Text>
                  <Text style={{marginRight:10,fontSize:15}}>Price: 90</Text> 
              </View>

              <View style={{flexDirection:"row",justifyContent: "space-between",alignItems: "center",marginTop:10}}>
                <Rating
                    imageSize={30}
                    readonly
                    startingValue={"4"}
                    style={{marginLeft:10}}
                    />
              </View>

              <View style={{marginTop:5, borderBottomColor: '#e5e5e5',borderBottomWidth: 0.8,}} />

              
            <CardItem footer bordered>
                <Text>Viva to RJ </Text>
            </CardItem>

          </Card>

          <Card style={{width:"93%" , alignSelf:'center'}}>
                        
              <View style={{flexDirection:"row",justifyContent: "space-between",alignItems: "center"}}>
                  <Text style={{marginLeft:10,fontSize:23}} >Date:11/7/2019</Text>
                  <Text style={{marginRight:10,fontSize:18}}>Mumbai</Text> 
              </View>
          
              <View style={{flexDirection:"row",justifyContent: "space-between",alignItems: "center",marginTop:10}}>
                  <Text style={{marginLeft:10,fontSize:15}} >Driver : Manhor</Text>
                  <Text style={{marginRight:10,fontSize:15}}>Price: 74</Text> 
              </View>

              <View style={{flexDirection:"row",justifyContent: "space-between",alignItems: "center",marginTop:10}}>
                <Rating
                    imageSize={30}
                    readonly
                    startingValue={"2"}
                    style={{marginLeft:10}}
                    />
              </View>

              <View style={{marginTop:5, borderBottomColor: '#e5e5e5',borderBottomWidth: 0.8,}} />

              
            <CardItem footer bordered>
                <Text>Viva to Virar </Text>
            </CardItem>

          </Card>          

        </ScrollView>

      </View>
    )
  }
}
