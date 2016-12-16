import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Comments from './Comments';
import StoryItem from '../components/StoryItem';
import { BORDER_COLOR } from '../assets/colors.js';
import HTMLRenderer from '../components/HTMLRenderer';
import { generateWebItemUrl } from '../config/api.js';
import DisplayExternalLink from '../components/DisplayExternalLink';

class SingleStoryItem extends Component {

    componentWillMount() {
        Actions.refresh({ title: this.props.item.title });
    }

    renderStoryUrl(url, containerStyle) {
        if (url) {
            return <DisplayExternalLink link={url} containerStyleOverride={containerStyle} />
        }
    }

    render() {
        const { item } = this.props;
        const {
            containerStyle,
            storyItemRootContainerStyle,
            detailContainerStyle,
            externalLinkContainerStyle,
            commentContainerStyle,
            detailTextStyle
        } = styles;

        return (
            <ScrollView style={containerStyle}>
                <StoryItem item={item} rootContainerStyle={storyItemRootContainerStyle} />
                <View style={detailContainerStyle}>

                    {this.renderStoryUrl(item.url, externalLinkContainerStyle)}
                    {this.renderStoryUrl(generateWebItemUrl(item.id), externalLinkContainerStyle)}

                    {
                        item.text &&
                        <HTMLRenderer containerStyle={detailTextStyle} html={item.text} />
                    }
                </View>
                <View style={commentContainerStyle}>
                    <Comments item={item} />
                </View>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1
    },
    storyItemRootContainerStyle: {
        borderBottomWidth: 0,
        paddingBottom: 0
    },
    detailContainerStyle: {
        padding: 10,
        borderBottomColor: BORDER_COLOR,
        borderBottomWidth: 1,
        marginBottom: 5
    },
    externalLinkContainerStyle: {
        marginTop: 5
    },
    detailTextStyle: {
        marginTop: 5
    },
    commentContainerStyle: {
        // no left or right padding because child components will handle that.
        paddingTop: 10
    }
});

export default SingleStoryItem;
