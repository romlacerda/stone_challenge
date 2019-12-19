import React from 'react'
import { View, Text } from 'react-native';

import HeaderBar from '../components/HeaderBar'
import SearchInput from '../components/SearchInput'
import styles from '../style/main';
import TagList from '../components/TagList';
import SearchList from '../components/SearchList';

export default Search = props => {
    
    return ( 
        <React.Fragment>
            <HeaderBar title='SEARCH FACTS'/>
            <View style={styles.screen}>
                <View style={styles.search_container}>
                    <SearchInput navigation={props.navigation}/>
                </View>
                <TagList tags={props.tags} navigation={props.navigation}/>
                <SearchList navigation={props.navigation}/>
            </View>
        </React.Fragment>
    )
}