import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

import styles from '../style/main'
import FactList from '../components/FactList'
import HeaderBar from '../components/HeaderBar'
import axios from 'axios'

export default HomeScreen = (props) => {
    const { navigate } = props.navigation;
    
    return (
        <React.Fragment>
            <HeaderBar title='CHUCK NORRIS FACTS'/>
            <FactList />
            <Button title='Teste' onPress={() => navigate('Search', {name: 'Jane'})}></Button>
        </React.Fragment>
    )
}
