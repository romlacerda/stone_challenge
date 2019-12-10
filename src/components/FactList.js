import React, { Component } from 'react'
import { View, Text, ScrollView, FlatList } from 'react-native';

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
            <ScrollView>
                <View style={style.click_container}>
                {
                    isSearching ? 
                    <FlatList
                        style={style.fact_list}
                        // contentContainerStyle={} 
                        data={chuckNorrisFacts} 
                        renderItem={renderItems} 
                        keyExtractor={(_, index) => index.toString()} 
                    /> : 
                    <Text style={style.defaultColorFont}>Clique para pesquisar</Text>
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
