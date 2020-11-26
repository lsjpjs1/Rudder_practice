import React, {Component} from 'react';

import {Text,View,TouchableOpacity,TextInput,Button} from 'react-native';

class SignUpPage extends Component {

    constructor(props){
        super(props)

        this.state = {
            equal: "",
            id: "",
            pw: "",
            checkPw: ""
        }
    }

    connect = async () => {
        const URL = "http://192.168.75.102:8082/signUp";
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
            if(await responseText=="success"){
               this.props.navi.navigate(this.props.login);
            }
        }catch(error) {
            Alert.alert(error.message);
        }
    }

    setId = (id) => {
        this.setState({id : id});
    }

    setPw = (pw) => {
        this.state.pw = pw
        if(this.state.pw==""&&this.state.checkPw==""){
            this.setState({equal: ""})
        }
        else if(this.state.pw==this.state.checkPw){
           this.setState({equal: "equal"})
        }else{
            this.setState({equal: "notequal"})
        }
    }

    setCheckPw = (checkPw) => {
        this.state.checkPw = checkPw
        if(this.state.pw==""&&this.state.checkPw==""){
            this.setState({equal: ""})
        }
        else if(this.state.pw==this.state.checkPw){
           this.setState({equal: "equal"})
        }else{
            this.setState({equal: "notequal"})
        }

    }

    

    render() {

        return (

            <View>
                <TextInput placeholder="id" onChangeText={this.setId}/>
                <TextInput placeholder="pw" onChangeText={this.setPw}/>
                <TextInput placeholder="checkPw" onChangeText={this.setCheckPw}/>
                <Text>{ this.state.equal}</Text>
                <Button title="sign up" onPress={this.connect}></Button>
            </View>

        );

    }

}



export default SignUpPage;