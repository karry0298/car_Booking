import React, {Component} from "react";
import {StyleSheet, ImageBackground, Image, View, Dimensions , Linking} from 'react-native';
import {Container, Content, Button, Item, Label, Input, Form,Text, Icon} from "native-base";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import logo from '../../assets/images/logo.png';
import IPADDR from '../../assets/constant/IP';
import axios from 'axios';

const {width: WIDTH} = Dimensions.get('window');

export default class SignIn extends Component {
    constructor(props)  {
        super(props);
        this.state = {
            error : false,
            errorMessage: false
        }
    } 

    verifyUser = () =>{

        var url = `${IPADDR}user/verify`
        var username = this.state.formUsername,
            password = this.state.formPassword;

            if ( username.length != 10 || isNaN(username) || password == null){
                this.setState( { error : true , errorMessage : "Invalid Phone No. " } )
                return ;
            }

        // console.log(this.state , username, password);
        // this.props.navigation.navigate('driverdummy', { user : { id : "ne" , contactNo : 536 , riderId : 54 } })    
        axios.post( url , {username,password} ).then( res =>{

            var data = res.data;
            console.log(data, "======")
            if ( data.status ){
                if ( data.user.isStudent ){
                    this.props.navigation.navigate('profile', { user : data.user } )
                }else{
                    this.props.navigation.navigate('driverdummy', { user : data.user })
                }
            }else{
                this.setState( { error : true , errorMessage : "Invalid Credentials" } )
            }

        })


    }

    render() {
        return (
            <Container>
                <Content>

                    <View style={styles.logoContainer}>
                        <Text style={styles.logoText}>Login In</Text>
                    </View>

                    <View style={{paddingLeft: 20, paddingRight: 20}}>
                        {this.state.error &&
                        <View style={{backgroundColor:"lightpink", padding:20,
                         borderRadius:10, borderWidth:2, borderColour:"red", textAlign:"center", marginTop:20}}>
                            <Text>{this.state.errorMessage}</Text>
                        </View> }
                        
                        <Form block style={styles.item}>
                            <Item block floatingLabel>
                                <Label block style={{marginBottom: 20}}>
                                    <Text>Mobile Number</Text>
                                </Label>
                                <FontAwesome5 name={'user'} brand style={{paddingLeft:25 ,color:'#000000'}} />

                                <Input block keyboardType='name-phone-pad'
                                       onChangeText={(text) => this.setState({"formUsername":text})}
                                       value={this.state["formUsername"]} />
                            </Item>
                            <Item floatingLabel>
                                <Label>Password</Label>
                                <FontAwesome5 name={"bars"} style={{fontSize:20}} />
                                <Input secureTextEntry
                                       onChangeText={(text) => this.setState({"formPassword":text})}
                                       value={this.state["formPassword"]}/>
                            </Item>
                        </Form>
                        <View style={{ marginTop:6 , marginLeft: 15,}}>
                        <Text style={{fontSize:14 }}>Forgot Password...?</Text>
                    </View>

                        <Button rounded info style={{textAlign:'center',alignSelf: 'center',justifyContent:'center' ,width:260 , marginTop: 20, backgroundColor:"#0083d9"  }}
                               onPress={ this.verifyUser }>
                            <Text>Driver Login</Text>
                        </Button>

                    </View>

                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',

    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 50
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'contain'
    },
    logoText: {
        color: 'black',
        fontSize: 30,
        fontWeight: '300',
        opacity: 0.9,
    },
    item: {
        paddingTop: 10,
    },

});

// export default FloatingLabel;