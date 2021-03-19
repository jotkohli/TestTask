import React, { Component } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image, TextInput, TouchableOpacity, Alert
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import Logout from 'react-native-vector-icons/MaterialIcons'
import Styles from '../../globalstyles/index'
import { setProfile } from '../../redux/actions/action/login';



class Profile extends Component {
    constructor(props) {
        super(props)
        console.log("TOken", this.props)
        this.state = {
            name: '',
            email: '',
            isValid: false,
            isNameValid: false,
            isEmailEmpty: false,
            emailValid: false,
            modalVisible: false,

        }
    }

    async componentDidMount() {

        var Email = await AsyncStorage.getItem('email')
        var Name = await AsyncStorage.getItem('name')
        this.setState({ email: Email })
        console.log("LOGIN EMAIL", Email, Name)

    }

    _logout = () => {
        AsyncStorage.removeItem('email')
        this.props.navigation.navigate("Welcome")
    }

    render() {
        const { name, email, modalVisible } = this.state
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
                <View style={{ margin: 20, marginVertical: 30 }}>
                    <Text style={{ color: '#000', fontSize: 17, position: "absolute", paddingLeft: 5 }}>Full Name</Text>
                    <TextInput
                        style={Styles.textInputprofile}
                        placeholder=''
                        placeholderTextColor='#000'
                        value={name}
                        onChangeText={(name) => this.setState({ name: name })}
                    />
                    <Text style={{ color: '#000', fontSize: 17, paddingLeft: 5 }}>Email</Text>
                    <TextInput
                        style={Styles.textInputEmailprofile}
                        placeholder=''
                        placeholderTextColor='#000'
                        value={email}
                        onChangeText={(email) => this.setState({ email: email })}
                        autoCapitalize='none'
                        keyboardType='email-address'
                    />
                </View>
                <TouchableOpacity onPress={() => this._logout()} style={{ marginLeft: 20, alignItems: 'center', flexDirection: "row", justifyContent: 'flex-start' }}>
                    <Logout name='logout' size={25} color="#000" />
                    <Text style={{ color: "#000", fontSize: 17 }}>Logout</Text>
                </TouchableOpacity>

                <TouchableOpacity

                    style={Styles.buttonViewLogout}>
                    <Text style={Styles.buttonFont}>Submit</Text>
                </TouchableOpacity>

            </SafeAreaView>
        )
    }
}
export default Profile;