import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchRequirements } from "../actions"



const TestHook = () => {

    const data = useSelector(state => state);
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(fetchRequirements());
    }

    console.log(data)

    return (
        <button onClick={onClick}>
            Click
        </button>
    )

}

export default TestHook;
