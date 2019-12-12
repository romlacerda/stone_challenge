import React, { Component } from 'react'
import { View, Text, ScrollView, FlatList } from 'react-native';

import Fact from './Fact';
import style from '../style/main';

import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';


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
                    <View style={style.click_to_search}>
                        <Icon style={style.share_icon} name="search" size={30} onPress={(props) => this.props.navigate('Search')} />
                        <Text style={style.defaultColorFont}>Clique para pesquisar</Text>
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
