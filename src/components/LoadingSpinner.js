import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const LoadingSpinner = ({ size }) => (
    <View style={styles.loadingStyle}>
        <ActivityIndicator size={size || 'large'} />
    </View>
);

const styles = {
    loadingStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export default LoadingSpinner;
