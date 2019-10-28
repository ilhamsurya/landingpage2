import React from 'react';
import {View, Image} from 'react-native';

const SearchFeature = () => {
  return (
    <View
      style={{
        backgroundColor: 'gold',
        flexDirection: 'row',
        paddingTop: 15,
      }}>
      <View style={{position: 'relative', flex: 1}}>
        <Image
          style={{width: 100, marginLeft: 125}}
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

export default SearchFeature;
