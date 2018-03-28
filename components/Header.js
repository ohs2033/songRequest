import React, { Component } from 'react';

import { StyleSheet } from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';

export default class MainHeader extends Component {
    render() {
        return (
            <Header style={StyleSheet.headerStyle}>
                <Body>
                <Title style={{width: 100}}>신청곡주세요</Title>
                </Body>
            </Header>
        );
    }
}

const headerStyle =  StyleSheet.create({
    headerStyle: {
        flex:1,
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'green',
    }
});
