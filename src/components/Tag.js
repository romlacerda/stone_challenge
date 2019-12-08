import React, { Component } from 'react'
import { View, Text } from 'react-native'
import style from '../style/main'

export default props => {
    return (
            <View style={style.tag_search}>
                <Text style={style.tag_color_font}>{props.name}</Text>
            </View>
    )
}