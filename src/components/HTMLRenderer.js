import React from 'react';
import { View } from 'react-native';
import HTMLView from 'react-native-htmlview';
import Communications from 'react-native-communications';

const HTMLRenderer = ({ html, containerStyle, style }) => (
    <View style={containerStyle}>
        <HTMLView
            value={html}
            stylesheet={style}
            onLinkPress={(url) => Communications.web(url)}
        />
    </View>
);

export default HTMLRenderer;
