import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { AppContainer } from '../Router/AppRouter';
import thunk from 'redux-thunk';
import Reducers from '../Redux/Reducer';
import { NetworkProvider } from '../Utilities/NetworkPorvider';

const store = createStore(Reducers, applyMiddleware(thunk));

class AppSetup extends Component {
    render() {
        return (
            <NetworkProvider>
                <Provider store={store}>
                    <AppContainer />
                </Provider>
            </NetworkProvider>
        )
    }
}
export default AppSetup;