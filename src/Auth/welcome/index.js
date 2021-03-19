import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Button,
    ImageBackground,
    TextInput,
    Image, Alert, ActivityIndicator
} from 'react-native';
import Swiper from 'react-native-swiper'
// const WelcomeBG = require('../../../assets/welcomebg.png')
const Logo = require('../../../assets/nature.png')
const Logoo = require('../../../assets/natureo.png')
const Logot = require('../../../assets/naturet.png')
const Logoth = require('../../../assets/natureth.png')

class Welcome extends Component {
    constructor(props) {
        super(props)
        console.log("Login", this.props)

        this.state = {
            email: '',
            password: ''.replace(/\s/g, ''),
            loading: false,
            emailValid: false,
            isEmailEmpty: false,
            isValid: false,
            isPasswordEmpty: false
        }
    }

    render() {

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
                <View style={{ flex: 0.6 }}>

                    <Swiper activeDotColor={'#de493c'} dotColor={'grey'} showsButtons={false} style={styles.wrapper}>
                        <View style={styles.slide1}>
                            {/* <View style={{ backgroundColor: "#FFF", height: 200, width: 200, justifyContent: 'center', alignItems: "center", borderRadius: 100 }}> */}

                            <Image resizeMode='cover' style={{ height: 200, width: 200, borderRadius: 100, backgroundColor: '#FFF', }} source={Logo} />
                            {/* </View> */}
                            <Text style={styles.text}>Picking your travel destinations</Text>
                        </View>
                        <View style={styles.slide1}>
                            {/* <View style={{ backgroundColor: "#FFF", height: 200, width: 200, justifyContent: 'center', alignItems: "center", borderRadius: 100 }}> */}

                            <Image resizeMode='cover' style={{ height: 200, width: 200, borderRadius: 100, backgroundColor: '#FFF', }} source={Logoo} />
                            {/* </View> */}
                            <Text style={styles.text}>Picking your travel destinations</Text>
                        </View>
                        <View style={styles.slide1}>
                            {/* <View style={{ backgroundColor: "#FFF", height: 200, width: 200, justifyContent: 'center', alignItems: "center", borderRadius: 100 }}> */}

                            <Image resizeMode='cover' style={{ height: 200, width: 200, borderRadius: 100, backgroundColor: '#FFF', }} source={Logot} />
                            {/* </View> */}
                            <Text style={styles.text}>Picking your travel destinations</Text>
                        </View>
                        <View style={styles.slide1}>
                            {/* <View style={{ backgroundColor: "#FFF", height: 200, width: 200, justifyContent: 'center', alignItems: "center", borderRadius: 100 }}> */}

                            <Image resizeMode='cover' style={{ height: 200, width: 200, borderRadius: 100, backgroundColor: '#FFF', }} source={Logoth} />
                            {/* </View> */}
                            <Text style={styles.text}>Picking your travel destinations</Text>
                        </View>
                    </Swiper>
                </View>
                <View style={{ flex: 0.4 }}>

                    <TouchableOpacity
                        // onPress={() => this.props.navigation.navigate("Login")} 
                        style={{
                            backgroundColor: "#133675", height: 50, width: "95%",
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                            // marginVertical: 50,
                            // padding: 10
                            margin: 10
                        }}>
                        <Text style={{
                            color: "#FFFFFF",
                            fontSize: 18,
                            fontWeight: '400',
                            fontFamily: 'Avenir Next'
                        }}>Login with Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("Login")}
                        style={{
                            backgroundColor: "#de493c", height: 50, width: "95%",
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                            // marginVertical: 50,
                            // padding: 10
                            margin: 10
                        }}>
                        <Text style={{
                            color: "#FFFFFF",
                            fontSize: 18,
                            fontWeight: '400',
                            fontFamily: 'Avenir Next'
                        }}>Sign In</Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: "row", justifyContent: 'space-between', padding: 15 }}>
                        <Text style={{ color: "grey", fontSize: 17 }}>Haven't register yet?</Text>
                        <Text style={{ color: "#de493c", fontSize: 17 }}>Join Now</Text>

                    </View>
                </View>

            </SafeAreaView>
        )
    }
}
export default Welcome;
const styles = StyleSheet.create({
    wrapper: { backgroundColor: "#FFFFFF" },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#92BBD9'
    },
    text: {
        color: '#000',
        fontSize: 18,
        fontWeight: '300',
        marginVertical: 25

    }
})
