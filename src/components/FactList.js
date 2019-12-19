import React, { Component } from 'react'
import { View, ScrollView, FlatList } from 'react-native';

import Fact from './Fact';
import style from '../style/main';

import { connect } from 'react-redux';


class Facts extends Component {
    render() {
        
        renderItems = ({item}) => {
            return <Fact {...item} />
        }

        const chuckNorrisFacts = this.props.facts.factList;
        const isSearching = this.props.facts.isSearching;
        return (
            <ScrollView style={{flex: 1}}>
                <View style={style.click_container}>
                {
                    isSearching ? 
                    <FlatList
                        style={style.fact_list}
                        data={chuckNorrisFacts} 
                        renderItem={renderItems} 
                        keyExtractor={(_, index) => index.toString()} 
                    /> : 
                    <View style={style.click_to_search}>
                    </View>
                }
                </View>
            </ScrollView>
        )
    }

}

const mapStateToProps = (state) => {
    const { facts, searching } = state;
    return { facts, searching }
  };

export default connect(mapStateToProps)(Facts);
