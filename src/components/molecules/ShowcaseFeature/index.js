import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import {Card, View} from 'native-base';

const ShowcaseFeature = props => {
  return (
    <Card>
      <View
        style={{
          paddingTop: 16,
          paddingHorizontal: 16,
          backgroundColor: 'white',
        }}>
        <View style={{position: 'relative'}}>
          <Image
            source={props.img}
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
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C'}}>
            {props.title}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: '#7A7A7A',
              marginBottom: 11,
            }}>
            {props.desc}
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#cf8b2b',
              paddingHorizontal: 12,
              paddingVertical: 11,
              alignSelf: 'flex-end',
              borderRadius: 4,
            }}>
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

export default ShowcaseFeature;
