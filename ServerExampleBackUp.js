
import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, Alert, TextInput } from 'react-native'

import LoginPage from './pages/LoginPage';

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();




export default class ServerExample extends Component{
    constructor(props){
        super(props)

        this.state = {
            response: "",
            id: "",
            pw: ""
        }
    }

    HomeScreen=({navigation}) => {
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}> 
                <Text>
                    homescreen
                </Text>
                <Button title="profile" onPress={()=>navigation.navigate('Profile')}> </Button>
            </View>
        )
        
    }

    LoginScreen=({navigation}) => {
        return(
            <LoginPage 
            response={this.state.response} 
            setId={this.setId} 
            setPw={this.setPw} 
            connect={this.connect} 
            navi={navigation} />
        )
        
    }

    connect = async () => {
        const URL = "http://192.168.75.102:8082/login";
        try {
            const response = await fetch(URL,{
                method: "POST",
                body: JSON.stringify({id: this.state.id,pw: this.state.pw}),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if(response.status != 200){
                throw new Error("Something is wrong");
            }
            const responseText = await response.text();
            this.setState({response: responseText});
        }catch(error) {
            Alert.alert(error.message);
        }
    }

    setId = (id) => {
        this.setState({id : id});
    }

    setPw = (pw) => {
        this.setState({pw: pw});
    }
    
    /* render() {
        return (
            <View>
                <Text> {this.state.response} </Text>
                <TextInput placeholder="id" onChangeText={this.setId}/>
                <TextInput placeholder="pw" onChangeText={this.setPw}/>
                <Button title="login" onPress={this.connect}></Button>
            </View>
        )
    } */



    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={this.HomeScreen} options={{ title: 'Welcome' }}/>
                    <Stack.Screen name="Profile" component={this.LoginScreen} />
                </Stack.Navigator>
            </NavigationContainer>   
        )
    }


}

const styles = StyleSheet.create({})
