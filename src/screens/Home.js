import React, { Component } from 'react';

import { connect } from 'react-redux';
import FactList from '../components/FactList';
import HeaderBar from '../components/HeaderBar';

class HomeScreen extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <>
                <HeaderBar title="CHUCK NORRIS FACTS" navigate={navigate} />
                <FactList navigate={navigate} />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    const { facts } = state.facts;
    return { facts };
};

export default connect(mapStateToProps)(HomeScreen);
