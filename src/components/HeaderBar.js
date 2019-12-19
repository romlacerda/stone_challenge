import React, { Component } from 'react'
import { View, Text } from 'react-native'

import styles from '../style/main'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class HeaderBar extends Component { 
    render() {
        return(
            <View style={styles.header_bar}>
                <Text style={styles.header_title}>{this.props.title}</Text>
                <Icon style={styles.search_icon} name="search" size={30} onPress={() => this.props.navigate('Search')} />
            </View>
        )
    }
    
}