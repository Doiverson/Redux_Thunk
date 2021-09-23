import React from "react";
import { connect } from "react-redux";

import { getUsers } from "../actions/users"

const Test = (props) => {

    const onClick = () => {
        props.getUsers();
    }

    return (
        <div>
            <button onClick={onClick}>
                Click
            </button>
            <ul>
                {props.users.data.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { users: state.users }
}

export default connect(mapStateToProps, {getUsers})(Test);
