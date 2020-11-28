import React, {Component} from 'react';

import {Text,View,TextInput,Button, Alert} from 'react-native';

import {SearchBar} from 'react-native-elements'

class MainPage extends Component {

    constructor(props){
        super(props)

        this.state = {
            searchContents: "",
            lectureJson: []
        }
    }

    connect = async () => {
        const URL = "http://10.0.2.2:8082/lectureSearch";
        try {
            const response = await fetch(URL,{
                method: "POST",
                body: JSON.stringify({searchContents: this.state.searchContents}),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if(response.status != 200){
                throw new Error("Something is wrong");
            }
            const responseJson = await response.json();
            
            for(var i=0;i<Object.keys(responseJson).length;i++){
                var joined = this.state.lectureJson.concat(responseJson[i].lecture_name)
                this.setState({lectureJson: joined})
            }
            
            
            
        }catch(error) {
            Alert.alert(error.message);
        }
    }

    setSearchContents = (some) =>{
        this.setState({searchContents:some})
    }

    goReview = (name) => {
        this.props.navi.navigate(this.props.review,{
            lectureName: name
        });
    }    
    
    render() {
        const names =this.state.lectureJson
     const nameList = names.map( 
     (name) => ( <Button key={name} onPress={()=>this.goReview(name)} title={name}/> ) 
     );
    
        return (
            


            <View >
        
                <SearchBar onSubmitEditing={this.connect} placeholder="Type lecture name" onChangeText={this.setSearchContents} value={this.state.searchContents}/>
               
                <View style={{marginTop:10}}>{nameList}</View>
            </View>

        );

    }

}



export default MainPage;