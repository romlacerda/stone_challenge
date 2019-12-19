import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import style from '../style/main'
import axios from 'axios'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFact } from '../actions/FactActions';

class Tag extends Component {

    ListByTag = async (tag) => {
        await axios.get(`https://api.chucknorris.io/jokes/random`, {
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

            this.props.addFact(obj);
            this.props.navigation.navigate('Home')
        }).catch(ex => {
            alert(error.message);
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