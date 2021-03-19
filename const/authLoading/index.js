import React from 'react';
import {
    ActivityIndicator,
    View,
    Dimensions
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
const screenHeight = Math.round(Dimensions.get('window').height);

export default class AuthLoadingScreen extends React.Component {

    componentDidMount() {
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const email = await AsyncStorage.getItem('name');
        console.log("ASYNC STIORAGE=== ==== ====", email)
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(email == "test" ? 'Auth' : 'App');
    };

    // Render any loading content that you like here
    render() {
        return (
            <View style={{
                alignItems: "center", justifyContent: 'center', position: 'absolute',
                backgroundColor: "#00000070",
                width: "100%", height: screenHeight, zIndex: 200
            }}>
                <ActivityIndicator size="large" color="#FFF" />
            </View>
        );
    }
}