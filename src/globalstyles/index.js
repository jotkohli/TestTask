import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;
export default StyleSheet.create({
    container: {
        flex: 1
    },
    textInputemail: {
        borderBottomColor: "#979797",
        borderBottomWidth: 0.5,
        fontSize: 15,
        paddingBottom: 10,
        fontFamily: 'Avenir Next'

    },
    textInputpassword: {
        borderBottomColor: "#979797",
        borderBottomWidth: 0.5,
        paddingBottom: 10,
        fontFamily: 'Avenir Next'
        // marginVertical: 10
    },
    textInputSignupPassword: {
        borderBottomColor: "#D3D3D3",
        borderBottomWidth: 0.5,
        height: 50,
        fontSize: 15,
        marginVertical: 20
    },
    textInputSignupEmail: {
        borderBottomColor: "#D3D3D3",
        borderBottomWidth: 0.5,
        height: 50,
        fontSize: 15,
        // marginVertical: 10
    },
    ForgotPassword: {
        borderBottomWidth: 0.5,
        borderBottomColor: "black",
        width: 115
    },
    buttonView: {
        backgroundColor: "#de493c", height: 50, width: "95%",
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 50,
        // padding: 10
        margin: 10,
        borderRadius: 10
    },
    buttonFont: {
        color: "white",
        fontSize: 18,
        fontWeight: '400',
        fontFamily: 'Avenir Next'
    },
    backArrow: {
        height: 25,
        width: 25,
        resizeMode: "contain"
    },
    imageView: {
        justifyContent: "center",
        alignItems: 'center',
        marginVertical: 60
    },
    backgroundStyle: {
        backgroundColor: "black",
        height: 100,
        width: 100,
        borderRadius: 50
    },
    textPC: {
        color: "white",
        fontSize: 30,
        fontWeight: 'bold',
        padding: 30
    },
    submitButton: {
        backgroundColor: "black", height: 50, width: "90%",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginVertical: 80,
        margin: 20,
    },
    textInputprofile: {
        borderBottomColor: "#D3D3D3",
        borderBottomWidth: 0.5,
        height: 50,
        fontSize: 15,
        marginVertical: 20,
        color: '#FFF'
    },
    textInputEmailprofile: {
        borderBottomColor: "#D3D3D3",
        borderBottomWidth: 0.5,
        height: 50,
        fontSize: 15,
        color: '#000'

        // marginVertical: 10
    },
    buttonViewLogout: {
        backgroundColor: "#de493c", height: 50, width: "90%",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 50,
        margin: 20
    },
    activityIndicator: {
        height: windowHeight,
        width: windowWidth,
        backgroundColor: "#00000070",
        zIndex: 200,
        alignContent: "center",
        justifyContent: "center",
        position: "absolute"
    }
});