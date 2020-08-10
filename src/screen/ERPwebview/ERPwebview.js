import React, { Component } from "react";
import { StyleSheet, Text, View, Alert, TextInput, Image, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
export default class ERPwebview extends Component {
 
    render() {
        return <WebView source={{ uri: 'https://myrajneta.com/' }} />;
      }
    }