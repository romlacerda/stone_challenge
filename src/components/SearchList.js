import React, { Component } from 'react'
import { View, Text } from 'react-native';

import style from '../style/main';
import { connect } from 'react-redux';
import Past from './Past';

export class SearchList extends Component {
    render() {
        return (
            <View style={style.search_list}>
                <Text style={style.search_screen_title}>Últimas pesquisas</Text>
                <View style={style.past_search_container}>
                    {this.props.searchs.searchs.map((data, index) => <Past key={index} navigation={this.props.navigation} past_name={data}/>)}
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const { searchs } = state;
    return { searchs }
  };

export default connect(mapStateToProps)(SearchList);
