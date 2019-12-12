import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import style from '../style/main'
import axios from 'axios'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFact } from '../actions/FactActions';

class Tag extends Component {

    ListByTag = (tag) => {
        axios.get(`https://api.chucknorris.io/jokes/random`, {
            params: {
                'category': tag
            }
        })
        .then(res => {
            // this.props.navigation.navigate('Home', {
            //     tags: res.data
            // })
            const obj = [{
                ...res.data
            }]

            console.log(obj)
            this.props.addFact(obj);
            this.props.navigation.navigate('Home')
        }).catch(ex => {
            console.log(ex);
        })
    } 
 
 
    render() {
        return (
            <TouchableOpacity 
                style={style.tag_button} 
                onPress={() => this.ListByTag(this.props.name)}>
                    <Text style={style.tag_button_font}>{this.props.name}</Text>
            </TouchableOpacity>
        )
    }
}

const mapStateToProps = (state) => {
    const { facts, searching } = state;
    return { facts, searching }
  };

const mapDispatchToProps = dispatch => (
    bindActionCreators({
      addFact, 
    }, dispatch)
  );
  
  export default connect(mapStateToProps, mapDispatchToProps)(Tag);