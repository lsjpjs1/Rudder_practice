
import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, Alert, TextInput } from 'react-native'

import LoginPage from './pages/LoginPage';

import MainPage from './pages/MainPage';

import SignUpPage from './pages/SignUpPage';

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()




export default class ServerExample extends Component{
    constructor(props){
        super(props)

        this.state = {
            response: "",
            id: "",
            pw: ""
        }
    }

    MainScreen=({navigation}) => {
        return(
            <MainPage/>
        )
        
    }

    SignUpScreen=({navigation}) => {
        return(
            <SignUpPage
            login = "Login"
            navi={navigation}
            />
        )
        
    }

    LoginScreen=({navigation}) => {
        return(
            <LoginPage 
            main = "Main"
            signUp = "SignUp"
            navi={navigation} />
        )
        
    }

    Main = ({navigation}) => {
        return(
            <Tab.Navigator>
                <Tab.Screen name="MainScreen" component={this.MainScreen} />
            </Tab.Navigator>
        )
    }



    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator>
                <Stack.Screen name="Login" component={this.LoginScreen} />
                <Stack.Screen name="Main" 
                component={this.Main} 
                options={{ headerShown: false }}
                />
                <Stack.Screen name="SignUp" component={this.SignUpScreen} />    
                </Stack.Navigator>
                
            </NavigationContainer>   
        )
    }


}

const styles = StyleSheet.create({})
