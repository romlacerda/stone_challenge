import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native';

import Tag from './Tag';
import style from '../style/main';

export default class TagList extends Component {
    render() {
        return (
            <View style={style.tag_search_container}>
                {this.props.tags.map((data, index) => <Tag name={data}/>)}
            </View>
        )
    }


}
