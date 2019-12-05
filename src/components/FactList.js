import React, { Component } from 'react'
import { View, Text, ScrollView, FlatList } from 'react-native';

import Fact from './Fact';
import style from '../style/main';

export default class Facts extends Component {
    render() {

        this.state = {
            data: [
                {
                    id: 1,
                    value: 'Lindsay Lohan was actually on her way to having a great acting career before Chuck Norris sodomized her.'
                },
                {
                    id: 2,
                    value: 'Chuck Norris can count to 10...backwards... Brain hurt? ...it\'s cool only chuck Norris gets it.'
                }
            ]
        }

        renderItems = ({item}) => {
            return <Fact {...item} />
        }

        return (
            <ScrollView>
                <FlatList
                    style={style.fact_list} 
                    data={this.state.data} renderItem={renderItems} keyExtractor={(_, index) => index.toString()} />
            </ScrollView>
        )
    }

}