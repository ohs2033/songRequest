import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import Tab1 from './TabOne';
import Tab2 from './TabTwo';
import Tab3 from './TabThree';

export default class Content extends Component {
    render() {
        return (
            <Tabs>
                <Tab heading={ <TabHeading><Icon name="camera" /><Text>Camera</Text></TabHeading>}>
                    <Tab1 />
                </Tab>
                <Tab heading={ <TabHeading><Text>No Icon</Text></TabHeading>}>
                    <Tab2 />
                </Tab>
                <Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
                    <Tab3 />
                </Tab>
            </Tabs>
        );
    }
}

