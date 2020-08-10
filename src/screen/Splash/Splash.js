import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, AsyncStorage } from 'react-native'
import Video from 'react-native-video'

export default class Splash extends Component {

    static navigationOptions = {
        headerShown: false,
    };

    componentDidMount() {
        setTimeout(() => {

          

        }, 3000);
    }

  

    render() {
        const { navigate } = this.props.navigation;
        setTimeout(() => {
            navigate('Login')
        }, 8000);

        return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',width:null,height:null}}>
            <Video source={require('../../assets/images/splash.mp4')}
                     style={{position: 'absolute',
                             top: 0,
                             left: 0,
                             right: 0,
                             bottom: 0,
                             opacity: 0.3}}
                             muted={true}
                             repeat={true}
                             resizeMode="cover"           
          />
        </View>
        );
    }

}
const style = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#1f3364'
        backgroundColor: '#fff'

    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        color: '#1f3364',
        marginTop: 10,
        fontSize: 18,

    }

}
)
