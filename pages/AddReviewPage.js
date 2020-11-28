import React, {Component} from 'react';

import {Text,View,TextInput,Button, Alert} from 'react-native';

import {SearchBar} from 'react-native-elements'



class AddReviewPage extends Component {

    constructor(props){
        super(props)

        this.state = {
            title:"",
            contents:""
        }
    }

    

    connect = async () => {
        const URL = "http://192.168.75.102:8082/addReview";
        try {
            const response = await fetch(URL,{
                method: "POST",
                body: JSON.stringify({title: this.state.title,contents: this.state.contents,lectureName: this.props.route.params.lectureName}),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if(response.status != 200){
                throw new Error("Something is wrong");
            }
            const responseText = await response.text();
            if(responseText=="success"){
               this.props.navi.goBack();
            }
        }catch(error) {
            Alert.alert(error.message);
        }
    }

    render(){
        return (
            <View>
                <Text> {this.props.route.params.lectureName} </Text>
                <TextInput placeholder="Title" style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} onChangeText={(text)=>this.setState({title: text})}></TextInput>
                <TextInput placeholder="Contents" style={{ height: 300, borderColor: 'gray', borderWidth: 1 }} onChangeText={(text)=>this.setState({contents: text})}></TextInput>
                <Button title="Submit" onPress={this.connect}/>
            </View>
        )
    }

}



export default AddReviewPage;