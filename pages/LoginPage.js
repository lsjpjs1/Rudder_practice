
import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, TextInput } from 'react-native'



class LoginPage extends Component{
    constructor(props){
        super(props)

        this.state = {
            response: "",
            id: "",
            pw: ""
        }
    }

    connect = async () => {
        const URL = "http://10.0.2.2:8082/login";
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
            if(responseText=="success"){
               this.props.navi.navigate(this.props.main);
            }
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

    goToSignUp = () => {
        this.props.navi.navigate(this.props.signUp)
    }

    render(){
        return (
            <View>
                <Text> {this.state.response} </Text>
                <TextInput placeholder="id" onChangeText={this.setId}/>
                <TextInput placeholder="pw" onChangeText={this.setPw}/>
                <Button title="login" onPress={this.connect}></Button>
                <Button title="sign up" onPress={this.goToSignUp}></Button>
            </View>
        )
    }
}



            // <View>
            //     <Text> {props.test} </Text>
            //     <Button title="go back" onPress={()=>props.navi.navigate(props.page)}></Button>
            // </View>
const styles = StyleSheet.create({})

export default LoginPage;

