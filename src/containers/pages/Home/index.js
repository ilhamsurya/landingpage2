import React, { Component } from 'react';
import {
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
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

const ShowcaseFeature = ({ onPress }) => {
  return (
    <Card>
      <View
        style={{
          paddingTop: 16,
          paddingHorizontal: 16,
          backgroundColor: 'white',
        }}>
        <View style={{ position: 'relative' }}>
          <Image
            source={require('../../../assets/showcase/umrah.jpg')}
            style={{
              height: 230,
              width: '100%',
              borderRadius: 10,
            }}
          />
          <View
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              backgroundColor: 'black',
              opacity: 0.2,
              borderRadius: 6,
            }}></View>
          <View
            style={{
              height: 15,
              width: 60,
              position: 'absolute',
              top: 16,
              left: 16,
            }}>
            <Image
              source={require('../../../assets/logo/white.png')}
              style={{
                width: undefined,
                height: undefined,
                resizeMode: 'contain',
                flex: 1,
              }}
            />
          </View>
        </View>
        <View
          style={{
            paddingTop: 16,
            paddingBottom: 20,
            borderBottomColor: '#E8E9ED',
            borderBottomWidth: 1,
          }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1C1C1C' }}>
            Umrah
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: '#7A7A7A',
              marginBottom: 11,
            }}>
            Desc
          </Text>
          <TouchableOpacity
            onPress={onPress}
            style={{
              backgroundColor: '#cf8b2b',
              paddingHorizontal: 12,
              paddingVertical: 11,
              alignSelf: 'flex-end',
              borderRadius: 4,
            }} >
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 13,
                color: 'white',
                textAlign: 'center',
              }}>
              CARI
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  );
};

const ShowcaseFeature2 = ({ onPress }) => {
  return (
    <Card>
      <View
        style={{
          paddingTop: 16,
          paddingHorizontal: 16,
          backgroundColor: 'white',
        }}>
        <View style={{ position: 'relative' }}>
          <Image
            source={require('../../../assets/showcase/haji.jpg')}
            style={{
              height: 230,
              width: '100%',
              borderRadius: 10,
            }}
          />
          <View
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              backgroundColor: 'black',
              opacity: 0.2,
              borderRadius: 6,
            }}></View>
          <View
            style={{
              height: 15,
              width: 60,
              position: 'absolute',
              top: 16,
              left: 16,
            }}>
            <Image
              source={require('../../../assets/logo/white.png')}
              style={{
                width: undefined,
                height: undefined,
                resizeMode: 'contain',
                flex: 1,
              }}
            />
          </View>
        </View>
        <View
          style={{
            paddingTop: 16,
            paddingBottom: 20,
            borderBottomColor: '#E8E9ED',
            borderBottomWidth: 1,
          }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1C1C1C' }}>
            Haji
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: '#7A7A7A',
              marginBottom: 11,
            }}>
            Desc
          </Text>
          <TouchableOpacity
            onPress={onPress}
            style={{
              backgroundColor: '#cf8b2b',
              paddingHorizontal: 12,
              paddingVertical: 11,
              alignSelf: 'flex-end',
              borderRadius: 4,
            }} >
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 13,
                color: 'white',
                textAlign: 'center',
              }}>
              CARI
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  );
};

const ShowcaseFeature3 = ({ onPress }) => {
  return (
    <Card>
      <View
        style={{
          paddingTop: 16,
          paddingHorizontal: 16,
          backgroundColor: 'white',
        }}>
        <View style={{ position: 'relative' }}>
          <Image
            source={require('../../../assets/showcase/umrah+.jpg')}
            style={{
              height: 230,
              width: '100%',
              borderRadius: 10,
            }}
          />
          <View
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              backgroundColor: 'black',
              opacity: 0.2,
              borderRadius: 6,
            }}></View>
          <View
            style={{
              height: 15,
              width: 60,
              position: 'absolute',
              top: 16,
              left: 16,
            }}>
            <Image
              source={require('../../../assets/logo/white.png')}
              style={{
                width: undefined,
                height: undefined,
                resizeMode: 'contain',
                flex: 1,
              }}
            />
          </View>
        </View>
        <View
          style={{
            paddingTop: 16,
            paddingBottom: 20,
            borderBottomColor: '#E8E9ED',
            borderBottomWidth: 1,
          }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1C1C1C' }}>
            Umrah+
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: '#7A7A7A',
              marginBottom: 11,
            }}>
            Desc
          </Text>
          <TouchableOpacity
            onPress={onPress}
            style={{
              backgroundColor: '#cf8b2b',
              paddingHorizontal: 12,
              paddingVertical: 11,
              alignSelf: 'flex-end',
              borderRadius: 4,
            }} >
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 13,
                color: 'white',
                textAlign: 'center',
              }}>
              CARI
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  );
};

const MainMenu = props => {
  return (
    <View style={{ marginHorizontal: 17, paddingTop: 15 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#ffeb80',
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
          padding: 14,
          marginTop: 10,
        }}>
        <Text>{props.greeting}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 20,
          paddingBottom: 15,
          backgroundColor: '#fff4ba',
          borderRadius: 10,
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
        }}>
        <View style={{ position: 'relative', flex: 1 }}>
          <TextInput
            placeholder="Sedang di kota apa anda hari ini?"
            style={{
              borderWidth: 1,
              borderColor: '#E8E8E8',
              borderRadius: 25,
              height: 40,
              fontSize: 13,
              paddingLeft: 65,
              paddingRight: 25,
              backgroundColor: 'white',
              marginRight: 20,
              marginLeft: 15,
            }}
          />
          <Image
            source={require('../../../assets/icon/search.png')}
            style={{ position: 'absolute', top: 6, left: 20 }}
          />
        </View>
      </View>
    </View>
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

class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
          {/*HEAD*/}
          <MainHeader />

          {/*MainMenu*/}
          <MainMenu greeting="Selamat Malam LolMastah" />

          {/*Showcase*/}
          <ShowcaseFeature
            onPress={() => this.props.navigation.navigate('UmrahPromo')}
          />
          <ShowcaseFeature2
            onPress={() => alert('PAGE NOT AVAILABLE')}
          />
          <ShowcaseFeature3
            onPress={() => alert('PAGE NOT AVAILABLE')}
          />
          {/*Horizontal Cross*/}
        </ScrollView>
        {/*Left Side Navigation*/}
        {/*NavBar*/}
        <Footer>
          <FooterTab style={{ backgroundColor: '#ffffe6' }}>
            <NavigationButton onPress={() => this.props.navigation.navigate('Umrah')}
              desc="Umrah"
              img={require('../../../assets/icon/umrah.png')}
            />
            <NavigationButton
              desc="Umrah+"
              img={require('../../../assets/icon/umrah+.png')}
            />
            <NavigationButton onPress={() => this.props.navigation.navigate('Home')}
              desc="Home"
              img={require('../../../assets/icon/home.png')}
            />
            <NavigationButton
              desc="Haji"
              img={require('../../../assets/icon/haji.png')}
            />
            <NavigationButton onPress={() => this.props.navigation.navigate('Account')}
              desc="Profile"
              img={require('../../../assets/icon/foto.png')}
            />
          </FooterTab>
        </Footer>
      </View>
    );
  }
}

export default Home;
