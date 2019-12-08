import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native';

import styles from '../style/main';
import axios from 'axios'

export default class SearchInput extends Component {

    ListByFilter = async () => {
        await axios.get(`https://api.chucknorris.io/jokes/random`)
        .then(res => {
            // const tags = res.data;
            // this.setState({tags});
            console.log(res.data)
        }).catch(ex => {
            console.log(ex);
        })
    }   

    render() {
        return (
            <TextInput style={styles.search_input} onSubmitEditing={this.ListByFilter}/>
            
        )
    }
}