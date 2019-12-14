import React from 'react'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    header_bar: {
        backgroundColor: '#17aa4a',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    screen_default: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    header_title: {
        fontSize: 20,
        color: 'white'
    },
    defaultColorFont: {
        color: '#14aa4b'
    },
    click_container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    fontLess80: {
        fontSize: 20
    },
    fontMore80: {
        fontSize: 15
    },
    fact_list: {
        margin: 15,
        flexDirection: 'column',
        // alignItems: 'flex-start',
    },
    fact_box: {
        backgroundColor: '#ecf3f3',
        borderColor: '#14aa4b',
        borderWidth: 1,
        margin: 15,
        padding: 20
    },
    search_input: {
        borderBottomWidth: 2,
        width: '100%',
        fontSize: 18
    },
    screen: {
        width: '100%',
        alignItems: 'center'
    },
    search_container: {
        alignItems: 'center',
        width: '90%',
        marginTop: 10
    },
    tag_search_container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '90%',
        flexWrap: 'wrap',
    },
    tag_button: {
        backgroundColor: 'gray',
        padding: 10,
        margin: 5,
        borderRadius: 0,
        flexGrow: 1,
    },
    tag_button_font: {
        color: 'white',
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    margin_50: {
        marginTop: 50
    },
    search_screen_title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10
    },
    tag_button_home: {
        backgroundColor: 'gray',
        padding: 5,
        margin: 5,
        marginTop: 20,
        borderRadius: 0,
    },
    fact_tag_container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    share_icon: {
        marginTop: 20,
        color: 'gray',
    },
    search_icon: {
        marginTop: 0,
        color: 'white',
    },
    click_to_search: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    past_search: {
        margin: 5
    },
    past_search_container: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    search_list: {
        width: '90%',
        marginTop: 30
    },
    font_default: {
        fontSize: 16
    }

})
