import React, { Component } from 'react';
import { ListView } from 'react-native';

import Comment from './Comment';

class CommentList extends Component {

    componentWillMount() {
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ comments }) {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.dataSource = ds.cloneWithRows(comments);
    }

    renderRow(comment) {
        return <Comment comment={comment} />;
    }

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow.bind(this)}
            />
        );
    }

}

export default CommentList;
