import React from 'react';
import {
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { Container, Header, Content, Icon, Right, ListItem, CheckBox, Body, Card, CardItem, View, Button, Footer, FooterTab, DatePicker, DeckSwiper, Left, Thumbnail, Item, Input, List } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';



const cards = [
    {
        text: 'Card One',
        name: 'One',
        image: require('../../../assets/showcase/umrah.jpg'),
    },
    {
        text: 'Card Two',
        name: 'Two',
        image: require('../../../assets/showcase/haji.jpg'),
    },

    {
        text: 'Card Three',
        name: 'Three',
        image: require('../../../assets/showcase/umrah+.jpg'),
    },


];

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

const MainHeader = (props) => {
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

const CardList = (props) => {
    return (
        <Content>
            <Card>
                <CardItem>
                    <Icon active name={props.img} />
                    <Text>{props.text}</Text>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </CardItem>
                <CardItem>
                    <Icon active name={props.img2} />
                    <Text>{props.text2}</Text>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </CardItem>
                <CardItem>
                    <Icon active name={props.img3} />
                    <Text>{props.text3}</Text>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </CardItem>
            </Card>
        </Content>
    )
}

const Swiper = (props) => {
    return (
        <View>
            <DeckSwiper
                dataSource={cards}
                renderItem={item =>
                    <Card style={{ elevation: 3 }}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={item.image} />
                                <Body>
                                    <Text>{item.text}</Text>
                                    <Text note>NativeBase</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image style={{ height: 300, flex: 1 }} source={item.image} />
                        </CardItem>
                        <CardItem>
                            <Icon name="heart" style={{ color: '#ED4A6A' }} />
                            <Text>{item.name}</Text>
                        </CardItem>
                    </Card>
                }
            />
        </View>
    )

}

const TextChoice = (props) => {
    return (
        <Content>
            <Item>
                <Icon active name='home' />
                <Input placeholder='Icon Textbox' />
            </Item>
            <Item>
                <Input placeholder='Icon Alignment in Textbox' />
                <Icon active name='swap' />
            </Item>
        </Content>



    )
}

const Check = (props) => {
    return (
        <Content>
            <ListItem>
                <CheckBox checked={true} />
                <Body>
                    <Text>Daily Stand Up</Text>
                </Body>
            </ListItem>
            <ListItem>
                <CheckBox checked={false} />
                <Body>
                    <Text>Discussion with Client</Text>
                </Body>
            </ListItem>
            <ListItem>
                <CheckBox checked={false} color="green" />
                <Body>
                    <Text>Finish list Screen</Text>
                </Body>
            </ListItem>
        </Content>
    )

}

const ProfileScreen = (props) => {
    return (
        <Content>
            <List>
                <ListItem avatar>
                    <Left>
                        <Thumbnail source={require('../../../assets/showcase/profile1.jpg')} />
                    </Left>
                    <Body>
                        <Text>Kumar Pratik</Text>
                        <Text note>Doing what you like will always keep you happy . .</Text>
                    </Body>
                    <Right>
                        <Text note>3:43 pm</Text>
                    </Right>
                </ListItem>
            </List>
        </Content>


    )
}

const Account = (props) => {

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                {/*HEADER*/}
                <MainHeader />
                <Text>Account</Text>
                <Button title="Go To Detail" onPress={() => props.navigation.navigate('UmrahDetail')} />

                <Grid>
                    <Col style={{ backgroundColor: '##ffff80', height: 500, width: 350 }}>
                        {/*Deck Swiper*/}
                        <Swiper />
                    </Col>
                </Grid>
                {/*Profile Screen*/}
                <ProfileScreen />
                {/*Text*/}
                <TextChoice />
                {/*Checker*/}
                <Check />
                {/*Card List*/}
                <CardList img="logo-googleplus" img2="logo-facebook" img3="logo-twitter" text="Google Plus" text2="Facebook" text3="Twitter" />

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
                        desc="Profile" onPress={() => props.navigation.navigate('Account')}
                        img={require('../../../assets/icon/foto.png')}
                    />
                </FooterTab>
            </Footer>
        </View>


    )
};

export default Account;