import React from 'react';
import moment from 'moment';
import { Text } from 'react-native';

const TimeAgo = ({ style, time }) => (
    <Text style={style}>
        {moment.unix(time).fromNow(true)}
    </Text>
);

export default TimeAgo;
