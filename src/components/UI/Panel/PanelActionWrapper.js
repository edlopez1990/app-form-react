import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PanelActionWrapper extends Component {
    render() {
        return (
            <div className="panel-actions">
                {this.props.children}
            </div>
        );
    }
}

PanelActionWrapper.propTypes = {
    children: PropTypes.node.isRequired
}
