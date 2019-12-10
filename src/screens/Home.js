import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

import styles from '../style/main'
import FactList from '../components/FactList'
import HeaderBar from '../components/HeaderBar'
import axios from 'axios'
import { connect } from 'react-redux';

class HomeScreen extends Component {
 
    render() {
        const { navigate } = this.props.navigation;
        return (
            <React.Fragment>
                <HeaderBar title='CHUCK NORRIS FACTS'/>
                <FactList />
                <Button title='Teste' onPress={() => navigate('Search', {name: 'Jane'})}></Button>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    const { facts } = state.facts
    return { facts }
};

export default connect(mapStateToProps)(HomeScreen);