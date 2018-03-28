import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';
import { connect } from 'react-redux';
import songList from "../../reducers/songListReducer";

class TabOne extends Component {

    render() {
        console.log('prop is ', this.props);
        console.log(this.props);
        return (
            <Container>
                <Content>
                    <List>
                        {this.props.songList.forEach(song => {
                            return (
                                <ListItem >
                                    <Text>{song.title}</Text>
                                </ListItem>
                            )
                        })}
                        <ListItem>
                            <Text>Nathaniel Clyne</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Dejan Lovren</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        songList: state.songList
    }
}

export default connect(mapStateToProps, null)(TabOne);