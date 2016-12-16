import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Communications from 'react-native-communications';

import { BLUE_COLOR } from '../assets/colors.js';

/**
 * Display an external link on one line.
 * If the link is too long, clip at the end.
 */
const DisplayExternalLink = (props) => {

    const { containerStyle, iconStyle, textStyle } = styles;
    const { link, containerStyleOverride, textStyleOverride, iconStyleOverride } = props;

    return(
        <TouchableOpacity
            style={[styles.containerStyle, containerStyleOverride]}
            onPress={() => Communications.web(link)}
        >

            <Icon name="external-link" style={[styles.iconStyle, iconStyleOverride]} />
            <Text
                numberOfLines={1}
                style={[styles.textStyle, textStyleOverride]}
                ellipsizeMode="tail"
            >
                {link}
            </Text>

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    textStyle: {
        marginLeft: 5,
        color: BLUE_COLOR
    },
    iconStyle: {
        marginTop: 3,
        color: BLUE_COLOR
    }
});

export default DisplayExternalLink;
