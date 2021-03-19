// import * as React from 'react';
// import { Text, View } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createAppContainer } from 'react-navigation';

// import Home from '../dashboard/home/index'
// function HomeScreen() {
//     return (
//         <Home />
//     );
// }

// function SettingsScreen() {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Settings!</Text>
//         </View>
//     );
// }

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//     return (
//         <Tab.Navigator>
//             <Tab.Screen name="Home" component={HomeScreen} />
//             <Tab.Screen name="Settings" component={SettingsScreen} />
//         </Tab.Navigator>
//     );
// }

// // function Dashboard() {
// //     return (
// //         <MyTabs />
// //     );
// // }

// const Bottom = createAppContainer(MyTabs);

// export default Bottom

import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons//MaterialCommunityIcons';
import UserIcon from 'react-native-vector-icons/FontAwesome';
import Home from '../dashboard/home/index'
import Profile from '../dashboard/profile/index'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
console.log("DASHBOARD")

const Tab1 = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            // headerTitle: 'Home',
            headerShown: false,
            // headerStyle: {
            //     backgroundColor: '#FFF',
            // },
            // headerTintColor: '#000',
            // headerLeft: () => false,
            // headerRight: () => false,
            // headerTitleStyle: {
            //     fontWeight: 'bold',
            //     fontSize: 10,
            //     alignSelf: "center",
            // fontFamily: 'Montserrat-Regular'

            // },
        }
    },
})
const Tab2 = createStackNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: {
            headerShown: false,

        }
    },
})
const MyTabs = createMaterialBottomTabNavigator(
    {
        Tab1: {
            screen: Tab1,
            navigationOptions: {
                // tabBarLabel: 'Dashboard',
                tabBarLabel: () => false,
                tabBarIcon: ({ tintColor }) =>
                    <View style={{ height: 50, width: 50, alignItems: "center" }} >
                        <Icon name="home" color={tintColor} size={20} />
                        <Text style={{ fontSize: 10, }}>Home</Text>
                    </View>,
                activeColor: "#de493c",
                inactiveColor: '#9e9e9e',
            }
        },
        Tab2: {
            screen: Tab2,
            navigationOptions: {
                tabBarLabel: () => false,
                tabBarIcon: ({ tintColor }) => (
                    <View style={{ height: 50, width: 50, alignItems: "center" }} >
                        <UserIcon name="user" color={tintColor} size={20} />
                        <Text style={{ fontSize: 10 }}>Profile</Text>

                    </View>),
                activeColor: "#de493c",
                inactiveColor: '#9e9e9e',
            }
        }
    },
    {
        initialRouteName: "Tab1",
        activeColor: '#f0edf6',
        inactiveColor: '#226557',
        barStyle: { backgroundColor: '#FFFFFF', justifyContent: 'space-between', height: 80 },
    },
);


const Bottom = createAppContainer(MyTabs);

export default Bottom
