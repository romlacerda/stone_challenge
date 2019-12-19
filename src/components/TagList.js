import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Tag from './Tag';
import style from '../style/main';

export default class TagList extends Component {
    ShuffleTags = () => {
        const shuffled = this.props.tags.sort(() => 0.5 - Math.random());
        const choices = shuffled.slice(0, 8);
        return choices;
    }

    render() {
        return (
            <View style={style.margin_50}>
                <Text style={style.search_screen_title}>Tags</Text>
                <View style={style.tag_search_container}>
                    {this.ShuffleTags().map((data, index) => <Tag key={index} name={data} navigation={this.props.navigation} />)}
                </View>
            </View>
        );
    }
}
