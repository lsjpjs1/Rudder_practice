import React, {Component} from 'react';

import {Text,View,TextInput,Button} from 'react-native';

class MainPage extends Component {

    render() {

        return (

            <View >

                <TextInput placeholder="Searching lecture"/>
                <Button title="Search" ></Button>
            </View>

        );

    }

}



export default MainPage;