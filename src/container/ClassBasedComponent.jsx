import React, { Component } from "react";
import { connect } from 'react-redux';
import { updateTitle } from '../action';

class ClassBasedComponent extends Component {
    constructor() {
        super();
        this.state = {
            name: "This is class"
        };
    }

    componentDidMount() {
        this.props.updateTitle("This is from class based component.")
    }

    render() {
        const { title } = this.props;
        return (
            <>
                {title}
            </>
        )
    }
}

const mapDispatchToProps = {
    updateTitle
}

const mapStateToProps = function (state) {
    return {
        title: state.home.title,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassBasedComponent);