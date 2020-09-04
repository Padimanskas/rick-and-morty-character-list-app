import React from 'react';
import { connect } from 'react-redux';
import img from '../assets/loading_spinner.gif';

const getSpinnerTemplate = () => (
    <div className="spinner">
        <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
);

let Spinner = ({ loading }) => loading ? getSpinnerTemplate() : null;

const mapStateToProps = (state) => ({loading: state.loading});

Spinner = connect(mapStateToProps,null)(Spinner);

export default Spinner;
