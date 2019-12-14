import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import style from '../style/main'
import axios from 'axios'
import { connect } from 'react-redux';
import { addFact, searchFact } from '../actions/FactActions';
import { bindActionCreators } from 'redux';

class Past extends Component {
    
    ListByFilter = (e, param) => {
        axios.get(`https://api.chucknorris.io/jokes/search`, {
            params: {
                'query': param
            }
        })
        .then(res => {
            this.props.addFact(res.data.result);
            this.props.navigation.navigate('Home')
        }).catch(ex => {
            console.log(ex);
        })
    }   

    render() {

        return(
            <View style={style.past_search}>
                <Text style={style.font_default} onPress={(e, param) => this.ListByFilter(e, this.props.past_name)}>{this.props.past_name}</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const { facts, searching, searchs } = state
    return { facts, searching, searchs }
  };

const mapDispatchToProps = dispatch => (
    bindActionCreators({
      addFact, searchFact
    }, dispatch)
  );
  
  export default connect(mapStateToProps, mapDispatchToProps)(Past);