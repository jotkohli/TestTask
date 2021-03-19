import React, { Component } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    TextInput, Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Styles from '../../globalstyles/index'
import KeyboardShift from '../../keyboardshift/index'
import Backarrow from 'react-native-vector-icons/MaterialIcons'
import { connect } from 'react-redux';
import { setProfile } from '../../redux/actions/action/login';

class Login extends Component {
    constructor(props) {
        super(props)
        console.log("SIGN IN === ==== ===", this.props)

        this.state = {
            email: '',
            password: ''.replace(/\s/g, ''),
            loading: false,
            emailValid: false,
            isEmailEmpty: false,
            isValid: false,
            isPasswordEmpty: false,
            test: 'test'
        }
    }

    _Validation = () => {
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

        if (!this.state.email) {
            this.setState({
                isEmailEmpty: true,
                isValid: false,
            })
            Alert.alert(
                'Email Alert',
                'Please Enter your Email',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel'
                    },
                    { text: 'OK', onPress: () => console.log('OK Pressed') }
                ],
                { cancelable: false }
            );
        } else if (reg.test(this.state.email.trim(/^\s+|\s+$/g, "")) === false) {
            this.setState({
                isEmailEmpty: false,
                isPasswordEmpty: false,
                isValid: false,
                emailValid: false
            })
            Alert.alert(
                'Email Alert',
                'Please Enter your valid Email',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel'
                    },
                    { text: 'OK', onPress: () => console.log('OK Pressed') }
                ],
                { cancelable: false }
            );
        } else if (this.state.password == '') {
            this.setState({
                isPasswordEmpty: true,
                isEmailEmpty: false,
                isValid: false,
            })
            Alert.alert(
                'Password Alert',
                'Please Enter your Password',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel'
                    },
                    { text: 'OK', onPress: () => console.log('OK Pressed') }
                ],
                { cancelable: false }
            );
        }
        else {
            this.setState({
                isEmailEmpty: false,
                isPasswordEmpty: false,
                isValid: true,
                emailValid: true
            })
            this._login()
        }
    }
    _login = async () => {
        const { email, password, test } = this.state;
        console.log("EMAIL", email, "Password:", password)
        await AsyncStorage.setItem('email', email)
        await AsyncStorage.setItem('name', test)
        await this.props.setProfile(email)
        this.props.navigation.navigate('Dashboard')
    }
    render() {
        const { email, password, } = this.state;
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#F9F9F9' }}>


                <KeyboardShift style={{ width: '100%', height: '100%' }}>
                    <View style={{ margin: 10, flexDirection: "row", marginTop: 30, alignItems: "center", justifyContent: "center" }}>
                        <TouchableOpacity style={{ paddingBottom: 7, marginLeft: 5, left: 0, position: "absolute" }}>
                            <Backarrow onPress={() => this.props.navigation.goBack()} name='arrow-back-ios' size={30} color='#de493c' />
                        </TouchableOpacity>
                        <Text style={{ color: "#42413D", fontSize: 20, textAlign: "center" }}>Sign In</Text>
                    </View>
                    <View style={{ margin: 15 }} >
                        <Text style={{ color: '#989898', paddingBottom: 10 }}>Email</Text>
                        <TextInput
                            style={Styles.textInputemail}
                            placeholder='Email...'
                            value={email}
                            onChangeText={(email) => this.setState({ email: email })}
                            autoCapitalize='none'
                            keyboardType='email-address'
                        />
                        <Text style={{
                            color: '#989898', paddingBottom: 10, paddingTop: 15
                        }}>Password</Text>
                        <TextInput
                            style={Styles.textInputpassword}
                            placeholder='Your Password here...'
                            value={password.replace(/\s/g, '')}
                            onChangeText={(password) => this.setState({ password: password.replace(/\s/g, '') })}
                            secureTextEntry={true}

                        />
                    </View>
                    <TouchableOpacity onPress={() => this._Validation()} style={Styles.buttonView}>
                        <Text style={Styles.buttonFont}>Sign In</Text>
                    </TouchableOpacity>
                    <View style={{ borderBottomColor: "#989898", borderBottomWidth: 0.3, alignSelf: 'center' }}>
                        <Text style={{ color: "#989898", fontSize: 17 }} >Forgot your password?</Text>
                    </View>
                </KeyboardShift>
            </SafeAreaView>
        )
    }
}
// const mapStateToProps = (state) => {
//     const { email } = state
//     return { email }
// };


const mapDispatchToProps = dispatch => ({
    setProfile: (data) => (setProfile(data)),
});

export default connect(mapDispatchToProps)(Login)