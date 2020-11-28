import React, {Component} from 'react';

import {Text,View,TextInput,Button, Alert} from 'react-native';

import {SearchBar} from 'react-native-elements'



class ReviewPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            reviewList: []
        }
        this.connect()
    }

   

    connect = async () => {
        const URL = "http://10.0.2.2:8082/showReview";
        try {
            const response = await fetch(URL,{
                method: "POST",
                body: JSON.stringify({lectureName: this.props.route.params.lectureName}),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if(response.status != 200){
                throw new Error("Something is wrong");
            }
            const responseJson = await response.json();
            
            for(var i=0;i<Object.keys(responseJson).length;i++){
                var temp = new Object()
                temp.review_id = responseJson[i].review_id
                temp.title = responseJson[i].title
                temp.contents = responseJson[i].contents
                temp.lecture_id = responseJson[i].lecture_id
                this.state.reviewList.push(temp)
                
            }
            
            this.setState({reviewList: this.state.reviewList})
           
            
        }catch(error) {
            Alert.alert(error.message);
        }
    }

    

    render(){
        
        const reviewList =this.state.reviewList
     const nameList = reviewList.map( 
     (reviewList) => ( <Text key={reviewList.review_id}>{reviewList.title}{"\n"}{reviewList.contents}</Text> ) 
     );
        return (
            <View>
                
                <Button title="Add review" onPress={()=>this.props.navi.navigate(this.props.addReview,{lectureName: this.props.route.params.lectureName})}></Button>

                <Text> {this.props.route.params.lectureName} </Text>
                <View>{nameList}</View>
            </View>
        )
    }

}



export default ReviewPage;