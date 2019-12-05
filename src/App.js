import React, { Component } from 'react'
import { View, Text } from 'react-native'

import styles from './style/main'

import FactList from './components/FactList'

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <View style={styles.header_bar}>
                    <Text style={styles.header_title}>CHUCK NORRIS FACTS</Text>
                </View>
                <FactList />
            </React.Fragment>
            
        )
    }
}