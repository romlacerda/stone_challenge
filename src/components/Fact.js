import React, { Component } from 'react'
import { View, Text } from 'react-native'
import style from '../style/main'

export default props => 
    <View style={style.fact_box}>
        <Text style={style.fontLess80}>{props.value}</Text>
    </View>