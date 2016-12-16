import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import StoryList from './StoryList';
import SingleStoryItem from './SingleStoryItem';

class RouterContainer extends Component {

    render() {
        return (
            <Router sceneStyle={styles.sceneStyle}>

                {/* The navbar button for changing story types is specified and controlled through StoryList */}
                <Scene
                    key="stories"
                    component={StoryList}
                    title="Hacker News"
                    initial
                />

                {/* A single story with comments and a link preview. */}
                <Scene
                    key="story"
                    component={SingleStoryItem}
                />

            </Router>
        );
    }

}

const styles = StyleSheet.create({
    sceneStyle: {
        paddingTop: 65
    }
});

export default RouterContainer;
