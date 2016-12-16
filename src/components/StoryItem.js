import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import TimeAgo from './TimeAgo';
import { BLUE_COLOR, GRAYISH_COLOR, BORDER_COLOR } from '../assets/colors.js';

class StoryItem extends Component {

    render() {
        const { item, rootContainerStyle } = this.props;
        const {
            containerStyle,

            scoreStyle,
            scoreNumStyle,

            contentStyle,
            titleStyle,
            contentDetailsStyle,
            timeStyle,
            authorStyle,

            commentContainerStyle,
            commentNumStyle,
            commentIconStyle
        } = styles;

        return (
            <View style={[containerStyle, rootContainerStyle]}>
                <View style={scoreStyle}>
                    <Text style={scoreNumStyle}>
                        {item.score}
                    </Text>
                </View>

                <View style={contentStyle}>
                    <Text style={titleStyle}>
                        {item.title}
                    </Text>

                    <View style={contentDetailsStyle}>
                        <Text style={authorStyle}>
                            {item.by}
                        </Text>

                        <TimeAgo
                            style={timeStyle}
                            time={item.time}
                        />

                        <Text style={commentNumStyle}>
                            {item.descendants} { (item.descendants >= 0) && "comments" }
                        </Text>
                    </View>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomColor: BORDER_COLOR,
        borderBottomWidth: 1,
    },
    scoreStyle: {
        flex: 0.1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    scoreNumStyle: {
        color: BLUE_COLOR
    },
    contentStyle: {
        flex: 0.9
    },
    titleStyle: {
        flexWrap: 'wrap',
        fontSize: 15,
    },
    timeStyle: {
        color: GRAYISH_COLOR
    },
    authorStyle: {
        color: GRAYISH_COLOR
    },
    contentDetailsStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    commentNumStyle: {
        color: GRAYISH_COLOR
    }
});

export default StoryItem;
