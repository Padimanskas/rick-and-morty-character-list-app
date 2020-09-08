import React from 'react';
import { connect } from 'react-redux';

const divs = [...(new Array(8))].map(() => (<div></div>));

const getSpinnerTemplate = () => (
    <div className="spinner">
        <div className="lds-roller">
            {divs}
        </div>
    </div>
);

let Spinner = ({ loading }) => loading ? getSpinnerTemplate() : null;

const mapStateToProps = (state) => ({loading: state.loading});

Spinner = connect(mapStateToProps,null)(Spinner);

export default Spinner;
