import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { updateTitle } from '../action';

function FunctionBasedComponent(props) {

    const [name, setName] = useState('This is class');

    // useEffect with empty dependency array is called component did mount.
    useEffect(() => {

        setTimeout(() => {
            props.updateTitle("This is functional component.");
        }, 4000);

        // This works as component did unmount
        return () => {
            console.log('This is called from clean function')
            // api, timer , event lister
        }
    }, []);
    const {title} = props;
    return <h1>{title}</h1>;
}

const mapDispatchToProps = {
    updateTitle
}


const mapStateToProps = function (state) {
    return {
        title: state.home.title,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FunctionBasedComponent);