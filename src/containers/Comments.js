import React, { Component } from 'react';
import { ListView, RefreshControl } from 'react-native';
import { connect } from 'react-redux';

import CommentList from '../components/CommentList';
import LoadingSpinner from '../components/LoadingSpinner';
import { fetchComments, resetComments } from '../redux/actions/CommentActions';

class Comments extends Component {

    componentWillMount() {
        // On mount, reset current state
        this.props.resetComments();

        this.props.fetchComments(this.props.item);
    }

    render() {
        if(this.props.isFetching) {
            return <LoadingSpinner size="large" />;
        }

        return (
            <CommentList comments={this.props.data} />
        );
    }

}

// return the comments state
const mapStateToProps = ({ comments }) => {
    return comments;
};

export default connect(mapStateToProps, { fetchComments, resetComments })(Comments);
