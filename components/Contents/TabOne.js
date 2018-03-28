import React, { Component } from 'react';
import { Container, Icon, Input, Item, Content, List, ListItem, Text, Body, CheckBox } from 'native-base';
import { connect } from 'react-redux';
import songList from "../../reducers/songListReducer";
import search from "fuzzysearch"

class TabOne extends Component {
    constructor(props) {
       super(props);
       this.state = {
          searchText: '',
          searchedSongList: []
       };
       // Toggle the state every second
     }

    componentWillMount = () => {

    }
    componentWillReceiveProps = () => {

    }


    onInputChange = (text) => {
        const searchedSongList = this.props.songList.songList.filter(song => {
            return search(text, song.title);
        })
        console.log(searchedSongList)
        this.setState({
            searchText: text,
            searchedSongList
        })
        
        console.log(typeof e);
    }

    renderSongList() {
        if (this.state.searchedSongList.length || this.state.searchText) {
            return this.state.searchedSongList.map(song => (
                    <ListItem key={song.title}>
                        <CheckBox checked={true} />
                        <Body>
                          <Text>{song.title}</Text>
                        </Body>
                    </ListItem>
                )
            )
        }
        return this.props.songList.songList.map(song => {
            return (
                <ListItem key={song.title}>
                    <CheckBox checked={true} />
                    <Body>
                      <Text>{song.title}</Text>
                    </Body>
                </ListItem>
            )
        })
    }
    render() {
        return (
            <Container>
                <Content>
                    <List>
                    <ListItem>
                    <Item>
                        <Icon name="ios-search" />
                        <Input onChangeText={this.onInputChange} placeholder="Search" />
                      </Item>
                      </ListItem>
                        {this.renderSongList()}
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