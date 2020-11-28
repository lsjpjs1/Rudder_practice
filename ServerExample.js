
import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, Alert, TextInput } from 'react-native'

import LoginPage from './pages/LoginPage';

import MainPage from './pages/MainPage';

import SignUpPage from './pages/SignUpPage';

import ReviewPage from './pages/ReviewPage';

import AddReviewPage from './pages/AddReviewPage';

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();
const ReviewStack = createStackNavigator();
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

    MainScreen=({navigation, route}) => {
        return(
            <MainPage
            review="ReviewScreen"
            navi={navigation}
            route={route}
            />
        )
        
    }

    ReviewScreen=({navigation, route}) => {
        return(
            <ReviewPage
            navi={navigation}
            route = {route}
            addReview="AddReviewScreen"
            />
        )
        
    }

    AddReviewScreen=({navigation, route}) => {
        return(
            <AddReviewPage
            navi={navigation}
            route = {route}
            />
        )
        
    }

    SignUpScreen=({navigation,route}) => {
        return(
            <SignUpPage
            login = "Login"
            navi={navigation}
            route = {route}
            />
        )
        
    }

    LoginScreen=({navigation,route}) => {
        return(
            <LoginPage 
            main = "Main"
            signUp = "SignUp"
            navi={navigation}
            route = {route}
            />
        )
        
    }
    
    Review = ({navigation}) => {
        return(
        <ReviewStack.Navigator>
                <ReviewStack.Screen name="MainScreen" 
                component={this.MainScreen}
                options={{ headerShown: false }} 
                />
                <ReviewStack.Screen name="ReviewScreen" component={this.ReviewScreen} />
                 <ReviewStack.Screen name="AddReviewScreen" component={this.AddReviewScreen} /> 
                  
                </ReviewStack.Navigator>
        )
    } 

    Main = ({navigation}) => {
        return(
            <Tab.Navigator>
                <Tab.Screen name="MainScreen" component={this.Review} />
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
