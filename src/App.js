import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';


import axios from 'axios';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Alert } from 'react-native';
import reducer from './reducers/store';
import Search from './screens/Search';
import Home from './screens/Home';


const store = createStore(reducer);

export default class App extends React.Component {
    state = {
        tags: null,
    }

    componentDidMount = () => {
        this.getTags();
    }

    getTags = async () => {
        await axios.get('https://api.chucknorris.io/jokes/categories')
            .then((res) => {
                const tags = res.data;
                this.setState({ tags });
            }).catch((ex) => {
                Alert.alert('ok');
                console.log(ex);
            });
    }


    render() {
        const MainNavigator = createStackNavigator({
            Home: {
                screen: Home,
                navigationOptions: {
                    header: null,
                },
            },
            Search: {
                screen: (props) => <Search tags={this.state.tags} {...props} />,
                navigationOptions: {
                    header: null,
                },
            },
        });


        const Navigation = createAppContainer(MainNavigator);

        return (
            <Provider store={store}>
                <Navigation tags={this.state.tags} />
            </Provider>
        );
    }
}
