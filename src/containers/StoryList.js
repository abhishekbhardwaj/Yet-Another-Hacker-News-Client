import React, { Component } from 'react';
import { StyleSheet, ListView, TouchableOpacity, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { changeStoryType, getStoryTypeForModalSelection, fetchStories } from '../redux/actions/StoryListActions';
import NavbarMenuButton from '../components/NavbarMenuButton';

import StoryItem from '../components/StoryItem';
import LoadingSpinner from '../components/LoadingSpinner';

class StoryList extends Component {

    componentWillMount() {
        /**
         * Set default story type if nothing set (for first time).
         *
         * Options: new, top, job, ask, show, best
         */
        let type = this.props.type || 'top';
        this.changeStoryType(type);

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        // If type ever changes, we fetch stories.
        if(this.props.type != nextProps.type)
        {
            this.props.fetchStories(nextProps.type);
        }

        this.createDataSource(nextProps);
    }

    // Changes story type in the state and configures the type changer in the navbar.
    changeStoryType(type) {
        this.props.changeStoryType(type);
        const options = getStoryTypeForModalSelection();

        Actions.refresh({
            renderRightButton: () => {
                return <NavbarMenuButton currentlySelected={type} options={options} onSelect={this.changeStoryType.bind(this)} />;
            }
        });
    }

    createDataSource({ data }) {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.dataSource = ds.cloneWithRows(data);
    }

    viewSingleStoryItem(item) {
        Actions.story({ item });
    }

    renderRow(item) {
        return (
            <TouchableOpacity onPress={() => this.viewSingleStoryItem(item) } style={styles.singleRowStyle}>
                <StoryItem item={item} />
            </TouchableOpacity>
        );
    }

    onListViewRefresh() {
        this.props.fetchStories(this.props.type);
    }

    render() {
        if(this.props.isFetching) {
            return <LoadingSpinner size="large" />;
        }

        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow.bind(this)}
                refreshControl={
                    <RefreshControl
                        refreshing={this.props.isFetching}
                        onRefresh={this.onListViewRefresh.bind(this)}
                    />
                }
            />
        );
    }
}


const styles = StyleSheet.create({
    singleRowStyle: {
        flex: 1,
        flexDirection: 'row'
    }
});

// return the stories state
const mapStateToProps = ({ stories }) => {
    return stories;
};

export default connect(mapStateToProps, { changeStoryType, getStoryTypeForModalSelection, fetchStories })(StoryList);
