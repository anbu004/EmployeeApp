import React, { Component } from "react";
import {
    Button, View, Text, Image, StyleSheet, SafeAreaView,
    TouchableOpacity, List, ListItem, ListView,
    FlatList, ScrollView, Platform, TextInput, Picker,BackHandler
} from 'react-native';
import { Container } from 'native-base';
import HeaderComponent from '../../Component/Common/Header';
import ClientCreateForm from './Component/ClientCreateForm';
export default class ClientCreate extends Component {
    // headerName: string;
    constructor(props) {
        super(props);
        const { params } = this.props.navigation.state;
        this.state = {
            resourcePath: {},
        };
        this.navigator = null;
    
        this.handleBack = (() => {
          const { navigate } = this.props.navigation;
          navigate('dashboard');
          return true;
        }).bind(this)
    }

      componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBack);
      }
    
      componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBack);
      }



    goToPostPage = () => {
        this.props.navigation.navigate('dashboard')
    };
   logOut = () => {
        this.props.navigation.navigate('Login')
    };
    render() {
        return (
            <Container style={styles.container}>
                <HeaderComponent logOut={this.logOut} headerTitle='Client Create' navigation={this.props.navigation} />
                <ScrollView>
                    <ClientCreateForm goToPostPage={this.goToPostPage} />
                </ScrollView>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: 'black'
    },
})
