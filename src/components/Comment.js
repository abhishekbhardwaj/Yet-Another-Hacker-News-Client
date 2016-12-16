import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import TimeAgo from './TimeAgo';
import CommentList from './CommentList';
import HTMLRenderer from '../components/HTMLRenderer';
import { BLUE_COLOR, GRAYISH_COLOR, BORDER_COLOR } from '../assets/colors.js';

class Comment extends Component {

    state = {
        isOpen: true
    };

    handleToggleClick() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    renderBody(comment) {
        const { commentBodyStyle, commentListContainerStyle } = styles;

        return (
            <View style={commentBodyStyle}>
                {
                    comment.text &&
                    <HTMLRenderer html={comment.text} />
                }
                {
                    comment.kids &&
                    comment.kids.length > 0 &&
                    <View style={commentListContainerStyle}>
                        <CommentList comments={comment.kids} />
                    </View>
                }
            </View>
        );
    }

    render() {
        const { isOpen } = this.state;
        const { comment } = this.props;
        const {
            containerStyle,
            usernameStyle,
            timeStyle,
            toggleIconStyle,
            commentHeaderContainerStyle,
            commentDetailContainerStyle
        } = styles;

        return (
            <View style={containerStyle}>
                <TouchableHighlight onPress={this.handleToggleClick.bind(this)} underlayColor="white">
                    <View style={commentHeaderContainerStyle}>
                        <Icon name={ isOpen ? "caret-down" : "caret-right" } style={toggleIconStyle} />
                        <View style={commentDetailContainerStyle}>
                            <Text style={usernameStyle}>
                                {
                                    comment.by ? comment.by : "[deleted]"
                                }
                            </Text>
                            <TimeAgo style={timeStyle} time={comment.time} />
                        </View>
                    </View>
                </TouchableHighlight>

                { isOpen && this.renderBody(comment) }
            </View>
        );
    }

}

const styles = StyleSheet.create({
    containerStyle: {
        paddingLeft: 10,
        paddingBottom: 10
    },
    usernameStyle: {

    },
    timeStyle: {

    },
    toggleIconStyle: {
        marginLeft: 10
    },
    commentHeaderContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#eeeeee"
    },
    commentDetailContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10
    },
    commentBodyStyle: {

    },
    commentListContainerStyle: {
        paddingTop: 10
    }
});

export default Comment;
