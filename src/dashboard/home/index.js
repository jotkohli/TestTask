import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    ImageBackground,
    Image, FlatList
} from 'react-native';
import Hotel from 'react-native-vector-icons/FontAwesome5'
import Location from 'react-native-vector-icons/Ionicons'
import Flight from 'react-native-vector-icons/MaterialIcons'
import Ship from 'react-native-vector-icons/FontAwesome5'
import Event from 'react-native-vector-icons/Octicons'
import More from 'react-native-vector-icons/Entypo'
import { connect } from 'react-redux'
const NatureO = require('../../../assets/natureo.png')
const Naturet = require('../../../assets/naturet.png')
const Natureth = require('../../../assets/natureth.png')


const Nature = require('../../../assets/nature.png')
class Home extends Component {
    constructor(props) {
        super(props)
        console.log("HOME === ==== ===", this.props)


    }
    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: 10,
                }}
            />
        );
    };

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#fff" }}>
                <ScrollView>

                    <Image resizeMode='cover' style={{ height: 150, width: '100%' }} source={Nature} />

                    <View style={{
                        height: 200, width: '90%', backgroundColor: "#fff", borderRadius: 10, alignItems: 'center', justifyContent: "center", top: -40, shadowColor: '#000', alignSelf: "center",
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.4,
                        shadowRadius: 1,
                        elevation: 3
                    }}>
                        <View style={{ height: 35, width: '90%', backgroundColor: "#ebedf0", borderRadius: 3, justifyContent: "center", paddingLeft: 5 }}>
                            <Text style={{ fontSize: 17, color: "#acaeb0" }}>What're you looking for ?</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>

                            <View style={styles.view}>
                                <View style={styles.insideView}>
                                    <Hotel size={20} color='#de493c' name='hotel' />
                                </View>
                                <Text style={styles.textStyle}>Hotel</Text>
                            </View>
                            <View style={styles.view}>
                                <View style={styles.insideView}>
                                    <Location size={20} color='#de493c' name='location-sharp' />
                                </View>
                                <Text style={styles.textStyle}>Tour</Text>
                            </View>
                            <View style={styles.view}>
                                <View style={styles.insideView}>
                                    <Location size={20} color='#de493c' name='car' />

                                </View>
                                <Text style={styles.textStyle}>car</Text>
                            </View>
                            <View style={styles.view}>
                                <View style={styles.insideView}>
                                    <Flight size={20} color='#de493c' name='flight' />

                                </View>
                                <Text style={styles.textStyle}>Flight</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>

                            <View style={styles.view}>
                                <View style={styles.insideView}>
                                    <Ship size={20} color='#de493c' name='ship' />

                                </View>
                                <Text style={styles.textStyle}>Cruise</Text>
                            </View>
                            <View style={styles.view}>
                                <View style={styles.insideView}>
                                    <Flight size={20} color='#de493c' name='directions-bus' />
                                </View>
                                <Text style={styles.textStyle}>Bus</Text>
                            </View>
                            <View style={styles.view}>
                                <View style={styles.insideView}>
                                    <Event size={20} color='#de493c' name='star' />

                                </View>
                                <Text style={styles.textStyle}>Event</Text>
                            </View>
                            <View style={styles.view}>
                                <View style={styles.insideView}>
                                    <More size={20} color='#de493c' name='dots-three-horizontal' />

                                </View>
                                <Text style={styles.textStyle}>More</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{ top: -20, width: '90%', alignSelf: "center" }}>
                        <Text style={{ fontWeight: '700', fontSize: 20, color: '#000' }}>Promos Today</Text>

                        <FlatList
                            horizontal={true}
                            contentContainerStyle={{ marginTop: 10 }}
                            showsHorizontalScrollIndicator={false}
                            data={[
                                { Country: 'Barcelona', url: Nature }, { Country: 'Australia', url: NatureO }, { Country: 'Canada', url: Naturet }, { Country: 'Philippines', url: Natureth },

                            ]}
                            renderItem={({ item }) =>
                                <ImageBackground
                                    resizeMode='cover'
                                    source={item.url}
                                    style={{ height: 200, width: 170, borderRadius: 50, justifyContent: "flex-end" }}>

                                    <Text style={styles.item}>Attraction & Activities</Text>
                                    <Text style={{ color: "#fff", fontWeight: '600', fontSize: 20, paddingLeft: 10 }}>{item.Country}</Text>
                                    <View style={{ height: 25, width: 70, backgroundColor: "#de493c", borderRadius: 3, justifyContent: "center", alignItems: 'center', margin: 10 }}>
                                        <Text style={{ color: '#fff', fontSize: 14, fontWeight: '500' }}>Book Now</Text>
                                    </View>
                                </ImageBackground>}
                            ItemSeparatorComponent={this.renderSeparator}
                            keyExtractor={(item, index) => index.toString()}

                        />
                    </View>
                    <View style={{ width: '90%', alignSelf: "center" }}>
                        <Text style={{ top: -10, fontWeight: '700', fontSize: 20, color: '#000' }}>Tours</Text>

                        <FlatList
                            horizontal={true}
                            contentContainerStyle={{ marginTop: 10 }}
                            showsHorizontalScrollIndicator={false}
                            data={[
                                { Country: 'Barcelona', url: Nature }, { Country: 'Australia', url: NatureO }, { Country: 'Canada', url: Naturet }, { Country: 'Philippines', url: Natureth },

                            ]}
                            renderItem={({ item }) =>
                                <ImageBackground
                                    resizeMode='cover'
                                    source={item.url}
                                    style={{ height: 200, width: 170, borderRadius: 50, justifyContent: "flex-end" }}>

                                    <Text style={styles.item}>Attraction & Activities</Text>
                                    <Text style={{ color: "#fff", fontWeight: '600', fontSize: 20, paddingLeft: 10 }}>{item.Country}</Text>
                                    <View style={{ height: 25, width: 70, backgroundColor: "#de493c", borderRadius: 3, justifyContent: "center", alignItems: 'center', margin: 10 }}>
                                        <Text style={{ color: '#fff', fontSize: 14, fontWeight: '500' }}>Book Now</Text>
                                    </View>
                                </ImageBackground>}
                            ItemSeparatorComponent={this.renderSeparator}
                            keyExtractor={(item, index) => index.toString()}

                        />
                    </View>

                </ScrollView>
            </View>
        )
    }
}
const mapStateToProps = state => {
    return {
        email: state
    }
};
export default connect(mapStateToProps)(Home)
const styles = StyleSheet.create({
    item: {
        paddingLeft: 10,
        fontSize: 14,
        color: "#fff",
        fontWeight: '400'
    },
    view: {
        marginHorizontal: 25,
        justifyContent: 'center',
        alignItems: 'center'
    }
    ,
    insideView: {
        borderRadius: 15,
        height: 30,
        width: 30,
        backgroundColor: "#ebedf0",
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: "#acaeb0",
        fontWeight: '200',
        fontSize: 13
    }
})  
