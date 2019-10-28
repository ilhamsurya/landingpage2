import React from 'react';
import {
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { Card, View, Button, Footer, FooterTab } from 'native-base';

const NavigationButton = (props) => {
    return (
        <Button vertical>
            <TouchableOpacity onPress={props.onPress}>
                <Image style={{ width: 30, height: 30 }} source={props.img} />
                <Text style={{ fontSize: 10, marginTop: 4 }}>{props.desc}</Text>
            </TouchableOpacity>
        </Button>
    );
};

const MainHeader = props => {
    return (
        <View
            style={{
                backgroundColor: 'gold',
                flexDirection: 'row',
                paddingTop: 15,
            }}>
            <View style={{ position: 'relative', flex: 1 }}>
                <Image
                    style={{ width: 100, marginLeft: 125 }}
                    source={require('../../../assets/icon/abdulhp.png')}
                />
            </View>
            <View style={{}}>
                <Image
                    style={{
                        resizeMode: 'stretch',
                        width: 30,
                        height: 30,
                        marginTop: 7,
                        marginLeft: 310,
                    }}
                    source={require('../../../assets/icon/voucher.png')}
                />
            </View>
            <View
                style={{
                    width: 35,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: 60,
                }}></View>
        </View>
    );
};

const Umrah = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                {/*HEADER*/}
                <MainHeader />
                <Text>UMRAH PAGE</Text>
                <Button title="Go To Detail" onPress={() => props.navigation.navigate('UmrahDetail')} />
            </ScrollView>
            <Footer>
                <FooterTab style={{ backgroundColor: '#ffffe6' }}>
                    <NavigationButton onPress={() => props.navigation.navigate('Umrah')}
                        desc="Umrah"
                        img={require('../../../assets/icon/umrah.png')}
                    />
                    <NavigationButton
                        desc="Umrah+"
                        img={require('../../../assets/icon/umrah+.png')}
                    />
                    <NavigationButton onPress={() => props.navigation.navigate('Home')}
                        desc="Home"
                        img={require('../../../assets/icon/home.png')}
                    />
                    <NavigationButton
                        desc="Haji"
                        img={require('../../../assets/icon/haji.png')}
                    />
                    <NavigationButton
                        desc="Profile"
                        img={require('../../../assets/icon/foto.png')}
                    />
                </FooterTab>
            </Footer>
        </View>


    )
};

export default Umrah;