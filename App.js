import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Tabs, Tab, TabHeading, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import MainHeader from './components/Header.js';
import Contents from './components/Contents';
import Tab1 from './components/Contents/TabOne';
import Tab2 from './components/Contents/TabTwo';
import Tab3 from './components/Contents/TabThree';
import ic from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons } from '@expo/vector-icons';

import { Provider } from 'react-redux';
import store from './reducers/index.js';

export default class App extends React.Component {
  render() {

    return (
        <Provider store={store}>
            <Container>
                <MainHeader hasTabs/>
                <Tabs>
                
                <Tab
                    heading={<TabHeading>
                        <MaterialIcons name="queue-music" size={30}></MaterialIcons><Text>List</Text></TabHeading>}>
                        <Tab1 />
                    </Tab>
                    <Tab heading={ <TabHeading><Text>No Icon</Text></TabHeading>}>
                        <Tab2 />
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
                        <Tab3 />
                    </Tab>
                </Tabs>
            </Container>
        </Provider>
    );
  }
}
