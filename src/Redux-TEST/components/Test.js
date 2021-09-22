import React from "react";
import { connect } from "react-redux";

import { fetchRequirements } from "../actions"

const Test = (props) => {

    const onClick = () => {
        props.fetchRequirements();
    }

    return (
        <button onClick={onClick}>
            Click
        </button>
    )

}

const mapStateToProps = (state) => {
    return {test: state.requirements}
}

export default connect(mapStateToProps, {fetchRequirements})(Test);
