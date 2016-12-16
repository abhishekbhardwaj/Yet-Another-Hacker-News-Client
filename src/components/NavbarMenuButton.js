import _ from 'lodash';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ModalPicker from 'react-native-modal-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

import { BLUE_COLOR } from '../assets/colors';

class NavbarMenuButton extends Component {

    onSelect(option) {
        this.props.onSelect(option.key);
    };

    render() {
        const { currentlySelected, options } = this.props;
        const { viewStyle, textStyle, iconStyle } = styles;

        return (
            <ModalPicker
                data={options}
                initValue={currentlySelected}
                onChange={this.onSelect.bind(this)}
            >
                <View style={viewStyle}>
                    <Text style={[ textStyle ]}>
                        {_.capitalize(currentlySelected)}
                    </Text>
                    <Icon name="caret-down" style={iconStyle} />
                </View>
            </ModalPicker>
        );
    }
};

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingLeft: 5,
        paddingTop: 2,
        paddingBottom: 2
    },
    textStyle: {
        color: BLUE_COLOR,
        fontSize: 16
    },
    iconStyle: {
        marginLeft: 5,
        marginTop: 2,
        color: BLUE_COLOR,
        fontSize: 16
    }
});

export default NavbarMenuButton;
