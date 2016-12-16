import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import Router from './containers/Router';
import Reducers from './redux/reducers';

class App extends Component {

    render() {
        const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }

}

export default App;
