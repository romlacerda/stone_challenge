import React, { Component } from 'react';
import { TextInput } from 'react-native';

import axios from 'axios';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../style/main';
import { addFact, searchFact } from '../actions/FactActions';

class SearchInput extends Component {
    state = {
        value: null,
    }

    handleChange = (value) => {
        this.setState({ value });
    }

    AddLastSearch = (searched) => {
        const searchs = [...this.state.searchs, this.state.value];
    }

    ListByFilter = async (e) => {
        await axios.get('https://api.chucknorris.io/jokes/search', {
            params: {
                query: this.state.value,
            },
        })
            .then((res) => {
                this.props.addFact(res.data.result);
                this.props.searchFact(this.state.value);
                this.props.navigation.navigate('Home');
            }).catch((ex) => {
                alert(error.message);
            });
    }

    render() {
        return (
            <TextInput
                placeholder="Digite o que procura..."
                style={styles.search_input}
                onChangeText={this.handleChange}
                onSubmitEditing={(e) => this.ListByFilter(e)}
            />
        );
    }
}


const mapStateToProps = (state) => {
    const { facts, searching, searchs } = state;
    return { facts, searching, searchs };
};

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        addFact, searchFact,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
