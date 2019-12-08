import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

import styles from '../style/main'

export default props => 
    <View style={styles.header_bar}>
        <Text style={styles.header_title}>{props.title}</Text>
    </View>